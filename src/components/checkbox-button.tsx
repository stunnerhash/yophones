import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CheckboxButtonProps{
  children:ReactNode; 
  className?:string;
  checked?:boolean
  defaultChecked?:boolean;
  onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void; 
  name?:string
}

export default function CheckboxButton({
  children,
  className,
  checked,
  defaultChecked,
  onChange,
  name,
  ...rest
}: CheckboxButtonProps) {
  return (
    <label className={cn("cursor-pointer", className)}>
      <input
        type="checkbox"
        className="hidden peer"
        checked={checked}
        onChange={onChange}
        defaultChecked={defaultChecked}
        name={name}
        {...rest}
      />
      <span className="rounded-full px-4 py-2 text-md font-medium border peer-checked:bg-secondary peer-checked:text-secondary-foreground peer-checked:border-primary">
        {children}
      </span>
    </label>
  );
};

