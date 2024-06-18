import * as React from "react"
import Navbar from "./navbar"
import { Button } from "../ui/button"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export default function Header() {
  return (
    <div className="flex px-4 min-h-14 justify-between">
      <Navbar/>
      <div className="flex gap-6 justify-between items-center">
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
