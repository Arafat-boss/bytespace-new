import Link from "next/link";
import {
  PencilRuler,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

export default function LearningPaths() {
  const paths = [
    {
      title: "Design",
      category: "UI/UX Design",
      icon: <PencilRuler className="h-6 w-6 sm:h-7 sm:w-7 text-black stroke-[2.2]" />,
    },
    {
      title: "Development",
      category: "Web Development",
      icon: <Code2 className="h-6 w-6 sm:h-7 sm:w-7 text-black stroke-[2.2]" />,
    },
    {
      title: "IT & Software",
      category: "Data Science",
      icon: <Laptop className="h-6 w-6 sm:h-7 sm:w-7 text-black stroke-[2.2]" />,
    },
    {
      title: "Business",
      category: "Marketing",
      icon: <Building2 className="h-6 w-6 sm:h-7 sm:w-7 text-black stroke-[2.2]" />,
    },
    {
      title: "Marketing",
      category: "Marketing",
      icon: <Megaphone className="h-6 w-6 sm:h-7 sm:w-7 text-black stroke-[2.2]" />,
    },
    {
      title: "Photography",
      category: "Drawing & Painting",
      icon: <Camera className="h-6 w-6 sm:h-7 sm:w-7 text-black stroke-[2.2]" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Path Cards Grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
          {paths.map((path, index) => (
            <Link
              key={index}
              href={`/search?category=${encodeURIComponent(path.category)}`}
              className="group flex flex-col items-center justify-center rounded-[24px] border border-zinc-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
            >
              {/* Lime Icon Circle */}
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#D2FF00] shadow-sm transition-transform duration-300 group-hover:scale-110">
                {path.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-sm sm:text-base font-semibold text-zinc-800 transition-colors group-hover:text-black">
                {path.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
