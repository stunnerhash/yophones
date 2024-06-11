import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import RadioFactory from "@/components/sidebar/radio-factory"
import CheckboxFactory from "@/components/sidebar/checkbox-factory"
import DeleteFilters  from "@/components/sidebar/delete-filters"
import { contractCheckboxData, monthlyRadioData, networkCheckboxData, packageRadioData, upfrontRadioData } from "@/sample-data"

export default function Sidebar() {
  return (
    <div className="border-r p-4 md:p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold ">Filter Deals</h2>
        <DeleteFilters/>
      </div>
      <Accordion type="multiple">
        <AccordionItem value="monthly-cost">
          <AccordionTrigger className="text-base">Monthly Cost</AccordionTrigger>
          <AccordionContent>
            <RadioFactory 
              id="monthlyCost"
              data={monthlyRadioData}
            />
          </AccordionContent>
        </AccordionItem>
 
        <AccordionItem value="upfront-cost">
          <AccordionTrigger className="text-base">Upfront Cost</AccordionTrigger>
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
            />
          </AccordionContent>
        </AccordionItem>              

        <AccordionItem value="contract-length">
          <AccordionTrigger className="text-base">Contract Length</AccordionTrigger>
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

