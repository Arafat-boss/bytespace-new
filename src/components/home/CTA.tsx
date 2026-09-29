import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Ready to launch your tech career?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-indigo-100 sm:text-lg">
          Join thousands of developers leveling up their engineering skills on ByteSpace today.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-8 font-semibold text-indigo-600 shadow-md transition hover:bg-zinc-100 sm:w-auto"
          >
            Start Learning Now
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#features"
            className="flex h-12 w-full items-center justify-center rounded-full border border-indigo-400 bg-indigo-700/50 px-8 font-medium text-white transition hover:bg-indigo-700 sm:w-auto"
          >
            Explore Curriculum
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-indigo-200">
          <div className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-400" />
            <span>Instant sandbox access</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-400" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
