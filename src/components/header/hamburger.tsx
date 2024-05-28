import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { MenuIcon } from "lucide-react"

export default function Hamburger(){
  return(
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Phone Models</SheetTitle>
          <SheetDescription>Browse our selection of popular and latest phone models.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
