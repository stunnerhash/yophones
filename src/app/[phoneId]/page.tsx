import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import Sidebar from "@/components/sidebar/sidebar"
import  DealCard  from "@/components/deal-card"
import { ChevronDown } from "lucide-react";

export default function Deals(
  {params}: { params:{ phoneId:string }}
){
  const {phoneId} = params;
  return (
  <>
      <div className="bg-primary w-full h-36">
         
      </div>
      <div className="grid grid-cols-1 gap-6  md:grid-cols-[280px_1fr] md:p-6">
        <Sidebar/>
        <div className="grid gap-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h1 className="text-2xl font-bold">List of {phoneId}</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline">
                  Sort by
                  <ChevronDown className="h-4 w-4 ml-1"/>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup value="newest">
                  <DropdownMenuRadioItem value="newest">Best Selling</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="cheapest">Monthly Cost</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="most-data">Total Cost</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="longest-contract">Data</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DealCard/>
        </div>
      </div>
    </>
  )
}

