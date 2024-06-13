import { getDeals } from "@/actions/get-deals";
import DealCard, { DealCardSkeleton } from "@/components/deal-card";
import ShowMoreButton from "@/components/show-more-button";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}
export default async function DealGrid({
  phoneId,
  searchParams,
}: {
  phoneId: number;
  searchParams: SearchParams;
}) {
  const { deals, hasMore } = await getDeals(phoneId, searchParams);
  return (
    <>
      {!deals.length && 
        <div className="flex items-center justify-center text-muted-foreground h-full min-h-60 text-xl">
          No deals found 
        </div>
      } 
      {deals.map((deal) => (
        <DealCard key={deal.id} data={deal}/>
      ))}
      <ShowMoreButton hasMore={hasMore} />
    </>
  );
}

export function DealGridSkeleton() {
  return Array.from({ length: 4 }, (_, index) => (
    <DealCardSkeleton key={index} />
  ));
}
