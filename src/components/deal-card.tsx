import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Deal } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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
  
  const {id, name, imageUrl,  brandName, colour, term, network, monthlyCost, upfrontCost, incData, incTexts, storageSize, promotionalText} = data;

  return(
    <Link href="/deals/[id]" as={`/deals/${id}`}>
      <div className={cn(className, "select-none cursor-pointer rounded-lg shadow-md")}>
        <Card className="rounded-lg hover:border hover:border-primary transition-all">
          <CardHeader className="select-none cursor-pointer ">
            <CardTitle className="text-md sm:text-lg flex justify-between">
              <span>{name}</span>
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
