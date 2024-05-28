"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string;}[] = [
  { title: "iPhone 15 deals", href: "/1", },
  { title: "iPhone 14 deals", href: "/2", },
  { title: "iPhone 14 Plus deals", href: "/3", },
  { title: "Galaxy S23 deals", href: "/4", },
  { title: "Galaxy S22 deals", href: "/5", },
]

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href={'/'}>
            <h1 className="mx-2 text-xl sm:text-md font-bold cursor-pointer">USWITCH</h1>
          </NavigationMenuLink >
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden sm:block">
          <NavigationMenuTrigger>Popular Phones</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-4 w-60">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
