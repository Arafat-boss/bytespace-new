import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const column1 = [
    { label: "Featured Courses", href: "/search" },
    { label: "Featured Categories", href: "/search" },
    { label: "Business", href: "/search?category=Marketing" },
    { label: "IT", href: "/search?category=Data%20Science" },
    { label: "Design", href: "/search?category=UI%2FUX%20Design" },
  ];

  const column2 = [
    { label: "Development", href: "/search?category=Web%20Development" },
    { label: "Marketing", href: "/search?category=Marketing" },
    { label: "Photography", href: "/search?category=Drawing%20%26%20Painting" },
    { label: "Finance", href: "/search?category=Marketing" },
    { label: "Sport", href: "/search" },
  ];

  const column3 = [
    { label: "Become a Creator", href: "/signup" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-zinc-100 py-16 sm:py-20 lg:py-24 text-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Newsletter on Left, 3 Columns on Right */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="max-w-md">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative h-7 w-7 flex items-center justify-center">
                <Image
                  src="/assets/Logo.png"
                  alt="ByteSpace Logo"
                  width={28}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-zinc-950">
                ByteSpace
              </span>
            </Link>

            {/* Newsletter Prompt */}
            <p className="mt-5 text-xs sm:text-sm leading-relaxed text-zinc-600">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input & Search/Subscribe Button */}
            <form
              action="#"
              method="POST"
              className="mt-6 flex flex-wrap items-center gap-3 sm:flex-nowrap"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-1 min-w-[220px] rounded-full border border-zinc-300 bg-white px-5 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition"
              />
              <button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-[#D2FF00] px-7 py-3 text-xs sm:text-sm font-bold text-zinc-950 transition-all hover:bg-[#c2ed00] hover:scale-105 active:scale-95 shadow-sm text-center cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* Disclaimer / Agreement */}
            <p className="mt-4 text-[11px] sm:text-xs leading-normal text-zinc-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 lg:gap-16 pt-2">
            {/* Column 1 */}
            <ul className="space-y-3.5 sm:space-y-4">
              {column1.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-[13.5px] text-zinc-600 hover:text-zinc-950 transition-colors font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="space-y-3.5 sm:space-y-4">
              {column2.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-[13.5px] text-zinc-600 hover:text-zinc-950 transition-colors font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="space-y-3.5 sm:space-y-4">
              {column3.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-[13.5px] text-zinc-600 hover:text-zinc-950 transition-colors font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Horizontal Bar */}
        <div className="mt-16 sm:mt-20 border-t border-zinc-200/80 pt-6 sm:pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row text-[11px] sm:text-xs text-zinc-500">
          <p>
            @ 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              href="#"
              className="text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
