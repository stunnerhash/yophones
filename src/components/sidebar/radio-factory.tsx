"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useRouter, useSearchParams } from "next/navigation";

type RadioOption = {
  value: string;
  label: string;
};

export default function RadioFactory({ data, id }: { data: RadioOption[], id: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentValue = searchParams.get(id) || '';

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(id, value.toString());
    router.push(`?${params.toString()}`, {scroll:false});
  };

  return (
    <RadioGroup defaultValue={currentValue} onValueChange={handleChange} id={id}>
      {data.map(option => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem
            value={option.value}
            id={`${id}-${option.value}`}
          />
          <Label htmlFor={`${id}-${option.value}`} className="cursor-pointer">
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroup>

  )
}
