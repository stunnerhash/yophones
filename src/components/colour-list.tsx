
"use client"
import { getColours } from "@/actions/get-colours";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
export default function ColourList({colours:colourNames}:{colours:string[]}){
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


  return (
    <div className="flex justify-center p-1 gap-1 ">
      {colours.map((colour) => (
        <div
          key={colour.name}
          className={"w-4 h-1.5 rounded-full"}
          style={{ backgroundColor: colour.hexcode }}
        />
      ))}
    </div>
  );
}