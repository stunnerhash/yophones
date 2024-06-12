import { getPhoneById } from "@/actions/get-phone-by-id";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default async function PhoneWidget({ phoneId }: { phoneId: number }) {
  const phone = await getPhoneById(phoneId);
  if (!phone) {
    return <></>;
  }
  const { name, imageUrl, brandName, description, storageSize, colours } = phone;
  return (
    <div className="flex gap-4">
      <div className="relative">
        <Image
          className="w-full h-full min-h-48"
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
            <Label htmlFor="color-varient" className="text-sm font-semibold">
              Color:
            </Label>
            <RadioGroup
              className="flex items-center"
              id="color-varient"
              defaultValue={colours[0]}
            >
              {colours.map((colour) => (
                <>
                  <RadioGroupItem
                    key={colour}
                    id={colour}
                    value={colour}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={colour}
                    className={
                      "border cursor-pointer border-foreground size-6 bg-red-400 rounded-full"
                    }
                    style={{ backgroundColor: colour }}
                  />
                </>
              ))}
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="storage-varient" className="text-sm font-semibold">
              Storage:
            </Label>
            <RadioGroup
              defaultValue="128 GB"
              className="flex items-center text-sm"
              id="storage-varient"
            >
              {storageSize.map((item) => (
                <>
                  <RadioGroupItem
                    key={item}
                    id={item}
                    value={item}
                    className="peer text-foreground"
                  />
                  <Label
                    htmlFor={item}
                    className="p-2 bg-muted cursor-pointer rounded-sm font-semibold peer-checked:border peer-checked:border-primary"
                  >
                    {item}
                  </Label>
                </>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PhoneWidgetSkeleton(){
  return (
    <div className="flex gap-4">
      <Skeleton className="w-32 h-full"></Skeleton>
      <div className="flex flex-col justify-between">
        <Skeleton className="w-48 h-8"></Skeleton>
        <div className="flex flex-col gap-4 justify-around">
          <Skeleton className="w-48 h-8"></Skeleton>
          <Skeleton className="w-48 h-8"></Skeleton>
        </div>
      </div>
    </div>
  );
}