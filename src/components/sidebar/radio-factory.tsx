"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useURL } from "@/hooks/use-url";

type RadioOption = {
  value: string;
  label: string;
};

export default function RadioFactory({
  data,
  id,
}: {
  data: RadioOption[];
  id: string;
}) {
  const searchParams = useSearchParams();
  const currentValue = searchParams.get(id) || "";
  const { updateSingleValue } = useURL();

  return (
    <div className="grid grid-cols-3 gap-2">
      {data.map((option) => (
        <Label
          key={option.value}
          htmlFor={id + option.value}
          className="flex justify-center font-normal rounded-sm bg-background border-secondary text-center border text-nowrap transition-all cursor-pointer has-[input:checked]:text-primary has-[input:checked]:border-primary hover:text-pink-400 hover:border-primary"
        >
          <Input
            type="radio"
            id={id + option.value}
            name={id}
            value={option.value}
            autoComplete="off"
            defaultChecked={currentValue === option.value}
            className="sr-only"
            onChange={(e) => updateSingleValue(e.target)}
          />
          <span className="p-3">{option.label} </span>
        </Label>
      ))}
    </div>
  );
}