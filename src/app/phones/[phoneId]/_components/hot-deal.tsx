import { DealCardSkeleton, HotDealCard } from "@/components/deal-card";
import db from "@/db"

async function getHotDeal({ phoneId }: { phoneId: number }) {
  try {
    const deal = await db.deal.findFirst();
    return deal;
  } catch (error) {
    console.error("Error fetching hot deal", error);
  }
}
export default async function HotDeal({ phoneId }: { phoneId: number }) {
  const deal = await getHotDeal({ phoneId });
  if(!deal)return(<></>)
  return (
    <div className="flex flex-col w-full group animate-in">
      <div className="p-4 transitiona-all duration-1000 opacity-90 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        <p className="text-background text-xl font-bold ">Hot deal</p>
        <HotDealCard data={deal} className=" relative z-10 rounded-lg" />
      </div>
    </div>
  );
}


export function HotDealSkeleton(){
  return(
    <div className="flex flex-col w-full group">
      <div className="p-4 transitiona-all duration-1000 opacity-90 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        <p className="text-background text-xl font-bold ">Hot deal</p>
        <DealCardSkeleton/>
      </div>
    </div>
  )
}

