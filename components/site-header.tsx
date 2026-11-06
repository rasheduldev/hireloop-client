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
  SheetFooter,
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
      className="rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <Image src={logo} alt="HireLoop" className="h-8 w-auto sm:h-9" priority />
    </Link>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-white  transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  )
}

function SignInLink({ className }: { className?: string }) {
  return (
    <Link
      href="/signin"
      className={`text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300 ${className ?? ""}`}
    >
      Sign In
    </Link>
  )
}

function GetStartedLink({ className }: { className?: string }) {
  return (
    <Link
      href="/get-started"
      className={`flex h-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500 px-6 text-base font-semibold whitespace-nowrap text-white transition-colors hover:bg-indigo-400 ${className ?? ""}`}
    >
      Get Started
    </Link>
  )
}

export function SiteHeader() {
  return (
    <header className="p-3 sm:p-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl bg-[#1c1c1f] px-4 py-3.5 sm:px-7 sm:py-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <span className="h-5 w-px bg-white/15" />
          <SignInLink />
          <GetStartedLink />
        </nav>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground/80 hover:text-foreground md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-white/10 bg-[#1c1c1f] text-foreground sm:max-w-72"
          >
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <Link
                      href={link.href}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/75 transition-colors hover:bg-white/5 hover:text-foreground"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <SheetFooter className="gap-3">
              <SheetClose
                render={
                  <Link
                    href="/signin"
                    className="flex h-11 w-full items-center justify-center rounded-xl border border-white/10 text-sm font-medium text-indigo-400 transition-colors hover:bg-white/5 hover:text-indigo-300"
                  />
                }
              >
                Sign In
              </SheetClose>
              <SheetClose
                render={
                  <Link
                    href="/get-started"
                    className="flex h-11 w-full items-center justify-center rounded-xl bg-indigo-500 text-base font-semibold text-white transition-colors hover:bg-indigo-400"
                  />
                }
              >
                Get Started
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
