import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

type CheckboxOption = {
  label: string; 
  logo?: string;
};

export default function CheckboxFactory({data, id}:{data:CheckboxOption[], id: string}){
  return(
    <div className="grid grid-cols-1 gap-2 ">
      {data.map((option, index)=>(
        <div key={index} className="flex items-center space-x-2">
          <Checkbox id={`${id}-${index}`}/>
          <Label htmlFor={`${id}-${index}`} 
            className="cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >{option.label} 
          </Label>
        </div>
      ))}
    </div>
  )
}
