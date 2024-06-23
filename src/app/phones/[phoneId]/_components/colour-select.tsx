"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useURL } from "@/hooks/use-url";
import {  useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ColourSelect ({colours}:{colours: string[]}){
  const searchParams = useSearchParams();
  const {updateSingleValue} = useURL()
  const [selectedColour, setSelectedColour] = useState(searchParams.get('colour'))
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    updateSingleValue(e.target)
    setSelectedColour(e.target.value)
  }

  if(!colours) return null;
  return (
    <div className="flex flex-wrap items-center gap-2 font-semibold">
      {/* <p className="text-xs hidden sm:block pr-5">Colour:</p> */}
      {colours.map((colour) => (
        <Label key={colour} htmlFor={colour} className="cursor-pointer">
          <Input
            type="radio"
            name="colour"
            id={colour}
            defaultChecked={selectedColour === colour}
            onChange={handleChange}
            value={colour}
            className="peer size-0 sr-only"
          />
          <div
            className="size-6 rounded-full ring-offset-1 transition-all ring-current peer-checked:ring-2 hover:ring-2"
            style={{ backgroundColor: colour, color: colour }}
          />
        </Label>
      ))}
    </div>
  );
}
