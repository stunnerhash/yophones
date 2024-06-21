"use client"
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import RadioFactory from "@/components/sidebar/radio-factory"
import CheckboxFactory from "@/components/sidebar/checkbox-factory"
import DeleteFilters  from "@/components/sidebar/delete-filters"
import { contractCheckboxData, monthlyRadioData, networkCheckboxData, packageRadioData, upfrontRadioData } from "@/sample-data"
import Image from "next/image"
import CostSlider from "@/components/sidebar/cost-slider"

const AccordianValues = ["monthly-cost", "upfront-cost", "package-data", "network", "contract-length"]
export default function Sidebar() {
  return (
    <div className="border-r p-4 md:p-4 border bg-secondary rounded">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold ">Filter Deals</h2>
        <DeleteFilters />
      </div>
      <Accordion type="multiple" defaultValue={AccordianValues}>

        <AccordionItem value="monthly-cost" >
          <AccordionTrigger className="text-base"> Monthly Cost</AccordionTrigger>
          <AccordionContent>
            {/* <RadioFactory 
              id="monthlyCost"
              data={monthlyRadioData}
            /> */}
            <CostSlider/>
          </AccordionContent>
        </AccordionItem>
 
        <AccordionItem value="upfront-cost">
          <AccordionTrigger className="text-base">Upfront Cost(Up To)</AccordionTrigger>
          <AccordionContent>
            <RadioFactory 
              id="upfrontCost"
              data={upfrontRadioData}
            />

          </AccordionContent>
        </AccordionItem>
 
        <AccordionItem value="package-data">
          <AccordionTrigger className="text-base">Data</AccordionTrigger>
          <AccordionContent>
            <RadioFactory 
              id="incData"
              data={packageRadioData}
            />
          </AccordionContent>
        </AccordionItem>              

        <AccordionItem value="network">
          <AccordionTrigger className="text-base">Network</AccordionTrigger>
          <AccordionContent>
            <CheckboxFactory 
              data={networkCheckboxData} 
              id="network"
              renderItem={(data)=>(
               <div className="relative">
                <Image
                  className="h-full px-4"
                  src={data.logo || ''}
                  alt={data.label || ''}
                  width={100}
                  height={100}
                  priority={false}
                />
               </div> 
              )}
            />
          </AccordionContent>
        </AccordionItem>              

        <AccordionItem value="contract-length">
          <AccordionTrigger className="text-base">Contract Length(in months) </AccordionTrigger>
          <AccordionContent>
            <CheckboxFactory 
              data={contractCheckboxData} 
              id="term"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
    </div> 
  )
}

