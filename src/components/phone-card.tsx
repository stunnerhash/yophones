import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "@prisma/client";

type PhoneCardProps = {
  data: Phone;
  className?: string;
};


export default function PhoneCard({ data, className }: PhoneCardProps) {
  const { imageUrl, name, colours, brandName, badge} = data;

  console.log(colours);
  return (
    <Link 
      href={{pathname:"/phones/[name]"}}
      as={`phones/${encodeURIComponent(name.trim().replace(/ /g, "-"))}`}
    >
      <div
        className={cn(
          className,
          "cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all"
        )}
      >
        <Card className="w-full select-none rounded-lg shadow-md group">
          <div className="relative pt-2">
            <div className="w-full transform translate-x-1  transition-all">
              <Image
                alt={name}
                className="mx-auto max-h-40 object-contain"
                height="150"
                src={imageUrl}
                width="80"
                priority={true}
                layout="responsive"
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
              {colours.map((colour) => (
                <div
                  key={colour}
                  className={cn("w-4 h-1.5 border rounded-full", `bg-${colour}`)}
                />
              ))}
            </div>

            <div className="flex items-center space-x-1">
              <span className="font-bold text-lg">{name}</span>
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

