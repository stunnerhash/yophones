"use client"

import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ChangeEvent, useRef, useState } from "react";
import Papa from 'papaparse';
import { uploadCsvChunk } from "@/actions/upload-csv-chunk";
import {toast} from "@/components/ui/use-toast";
// import { 
//   Form,
//   FormItem,
//   FormField,
//   FormLabel,
//   FormControl,
//   FormMessage,
//   FormDescription,
// } from "@/components/ui/form";

// import {z} from "zod"

// const fileSchema = z.instanceof(File).refine(file => file.size>0, {
//   message: 'File must not be empty'
// });
// const formSchema = z.object({ file:fileSchema })

export default function UploadPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileRef = useRef<HTMLInputElement>(null)

  async function handleChange(event: ChangeEvent<HTMLInputElement>){
    toast({ title: "Processing...", description: "Reading records from csv file", duration:2000})

    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setProgress(0);

    const CHUNK_SIZE = 1024*1024/2; // 0.5MB
    let currentRow = 0;
    const chunkParser = async (results: any, parser: any) => {
      parser.pause();
      try {
        const res = await uploadCsvChunk(results.data);
        if (!res.success) {
          throw new Error(res.message);
        }
        currentRow += CHUNK_SIZE;
        setProgress(Math.min((currentRow / file.size) * 100, 100));
        console.log("progress", (currentRow/file.size) * 100);
        if (currentRow >= file.size) {
          toast({ title:"Completed", description:'CSV uploaded and processed successfully', duration:2000});
          parser.abort();
        }

      } catch (error) {
        console.error('Error uploading CSV chunk:', error);
        toast({ title:"Error", description:'Error uploading CSV chunk:', duration:5000 });
        parser.abort();
      }
      parser.resume();
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      chunkSize: CHUNK_SIZE,
      chunk:chunkParser,
      complete: () => {
        setIsUploading(false);
        event.target.files = null;
      },
      error: (error:any) => {
        setIsUploading(false);
        console.error('Error parsing CSV:', error);
        toast({ title:"Error", description:'Error parsing CSV:', duration:5000});
      },
    });
  }

  return (
      <form>
        <div className="flex flex-col justify-center">
          {isUploading && (
            <Progress className="h-1 transition-all" value={progress} max={100} />
          )}
          <Input
            ref={fileRef}
            type="file"
            accept=".csv"
            onChange={handleChange}
            disabled={isUploading}
          />
        </div>
      </form>
  );
}
