import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { getDealById } from "@/actions/get-deal-by-id";
import { Button } from "@/components/ui/button";
import { ArrowRight} from "lucide-react";
import AnalyticsLink from "@/components/analytics-link";

export default async function Deal({params}: {params:{dealId:string;}}) {
  const dealId = parseInt(params.dealId);
  const deal = await getDealById({dealId});
  if(!deal) return null;

  const {
    name, 
    network,
    brandName, 
    imageUrl, 
    upfrontCost, 
    monthlyCost, 
    incData, 
    incTexts, 
    incMinutes,
    term,
    TelcosNetworkDetailsJson,
    storageSize,
    basketLink,
    TelcosDealPromoInfo
  } = deal; 
  const networkImageUrl = JSON.parse(TelcosNetworkDetailsJson || '{}')?.logo_url;
  const promoBadgeData = TelcosDealPromoInfo?.split("*");
  const planDetails=[
    { title: "Upfront Cost", value: '$'+ upfrontCost },
    { title: "Contract Length", value:term +" Month/s"},
    { title: "Minutes", value: incMinutes },
    { title: "Texts", value:incTexts},
    { title: "Data", value:incData + " GB"},
   ]

  return (
    <>
      <div className="bg-primary justify-center md:px-10 md:py-4 " >
        <div className="bg-background p-8">
        <div className="mb-6 grid gap-2 md:grid-cols-[auto_1fr_auto] grid-cols-[1fr_2fr_1fr] lg:gap-4">
            <div>
              <Image
                className="w-full max-h-49"
                src={imageUrl || ''}
                alt={name || ''}
                width={100}
                height={160}
                sizes="100vw"
                priority={true}
              />
            </div>
            <div className="flex flex-col gap-2  justify-around">
              <div >
                <p className="text-md font-semibold">{name}</p>
                <p className="text-sm text-muted-foreground">{brandName}</p>
                <p className="text-sm font-bold">{storageSize}</p>
              </div>
              <div className="text-sm grid gap-2">
                <p><span className="font-semibold">${upfrontCost}</span> upfront</p>
                <p><span className="font-semibold">{incData} GB</span> data</p>
                <p><span className="font-semibold">${monthlyCost}</span> per month</p>
              </div>
            </div>
          <div >
            <Image
              className="size-10" 
              src={networkImageUrl}
              alt="empty"
              width={40}
              height={40}
              priority={false}
            />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <b>Annual price rise</b>
            <p> Monthly cost shown will rise every April by Consumer Price Index (CPI) plus 3.9%. </p>
            <div  className="flex flex-wrap gap-2">
              {promoBadgeData?.slice(0,6).map(item =>
                item && <Badge key={item} variant="outline" className="p-2 border-primary"> {item}</Badge>
              )}
            </div>
          </div>

          <Accordion collapsible type="single">
            <AccordionItem value="plan-details">
              <AccordionTrigger className="text-base">Plan details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                {planDetails.map(item=>
                  <div key={item.title}>
                    <Separator/>
                    <div className="flex justify-between items-center p-2">
                      <span className="text-muted-foreground">{item.title}</span> 
                      <span className="font-bold">{item.value}</span>
                    </div>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <AnalyticsLink href={basketLink || ''} dealName={name || ''} network={network}>
            <Button variant={"link"} className="bg-primary text-background my-4 p-6 animate-out transition-all "> 
              Choose deal 
              <ArrowRight/>
            </Button>
          </AnalyticsLink>
        </div>
      </div>
      <div>
        <p className="p-10"> Customers must purchase the deal directly from the retailer website. Prices, plan names and offers all based on information received from suppliers. Deals and vouchers offered are subject to availability and may not be available to existing customers. Networks may increase monthly line rental prices in line with the retail or consumer price index each year during the length of your contract. Please refer to individual retailers terms and conditions before applying. </p>
      </div> 
    </>
  );
};

