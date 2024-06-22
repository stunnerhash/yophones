"use client"
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import RadioFactory from "@/components/sidebar/radio-factory"
import CheckboxFactory from "@/components/sidebar/checkbox-factory"
import { contractCheckboxData, networkCheckboxData, packageRadioData, upfrontRadioData } from "@/sample-data"
import Image from "next/image"
import CostSlider from "@/components/sidebar/cost-slider"
import { useState } from "react"
import { Button } from "../ui/button"
import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { Filter } from "lucide-react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

const AccordianValues = ["monthly-cost", "upfront-cost", "package-data", "network", "contract-length"]

export default function Sidebar() {
  const [resetKey, setResetKey] = useState(0);
  const [showFilters, setShowFilters] = useState(true)
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClearFilters = () => {
    const params = new URLSearchParams(searchParams);
    const filtersToRemove = ['minMonthlyCost', 'maxMonthlyCost', 'upfrontCost', 'incData', 'network', 'term'];
    filtersToRemove.forEach(filter=> params.delete(filter))   
    router.push(`?${params.toString()}`, {scroll:false})
    setTimeout(() => {

      setResetKey((key) => key + 1);
    }, 1); 
  };

  return (
    <div
      className={cn("border-r p-4 border bg-secondary rounded transition-all")}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-1">
          <Label htmlFor="filter">
            <Input
              type="checkbox"
              id="filter"
              className="sr-only size-0 peer"
              defaultChecked={true}
              onChange={(e) => setShowFilters(e.target.checked)}
            />
            <Filter className="size-5 text-primary  cursor-pointer peer-checked:fill-current " />
          </Label>
          <p> Filter Deals</p>
        </h2>
        <Button variant="link" className="text-xs" onClick={handleClearFilters}>
          Clear Filters
        </Button>
      </div>
      <Accordion
        type="multiple"
        className={cn(
          "transition-all ",
          showFilters ? "block opacity-100" : "sr-only opacity-0"
        )}
        defaultValue={AccordianValues}
        key={resetKey}
      >
        <AccordionItem value="monthly-cost">
          <AccordionTrigger className="text-base">
            Monthly Cost
          </AccordionTrigger>
          <AccordionContent>
            <CostSlider />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="upfront-cost">
          <AccordionTrigger className="text-base">
            Upfront Cost(Up To)
          </AccordionTrigger>
          <AccordionContent>
            <RadioFactory id="upfrontCost" data={upfrontRadioData} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="package-data">
          <AccordionTrigger className="text-base">Data</AccordionTrigger>
          <AccordionContent>
            <RadioFactory id="incData" data={packageRadioData} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="network">
          <AccordionTrigger className="text-base">Network</AccordionTrigger>
          <AccordionContent>
            <CheckboxFactory
              data={networkCheckboxData}
              id="network"
              renderItem={(data) => (
                <div className="relative">
                  <Image
                    className="h-full px-4"
                    src={data.logo || ""}
                    alt={data.label || ""}
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
          <AccordionTrigger className="text-base">
            Contract Length(in months)
          </AccordionTrigger>
          <AccordionContent>
            <CheckboxFactory data={contractCheckboxData} id="term" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

