"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { useURL } from "@/hooks/use-url";
import { ChevronDown } from "lucide-react";

export default function SortBy(){
  const {updateSingleValue} = useURL()
  return(
    <DropdownMenu >
      <DropdownMenuTrigger asChild >
        <Button size="sm" variant="outline">
          Sort by
          <ChevronDown className="h-4 w-4 ml-1"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" >
        <DropdownMenuRadioGroup value="best-selling" >
          <DropdownMenuRadioItem value="best-selling" >Best Selling</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="monthly-cost">Monthly Cost</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="total-cost">Total Cost</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
