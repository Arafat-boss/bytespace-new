import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/Logo.png"
              alt="ByteSpace Logo"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Byte<span className="text-indigo-600 dark:text-indigo-400">Space</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <Link href="#features" className="transition-colors hover:text-zinc-950 dark:hover:text-white">
              Features
            </Link>
            <Link href="#about" className="transition-colors hover:text-zinc-950 dark:hover:text-white">
              About
            </Link>
            <Link href="#services" className="transition-colors hover:text-zinc-950 dark:hover:text-white">
              Services
            </Link>
            <Link href="#testimonials" className="transition-colors hover:text-zinc-950 dark:hover:text-white">
              Testimonials
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
