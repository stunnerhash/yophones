"use client"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput(){
  const router = useRouter();
  const searchParams = useSearchParams()

  function handleKeyDown (e: React.KeyboardEvent<HTMLInputElement>){
    if(e.key === 'Enter'){
      const {value}= e.currentTarget;
      router.push(`?search=${value}`,{scroll:false});
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    const {value} = e.target;
    if(!value) router.push(`?search=${value}`, {scroll:false})
  }

  return (
    <span className="flex items-center gap-2">
      <Label htmlFor="search">
        <Search/>
      </Label>
      <Input 
        id="search" 
        placeholder="Search (eg. iPhone 14)" 
        className="w-52 bg-secondary md:w-60" 
        onChange={handleChange}
        defaultValue={searchParams.get("search") || ''}
        onKeyDown={handleKeyDown} 
      />
    </span>
  )
}
