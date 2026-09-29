import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 antialiased">
      {/* Top Banner Section with Royal Blue Grid Pattern & Navbar */}
      <div className="hero-grid-pattern relative w-full overflow-hidden">
        <Navbar />

        {/* 404 Center Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:py-28 lg:py-36 text-center">
          {/* Giant Gradient 404 Number */}
          <h1 className="text-8xl sm:text-9xl lg:text-[210px] font-black tracking-tight leading-none bg-gradient-to-b from-[#D4FF00] via-[#C6F700] to-[#84CC16] bg-clip-text text-transparent select-none drop-shadow-sm">
            404
          </h1>

          {/* Error Title */}
          <h2 className="mt-3 sm:mt-5 text-2xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-white leading-tight">
            The page you are looking <br />
            for doesn&apos;t exist
          </h2>

          {/* Error Description */}
          <p className="mx-auto mt-4 sm:mt-5 max-w-md text-xs sm:text-sm text-white/80 font-normal leading-relaxed">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home Button */}
          <div className="mt-7 sm:mt-9 flex justify-center">
            <Link
              href="/"
              className="rounded-full bg-[#D2FF00] px-8 py-3.5 sm:px-9 sm:py-4 text-xs sm:text-sm font-bold text-zinc-950 shadow-xl transition-all duration-200 hover:bg-[#c2ed00] hover:scale-105 active:scale-95 text-center cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
