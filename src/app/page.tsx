import SortBy from "@/components/sort-by";
import BrandCheckList from "./_components/brand-check-list";
import PhoneCard from "@/components/phone-card";
import ShowMoreButton from "@/components/show-more-button";
import {getPhones} from "@/actions/get-phones";
import SearchInput from "@/components/search";

interface SearchParams {
  [key: string]: string | string[] | undefined 
};

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
        <SearchInput/>
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

