"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useAuth();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setUserDropdownOpen(false);
    setMobileMenuOpen(false);
    logout();
  };

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
        <div className="flex items-center gap-3 sm:gap-5 text-sm text-white/95">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setUserDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 py-1 pl-1 pr-2.5 text-white transition backdrop-blur-md cursor-pointer"
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name || "User"}
                    className="h-6 w-6 sm:h-7 sm:w-7 rounded-full object-cover ring-1 ring-white/50"
                  />
                ) : (
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#D2FF00] text-xs font-bold text-zinc-950">
                    {(user.name || user.email || "U").charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="hidden sm:inline-block max-w-[110px] truncate text-xs font-medium text-white">
                  {user.name || user.email}
                </span>
                <ChevronDown
                  className={`h-3.5 w-3.5 text-white/80 transition-transform duration-200 ${
                    userDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-black/5 z-50 text-zinc-900 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2.5 border-b border-zinc-100">
                    <p className="text-xs font-bold text-zinc-900 truncate">
                      {user.name || "ByteSpace User"}
                    </p>
                    <p className="text-[11px] text-zinc-500 truncate">
                      {user.email}
                    </p>
                    {user.provider && (
                      <span className="mt-1 inline-block rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-semibold text-[#0052FE] uppercase tracking-wider">
                        {user.provider}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="mt-1 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 transition cursor-pointer"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
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
            </>
          )}

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
            <div className="pt-3 border-t border-white/15">
              {user ? (
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-3 py-1">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name || "User"}
                        className="h-8 w-8 rounded-full object-cover ring-1 ring-white/50"
                      />
                    ) : (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D2FF00] text-xs font-bold text-zinc-950">
                        {(user.name || user.email || "U").charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-white truncate">
                        {user.name || "Learner"}
                      </p>
                      <p className="text-[11px] text-white/70 truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-red-500/20 border border-red-400/30 py-2 text-center text-xs font-semibold text-red-200 transition hover:bg-red-500/30"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-3">
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
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
