"use client"
import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Hamburger from "./hamburger"
import BrandName from "./brand-name"
import { Phone } from "@prisma/client"
import NavList from "./nav-list"

export default function NavbarContent({
  popularPhones, 
  latestPhones
}:{
    popularPhones: Phone[], 
    latestPhones: Phone[]
}){
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Hamburger className="md:hidden" popularPhones={popularPhones} latestPhones={latestPhones}/>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <span className="mx-2"><BrandName/></span>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Popular Phones</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavList className="p-6" phones={popularPhones}/>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Latest Phones</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavList className="p-6" phones={latestPhones}/>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}


