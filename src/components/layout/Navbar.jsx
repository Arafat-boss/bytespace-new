"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full pt-4 sm:pt-6 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition opacity-90 hover:opacity-100"
        >
          <div className="relative h-7 w-7 flex items-center justify-center">
            <Image
              src="/assets/Logo.png"
              alt="ByteSpace Logo"
              width={28}
              height={28}
              className="h-7 w-auto object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            ByteSpace
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-normal text-white/90">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <Link href="/search" className="transition-colors hover:text-white">
            Courses
          </Link>
          <Link href="/creators" className="transition-colors hover:text-white">
            Creators
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 sm:gap-6 text-sm text-white/95">
          <Link
            href="/login"
            className="hidden sm:inline-block font-normal transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="hidden xs:inline-block font-normal transition-colors hover:text-white"
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Shopping Cart"
            className="flex items-center justify-center text-white/95 transition-opacity hover:opacity-80 cursor-pointer"
          >
            <ShoppingBag className="h-5 w-5 stroke-[1.8]" />
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            className="md:hidden flex items-center justify-center text-white/95 transition-opacity hover:opacity-80 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 stroke-[2]" />
            ) : (
              <Menu className="h-6 w-6 stroke-[2]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 rounded-2xl bg-[#0047E0]/95 backdrop-blur-lg border border-white/20 p-5 shadow-2xl animate-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-3.5 text-sm font-medium text-white/95">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 transition-colors hover:text-[#D2FF00]"
            >
              Home
            </Link>
            <Link
              href="/search"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 transition-colors hover:text-[#D2FF00]"
            >
              Courses
            </Link>
            <Link
              href="/creators"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 transition-colors hover:text-[#D2FF00]"
            >
              Creators
            </Link>
            <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-1/2 rounded-full border border-white/40 py-2 text-center text-xs font-semibold text-white transition hover:bg-white/10"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="w-1/2 rounded-full bg-[#D2FF00] py-2 text-center text-xs font-bold text-zinc-950 shadow-sm transition hover:bg-[#c2ed00]"
              >
                Join Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
