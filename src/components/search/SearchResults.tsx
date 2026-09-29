"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SlidersHorizontal,
  BarChart2,
  Shapes,
  ArrowUpDown,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Course {
  id: number;
  image: string;
  title: string;
  instructor: string;
  rating: number;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  price: string;
  period: string;
}

export default function SearchResults() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Most relevant");
  const [currentPage, setCurrentPage] = useState(1);

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
  ];

  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&q=80",
  ];

  const baseCourses: Course[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop&q=80",
      title: "Learn Figma from Basic",
      instructor: "purepearl studio",
      rating: 4.5,
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      price: "$25",
      period: "/lifetime",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&q=80",
      title: "Build Digital Asset",
      instructor: "purepearl studio",
      rating: 4.5,
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      price: "$25",
      period: "/lifetime",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
      title: "the Power of Big Data",
      instructor: "purepearl studio",
      rating: 4.5,
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      price: "$25",
      period: "/lifetime",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop&q=80",
      title: "Balancing Productivity an...",
      instructor: "purepearl studio",
      rating: 4.5,
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      price: "$25",
      period: "/lifetime",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop&q=80",
      title: "Mastering Money Manage...",
      instructor: "purepearl studio",
      rating: 4.5,
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      price: "$25",
      period: "/lifetime",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80",
      title: "From Idea to Startup Succ...",
      instructor: "purepearl studio",
      rating: 4.5,
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      price: "$25",
      period: "/lifetime",
    },
  ];

  // 18 courses generated (6 templates repeated 3 times as shown in screenshot)
  const allCourses: Course[] = [
    ...baseCourses.map((c) => ({ ...c, id: c.id })),
    ...baseCourses.map((c) => ({ ...c, id: c.id + 6 })),
    ...baseCourses.map((c) => ({ ...c, id: c.id + 12 })),
  ];

  const totalPages = 5;

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Control Bar: Filters Row 1 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Top Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Filter Button */}
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 shadow-xs transition hover:bg-zinc-50 active:scale-95"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 text-zinc-700" />
              <span>Filter</span>
            </button>

            {/* Level Button */}
            <button
              type="button"
              onClick={() => setActiveLevel(activeLevel ? null : "Beginner")}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold shadow-xs transition active:scale-95 ${
                activeLevel
                  ? "border-[#0052FE] bg-[#0052FE]/5 text-[#0052FE]"
                  : "border-zinc-200/90 bg-white text-zinc-800 hover:bg-zinc-50"
              }`}
            >
              <BarChart2 className="h-3.5 w-3.5" />
              <span>Level</span>
            </button>

            {/* Category Button */}
            <button
              type="button"
              onClick={() => setIsCategoryFilterOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 shadow-xs transition hover:bg-zinc-50 active:scale-95"
            >
              <Shapes className="h-3.5 w-3.5 text-zinc-700" />
              <span>Category</span>
            </button>
          </div>

          {/* Right: Sort Pill */}
          <div>
            <button
              type="button"
              onClick={() =>
                setSortBy(sortBy === "Most relevant" ? "Latest" : "Most relevant")
              }
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 shadow-xs transition hover:bg-zinc-50 active:scale-95"
            >
              <ArrowUpDown className="h-3.5 w-3.5 text-zinc-700" />
              <span>{sortBy}</span>
            </button>
          </div>
        </div>

        {/* Row 2: Category Filter Horizontal Pills */}
        <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#D2FF00] text-zinc-950 shadow-xs"
                    : "bg-zinc-100/90 text-zinc-700 hover:bg-zinc-200 font-medium"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 18 Courses Cards Grid (6 Rows of 3) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {allCourses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col justify-between rounded-[28px] border border-zinc-200/90 bg-white p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Course Top Image & Badges */}
              <div>
                <Link href={`/courses/${course.id}`} className="block relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-zinc-100 cursor-pointer">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />

                  {/* Overlaid Badges at Bottom */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1">
                    <span className="rounded-full bg-white/75 px-2.5 py-1 text-[10px] font-medium text-zinc-900 shadow-xs backdrop-blur-md">
                      {course.lessons}
                    </span>
                    <span className="rounded-full bg-white/75 px-2.5 py-1 text-[10px] font-medium text-zinc-900 shadow-xs backdrop-blur-md">
                      {course.duration}
                    </span>
                    <span className="rounded-full bg-white/75 px-2.5 py-1 text-[10px] font-medium text-zinc-900 shadow-xs backdrop-blur-md">
                      {course.comments}
                    </span>
                  </div>
                </Link>

                {/* Title & Rating */}
                <div className="mt-4 sm:mt-5 flex items-center justify-between gap-2">
                  <Link href={`/courses/${course.id}`} className="hover:text-[#0052FE] transition-colors">
                    <h3 className="text-base sm:text-[17px] font-bold text-zinc-900 line-clamp-1 hover:text-[#0052FE] transition-colors">
                      {course.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 shrink-0 text-xs sm:text-sm font-semibold text-zinc-500">
                    <span>{course.rating}</span>
                    <Star className="h-3.5 w-3.5 fill-zinc-400 text-zinc-400" />
                  </div>
                </div>

                {/* Author Subtitle */}
                <p className="mt-1 text-xs text-zinc-500">
                  by{" "}
                  <span className="font-medium text-[#0052FE] hover:underline cursor-pointer">
                    {course.instructor}
                  </span>
                </p>

                {/* Level & Student Avatars */}
                <div className="mt-4 sm:mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-800">
                    <BarChart2 className="h-3.5 w-3.5 text-zinc-800" />
                    <span>{course.level}</span>
                  </div>

                  <div className="flex items-center -space-x-2">
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
                    <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-white bg-[#D2FF00] text-[9px] sm:text-[10px] font-bold text-black shadow-xs">
                      26+
                    </span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mt-4 sm:mt-5">
                <span className="text-lg sm:text-xl font-extrabold text-[#0052FE]">
                  {course.price}
                </span>
                <span className="text-xs text-zinc-500 font-normal ml-0.5">
                  {course.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Bar */}
        <div className="mt-14 sm:mt-18 flex items-center justify-center gap-2 sm:gap-3">
          {/* Previous Page Arrow */}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous Page"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-zinc-200/90 bg-white text-zinc-700 shadow-xs transition hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              type="button"
              onClick={() => setCurrentPage(pageNum)}
              className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-xs sm:text-sm font-semibold transition ${
                currentPage === pageNum
                  ? "bg-zinc-100 text-zinc-950 font-bold"
                  : "text-zinc-600 hover:bg-zinc-50"
              }`}
            >
              {pageNum}
            </button>
          ))}

          {/* Next Page Arrow */}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-zinc-200/90 bg-white text-zinc-700 shadow-xs transition hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
