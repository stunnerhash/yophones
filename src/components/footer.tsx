import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-300">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li> <Link className="hover:text-foreground" href="#"> Our Story </Link> </li>
              <li> <Link className="hover:text-foreground" href="#"> Our Team </Link> </li>
              <li> <Link className="hover:text-gray-300" href="#"> Careers </Link> </li>
              <li> <Link className="hover:text-gray-300" href="#"> Contact Us </Link> </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-300">Products</h4>
            <ul className="space-y-2 text-sm">
              <li> <Link className="hover:text-gray-300" href="#"> Energy </Link> </li>
              <li> <Link className="hover:text-gray-300" href="#"> Broadband </Link> </li>
              <li> <Link className="hover:text-gray-300" href="#"> Insurance </Link> </li>
              <li> <Link className="hover:text-gray-300" href="#"> Money </Link> </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-300">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li> <Link className="hover:text-gray-300" href="#"> Help Center </Link> </li>
              <li> <Link className="hover:text-gray-300" href="#"> Guides </Link> </li>
              <li> <Link className="hover:text-gray-300" href="#"> Blog </Link> </li>
              <li> <Link className="hover:text-gray-300" href="#"> FAQs </Link> </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-300">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li> <Link className="hover:text-gray-300" href="#"> Terms of Service </Link> </li>
              <li> <Link className="hover:text-gray-300" href="#"> Privacy Policy </Link> </li>
              <li> <Link className="hover:text-gray-300" href="#"> Cookie Policy </Link> </li>
              <li> <Link className="hover:text-gray-300" href="#"> Accessibility </Link> </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm">© 2024 Stunnerhash All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link className="text-gray-400 hover:text-gray-300" href="#">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link className="text-gray-400 hover:text-gray-300" href="#">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link className="text-gray-400 hover:text-gray-300" href="#">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link className="text-gray-400 hover:text-gray-300" href="#">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

