"use client"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput(){
  const router = useRouter();
  const searchParams = useSearchParams()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value}= e.target;
    router.push(`?search=${value}`,{scroll:false});
  };

  return (
    <span className="flex items-center gap-2">
      <Label htmlFor="search">
        <Search/>
      </Label>
      <Input 
        id="search" 
        placeholder="Search (eg. iPhone 14)" 
        className="w-52 bg-secondary md:w-60" 
        defaultValue={searchParams.get("search") || ''}
        onChange={handleSearch}
      />
    </span>
  )
}
