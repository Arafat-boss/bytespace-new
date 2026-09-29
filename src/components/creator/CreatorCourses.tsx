"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal, BarChart2, Shapes, ArrowUpDown, Star, Check } from "lucide-react";
import { coursesData, CourseData } from "@/data/courses";

export default function CreatorCourses() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("Most relevant");
  const [isLevelMenuOpen, setIsLevelMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&q=80",
  ];

  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
  const categories = ["All Categories", "UI/UX Design", "Marketing", "Data Science", "Animation", "Social Media", "Cooking", "Music"];
  const sortOptions = ["Most relevant", "Highest Rated", "Price: Low to High", "Price: High to Low", "Newest"];

  const filteredCourses = useMemo(() => {
    let result = coursesData.filter((c) => c.instructor.toLowerCase().includes("purepearl"));

    if (activeLevel && activeLevel !== "All Levels") {
      result = result.filter((c) => c.level.toLowerCase() === activeLevel.toLowerCase());
    }

    if (activeCategory && activeCategory !== "All Categories") {
      result = result.filter(
        (c) =>
          c.category.toLowerCase() === activeCategory.toLowerCase() ||
          c.categories.some((cat) => cat.toLowerCase() === activeCategory.toLowerCase())
      );
    }

    switch (sortBy) {
      case "Highest Rated":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "Price: Low to High":
        result.sort((a, b) => a.priceNumeric - b.priceNumeric);
        break;
      case "Price: High to Low":
        result.sort((a, b) => b.priceNumeric - a.priceNumeric);
        break;
      case "Newest":
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result.length > 0 ? result : coursesData.slice(0, 6);
  }, [activeLevel, activeCategory, sortBy]);

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Control Bar: Filters on Left, Sorting on Right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Main Filter Button (Reset) */}
            <button
              type="button"
              onClick={() => {
                setActiveLevel(null);
                setActiveCategory(null);
                setSortBy("Most relevant");
              }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 shadow-xs transition hover:bg-zinc-50 active:scale-95 cursor-pointer"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 text-zinc-700" />
              <span>Filter</span>
            </button>

            {/* Level Filter Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsLevelMenuOpen((prev) => !prev);
                  setIsCategoryMenuOpen(false);
                  setIsSortMenuOpen(false);
                }}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold shadow-xs transition active:scale-95 cursor-pointer ${
                  activeLevel
                    ? "border-[#0052FE] bg-[#0052FE]/5 text-[#0052FE]"
                    : "border-zinc-200/90 bg-white text-zinc-800 hover:bg-zinc-50"
                }`}
              >
                <BarChart2 className="h-3.5 w-3.5" />
                <span>{activeLevel || "Level"}</span>
              </button>

              {isLevelMenuOpen && (
                <div className="absolute left-0 mt-2 w-44 overflow-hidden rounded-2xl border border-zinc-100 bg-white p-1.5 shadow-xl z-50 text-left animate-in fade-in zoom-in-95 duration-100">
                  {levels.map((lvl) => {
                    const isSelected = lvl === "All Levels" ? !activeLevel : activeLevel === lvl;
                    return (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setActiveLevel(lvl === "All Levels" ? null : lvl);
                          setIsLevelMenuOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2 text-xs font-semibold transition cursor-pointer ${
                          isSelected ? "bg-[#D2FF00] text-zinc-950 font-bold" : "text-zinc-700 hover:bg-zinc-100"
                        }`}
                      >
                        <span>{lvl}</span>
                        {isSelected && <Check className="h-3.5 w-3.5" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Category Filter Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsCategoryMenuOpen((prev) => !prev);
                  setIsLevelMenuOpen(false);
                  setIsSortMenuOpen(false);
                }}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold shadow-xs transition active:scale-95 cursor-pointer ${
                  activeCategory
                    ? "border-[#0052FE] bg-[#0052FE]/5 text-[#0052FE]"
                    : "border-zinc-200/90 bg-white text-zinc-800 hover:bg-zinc-50"
                }`}
              >
                <Shapes className="h-3.5 w-3.5" />
                <span>{activeCategory || "Category"}</span>
              </button>

              {isCategoryMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 overflow-hidden rounded-2xl border border-zinc-100 bg-white p-1.5 shadow-xl z-50 text-left animate-in fade-in zoom-in-95 duration-100">
                  {categories.map((cat) => {
                    const isSelected = cat === "All Categories" ? !activeCategory : activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setActiveCategory(cat === "All Categories" ? null : cat);
                          setIsCategoryMenuOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2 text-xs font-semibold transition cursor-pointer ${
                          isSelected ? "bg-[#D2FF00] text-zinc-950 font-bold" : "text-zinc-700 hover:bg-zinc-100"
                        }`}
                      >
                        <span>{cat}</span>
                        {isSelected && <Check className="h-3.5 w-3.5" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right: Sort Pill */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsSortMenuOpen((prev) => !prev);
                setIsLevelMenuOpen(false);
                setIsCategoryMenuOpen(false);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 shadow-xs transition hover:bg-zinc-50 active:scale-95 cursor-pointer"
            >
              <ArrowUpDown className="h-3.5 w-3.5 text-zinc-700" />
              <span>{sortBy}</span>
            </button>

            {isSortMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-2xl border border-zinc-100 bg-white p-1.5 shadow-xl z-50 text-left animate-in fade-in zoom-in-95 duration-100">
                {sortOptions.map((opt) => {
                  const isSelected = sortBy === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setSortBy(opt);
                        setIsSortMenuOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2 text-xs font-semibold transition cursor-pointer ${
                        isSelected ? "bg-[#D2FF00] text-zinc-950 font-bold" : "text-zinc-700 hover:bg-zinc-100"
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && <Check className="h-3.5 w-3.5" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col justify-between rounded-[28px] border border-zinc-200/90 bg-white p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Course Image Preview & 3 Badges */}
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

                  {/* Overlaid 3 Frosted Badges at Bottom */}
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
                  <Link
                    href={`/courses/${course.id}`}
                    className="hover:text-[#0052FE] transition-colors flex-1"
                  >
                    <h3 className="text-base sm:text-[17px] font-bold text-zinc-900 line-clamp-1 hover:text-[#0052FE] transition-colors">
                      {course.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 shrink-0 text-xs sm:text-sm font-semibold text-zinc-500">
                    <span>{course.rating}</span>
                    <Star className="h-3.5 w-3.5 fill-[#EAB308] text-[#EAB308]" />
                  </div>
                </div>

                {/* Instructor Subtitle */}
                <p className="mt-1 text-xs text-zinc-500">
                  by{" "}
                  <Link
                    href="/creators"
                    className="font-medium text-[#0052FE] hover:underline cursor-pointer"
                  >
                    {course.instructor}
                  </Link>
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
              <div className="mt-4 sm:mt-5 flex items-center justify-between pt-2">
                <div>
                  <span className="text-lg sm:text-xl font-extrabold text-[#0052FE]">
                    {course.price}
                  </span>
                  <span className="text-xs text-zinc-500 font-normal ml-0.5">
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
