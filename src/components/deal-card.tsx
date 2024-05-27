import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DealCard(){
  return(
    <div className="grid">
      <Card>
        <CardHeader>
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
  )
}
