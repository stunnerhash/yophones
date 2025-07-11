import DealCard, { DealCardSkeleton } from "@/components/deal-card";
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
  if(!deal) return null;
  return (
    <div className="col-span-2 flex flex-col w-full group ">
      <div className="p-1 transitiona-all duration-1000 opacity-90 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        <p className="px-2 pt-1 text-background text-xl font-bold ">Hot deal</p>
        <DealCard data={deal} className="relative z-10 rounded-lg animate-none" />
      </div>
    </div>
  );
}


export function HotDealSkeleton(){
  return(
    <div className="col-span-2 flex flex-col w-full group">
      <div className="p-4 transitiona-all duration-1000 opacity-90 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        <p className="text-background text-xl font-bold ">Hot deal</p>
        <DealCardSkeleton/>
      </div>
    </div>
  )
}

