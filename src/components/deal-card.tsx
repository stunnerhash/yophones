import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DealCard({className}:{className?:string;}){
  return(
      <Link href="/deals/0">
    <div className={cn(className, "select-none cursor-pointer ")}>
        <Card className="rounded-lg hover:border hover:border-primary transition-all">
          <CardHeader className="select-none cursor-pointer ">
            <CardTitle>iPhone 13 - 24 Months</CardTitle>
            <CardDescription>Unlimited Data, 5G</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-2xl">£55/mo</p>

              <Button size="sm" variant="outline">
                View Deal
              </Button>
            </div>
          </CardContent>
        </Card>
    </div>
      </Link>
  )
}
