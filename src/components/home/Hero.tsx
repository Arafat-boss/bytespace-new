import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const companyLogos = [
    { src: "/assets/company logo/Vector.png", alt: "Company 1" },
    { src: "/assets/company logo/Vector (1).png", alt: "Company 2" },
    { src: "/assets/company logo/Vector (2).png", alt: "Company 3" },
    { src: "/assets/company logo/Vector (3).png", alt: "Company 4" },
    { src: "/assets/company logo/Vector (4).png", alt: "Company 5" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-white py-16 sm:py-24 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/50 dark:text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Smart Tech Learning & Growth</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
              Elevate Your Skills With{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                ByteSpace
              </span>
            </h1>

            <p className="text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
              Unlock hands-on experience, collaborative projects, and industry-grade tech mentorship designed for modern developers and learners.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/signup"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500 sm:w-auto"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#features"
                className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-200 bg-white px-6 font-medium text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 sm:w-auto"
              >
                Explore Courses
              </Link>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[360px] w-full max-w-[480px] sm:h-[450px]">
              <Image
                src="/assets/hero/student.png"
                alt="ByteSpace Learning"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Company Logos / Social Proof */}
        <div className="mt-16 border-t border-zinc-200/80 pt-10 dark:border-zinc-800/80">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Trusted by teams and developers from
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:gap-12">
            {companyLogos.map((logo, index) => (
              <div key={index} className="h-6 w-24 relative">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain dark:invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
