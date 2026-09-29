"use client";

import { useState } from "react";
import Image from "next/image";

export default function CreatorBanner() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(12);

  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
    setFollowersCount((prev) => (isFollowing ? prev - 1 : prev + 1));
  };

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:px-8">
      {/* Creator Info Header */}
      <div className="flex items-start gap-5 sm:gap-6">
        {/* Creator Avatar with Pink/Coral Background */}
        <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 flex-shrink-0 overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[#FF8DA1] shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
            alt="PurePearl Studio"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Creator Name & Role */}
        <div className="pt-1">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-white">
              PurePearl Studio
            </h1>
            <span className="rounded-full bg-[#D2FF00] px-3.5 py-1 text-xs font-bold text-zinc-950 shadow-xs">
              Creator
            </span>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-white/85 font-normal">
            Passionate UI/UX, Web designer
          </p>
        </div>
      </div>

      {/* Creator Bio / Description */}
      <div className="mt-6 sm:mt-8 max-w-4xl space-y-2 text-xs sm:text-sm leading-relaxed text-white/90 font-normal">
        <p>
          Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
        </p>
        <p>
          Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
        </p>
      </div>

      {/* Stats Pills & Follow Button Row */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4">
        {/* Left: Stats Pills */}
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-900 shadow-sm flex items-center gap-1.5">
            <span className="font-bold text-[#0052FE]">3</span>
            <span>Products</span>
          </div>

          <div className="rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-900 shadow-sm flex items-center gap-1.5">
            <span className="font-bold text-[#0052FE]">{followersCount}</span>
            <span>Followers</span>
          </div>
        </div>

        {/* Right: Follow Button */}
        <div>
          <button
            type="button"
            onClick={handleFollowToggle}
            className={`rounded-full px-8 py-2.5 sm:px-9 sm:py-3 text-xs sm:text-sm font-bold shadow-md transition-all duration-200 hover:scale-105 active:scale-95 text-center cursor-pointer ${
              isFollowing
                ? "bg-white text-zinc-950 hover:bg-zinc-100"
                : "bg-[#D2FF00] text-zinc-950 hover:bg-[#c2ed00]"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}
