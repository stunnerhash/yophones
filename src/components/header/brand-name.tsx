
import { Lilita_One } from "next/font/google";
import Link from "next/link";

const lilita = Lilita_One({subsets:["latin"], weight:"400"})

export default function BrandName(){
  return(
    <Link href={'/'} className={lilita.className}>
      <span className="text-2xl sm:text-md font-bold cursor-pointer">
        <span className="text-primary italic p-1">YO!</span> PHONES
      </span>
    </Link>
  )
}
