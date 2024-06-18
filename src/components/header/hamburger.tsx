"use client"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components//ui/button"
import { MenuIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BrandName from "./brand-name";
import { Phone } from "@prisma/client";
import NavList from "./nav-list";

export default function Hamburger({
  popularPhones, 
  latestPhones, 
  className
}:{
    popularPhones: Phone[];
    latestPhones: Phone[];
    className:string;
  }){
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
            <SheetTitle><BrandName/></SheetTitle>
            <SheetDescription>Browse our selection of popular and latest phone deals.</SheetDescription>
          </SheetHeader>
          <Accordion collapsible type="single">
            <AccordionItem value="popular-phones">
              <AccordionTrigger className="text-base">Popular Phones</AccordionTrigger>
              <AccordionContent>
                <NavList phones={popularPhones}/>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="latest-phones">
              <AccordionTrigger className="text-base">Latest Phones</AccordionTrigger>
              <AccordionContent>
                <NavList phones={latestPhones}/>
              </AccordionContent>
            </AccordionItem>
          </Accordion> 
        </SheetContent>
      </Sheet>
    </div>
  )
}
