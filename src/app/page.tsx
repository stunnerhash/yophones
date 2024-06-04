import PhoneCard from "@/components/phone-card";
import SortBy from "@/components/sort-by";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { sampleData } from "@/sample-data";
import { ChevronsDown, Search } from "lucide-react";
import { ReactNode } from "react";

const CheckboxButton = ({ children, className }:{children:ReactNode; className?:string}) => {
  return (
    <label className={cn("cursor-pointer",className)}>
      <input type="checkbox"  className="hidden peer" />
      <span className="rounded-full px-4 py-2 text-md font-medium border peer-checked:bg-secondary peer-checked:text-secondary-foreground peer-checked:border-primary">
      <span className="peer-checked:inline hidden">✖</span>
        {children}
      </span>
    </label>
  );
};


export default function Home() {
  return (
    <main>
      <div className="flex gap-6 bg-primary w-full px-6 p-10">
        <span>
          <h1 className="text-muted text-4xl font-bold">Mobile Phone Deals</h1>
          <p className="text-muted py-4">
            Looking for a new phone contract? We can help you find your ideal handset on a pay monthly plan that suits your needs.
          </p>   
        </span>
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-between px-6 p-4">
        <span className="flex items-center gap-2">
          <Input id="search" placeholder="Search (eg. iPhone 14)" className="w-52 bg-secondary md:w-60"/>
          <Label htmlFor="search"><Search/></Label>
        </span>
        <SortBy/>
      </div>

      <div className="flex flex-wrap items-center gap-4 p-6">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Filter by:</div>
          <div className="flex flex-wrap items-center gap-1 gap-y-4">
            <CheckboxButton>Apple</CheckboxButton>
            <CheckboxButton>Samsung</CheckboxButton>
            <CheckboxButton>Google</CheckboxButton>
            <CheckboxButton>Sony</CheckboxButton>
            <CheckboxButton>Oneplus</CheckboxButton>
          </div>
        </div>


      <div className="flex flex-wrap gap-6 justify-center">
        { sampleData.map(item=> 
            <PhoneCard key={item.id} className="w-72 " data={item}/>)
        }
      </div>
      <div className="flex justify-center m-4">
        <Button variant={'outline'} className="w-1/2 text-lg"> <ChevronsDown /> Load More</Button>
      </div>
    </main>
  );
}

