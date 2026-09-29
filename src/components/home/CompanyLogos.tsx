import Image from "next/image";

export default function CompanyLogos() {
  const logos = [
    { icon: "/assets/company logo/Vector.png", name: "Logoipsum" },
    { icon: "/assets/company logo/Vector (1).png", name: "Logoipsum" },
    { icon: "/assets/company logo/Vector (2).png", name: "Logoipsum" },
    { icon: "/assets/company logo/Vector (3).png", name: "Logoipsum" },
    { icon: "/assets/company logo/Vector (4).png", name: "Logoipsum" },
  ];

  return (
    <section className="border-y border-zinc-200/80 bg-[#F2F4F7] py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:justify-between">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 transition-transform hover:scale-105"
            >
              <div className="relative h-7 w-7 shrink-0 sm:h-8 sm:w-8">
                <Image
                  src={logo.icon}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-base font-bold tracking-tight text-[#64748B] sm:text-lg">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
