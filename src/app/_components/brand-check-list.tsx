"use client"

import CheckboxButton from "@/components/checkbox-button";
import { brandNames } from "@/sample-data";
import { useSearchParams, useRouter  } from "next/navigation";

export default function BrandCheckList(){
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedBrands = searchParams.getAll("brand")

  function handleBrandToggle(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;
    const params = new URLSearchParams(searchParams);
    if (checked) {
      params.append("brand", name);
    } else {
      const currentBrands = params.getAll("brand");
      params.delete("brand");
      currentBrands
        .filter((brand) => brand !== name)
        .forEach((b) => params.append("brand", b));
    }
    router.push(`?${params.toString()}`, {scroll:false});
  }

  return (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <div className="text-sm font-medium text-muted-foreground">
        Filter by:
      </div>
      <div className="flex flex-wrap items-center gap-1 gap-y-4">
        {brandNames.map((brand) => (
          <CheckboxButton 
            key={brand} 
            name={brand} 
            defaultChecked={selectedBrands.includes(brand)} 
            onChange={handleBrandToggle}
          > {brand}
          </CheckboxButton>
        ))}
      </div>
    </div>
  );
}
