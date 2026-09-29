"use client";

import Image from "next/image";
import { Check, Star } from "lucide-react";

export default function GrowthAndCreation() {
  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&q=80",
  ];

  const creatorBenefits = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32">
      {/* Seamless Ambient Gradient Background Mesh/Glows */}
      <div className="pointer-events-none absolute -left-20 top-10 h-[500px] w-[500px] rounded-full bg-[#D2FF00]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-1/4 h-[500px] w-[500px] rounded-full bg-[#0052FE]/8 blur-[130px]" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-[550px] w-[550px] rounded-full bg-[#D2FF00]/12 blur-[130px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-[500px] w-[500px] rounded-full bg-[#0052FE]/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-32 sm:space-y-40">
        
        {/* ================= Part 1: Professional Growth ================= */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Text & Stats */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-zinc-900 leading-[1.18]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-6 text-sm sm:text-base text-zinc-500 leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Row */}
            <div className="mt-10 flex items-center gap-8 sm:gap-14">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0052FE]">
                  12K
                </p>
                <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-500">
                  Students
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0052FE]">
                  70+
                </p>
                <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-500">
                  Courses
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0052FE]">
                  16
                </p>
                <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-500">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Collage */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[420px] w-full max-w-[480px] sm:h-[480px]">
              {/* Background Figma Card (tilted/behind) */}
              <div className="absolute top-0 left-0 w-[240px] sm:w-[280px] rounded-2xl border border-zinc-200/90 bg-white p-3.5 shadow-lg z-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100">
                  <Image
                    src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=600&auto=format&fit=crop"
                    alt="Course Preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 flex justify-between text-[8px] text-zinc-700">
                    <span className="rounded-full bg-white/80 px-1.5 py-0.5">17 Lessons</span>
                    <span className="rounded-full bg-white/80 px-1.5 py-0.5">2 hours 16 mins</span>
                  </div>
                </div>
                <p className="mt-2 text-xs font-bold text-zinc-900">Learn Figma from Basic</p>
                <p className="text-[10px] text-[#0052FE]">by purepearl studio</p>
                <div className="mt-1.5 flex items-center justify-between text-xs">
                  <span className="rounded-full bg-[#F4F7FE] px-2 py-0.5 text-[9px] font-medium text-zinc-700">Beginner</span>
                  <span className="font-bold text-[#0052FE]">$25<span className="text-[9px] text-zinc-400">/lifetime</span></span>
                </div>
              </div>

              {/* 3D Lime Spiral (top-right background) */}
              <div className="absolute top-12 right-2 w-28 sm:w-36 animate-float-slow z-10 pointer-events-none">
                <Image
                  src="/assets/hero/left1.png"
                  alt="3D Lime Spiral"
                  width={140}
                  height={190}
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* Center Student Image */}
              <div className="absolute bottom-0 right-4 sm:right-8 w-[280px] sm:w-[340px] z-20 pointer-events-none">
                <Image
                  src="/assets/hero/student.png"
                  alt="Student learning"
                  width={380}
                  height={420}
                  className="h-auto w-full object-contain drop-shadow-xl"
                  priority
                />
              </div>

              {/* Floating Card: Learning Progress (55%) */}
              <div className="absolute top-28 sm:top-36 right-0 z-30 min-w-[150px] sm:min-w-[170px] rounded-2xl border border-white/80 bg-white/95 p-3.5 sm:p-4 shadow-xl backdrop-blur-md">
                <p className="text-[10px] sm:text-[11px] font-medium text-zinc-500">
                  Learning Progress
                </p>
                <p className="mt-0.5 text-2xl sm:text-3xl font-extrabold text-zinc-900">
                  55%
                </p>
                <div className="mt-2 h-1.5 sm:h-2 w-full overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className="h-full rounded-full bg-[#D2FF00]"
                    style={{ width: "55%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Part 2: Create & Manage Courses ================= */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Visual Collage */}
          <div className="relative order-2 lg:order-1 flex items-center justify-center">
            <div className="relative h-[420px] w-full max-w-[480px] sm:h-[480px]">
              {/* Floating Card 1: Total Revenue (Blue) */}
              <div className="absolute top-4 left-0 z-30 rounded-2xl bg-[#0052FE] p-3.5 text-white shadow-xl min-w-[140px] sm:min-w-[160px]">
                <div className="flex items-center justify-between text-[10px] text-white/80">
                  <span>Total Revenue</span>
                  <span className="text-[9px] text-white/60">July 1-28</span>
                </div>
                <p className="mt-1 text-base sm:text-lg font-bold text-white">
                  $120.29
                </p>
                <div className="mt-2 h-1 w-full rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full bg-[#D2FF00] rounded-full" style={{ width: "65%" }} />
                </div>
              </div>

              {/* Floating Card 2: Year to Date (Blue) */}
              <div className="absolute top-28 sm:top-32 left-0 z-30 rounded-2xl bg-[#0052FE] p-3.5 text-white shadow-xl min-w-[130px] sm:min-w-[145px]">
                <div className="flex items-center justify-between text-[10px] text-white/80">
                  <span>Year to Date</span>
                  <span className="text-[9px] text-white/60">2023</span>
                </div>
                <p className="mt-1 text-base sm:text-lg font-bold text-white">
                  $1,200.38
                </p>
                <span className="mt-1.5 inline-block rounded-full bg-[#D2FF00] px-2 py-0.5 text-[9px] font-extrabold text-black">
                  +12$
                </span>
              </div>

              {/* 3D Lime Spiral (background behind instructor) */}
              <div className="absolute top-16 right-4 sm:right-8 w-28 sm:w-36 animate-float-reverse z-10 pointer-events-none">
                <Image
                  src="/assets/hero/left1.png"
                  alt="3D Lime Spiral"
                  width={140}
                  height={190}
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* Center Female Creator Image */}
              <div className="absolute bottom-0 left-16 sm:left-24 w-[260px] sm:w-[320px] h-[360px] sm:h-[420px] z-20 overflow-hidden rounded-b-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&crop=faces&q=80"
                  alt="Course Creator"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Floating Card 3: Happy Students */}
              <div className="absolute bottom-4 right-0 sm:right-4 z-30 rounded-2xl border border-white/80 bg-white/95 p-3.5 sm:p-4 shadow-xl backdrop-blur-md">
                <p className="text-xs font-bold text-zinc-900">
                  Happy Students
                </p>
                <div className="mt-0.5 flex items-center gap-1 text-[11px] text-zinc-600">
                  <span className="font-semibold text-zinc-900">4.5</span>
                  <span>(240)</span>
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                </div>
                <div className="mt-2 flex items-center -space-x-1.5">
                  {studentAvatars.map((url, i) => (
                    <div
                      key={i}
                      className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-white shadow-xs"
                    >
                      <img
                        src={url}
                        alt="Student"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="flex h-6 items-center justify-center rounded-full border-2 border-white bg-[#D2FF00] px-1.5 text-[9px] font-bold text-black shadow-xs">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text & Checklist */}
          <div className="max-w-xl order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-zinc-900 leading-[1.18]">
              Create & Manage Courses Easily.
            </h2>
            <p className="mt-6 text-sm sm:text-base text-zinc-500 leading-relaxed">
              <strong className="font-semibold text-zinc-900">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist items */}
            <div className="mt-8 space-y-4">
              {creatorBenefits.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#0052FE] text-white shadow-xs shrink-0">
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-zinc-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
