"use client"
import { ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ShowMoreButton({hasMore}:{hasMore: boolean}){
  const searchParams = useSearchParams();
  const router = useRouter();

  function showMore () {
    const params = new URLSearchParams(searchParams);
    const nextPage = parseInt(params.get('page') ?? '1', 10) + 1;
    params.set('page', nextPage.toString());
    router.push(`?${params.toString()}`, {scroll:false});
  };
  if(!hasMore) return null
  
  return(
    <div className="relative flex justify-center items-center m-4 my-10">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-400"></div>
      </div>
      <Button onClick={showMore} variant={"outline"} className="relative gap-2 rounded-full border-gray-400 px-10 shadow-md text-md bg-background">
        <p>Show More</p> <ChevronDown/> 
      </Button>
    </div>
  )
}
