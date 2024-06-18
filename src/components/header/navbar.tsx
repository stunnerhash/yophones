import { Phone } from "@prisma/client"
import { getPhones } from "@/actions/get-phones"
import NavbarContent from "./navbar-content"

export default async function Navbar() {
  const data = await getPhones({page:"2"})
  const popularPhones= data?.phones as Phone[]
  const latestPhones = data?.phones as Phone[] 
  return (
    <NavbarContent popularPhones={popularPhones} latestPhones={latestPhones} />
  )
}

