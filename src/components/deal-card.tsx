import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Deal } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
import { Plus, PlusCircle } from "lucide-react";

export default async function DealCard({ className, data }:{ className?:string; data: Partial<Deal>; }){
  if(!data) return null;

  const {
    id, 
    name, 
    imageUrl,  
    // brandName, 
    // colour, 
    term, 
    // network, 
    monthlyCost, 
    upfrontCost, 
    incData, 
    // storageSize, 
    promotionalText,
    TelcosNetworkDetailsJson,
    specifications, 
  } = data;
  const specs = specifications?.split('*').filter(item=>item);
  const networkImageUrl = JSON.parse(TelcosNetworkDetailsJson || '{}')?.logo_url;

  return (
    <Link href="/deals/[id]" as={`/deals/${id}`}>
      <div
        className={cn(
          className,
          "select-none cursor-pointer rounded-lg shadow-md m-2"
        )}
      >
        <Card className="grid grid-cols-1 sm:grid-cols-3 ring-primary  hover:ring-1 rounded-lg transition-all ">
          <div className="border-4 rounded-lg border-secondary col-span-2">
            <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2 bg-secondary">
              <span className="flex">
                <Image
                  className="size-5 mx-1"
                  src={networkImageUrl || ''}
                  alt={name || ''}
                  width={10}
                  height={10}
                  sizes="100vw"
                  priority={true}
                />
                <span className="text-sm font-semibold">{name}</span>
              </span>
              <span className="flex justify-center p-2">
                <Image
                  className="max-w-20 sm:max-w-14"
                  src={imageUrl || ''}
                  alt={name || ''}
                  width={50}
                  height={50}
                  sizes="100vw"
                  priority={true}
                />
              </span>
            </div>
            <div className="text-[11px] p-2">
              <ul>
                {specs?.slice(14, 16)?.map((item, index) => (
                  <li key={index} className="flex p-1 gap-2 items-center">
                    <PlusCircle className="size-3 fill-primary text-background" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 gap-4">
            <div className="flex justify-between">
              <span>
                <p className="text-sm sm:text-lg font-semibold tracking-wide">
                  ${upfrontCost?.toFixed(2)}
                </p>
                <p className="text-xs sm:text-sm">Upfront Cost </p>
              </span>
              <span>
                <p className="text-sm sm:text-lg font-semibold tracking-wide text-primary">
                  ${monthlyCost}
                </p>
                <p className="text-xs sm:text-sm">Monthly Cost </p>
              </span>
            </div>
            <div className="flex justify-between">
              <span>
                <p className="py-2 text-xs sm:text-xs font-medium font-sm">
                  {term} Month(s)
                </p>
              </span>
              <span>
                <Button className="uppercase rounded-sm ">View Deal</Button>
              </span>
            </div>
          </div>
        </Card>
      </div>
    </Link>
  );
}

export function DealCardSkeleton(){
  return (
    <Skeleton className="w-full h-48 p-4 ">
      <span className="flex justify-between">
        <Skeleton className="w-80 my-1 h-8 bg-background" />
        <Skeleton className="w-32 my-1 h-8 bg-background" />
      </span>
      <Skeleton className="w-32 my-1 h-6 bg-background" />

      <span className="flex justify-between items-end mt-2">
        <Skeleton className="w-80 my-1 h-6 bg-background" />
        <Skeleton className="w-28 my-1 h-8 bg-background" />
      </span>
    </Skeleton>
  );
}
