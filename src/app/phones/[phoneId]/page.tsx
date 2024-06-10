import Sidebar from "@/components/sidebar/sidebar"
import DealCard from "@/components/deal-card"
import SortBy from "@/components/sort-by";
import { Button } from "@/components/ui/button";
import { ChevronsDown, Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

export default function Deals(
) {
  return (
    <>
      <div className="bg-primary justify-center p-0 sm:px-10 sm:py-4">
      <div className=" grid grid-cols-1 gap-2 p-10 bg-background lg:grid-cols-2">
        <div className="flex gap-4">
            <Image 
              className="" 
              src="https://img.uswitch.com/qhi9fkhtpbo3/10Hn8ycopZ1kdXxTDEUZcE/b1e39800882b7a1794f0d81b59ccf37c/iphone15-front-black.png"
              alt="empty"
              width={100}         
              height={160}
            />
            <div className="flex flex-col gap-2">
              <div className="grid gap-4">
                <div>
                  <p className="text-xl py-1 font-bold">Apple iPhone 15 plus</p>
                  <p className="text-xs py-1 text-muted-foreground">Description</p>
                </div>
                <div>
                  <Label htmlFor="color-varient"  className="text-sm font-semibold">Color: </Label>
                  <RadioGroup className="flex items-center" id="color-varient" defaultValue="red">
                    <RadioGroupItem className="peer sr-only" id="color-red" value="red" />
                    <Label htmlFor="color-red" className="border cursor-pointer border-foreground size-6 bg-red-400 rounded-full "  />
                    <RadioGroupItem className="peer sr-only" id="color-white" value="white" />
                    <Label htmlFor="color-white" className="border cursor-pointer border-foreground size-6 bg-white rounded-full" />
                    <RadioGroupItem className="peer sr-only" id="color-green" value="green" />
                    <Label htmlFor="color-green" className="border cursor-pointer border-foreground size-6 bg-green-400 rounded-full peer-checked:border-4" />
                    <RadioGroupItem className="peer sr-only" id="color-grey" value="grey" />
                    <Label htmlFor="color-grey" className="border cursor-pointer border-foreground size-6 bg-black rounded-full" />
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="storage-varient" className="text-sm font-semibold">Storage:</Label>
                  <RadioGroup className="flex items-center text-sm" id="storage-varient">
                    <RadioGroupItem className="peer sr-only text-foreground" id="storage-128" value="128" />
                    <div className="px-2 py-1 bg-muted cursor-pointer border rounded-sm font-semibold border-muted-foreground peer-checked:border-primary"
                    > 128 </div>
                    <RadioGroupItem className="peer sr-only text-foreground" id="storage-256" value="256" />
                    <div className="px-2 py-1 bg-muted cursor-pointer border rounded-sm font-semibold border-muted-foreground peer-checked:border-primary"
                    >256</div>
                    <RadioGroupItem className="peer sr-only text-foreground" id="storage-512" value="512" />
                    <div className="px-2 py-1 bg-muted cursor-pointer border rounded-sm font-semibold border-muted-foreground peer-checked:hidden">512</div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
 
          <div className="flex flex-col w-full group">
            <div
              className="transitiona-all duration-1000 opacity-90 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
              <p className="text-background text-xl font-bold px-4 pt-2">Hot deal</p>
              <DealCard className="m-2 relative z-10 rounded-lg"/>
            </div>
          </div>          
        </div>
      </div>

      <div className=" grid grid-cols-1 gap-6  md:grid-cols-[280px_1fr] md:p-6">
        <Sidebar />
        <div className="grid gap-6">

          <div className="mx-1 flex flex-wrap gap-2 items-center justify-between">
            <span className="flex items-center gap-2">
              <Label htmlFor="search"><Search /></Label>
              <Input id="search" placeholder="Search (eg. iPhone 14)" className="w-52 bg-secondary md:w-60" />
            </span>
            <SortBy />
          </div>


          {Array.from({ length: 8 }, (_, index) =>
            <DealCard key={index} className="mx-1" />
          )}
          <div className="flex justify-center m-4">
            <Button variant={'outline'} className="w-60 text-lg"> <ChevronsDown /> Load More</Button>
          </div>
        </div>
      </div>
    </>
  )
}


