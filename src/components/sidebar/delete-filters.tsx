"use client"
import { useSearchParams, useRouter} from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function DeleteFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClearFilters = () => {
    const params = new URLSearchParams(searchParams);
    const filtersToRemove = ['minMonthlyCost', 'maxMonthlyCost', 'upfrontCost', 'incData', 'network', 'term'];
    filtersToRemove.forEach(filter=> params.delete(filter))   
    router.push(`?${params.toString()}`, {scroll:false})
  };

  return (
    <Button variant="link" className="text-xs" onClick={handleClearFilters}>
      Clear Filters
    </Button>
  );
}
