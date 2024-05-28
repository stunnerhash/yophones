import * as React from "react"
import Navbar from "./navbar"
import ThemeSwitch from "./theme-switch"
import { Button } from "../ui/button"

export default function Header() {
  return (
    <div className="flex p-4  justify-between">
      <Navbar/>
      <div className="flex gap-2 justify-between items-center">
        <ThemeSwitch/>
        <Button variant='outline'>Sign In</Button>   
      </div>
    </div>
  )
}
