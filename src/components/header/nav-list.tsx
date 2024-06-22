import { Phone } from "@prisma/client"
import NavListItem from "./nav-list-item"
import { cn } from "@/lib/utils"

export default function NavList({phones, className}:{phones: Phone[], className?: string}){
  return (
    <ul className={cn("grid  md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]", className)}>
      {phones?.map((phone) => (
        <NavListItem
          key={phone.id}
          title={phone.name}
          href={`/phones/${phone.id}`}
        >
        </NavListItem>
      ))}
    </ul>
  )
}
