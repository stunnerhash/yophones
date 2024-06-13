"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ColourSelect ({colours}:{colours: string[]}){
  const router = useRouter()
  const searchParams = useSearchParams();
  const [selectedColour, setSelectedColour] = useState(searchParams.get('colour'))
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    const {name,value} = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    router.push(`?${params.toString()}`, {scroll:false});
    setSelectedColour(value)
  }

  if(!colours) return null;
  return(
    <div className="flex items-center gap-2 font-semibold" >
      <p className="text-xs">Colour:</p>
      {colours.map((colour) => (
        <span key={colour}>
          <label key={colour} htmlFor={colour} className= "cursor-pointer" >
            <input 
              type="radio" 
              name="colour" 
              id={colour} 
              checked={selectedColour === colour} 
              onChange={handleChange} 
              value={colour} 
              className="peer sr-only"
            />
            <div className="size-6 rounded-full ring-offset-1 ring-current peer-checked:ring-2 " style={{ backgroundColor: colour, color: colour}} />
          </label>
        </span>
      ))}
    </div>
  )
}
