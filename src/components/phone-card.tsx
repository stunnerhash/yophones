import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils";
import Link from "next/link";

type PhoneCardProps = {
  data: {
    id:string
    frontImage: string;
    name:string
  };
  className?: string;
};

export default function PhoneCard({data, className}:PhoneCardProps) {
  const {frontImage, name, id} = data;
  return (
    <Link href={`/${id}`}>
      <div className={cn(className,"cursor-pointer")}>
        <Card className="w-full select-none rounded-lg shadow-md overflow-hidden  group">
          <div className="relative pt-2">
            <div className="h-full transform translate-x-1 group-hover:scale-105 transition-all">
              <img
                alt={name}
                className="mx-auto h-full"
                height="150"
                src={frontImage}
                width="80"
              />
            </div>
            <Badge className="absolute bottom-2 left-4" variant="secondary">
              Top selling
            </Badge>
          </div>
          <div className="px-4 py-6">
            <div className="flex justify-center p-1 gap-1 ">
              <div className="w-4 h-1 rounded-full bg-black " />
              <div className="w-4 h-1 rounded-full bg-blue-500 " />
              <div className="w-4 h-1 rounded-full bg-green-500" />
              <div className="w-4 h-1 rounded-full bg-yellow-500 " />
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-bold text-xl">{name}</span>
            </div>
            <div className="mt-2">
              <p className="text-lg font-semibold">From £33.00 per month</p>
              <p className="text-sm text-gray-600">5GB of data</p>
              <p className="text-sm text-gray-600">No upfront cost</p>
            </div>
            <div className="mt-4">
              <Button  className="w-full bg-primary text-primary-foreground" variant="default" >
                See all deals
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Link>
  )
}


