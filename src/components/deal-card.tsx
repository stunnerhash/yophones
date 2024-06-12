import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Deal } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

export default async function DealCard({
  className, 
  data
}:{
    className?:string;
    data: Partial<Deal>;
  }
){
 
  if(!data){
    return null;
  }
  
  const {
    id, 
    name, 
    // imageUrl,  
    // brandName, 
    // colour, 
    term, 
    network, 
    monthlyCost, 
    // upfrontCost, 
    incData, 
    // storageSize, 
    promotionalText,
    TelcosNetworkDetailsJson,
  } = data;

  const networkImageUrl = JSON.parse(TelcosNetworkDetailsJson || '{}')?.logo_url;

  return(
    <Link href="/deals/[id]" as={`/deals/${id}`}>
      <div className={cn(className, "select-none cursor-pointer rounded-lg shadow-md")}>
        <Card className="rounded-lg hover:border hover:border-primary transition-all">
          <CardHeader className="select-none cursor-pointer ">
            <CardTitle className="text-md sm:text-lg flex justify-between">
              <span className="flex items-center">
                <Image
                  className="size-6 mx-1"
                  src={networkImageUrl|| ''}
                  alt={name || ''}
                  width={10}
                  height={10}
                  sizes="100vw"
                  priority={true}
                />

                {name}
              </span>
              <span>{term} Months</span>
            </CardTitle>
            <CardDescription>
              <span>{incData === "Unlimited" ? incData: incData + " GB"}, {network}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-md sm:text-xl">${monthlyCost}</p>
              <Button size="sm" variant="outline">
                View Deal
              </Button>
            </div>
            <Badge className="py-1">{promotionalText}</Badge>
          </CardContent>
        </Card>
      </div>
    </Link>
  )
}

export function DealCardSkeleton(){
  return (
    <Skeleton className="w-full h-40 p-4 ">
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
