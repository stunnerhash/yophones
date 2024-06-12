import SortBy from "@/components/sort-by";
import BrandCheckList from "./_components/brand-check-list";
import SearchInput from "@/components/search";
import { Suspense } from "react";
import PhoneGrid, { PhoneGridSkeleton } from "./_components/phone-grid";

interface SearchParams {
  [key: string]: string | string[] | undefined 
};

export default function Home({searchParams}:{searchParams:SearchParams}
) {
  return (
    <main>
      <div className="flex gap-6 bg-primary w-full px-6 p-10">
        <span>
          <h1 className="text-muted text-4xl font-bold">Mobile Phone Deals</h1>
          <p className="text-muted py-4">
            Looking for a new phone contract? We can help you find your ideal
            handset on a pay monthly plan that suits your needs.
          </p>
        </span>
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-between px-6 p-4">
        <SearchInput />
        <SortBy />
      </div>
      <BrandCheckList />
      <Suspense fallback={<PhoneGridSkeleton/>}>
        <PhoneGrid searchParams={searchParams}/>
      </Suspense>
    </main>
  );
}

