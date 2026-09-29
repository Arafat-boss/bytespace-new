"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="hero-grid-pattern relative overflow-hidden py-24 sm:py-32">
      {/* 3D Floating Elements (Left) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden z-10">
        {/* Top-Left Lime Spiral */}
        <div className="absolute -left-6 sm:left-2 lg:left-6 top-4 sm:top-6 w-28 sm:w-36 lg:w-44 animate-float-slow">
          <Image
            src="/assets/hero/left1.png"
            alt="Floating Spiral"
            width={180}
            height={240}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Mid-Top White Zigzag */}
        <div className="absolute left-24 sm:left-40 lg:left-52 top-10 sm:top-14 w-12 sm:w-16 lg:w-20 animate-float-reverse">
          <Image
            src="/assets/hero/left2.png"
            alt="Floating Zigzag"
            width={90}
            height={90}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Bottom-Left White Pyramid */}
        <div className="absolute left-2 sm:left-8 bottom-6 sm:bottom-10 w-20 sm:w-24 lg:w-28 animate-float-reverse">
          <Image
            src="/assets/hero/right2.png"
            alt="Floating Pyramid"
            width={110}
            height={110}
            className="h-auto w-full object-contain -rotate-45"
          />
        </div>

        {/* Bottom-Mid Lime Torus */}
        <div className="absolute left-16 sm:left-28 lg:left-36 -bottom-6 sm:-bottom-4 w-32 sm:w-40 lg:w-48 animate-float-slow">
          <Image
            src="/assets/hero/left3.png"
            alt="Floating Torus"
            width={180}
            height={180}
            className="h-auto w-full object-contain filter hue-rotate-60"
          />
        </div>

        {/* Top-Right Lime/White Pyramid */}
        <div className="absolute right-28 sm:right-48 lg:right-64 top-6 sm:top-10 w-20 sm:w-24 lg:w-28 animate-float-reverse">
          <Image
            src="/assets/hero/right2.png"
            alt="Floating Pyramid"
            width={110}
            height={110}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Top-Far-Right Cylinder */}
        <div className="absolute -right-6 sm:right-0 top-4 sm:top-8 w-28 sm:w-36 lg:w-44 animate-float-slow">
          <Image
            src="/assets/hero/right1.png"
            alt="Floating Cylinder"
            width={180}
            height={240}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Bottom-Right Lime Spiral */}
        <div className="absolute right-4 sm:right-10 lg:right-16 -bottom-4 sm:bottom-2 w-28 sm:w-36 lg:w-44 animate-float-slow">
          <Image
            src="/assets/hero/left1.png"
            alt="Floating Spiral"
            width={180}
            height={240}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
          Unlock Your Potential as a <br />
          Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xs sm:text-sm leading-relaxed text-white/85">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            href="/signup"
            className="rounded-full bg-[#D2FF00] px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base font-bold text-zinc-950 shadow-xl transition-all duration-200 hover:bg-[#c2ed00] hover:scale-105 active:scale-95"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
