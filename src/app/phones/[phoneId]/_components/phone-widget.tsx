import { getPhoneById } from "@/actions/get-phone-by-id";
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
          className="w-full min-w-20 min-h-40 max-h-48"
          src={imageUrl}
          alt={name}
          width={100}
          height={160}
          priority={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid gap-4">
          <div>
            <p className="text-md sm:text-xl py-1 font-bold">{name}</p>
            <p className="text-sm text-muted-foreground py-1 ">{brandName}</p>
            <p className="text-xs py-1 text-muted-foreground">{description}</p>
          </div>

          <div className="flex items-center gap-2" >
            {colours.map((colour) => (
              <span key={colour}>
                <label key={colour} htmlFor={colour} className= "cursor-pointer" >
                  <input type="radio" id={colour} name="colour" value={colour} className="peer sr-only" />
                  <div className="size-6 rounded-full ring-offset-1 ring-current peer-checked:ring-2 " style={{ backgroundColor: colour, color: colour}} />
                </label>
              </span>
            ))}
          </div>

          <div className="flex gap-2 text-xs sm:text-sm font-semibold">
            {storageSize.map((item) => (
              <span key={item}>
                <input type="radio" id={item} name="storage" value={item} className="peer sr-only" />
                <label key={item} htmlFor={item}
                  className={`text-nowrap p-2 bg-muted cursor-pointer rounded-sm font-semibold border-primary ring-offset-1 ring-primary peer-checked:ring`}
                > {item}
                </label>
              </span>
            ))}
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
