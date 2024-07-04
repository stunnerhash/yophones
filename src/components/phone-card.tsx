import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "@prisma/client";
import { Skeleton } from "./ui/skeleton";
import ColourList from "./colour-list";

type PhoneCardProps = {
  data: Phone;
  className?: string;
};

export default function PhoneCard({ data, className }: PhoneCardProps) {
  const {id, imageUrl, name, colours, brandName, badge} = data;

  return (
    <Link 
      prefetch={true}
      href={{pathname:"/phones/[id]"}}
      as={`phones/${id}`}
    >
      <div
        className={cn(
          className,
          "cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all"
        )}
      >
        <Card className="w-full select-none rounded-lg shadow-md group">
          <div className="relative pt-2">
            <div className="w-full transform translate-x-1  transition-all select-none">
              <Image
                alt={name}
                className="mx-auto min-h-40 w-full max-h-40 object-contain"
                height="150"
                src={imageUrl}
                width="80"
                priority={true}
                draggable="false"
              />
            </div>
            {badge && (
              <Badge className="absolute bottom-2 left-4" variant="secondary">
                {badge}
              </Badge>
            )}
          </div>
          <div className="px-4 py-6">
            <div className="flex justify-center p-1 gap-1 ">
              <ColourList colours={colours}/>
            </div>

            <div className="flex items-center space-x-1">
              <span className="font-bold text-lg truncate">{name}</span>
            </div>
            <div className="mt-2">
              <p className="text-md font-semibold">{brandName}</p>
              <p className="text-sm text-gray-600">Unlimited Data</p>
              <p className="text-sm text-gray-600">No upfront cost</p>
            </div>
            <div className="mt-4">
              <Button
                className="w-full bg-primary text-primary-foreground"
                variant="default"
              > See all deals
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Link>
  );
}


export function PhoneCardSkeleton(){
  return(
    <Skeleton className="w-72 h-80 p-2 gap-8">
      <Skeleton className="mx-auto  bg-background h-40 w-24"/>
      <Skeleton className="mx-auto my-2  bg-background w-3/4 h-6"/>
      <Skeleton className="mx-auto my-2  bg-background w-1/2 h-4"/>
      <Skeleton className="mx-auto my-2  bg-background w-1/2 h-4"/>
    </Skeleton> 
  )
}
