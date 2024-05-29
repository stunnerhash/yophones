import * as React from "react"
import Navbar from "./navbar"
import ThemeSwitch from "./theme-switch"
import { Button } from "../ui/button"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export default function Header() {

  return (
    <div className="flex p-4  justify-between">
      <Navbar/>
      <div className="flex gap-2 justify-between items-center">
        <ThemeSwitch/>
        <SignedOut>
          <SignInButton>
            <Button variant='outline'>Sign In</Button>   
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </div>
  )
}
