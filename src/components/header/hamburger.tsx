import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components//ui/button"
import { ArrowRight, MenuIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { latestPhones, popularPhones } from "@/sample-data";
import NavListItem from "./nav-list-item";

export default function Hamburger({className}:{className:string;}){
  return(
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="font-bold text-xl">USWITCH</SheetTitle>
            <SheetDescription>Browse our selection of popular and latest phone deals.</SheetDescription>
          </SheetHeader>
          <Accordion collapsible type="single">

            <AccordionItem value="popular-phones">
              <AccordionTrigger className="text-base">Popular Phones</AccordionTrigger>
              <AccordionContent>
                <ul >
                  {popularPhones.map((phone)=>
                    <span className="flex justify-between items-center">
                      <NavListItem
                        key={phone.title}
                        title={phone.title}
                        href={phone.href}
                        className="space-y-0"
                      >
                      </NavListItem>
                      <ArrowRight className="w-4 h-4 text-gray-400"/>
                    </span>
                  )}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="latest-phones">
              <AccordionTrigger className="text-base">Latest Phones</AccordionTrigger>
              <AccordionContent>
                <ul >
                  {latestPhones.map((phone)=>
                    <span className="flex justify-between items-center">
                      <NavListItem
                        key={phone.title}
                        title={phone.title}
                        href={phone.href}
                        className="space-y-0"
                      >
                      </NavListItem>
                      <ArrowRight className="w-4 h-4 text-gray-400"/>
                    </span>
                  )}
                </ul>
              </AccordionContent>
            </AccordionItem>

          </Accordion> 

        </SheetContent>
      </Sheet>
    </div>
  )
}
