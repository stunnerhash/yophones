import * as React from "react"
import Navbar from "./navbar"
import ThemeSwitch from "./theme-switch"
import { Button } from "../ui/button"

export default function Header() {
  return (
    <div className="p-4 flex justify-between">
      <Navbar/>
      <div className="p-4 gap-2 flex justify-center items-center">
        <ThemeSwitch/>
        <Button variant='outline'>Sign In</Button>   
      </div>
    </div>
  )
}
