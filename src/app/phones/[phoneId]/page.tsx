import Sidebar from "@/components/sidebar/sidebar"
import DealCard from "@/components/deal-card"
import SortBy from "@/components/sort-by";
import ShowMoreButton from "@/components/show-more-button";
import PhoneWidget from "./_components/phone-widget";
import { Phone } from "@prisma/client";
import { getPhoneById } from "@/actions/get-phone-by-id";
import { getDeals } from "@/actions/get-deals";
import SearchInput from "@/components/search";

interface SearchParams {
  [key: string]: string | string[] | undefined 
};

export default async function Deals({
  searchParams,params
}:{
    searchParams: SearchParams;
    params:{
      phoneId: string,
    }
  }
) {
  const phoneId = parseInt(params.phoneId);
  const phone = await getPhoneById(phoneId)
  const {deals, hasMore}= await getDeals(phoneId, searchParams)

  return (
    <>
      <div className="bg-primary justify-center p-0 sm:px-10 sm:py-4">
        <div className=" grid grid-cols-1 gap-2 p-10 bg-background lg:grid-cols-2">
          <PhoneWidget data={phone as Phone}/> 
          <div className="flex flex-col w-full group">
            <div className="transitiona-all duration-1000 opacity-90 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
              <p className="text-background text-xl font-bold px-4 pt-2">Hot deal</p>
              <DealCard data={deals[0]} className="m-2 relative z-10 rounded-lg"/>
            </div>
          </div>          
        </div>
      </div>

      <div className=" grid grid-cols-1 gap-6  md:grid-cols-[280px_1fr] md:p-6">
        <Sidebar />
        <div className="grid gap-6">
          <div className="mx-1 flex flex-wrap gap-2 items-center justify-between">
            <SearchInput/>
            <SortBy />
          </div>
          {deals.map((deal) =>
            <DealCard 
              key={deal.id} 
              data={deal} 
              className="mx-1" />
          )}
          <ShowMoreButton hasMore={hasMore}/>
        </div>
      </div>
    </>
  )
}


