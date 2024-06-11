import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Phone } from "@prisma/client";
import Image from "next/image";

export default function PhoneWidget({data}:{data: Phone}){
  if(data){
    <Skeleton className="w-10">
    </Skeleton>
  }

  const {name, imageUrl, brandName, description, storageSize, colours } = data;

  return(
    <div className="flex gap-4">
      <div className="relative" >
        <Image
          className="w-full min-h-48 max-h-48" 
          src={imageUrl}
          alt={name}
          width={100}         
          height={160}  
          sizes="100vw"
          priority={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid gap-4">
          <div>
            <p className="text-xl py-1 font-bold">{name}</p>
            <p className="text-muted-foreground py-1 ">{brandName}</p>
            <p className="text-xs py-1 text-muted-foreground">{description}</p>
          </div>
          <div>
            <Label htmlFor="color-varient"  className="text-sm font-semibold">Color: </Label>
            <RadioGroup className="flex items-center" id="color-varient" defaultValue={colours[0]}>
              {colours.map((item)=>(
                <>
                  <RadioGroupItem 
                    key={item} 
                    id={item} 
                    value={item} 
                    className="peer sr-only" 
                  />
                  <Label 
                    htmlFor={item} 
                    className={cn("border cursor-pointer border-foreground size-6 bg-red-400 rounded-full", `bg-${item}` )}
                  />
                </>
              ))}
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="storage-varient" className="text-sm font-semibold">Storage:</Label>
            <RadioGroup className="flex items-center text-sm" id="storage-varient">
              {storageSize.map((item)=>(
                <>
                  <RadioGroupItem 
                    key={item}
                    id={item} 
                    value={item} 
                    className="peer sr-only text-foreground"  
                  />
                  <div className="px-2 py-1 bg-muted cursor-pointer border rounded-sm font-semibold border-muted-foreground peer-checked:border-primary" > 
                    {item}   
                  </div>
                </>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>

  )
}
