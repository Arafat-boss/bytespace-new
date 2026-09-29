import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Tan",
      role: "Software Engineer at TechCorp",
      review:
        "ByteSpace completely changed how I approach full-stack software development. The real-world projects and code reviews gave me the confidence to pass high-bar interviews.",
      rating: 5,
    },
    {
      name: "Sara Ahmed",
      role: "Frontend Developer at StartupX",
      review:
        "The curriculum is always up to date with modern stacks. Learning Next.js and TypeScript through practical assignments made all the difference in my job hunt.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Cloud Engineer",
      review:
        "The mentorship and supportive community are unmatched. You're not just watching videos; you're actively architecting systems and getting real developer feedback.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Loved by developers worldwide
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Hear how ByteSpace helped learners level up their skills and land dream engineering roles.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <div>
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300 italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-zinc-200/80 pt-4 dark:border-zinc-800/80">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {item.name}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
