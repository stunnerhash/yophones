import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { planDetails } from "@/sample-data";
import Image from "next/image";

export default function Deal() {
  return (
    <>
      <div className="bg-primary justify-center sm:px-10 sm:py-4 " >
        <div className="bg-background p-8">
        <div className="mb-6 grid gap-2 md:grid-cols-[auto_1fr_auto] grid-cols-[1fr_2fr_1fr] lg:gap-4">
            <div>
            <Image
              className="" 
              src="https://img.uswitch.com/qhi9fkhtpbo3/10Hn8ycopZ1kdXxTDEUZcE/b1e39800882b7a1794f0d81b59ccf37c/iphone15-front-black.png"
              alt="empty"
              width={100}         
              height={160}
              priority={false}
            />
            </div>
            <div className="flex flex-col gap-2  justify-around">
              <div className="">
                <p className="text-md font-semibold">Apple iPhone 15 plus 128gb </p>
              </div>
              <div className="text-sm grid gap-2">
                <p>£69.00 upfront</p>
                <p>500GB 5G data</p>
                <p>£29.99 per month</p>
                <p>£788.76 total cost</p>
              </div>
            </div>
          <div >
            <Image
              className="" 
              src="https://img.uswitch.com/qhi9fkhtpbo3/3EUyDd1Ztjo30hNN3PxxpA/60e6d35353bcbd2b57ba58041ae5e631/ID-Mobile-logo.png"
              alt="empty"
              width={100}         
              height={50}
              priority={false}
            />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <b>Annual price rise</b>
            <p> Monthly cost shown will rise every April by Consumer Price Index (CPI) plus 3.9%. </p>
            <div  className="flex flex-wrap gap-2">
              <Badge variant="outline" className="p-2 border-primary"> Claim 3 months free Apple Music and Arcade </Badge>
              <Badge variant="outline" className="p-2 border-primary"> Free roaming up to 30GB </Badge>
              <Badge variant="outline" className="p-2 border-primary"> Yo Phones Award Winner - Best Network for Data </Badge>
            </div>
          </div>

          <Accordion collapsible type="single">

            <AccordionItem value="plan-details">
              <AccordionTrigger className="text-base">Plan details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                {planDetails.map(item=>
                  <div key="item.title">
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
        </div>
      </div>
      <div>
        <p className="p-10"> Customers must purchase the deal directly from the retailer website. Prices, plan names and offers all based on information received from suppliers. Deals and vouchers offered are subject to availability and may not be available to existing customers. Networks may increase monthly line rental prices in line with the retail or consumer price index each year during the length of your contract. Please refer to individual retailers terms and conditions before applying. </p>
      </div> 
    </>
  );
};

