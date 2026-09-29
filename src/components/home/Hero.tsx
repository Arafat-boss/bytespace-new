"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search, Star } from "lucide-react";

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/search");
    }
  };

  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-0 sm:pt-12">
      {/* 3D Floating Shapes (Left) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden z-10">
        {/* Top-Left Green Spiral */}
        <div className="absolute -left-4 sm:left-2 lg:left-6 top-8 sm:top-12 w-28 sm:w-36 lg:w-44 animate-float-slow">
          <Image
            src="/assets/hero/left1.png"
            alt="Floating 3D Spiral"
            width={180}
            height={260}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        {/* Mid-Left White Zigzag */}
        <div className="absolute left-16 sm:left-32 lg:left-44 top-72 sm:top-80 w-14 sm:w-16 lg:w-20 animate-float-reverse">
          <Image
            src="/assets/hero/left2.png"
            alt="Floating 3D Zigzag"
            width={90}
            height={90}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Bottom-Left White Donut / Torus */}
        <div className="absolute left-2 sm:left-8 lg:left-14 bottom-24 sm:bottom-32 w-32 sm:w-40 lg:w-48 animate-float-slow">
          <Image
            src="/assets/hero/left3.png"
            alt="Floating 3D Torus"
            width={200}
            height={200}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Top-Right Green Cylinder */}
        <div className="absolute -right-4 sm:right-2 lg:right-6 top-8 sm:top-12 w-28 sm:w-36 lg:w-44 animate-float-slow">
          <Image
            src="/assets/hero/right1.png"
            alt="Floating 3D Cylinder"
            width={180}
            height={260}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        {/* Mid-Right White Pyramid */}
        <div className="absolute right-16 sm:right-36 lg:right-48 top-64 sm:top-72 w-16 sm:w-20 lg:w-24 animate-float-reverse">
          <Image
            src="/assets/hero/right2.png"
            alt="Floating 3D Pyramid"
            width={100}
            height={100}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Bottom-Right White Spiral */}
        <div className="absolute right-4 sm:right-10 lg:right-16 bottom-20 sm:bottom-28 w-28 sm:w-36 lg:w-40 animate-float-slow">
          <Image
            src="/assets/hero/right3.png"
            alt="Floating 3D Spiral"
            width={160}
            height={220}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Hero Headline & Search Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[62px] lg:leading-[1.15]">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="mx-auto mt-8 max-w-xl">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center rounded-full bg-white p-1.5 pl-5 sm:pl-6 shadow-2xl shadow-blue-950/40"
          >
            <Search className="h-4 w-4 text-zinc-400 sm:h-5 sm:w-5 mr-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-xs sm:text-sm text-zinc-800 placeholder-zinc-400 outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[#D2FF00] px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold text-zinc-950 transition hover:bg-[#c3ec00] active:scale-95 shadow-sm cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Visual Section: Green Arc + Student + Interactive Floating Badges */}
      <div className="relative z-20 mx-auto mt-12 sm:mt-16 max-w-5xl flex flex-col items-center justify-center px-4">
        <div className="relative w-full max-w-[760px] flex items-end justify-center">
          {/* Lime Green Arc in Background */}
          <div className="relative w-full max-w-[680px] sm:max-w-[760px] -mb-1">
            <Image
              src="/assets/hero/circel.png"
              alt="Background Arc"
              width={760}
              height={380}
              className="w-full h-auto object-contain select-none"
              priority
            />
          </div>

          {/* Smiling Student Image */}
          <div className="absolute bottom-0 w-[300px] sm:w-[420px] lg:w-[480px] z-10 select-none">
            <Image
              src="/assets/hero/student.png"
              alt="Student with laptop and headphones"
              width={480}
              height={520}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Floating Badge 1: UI/UX Design (Top-Left of student) */}
          <div className="absolute top-4 sm:top-10 left-2 sm:left-8 lg:left-14 z-30 rounded-2xl border border-white/60 bg-white/95 p-3.5 sm:p-4 shadow-xl backdrop-blur-sm text-left">
            <p className="text-xs sm:text-sm font-bold text-zinc-900">
              UI/UX Design
            </p>
            <p className="mt-0.5 text-[10px] sm:text-xs font-medium text-zinc-500">
              200 Courses &bull; 1000+ Students
            </p>
          </div>

          {/* Floating Badge 2: Happy Students (Bottom-Left of student) */}
          <div className="absolute bottom-6 sm:bottom-12 left-0 sm:left-6 lg:left-10 z-30 rounded-2xl border border-white/60 bg-white/95 p-3 sm:p-4 shadow-xl backdrop-blur-sm text-left">
            <p className="text-xs sm:text-sm font-bold text-zinc-900">
              Happy Students
            </p>
            <div className="mt-0.5 flex items-center gap-1 text-[11px] sm:text-xs text-zinc-600">
              <span className="font-semibold text-zinc-900">4.5</span>
              <span>(240)</span>
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            </div>
            <div className="mt-2.5 flex items-center -space-x-2">
              {studentAvatars.map((url, i) => (
                <div
                  key={i}
                  className="relative h-6 w-6 sm:h-7 sm:w-7 overflow-hidden rounded-full border-2 border-white shadow-sm"
                >
                  <img
                    src={url}
                    alt={`Student ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              <div className="flex h-6 sm:h-7 items-center justify-center rounded-full border-2 border-white bg-[#D2FF00] px-2 text-[10px] sm:text-[11px] font-bold text-zinc-950 shadow-sm">
                2K+
              </div>
            </div>
          </div>

          {/* Floating Badge 3: Learning Progress (Right of student) */}
          <div className="absolute top-12 sm:top-20 right-2 sm:right-6 lg:right-12 z-30 min-w-[150px] sm:min-w-[180px] rounded-2xl border border-white/60 bg-white/95 p-3.5 sm:p-5 shadow-xl backdrop-blur-sm text-left">
            <p className="text-[11px] sm:text-xs font-medium text-zinc-500">
              Learning Progress
            </p>
            <p className="mt-0.5 text-2xl sm:text-3xl font-extrabold text-zinc-900">
              55%
            </p>
            <div className="mt-2.5 sm:mt-3 h-2 w-full overflow-hidden rounded-full bg-zinc-100">
              <div
                className="h-full rounded-full bg-[#D2FF00]"
                style={{ width: "55%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
