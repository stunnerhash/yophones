"use client"
import { Label } from "@/components/ui/label"
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";

type CheckboxOption = {
  label: string; 
  value: string | number;
  logo?: string;
};

export default function CheckboxFactory({
  data, 
  id,
  renderItem
}:{
  data:CheckboxOption[], 
  id: string,
  renderItem?: (data:CheckboxOption)=>React.ReactNode
}){
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

  return (
    <div className="grid grid-cols-3 gap-2 ">
      {data.map((option, index) => (
        <Label
          key={option.value}
          htmlFor={id + option.value}
          className="flex justify-center items-center font-normal rounded-sm bg-background border-secondary text-center  border text-nowrap transition-all cursor-pointer has-[input:checked]:text-primary has-[input:checked]:border-primary hover:text-pink-400 hover:border-primary"
        >
           <Input
            type="checkbox"
             id={id+option.value}
             name={id}
             value={option.value}
             defaultChecked={searchParams.getAll(id).includes(option.value.toString())}
             className="sr-only"
             onChange={(e)=>handleChange(e.target)}
           />
           {renderItem && renderItem(option) || <span className="p-3">{option.label}</span> }
        </Label>
      ))}
    </div>
  );
}
