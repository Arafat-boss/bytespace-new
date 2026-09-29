import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-50 w-full pt-6 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition opacity-90 hover:opacity-100">
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

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-normal text-white/90">
          <Link
            href="/"
            className="transition-colors hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/#courses"
            className="transition-colors hover:text-white"
          >
            Courses
          </Link>
          <Link
            href="/creators"
            className="transition-colors hover:text-white"
          >
            Creators
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 text-sm text-white/95">
          <Link
            href="/login"
            className="hidden sm:inline-block font-normal transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="font-normal transition-colors hover:text-white"
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Shopping Cart"
            className="flex items-center justify-center text-white/95 transition-opacity hover:opacity-80"
          >
            <ShoppingBag className="h-5 w-5 stroke-[1.8]" />
          </button>
        </div>
      </div>
    </header>
  );
}
