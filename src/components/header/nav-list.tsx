import { Phone } from "@prisma/client"
import NavListItem from "./nav-list-item"

export default function NavList({phones}:{phones: Phone[]}){
  return (
    <ul className="grid  p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
