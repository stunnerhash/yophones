import Sidebar from "@/components/sidebar/sidebar"
import  DealCard  from "@/components/deal-card"
import SortBy from "@/components/sort-by";

export default function Deals(
  {params}: { params:{ phoneId:string }}
){
  const {phoneId} = params;
  return (
  <>
      <div className="bg-primary w-full h-36">
      </div>
      <div className="grid grid-cols-1 gap-6  md:grid-cols-[280px_1fr] md:p-6">
        <Sidebar/>
        <div className="grid gap-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h1 className="text-2xl font-bold">List of {phoneId}</h1>
            <SortBy/>
          </div>
          {Array.from({length:8},()=>
            <DealCard/>
          )}
        </div>
      </div>
    </>
  )
}


