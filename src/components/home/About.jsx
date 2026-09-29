import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "Practical curriculum updated quarterly with the latest market demands",
    "Dedicated 1-on-1 mentorship sessions with industry veterans",
    "Collaborative open-source projects and active developer community",
    "Job placement assistance and resume review workflows",
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Visual section */}
          <div className="relative mx-auto flex h-[350px] w-full max-w-[450px] items-center justify-center rounded-3xl bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 border border-zinc-200 dark:border-zinc-800">
            <div className="relative h-full w-full">
              <Image
                src="/assets/hero/circel.png"
                alt="ByteSpace Environment"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              About ByteSpace
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Empowering the next generation of engineers & builders
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              ByteSpace was born out of a mission to bridge the gap between theoretical knowledge and real-world software engineering. We offer an ecosystem where learners build production-ready systems, master architectures, and thrive.
            </p>

            <ul className="space-y-3 pt-2">
              {highlights.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
