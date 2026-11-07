"use client"

import Image from "next/image"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import logo from "@/app/images/logo.png"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

function Logo() {
  return (
    <Link
      href="/"
      className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      <Image src={logo} alt="HireLoop" className="h-8 w-auto sm:h-9" priority />
    </Link>
  )
}

export function SiteHeader() {
  return (
    <header className="p-4 sm:p-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full bg-[#141416]/90 px-6 py-3 backdrop-blur-md sm:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <span className="h-4 w-px bg-white/20" />

          <Link
            href="/signin"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Sign In
          </Link>

          <Link
            href="/get-started"
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger >
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:bg-white/5 hover:text-white md:hidden"
              aria-label="Open menu"
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-white/10 bg-[#141416] text-white"
          >
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            
            <div className="flex flex-col gap-6 pt-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} >
                    <Link
                      href={link.href}
                      className="rounded-lg px-3 py-2 text-base font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
                <SheetClose >
                  <Link
                    href="/signin"
                    className="flex h-10 w-full items-center justify-center rounded-lg border border-white/10 text-sm font-medium text-white transition-colors hover:bg-white/5"
                  >
                    Sign In
                  </Link>
                </SheetClose>
                <SheetClose >
                  <Link
                    href="/get-started"
                    className="flex h-10 w-full items-center justify-center rounded-lg bg-indigo-600 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
                  >
                    Get Started
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}