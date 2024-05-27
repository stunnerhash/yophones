import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import RadioFactory from "@/components/sidebar/radio-factory"
import CheckboxFactory from "./checkbox-factory"

const monthlyRadioData=[
  {label:"Up to ₹1000", value:"1000"},
  {label:"Up to ₹2000", value:"2000"},
  {label:"Up to ₹3000", value:"3000"},
  {label:"Up to ₹4000", value:"4000"},
  {label:"Up to ₹6000", value:"6000"},
]


const upfrontRadioData=[
  {label:"Up to ₹0", value:"0"},
  {label:"Up to ₹5000", value:"5000"},
  {label:"Up to ₹10000", value:"10000"},
  {label:"Up to ₹15000", value:"15000"},
  {label:"Up to ₹20000", value:"20000"},
]


const contractCheckboxData=[
  {label:"12 Months"},
  {label:"24 Months"},
  {label:"36 Months"},
]

export default function Sidebar() {
  return (
    <div className="border-r p-4 md:p-4">
      <h2 className="text-lg font-semibold mb-4">Filter Deals</h2>
      <Accordion collapsible type="single">

        <AccordionItem value="monthly-cost">
          <AccordionTrigger className="text-base">Monthly Cost</AccordionTrigger>
          <AccordionContent>
            <RadioFactory 
              id="monthly-cost"
              data={monthlyRadioData}
            />
          </AccordionContent>
        </AccordionItem>
 
        <AccordionItem value="upfront-cost">
          <AccordionTrigger className="text-base">Upfront Cost</AccordionTrigger>
          <AccordionContent>
            <RadioFactory 
              id="upfront-cost"
              data={upfrontRadioData}
            />
          </AccordionContent>
        </AccordionItem>
               
        <AccordionItem value="contract-length">
          <AccordionTrigger className="text-base">Contract Length</AccordionTrigger>
          <AccordionContent>
            <CheckboxFactory 
              data={contractCheckboxData} 
              id="contract-length"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
    </div> 
  )
}

