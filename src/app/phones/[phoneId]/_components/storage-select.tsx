"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useURL } from "@/hooks/use-url";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function StorageSelect({storageSize}:{storageSize:string[]}){
  const searchParams = useSearchParams();
  const {updateSingleValue} = useURL()
  const [selectedStorage, setSelectedStorage] = useState(searchParams.get('storageSize') || '')

  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    updateSingleValue(e.target)
    setSelectedStorage(e.target.value)
  }

  if(!storageSize) return null;
  return (
    <div className="text-center grid grid-cols-2  items-center gap-2 text-xs sm:text-sm font-semibold">
      {/* <p className="text-xs hidden sm:block text-start">Storage:</p> */}
      {storageSize.map((storage) => (
        <Label
          key={storage}
          htmlFor={storage}
          className={
            "text-nowrap p-2 bg-muted cursor-pointer rounded-sm border ring-offset-1 ring-primary has-[input:checked]:ring-1 has-[input:checked]:text-primary hover:text-pink-400 hover:ring-1 transition-all"
          }
        >
          <Input
            type="radio"
            id={storage}
            name="storageSize"
            value={storage}
            autoComplete="off"
            defaultChecked={selectedStorage === storage}
            className="peer size-0 sr-only"
            onChange={handleChange}
          />
          {storage}
        </Label>
      ))}
    </div>
  );
}

