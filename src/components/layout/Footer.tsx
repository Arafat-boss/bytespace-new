import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/Logo.png"
                alt="ByteSpace Logo"
                width={28}
                height={28}
                className="h-7 w-auto object-contain"
              />
              <span className="text-lg font-bold text-zinc-900 dark:text-white">
                Byte<span className="text-indigo-600 dark:text-indigo-400">Space</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Modern digital space for learning, collaboration, and scalable tech solutions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="#features" className="hover:text-zinc-950 dark:hover:text-white">Features</Link></li>
              <li><Link href="#services" className="hover:text-zinc-950 dark:hover:text-white">Services</Link></li>
              <li><Link href="#" className="hover:text-zinc-950 dark:hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="#about" className="hover:text-zinc-950 dark:hover:text-white">About Us</Link></li>
              <li><Link href="#testimonials" className="hover:text-zinc-950 dark:hover:text-white">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-zinc-950 dark:hover:text-white">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="#" className="hover:text-zinc-950 dark:hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-zinc-950 dark:hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          © {new Date().getFullYear()} ByteSpace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
