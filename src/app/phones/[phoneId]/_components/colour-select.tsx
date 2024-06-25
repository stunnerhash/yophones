"use client"
import { getColours } from "@/actions/get-colours";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useURL } from "@/hooks/use-url";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";


export default function ColourSelect ({colours:colourNames}:{colours: string[]}){
  const searchParams = useSearchParams();
  const {updateSingleValue} = useURL()

  const [selectedColour, setSelectedColour] = useState(
    searchParams.get("colour")
  );

  const { data: colourCodes } = useQuery({
    queryKey: ["colour"],
    queryFn: () => getColours(),
    staleTime: 1000*60*10,
  });

  const colours = useMemo(() => {
    if (!colourCodes) return [];
    const hexMap: Record<string, string> = {};
    for (const code of colourCodes) hexMap[code.name] = code.hexcode;
    return colourNames.map((name) => ({
      name: name,
      hexcode: hexMap[name] || name,
    }));
  }, [colourNames, colourCodes]);

  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    updateSingleValue(e.target)
    setSelectedColour(e.target.value)
  }

  if(!colours) return null;
  return (
    <div className="flex flex-wrap items-center gap-2 font-semibold">
      {colours.map((colour) => (
        <Label key={colour.name} htmlFor={colour.name} className="cursor-pointer ">
          <Input
            type="radio"
            name="colour"
            id={colour.name}
            defaultChecked={selectedColour === colour.name}
            onChange={handleChange}
            value={colour.name}
            className="peer size-0 sr-only"
          />
          <div
            className="size-6 border rounded-full ring-offset-1 transition-all ring-current peer-checked:ring-2 hover:ring-2"
            style={{ backgroundColor: colour.hexcode, color: colour.hexcode}}
          />
        </Label>
      ))}
    </div>
  );
}
