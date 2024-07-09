"use client"

import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { uploadChunk } from "@/actions/upload-chunk";
import {toast} from "@/components/ui/use-toast";
import Papa from 'papaparse';
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ChangeEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormItem, FormField, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

enum Table {
  Deal = 'Deal',
  Phone = 'Phone',
  Colour = 'Colour',
}
enum Action {
  Append = 'Append',
  Replace = 'Replace',
}
const actionSchema = z.enum([Action.Append, Action.Replace]);
const tableSchema = z.enum([Table.Deal, Table.Phone, Table.Colour]);
const fileSchema = z.instanceof(File).refine(file => file.size>0, { 
  message: 'File must not be empty'
});
const formSchema = z.object({ 
  action: actionSchema,
  table: tableSchema,
  file: fileSchema 
})

export default function UploadPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileRef = useRef<HTMLInputElement>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      table: Table.Deal,
      action: Action.Append,
      file: undefined,
    },
  })

  const chunkParser = (chunkSize:number, fileSize:number) => {
    return   }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast({ title: "Processing...", description: "Reading records from csv file", duration:Infinity})
    const { file, table, action } = values;
    setIsUploading(true);
    setProgress(0);

    let currentRow = 0;
    const chunkSize= 0.5*1024*1024; // 0.5MB
    const fileSize = file.size;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      chunkSize: chunkSize,
      complete: () => {
        setIsUploading(false);
      },
      error: (error:any) => {
        setIsUploading(false);
        console.error('Error parsing CSV:', error);
        toast({ title:"Error", description:'Error parsing CSV', duration:5000});
      },
      chunk: async (results: any, parser: any) => {
        parser.pause();
        try {
          const res = await 
            uploadChunk({
              chunk:results.data,
              table,
              action,
              currentRow
            });
          if (!res.success) {
            throw new Error(res.message);
          }
          currentRow += chunkSize;
          setProgress(Math.min((currentRow / fileSize) * 100, 100));
          if (currentRow >= fileSize) {
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
    });
  }

  return (
    <div className="flex flex-grow items-center justify-center p-4">
      {isUploading && (
        <Progress className="absolute top-0 left-0 h-1 transition-all" value={progress} max={100} />
      )}
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="rounded m-10  p-10 bg-secondary max-w-md mx-auto">
        <FormField
          control={form.control}
          name="action"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Action</FormLabel>
              <FormControl>
                  <RadioGroup defaultValue={field.value} className="grid grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={Action.Append} id={Action.Append} />
                      <Label htmlFor={Action.Append}>{Action.Append}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem  value={Action.Replace} id={Action.Replace} />
                      <Label htmlFor={Action.Replace}>{Action.Replace}</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="table"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Table</FormLabel>
              <FormControl>
                <Select defaultValue={field.value}>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select Table" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup >
                      <SelectLabel>Tables</SelectLabel>
                      <SelectItem value={Table.Deal}>Deal</SelectItem>
                      <SelectItem value={Table.Phone}>Phone</SelectItem>
                      <SelectItem value={Table.Colour}>Colour</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Select name of the table to update.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>File</FormLabel>
              <FormControl>
                <Input
                  ref={fileRef}
                  type="file"
                  accept=".csv"
                  disabled={isUploading}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const file = e.target.files?.[0];
                    field.onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
    </div>
  );
}
