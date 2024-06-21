"use client"
import { Slider } from "@/components/ui/slider";
import { useURL } from "@/hooks/use-url";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const RANGE_MIN = 10, RANGE_MAX = 200

export default function CostSlider(){
  const router = useRouter()
  const searchParams = useSearchParams()
  const minMonthlyCost = parseInt(searchParams.get('minMonthlyCost') || "") || RANGE_MIN;
  const maxMonthlyCost = parseInt(searchParams.get('maxMonthlyCost') || "") || RANGE_MAX;

  function handleValueCommit(value:number[]){
    const params = new URLSearchParams(searchParams);
    params.set('minMonthlyCost', value[0].toString());
    params.set('maxMonthlyCost', value[1].toString());
    router.push(`?${params.toString()}`, {scroll:false});
  }

  const [value, setValue] = useState([minMonthlyCost, maxMonthlyCost])
  return(
    <div className="p-2">
      <span className="flex justify-between py-2">
          <span className="">Min: ${value[0]}</span>
          <span>Max: ${value[1]}</span>
      </span>
      <Slider 
        className="border  border-primary rounded-sm" 
        min={RANGE_MIN}
        max={RANGE_MAX}
        defaultValue={value}
        step={5}
        minStepsBetweenThumbs={1}
        onValueChange={(val)=>setValue(val)}
        onValueCommit={handleValueCommit}
      />
    </div>
  )
}
