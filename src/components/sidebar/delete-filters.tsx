"use client"
import { usePathname, useSearchParams, useRouter} from 'next/navigation';
import { Button } from '../ui/button';

export default function DeleteFilters() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClearFilters = () => {
    const params = new URLSearchParams(searchParams);
    const filtersToRemove = ['monthlyCost', 'upfrontCost', 'incData', 'network', 'term'];
    filtersToRemove.forEach(filter=> params.delete(filter))   
    router.push(`?${params.toString()}`, {scroll:false})
  };

  return (
    <Button variant="link" className="text-xs" onClick={handleClearFilters}>
      Clear Filters
    </Button>
  );
}
