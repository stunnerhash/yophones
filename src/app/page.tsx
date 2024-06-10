import SortBy from "@/components/sort-by";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {  Search } from "lucide-react";
import BrandCheckList from "./_components/brand-check-list";
import PhoneCard from "@/components/phone-card";
import db from "@/db"
import { Suspense } from "react";
import ShowMoreButton from "@/components/show-more-button";

interface SearchParams {
  [key: string]: string | string[] | undefined 
};

async function getPhones(searchParams: SearchParams) {
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page, 10) : 1;
  const pageSize = 4;
  const selectedBrands = (searchParams.brand ? (Array.isArray(searchParams.brand) ? searchParams.brand : [searchParams.brand]) : []) as string[];
  const searchTerm = typeof searchParams.search === 'string' ? searchParams.search : '';

  const phones = await db.phone.findMany({
    where: {
      brandName: selectedBrands.length > 0 ? { in: selectedBrands } : undefined,
      name: searchTerm ? { contains: searchTerm, mode: 'insensitive' } : undefined,
    },
    take: page*pageSize,
  });

  const totalPhones = await db.phone.count({ 
    where: {
      brandName: selectedBrands.length > 0 ? { in: selectedBrands } : undefined,
      name: searchTerm ? { contains: searchTerm, mode: 'insensitive' } : undefined,
    },
  });
    
  return {phones, hasMore:totalPhones>page*pageSize};
}

export default async function Home({searchParams}:{searchParams:SearchParams}
) {
  const {phones, hasMore} = await getPhones(searchParams);

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
        <span className="flex items-center gap-2">
          <Input
            id="search"
            placeholder="Search (eg. iPhone 14)"
            className="w-52 bg-secondary md:w-60"
          />
          <Label htmlFor="search">
            <Search />
          </Label>
        </span>
        <SortBy />
      </div>

      <BrandCheckList/>
      
      <div className="flex flex-wrap gap-6 justify-center">
          {phones.map((phone) => (
            <PhoneCard key={phone.id} className="w-72" data={phone} />
          ))}
      </div>

      <ShowMoreButton hasMore={hasMore}/>
    </main>
  );
}

