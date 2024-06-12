import { getPhones } from "@/actions/get-phones";
import PhoneCard, { PhoneCardSkeleton } from "@/components/phone-card";
import ShowMoreButton from "@/components/show-more-button";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}
export default async function PhoneGrid({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { phones, hasMore } = await getPhones(searchParams);
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} className="w-72" data={phone} />
        ))}
      </div>
      <ShowMoreButton hasMore={hasMore} />
    </>
  );
}

export function PhoneGridSkeleton(){
  return(
    <div className="flex flex-wrap gap-6 justify-center my-10">
      {Array.from({length:8}, (_,index)=>(
        <PhoneCardSkeleton key={index}/>
      ))}
    </div>
  )
}