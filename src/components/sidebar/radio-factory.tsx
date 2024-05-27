
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

type RadioOption = {
  value: string;
  label: string;
};

export default function RadioFactory ({data, id}:{data:RadioOption[], id: string}){
  return (
    <RadioGroup defaultValue="comfortable" id={id}>
      {data.map(option=>(
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value={option.value} 
            id={`${id}-${option.value}`} 
          />
          <Label htmlFor={`${id}-${option.value}`} >
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroup>

  )
}
