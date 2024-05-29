import Sidebar from "@/components/sidebar/sidebar"
import  DealCard  from "@/components/deal-card"
import SortBy from "@/components/sort-by";
import { Button } from "@/components/ui/button";
import { ChevronsDown, Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Deals(
){
  return (
  <>
      <div className="bg-primary w-full h-36">
      </div>
      <div className="grid grid-cols-1 gap-6  md:grid-cols-[280px_1fr] md:p-6">
        <Sidebar/>
        <div className="grid gap-6">
          
          <div className="flex flex-wrap gap-2 items-center justify-between">
            <span className="flex items-center gap-2">
              <Label htmlFor="search"><Search/></Label>
              <Input id="search" placeholder="Search (eg. iPhone 14)" className="w-52 bg-secondary md:w-60"/>
            </span>
            <SortBy/>
          </div>


          {Array.from({length:8},(_, index)=>
            <DealCard key={index}/>
          )}
          <div className="flex justify-center m-4">
            <Button variant={'outline'} className="w-60 text-lg"> <ChevronsDown /> Load More</Button>
          </div>
        </div>
      </div>
    </>
  )
}


