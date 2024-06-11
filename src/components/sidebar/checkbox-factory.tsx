"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useRouter, useSearchParams } from "next/navigation";

type CheckboxOption = {
  label: string; 
  value: string | number;
  logo?: string;
};

export default function CheckboxFactory({data, id}:{data:CheckboxOption[], id: string}){
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange({ name, checked, value }:{ name:string, checked: boolean | "indeterminate", value: string }) {
    const params = new URLSearchParams(searchParams);
    if (checked) {
      params.append(name, value);
    } else {
      const currentValues = params.getAll(name);
      params.delete(id);
      currentValues
        .filter((currentValue) => currentValue!== value)
        .forEach((item) => params.append(name, item));
    }
    router.push(`?${params.toString()}`, {scroll:false});
  }

  return(
    <div className="grid grid-cols-1 gap-2 ">
      {data.map((option, index)=>(
        <div key={index} className="flex items-center space-x-2">
          <Checkbox 
            id={`${id}-${index}`} 
            name={id} 
            value={option.value} 
            defaultChecked={searchParams.getAll(id).includes(option.value.toString())} 
            onCheckedChange={(checked)=>
              handleChange({
                name:id, 
                value: option.value.toString(), 
                checked
              })
            }
          />
          <Label htmlFor={`${id}-${index}`} 
            className="cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >{option.label} 
          </Label>
        </div>
      ))}
    </div>
  )
}
