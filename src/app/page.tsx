import PhoneCard from "@/components/phone-card";
import SortBy from "@/components/sort-by";
import { Button } from "@/components/ui/button";
import sampleData from "@/sample-data.json"
import { ChevronsDown } from "lucide-react";
import { ReactNode } from "react";

const CheckboxButton = ({ children }:{children:ReactNode}) => {
  return (
    <label className="cursor-pointer">
      <input type="checkbox"  className="hidden peer" />
      <span className="rounded-full px-4 py-2 text-md font-medium border peer-checked:bg-secondary peer-checked:text-secondary-foreground peer-checked:border-transparent">
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
          <h1 className="text-4xl font-bold">Mobile Phone Deals</h1>
          <p className="text-gray-300 py-4">
            Looking for a new phone contract? We can help you find your ideal handset on a pay monthly plan that suits your needs.
          </p>   
        </span>
      </div>
      
      <div className="flex m-4 justify-between">
      <div className="flex flex-wrap items-center gap-4 p-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Filter by:</div>
        <div className="flex flex-wrap items-center gap-2">
          <CheckboxButton>Apple</CheckboxButton>
          <CheckboxButton>Samsung</CheckboxButton>
          <CheckboxButton>Google</CheckboxButton>
          <CheckboxButton>Sony</CheckboxButton>
          <CheckboxButton>Oneplus</CheckboxButton>
        </div>
      </div>


      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-2xl font-bold"></h1>
        <SortBy/>
      </div>
      </div>
      <div className="flex flex-wrap lg:m-4 gap-6 justify-center">
      {
          sampleData.map(item=> 
            <PhoneCard key={item.id} className="" data={item}/>)
      }
      </div>

      <div className="flex justify-center m-4">
        <Button variant={'outline'} className="w-1/2 text-lg"> <ChevronsDown /> Load More</Button>
      </div>

    </main>
  );
}

