import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react";

export default function SortBy(){
  return(
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
  )
}
