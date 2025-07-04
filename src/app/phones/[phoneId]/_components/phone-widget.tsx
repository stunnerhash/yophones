import { getPhoneById } from "@/actions/get-phone-by-id";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import ColourSelect from "./colour-select";
import StorageSelect from "./storage-select";

export default async function PhoneWidget({ phoneId }: { phoneId: number }) {
  const phone = await getPhoneById(phoneId);
  if (!phone) return null; 

  const { name, imageUrl, brandName, description, storageSize, colours } = phone;
  return (
    <div className="flex justify-center gap-4 ">
      <div className="h-full">
        <Image
          className="w-full xl:h-4/5 h-full"
          src={imageUrl}
          alt={name}
          width={100}
          height={160}
          priority={true}
          draggable="false"
        />
      </div>
      <div className="flex flex-col gap-2 px-2  h-full">
        <div className="flex flex-col gap-4 justify-between">
          <div>
            <p className="text-md sm:text-xl py-1 font-bold">{name}</p>
            <p className="text-sm text-muted-foreground py-1 ">{brandName}</p>
            <p className="text-xs py-1 text-muted-foreground">{description}</p>
          </div>
          <ColourSelect colours={colours}/>
          <StorageSelect storageSize={storageSize}/>
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
