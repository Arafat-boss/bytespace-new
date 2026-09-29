"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";
import { coursesData } from "@/data/courses";

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Cooking",
    "Web Development",
    "Data Science",
    "Productivity",
  ];

  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&q=80",
  ];

  const filteredCourses =
    activeCategory === "Featured"
      ? coursesData.slice(0, 6)
      : coursesData.filter(
          (c) =>
            c.category.toLowerCase() === activeCategory.toLowerCase() ||
            c.categories.some(
              (cat) => cat.toLowerCase() === activeCategory.toLowerCase()
            )
        );

  const displayCourses =
    filteredCourses.length > 0 ? filteredCourses : coursesData.slice(0, 6);

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Categories Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#D2FF00] text-zinc-950 font-semibold shadow-sm"
                    : "bg-zinc-100/90 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                {category}
              </button>
            );
          })}
          <Link
            href="/search"
            className="rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition cursor-pointer"
          >
            + More
          </Link>
        </div>

        {/* Courses Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {displayCourses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col justify-between rounded-[28px] border border-zinc-200/90 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Course Top Image & Badges */}
              <div>
                <Link
                  href={`/courses/${course.id}`}
                  className="block relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-zinc-100 cursor-pointer"
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />

                  {/* Overlaid Badges at bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1 sm:gap-1.5">
                    <span className="rounded-full bg-[#E2E8F0]/85 px-3 py-1.5 text-[11px] font-medium text-zinc-800 shadow-sm backdrop-blur-md">
                      {course.lessons}
                    </span>
                    <span className="rounded-full bg-[#E2E8F0]/85 px-3 py-1.5 text-[11px] font-medium text-zinc-800 shadow-sm backdrop-blur-md">
                      {course.duration}
                    </span>
                    <span className="rounded-full bg-[#E2E8F0]/85 px-3 py-1.5 text-[11px] font-medium text-zinc-800 shadow-sm backdrop-blur-md">
                      {course.comments}
                    </span>
                  </div>
                </Link>

                {/* Title & Rating */}
                <div className="mt-5 flex items-center justify-between gap-2">
                  <Link
                    href={`/courses/${course.id}`}
                    className="hover:text-[#0052FE] transition-colors flex-1"
                  >
                    <h3 className="text-lg sm:text-[19px] font-bold text-zinc-900 line-clamp-1 hover:text-[#0052FE] transition-colors">
                      {course.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 shrink-0 text-sm sm:text-base font-semibold text-zinc-500">
                    <span>{course.rating}</span>
                    <Star className="h-4 w-4 fill-[#EAB308] text-[#EAB308]" />
                  </div>
                </div>

                {/* Author Subtitle */}
                <p className="mt-1 text-sm text-zinc-500">
                  by{" "}
                  <Link
                    href="/creators"
                    className="font-medium text-[#0052FE] hover:underline cursor-pointer"
                  >
                    {course.instructor}
                  </Link>
                </p>

                {/* Level & Student Avatars */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full bg-[#F4F7FE] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-zinc-800">
                    <BarChart2 className="h-4 w-4 text-zinc-800" />
                    <span>{course.level}</span>
                  </div>

                  <div className="flex items-center -space-x-2">
                    {studentAvatars.map((url, i) => (
                      <div
                        key={i}
                        className="relative h-7 w-7 sm:h-8 sm:w-8 overflow-hidden rounded-full border-2 border-white shadow-xs"
                      >
                        <img
                          src={url}
                          alt="Student"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-white bg-[#D2FF00] text-[10px] sm:text-xs font-bold text-black shadow-xs">
                      26+
                    </span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mt-5 flex items-center justify-between pt-2">
                <div>
                  <span className="text-2xl font-extrabold text-[#0052FE]">
                    {course.price}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-500 font-normal ml-0.5">
                    {course.period}
                  </span>
                </div>

                <Link
                  href={`/courses/${course.id}`}
                  className="text-xs font-bold text-[#0052FE] hover:underline"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
