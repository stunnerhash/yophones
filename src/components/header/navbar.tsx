"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Hamburger from "./hamburger"
import { popularPhones } from "@/sample-data"
import NavListItem from "@/components/header/nav-list-item"
import BrandName from "./brand-name"

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <Hamburger className="md:hidden"/>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <span className="mx-2"><BrandName/></span>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Popular Phones</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid  p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {popularPhones.map((phone) => (
                <NavListItem
                  key={phone.title}
                  title={phone.title}
                  href={phone.href}
                >
                </NavListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Latest Phones</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-0 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {popularPhones.map((phone) => (
                <NavListItem
                  key={phone.title}
                  title={phone.title}
                  href={phone.href}
                >
                </NavListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

