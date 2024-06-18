
import { cn } from "@/lib/utils";
import { Lilita_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const lilita = Lilita_One({subsets:["latin"], weight:"400"})

export default function BrandName(){
  return(
    <Link href={'/'} className={lilita.className}>
        <Image 
          className="h-auto w-auto hover:scale-95 active:scale-90 transition-all"
          alt="logo"
          src="/brand-logo.webp"
          height={100}
          width={150}
          priority={true}
        />
    </Link>
  )
}
