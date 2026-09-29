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
      {/* Seamless Vibrant Ambient Gradient Background Mesh/Glows */}
      <div className="pointer-events-none absolute -top-24 left-[20%] h-[550px] w-[550px] rounded-full bg-[#D4FF00]/40 blur-[130px]" />
      <div className="pointer-events-none absolute top-0 -left-20 h-[500px] w-[500px] rounded-full bg-[#D4FF00]/30 blur-[120px]" />
      <div className="pointer-events-none absolute top-[38%] -left-36 h-[550px] w-[550px] rounded-full bg-[#3B82F6]/30 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[600px] w-[600px] rounded-full bg-[#D4FF00]/45 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[600px] w-[600px] rounded-full bg-[#60A5FA]/30 blur-[140px]" />
      <div className="pointer-events-none absolute top-[45%] -right-32 h-[500px] w-[500px] rounded-full bg-[#818CF8]/25 blur-[130px]" />

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
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-[552px] w-full max-w-[621px]">
              {/* Background Figma Card */}
              <div className="absolute top-0 left-0 sm:left-2 w-[300px] sm:w-[360px] rounded-[28px] border border-zinc-200/90 bg-white p-4 sm:p-5 shadow-xl z-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-zinc-100">
                  <Image
                    src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=600&auto=format&fit=crop"
                    alt="Learn Figma from Basic"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between gap-1 text-[10px] text-zinc-700">
                    <span className="rounded-full bg-[#E2E8F0]/85 px-2.5 py-1 font-medium backdrop-blur-md">17 Lessons</span>
                    <span className="rounded-full bg-[#E2E8F0]/85 px-2.5 py-1 font-medium backdrop-blur-md">2 hours 16 mins</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-base sm:text-lg font-bold text-zinc-900 line-clamp-1">
                    Learn Figma from Basic
                  </h4>
                  <p className="mt-0.5 text-xs sm:text-sm text-[#0052FE]">
                    by purepearl studio
                  </p>
                </div>

                <div className="mt-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 rounded-full bg-[#F4F7FE] px-3.5 py-1.5 text-xs font-semibold text-zinc-700">
                    <span>Beginner</span>
                  </div>

                  <span className="text-xl font-extrabold text-[#0052FE]">
                    $25<span className="text-xs text-zinc-400 font-normal">/lifetime</span>
                  </span>
                </div>
              </div>

              {/* 3D Lime Spiral (top-right background) */}
              <div className="absolute top-2 right-2 sm:right-6 w-36 sm:w-44 animate-float-slow z-10 pointer-events-none">
                <Image
                  src="/assets/hero/left1.png"
                  alt="3D Lime Spiral"
                  width={180}
                  height={240}
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* Center Student Image (w: 577px, h: 540px) */}
              <div className="absolute bottom-0 right-0 w-[420px] sm:w-[500px] lg:w-[577px] h-[390px] sm:h-[470px] lg:h-[540px] z-20 pointer-events-none">
                <Image
                  src="/assets/hero/student.png"
                  alt="Student learning"
                  width={577}
                  height={540}
                  className="h-full w-full object-contain object-bottom drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Card: Learning Progress (55%) */}
              <div className="absolute top-52 sm:top-60 right-0 z-30 min-w-[165px] sm:min-w-[190px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-2xl backdrop-blur-md">
                <p className="text-[11px] sm:text-xs font-medium text-zinc-500">
                  Learning Progress
                </p>
                <p className="mt-0.5 text-2xl sm:text-3xl font-extrabold text-zinc-900">
                  55%
                </p>
                <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-zinc-100">
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
          <div className="relative order-2 lg:order-1 flex items-center justify-center lg:justify-start">
            <div className="relative h-[596px] w-full max-w-[541px]">
              {/* Floating Card 1: Total Revenue (Blue) */}
              <div className="absolute top-6 left-0 z-10 rounded-[20px] bg-[#0052FE] p-4 text-white shadow-xl min-w-[165px] sm:min-w-[180px]">
                <div className="flex items-center justify-between text-[11px] text-white/80">
                  <span>Total Revenue</span>
                  <span className="text-[10px] text-white/60">July 1-28</span>
                </div>
                <p className="mt-1 text-lg sm:text-xl font-extrabold text-white">
                  $120.29
                </p>
                <div className="mt-2.5 h-1.5 w-full rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full bg-[#D2FF00] rounded-full" style={{ width: "60%" }} />
                </div>
              </div>

              {/* Floating Card 2: Year to Date (Blue) */}
              <div className="absolute top-44 sm:top-48 left-0 z-10 rounded-[20px] bg-[#0052FE] p-4 text-white shadow-xl min-w-[150px] sm:min-w-[165px]">
                <div className="flex items-center justify-between text-[11px] text-white/80">
                  <span>Year to Date</span>
                  <span className="text-[10px] text-white/60">2023</span>
                </div>
                <p className="mt-1 text-lg sm:text-xl font-extrabold text-white">
                  $1,200.38
                </p>
                <span className="mt-2 inline-block rounded-full bg-[#D2FF00] px-2.5 py-0.5 text-[10px] font-extrabold text-black">
                  +12$
                </span>
              </div>

              {/* 3D Lime Spiral (background behind instructor) */}
              <div className="absolute top-32 right-0 sm:right-4 w-36 sm:w-44 animate-float-reverse z-0 pointer-events-none">
                <Image
                  src="/assets/hero/left1.png"
                  alt="3D Lime Spiral"
                  width={180}
                  height={240}
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* Center Female Student / Creator Image on TOP (student2.png) */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[380px] sm:w-[440px] lg:w-[470px] z-30 pointer-events-none">
                <Image
                  src="/assets/hero/student2.png"
                  alt="Student 2 Creator"
                  width={500}
                  height={560}
                  className="h-auto w-full object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Card 3: Happy Students */}
              <div className="absolute bottom-6 right-0 sm:right-2 z-10 rounded-[22px] border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md min-w-[165px] sm:min-w-[180px]">
                <p className="text-xs sm:text-sm font-bold text-zinc-900">
                  Happy Students
                </p>
                <div className="mt-0.5 flex items-center gap-1 text-[11px] sm:text-xs text-zinc-600">
                  <span className="font-semibold text-zinc-900">4.5</span>
                  <span>(240)</span>
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                </div>
                <div className="mt-2.5 flex items-center -space-x-1.5">
                  {studentAvatars.map((url, i) => (
                    <div
                      key={i}
                      className="relative h-6 w-6 sm:h-7 sm:w-7 overflow-hidden rounded-full border-2 border-white shadow-xs"
                    >
                      <img
                        src={url}
                        alt="Student"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-white bg-[#D2FF00] px-1.5 text-[9px] sm:text-[10px] font-bold text-black shadow-xs">
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
