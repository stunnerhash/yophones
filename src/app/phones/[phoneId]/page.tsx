import Sidebar from "@/components/sidebar/sidebar"
import SortBy from "@/components/sort-by";
import PhoneWidget, { PhoneWidgetSkeleton } from "./_components/phone-widget";
import SearchInput from "@/components/search";
import DealGrid, { DealGridSkeleton } from "./_components/deal-grid";
import HotDeal, { HotDealSkeleton } from "./_components/hot-deal";
import { Suspense } from "react";

interface SearchParams {
  [key: string]: string | string[] | undefined 
};

export default async function Deals({
  searchParams,
  params,
}: {
  searchParams: SearchParams;
  params: {
    phoneId: string;
  };
}) {
  const phoneId = parseInt(params.phoneId);

  return (
    <>
      <div className="bg-primary justify-center p-0 sm:px-10 sm:py-4">
        <div className=" grid grid-cols-1 gap-4 p-2 sm:p-10 bg-background lg:grid-cols-2">
          <Suspense fallback={<PhoneWidgetSkeleton />}>
            <PhoneWidget phoneId={phoneId} />
          </Suspense>
          <Suspense fallback={<HotDealSkeleton />}>
            <HotDeal phoneId={phoneId} />
          </Suspense>
        </div>
      </div>

      <div className=" grid grid-cols-1 gap-6  md:grid-cols-[280px_1fr] md:p-6">
        <Sidebar />
        <div className="grid gap-6">
          <div className="mx-1 flex flex-wrap gap-2 items-center justify-between">
            <SearchInput />
            <SortBy />
          </div>
          <Suspense fallback={<DealGridSkeleton />}>
            <DealGrid searchParams={searchParams} phoneId={phoneId} />
          </Suspense>
        </div>
      </div>
    </>
  );
}


