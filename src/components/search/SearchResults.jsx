"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  SlidersHorizontal,
  BarChart2,
  Shapes,
  ArrowUpDown,
  Star,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Check,
} from "lucide-react";
import { coursesData } from "@/data/courses";

export default function SearchResults({
  searchQuery = "",
  onClearSearch,
}) {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") || "";
  const effectiveQuery = searchQuery || urlQuery;

  const [activeCategory, setActiveCategory] = useState("Featured");
  const [activeLevel, setActiveLevel] = useState(null);
  const [sortBy, setSortBy] = useState("Most relevant");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLevelMenuOpen, setIsLevelMenuOpen] = useState(false);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  // Sync category from URL if present
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [effectiveQuery, activeCategory, activeLevel, sortBy]);

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

  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
  const sortOptions = [
    "Most relevant",
    "Highest Rated",
    "Price: Low to High",
    "Price: High to Low",
    "Newest",
  ];

  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&q=80",
  ];

  // Dynamic Filtering & Sorting
  const filteredCourses = useMemo(() => {
    let result = [...coursesData];

    // 1. Text Search Filter
    if (effectiveQuery.trim()) {
      const q = effectiveQuery.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.subtitle.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.categories.some((cat) => cat.toLowerCase().includes(q)) ||
          c.instructor.toLowerCase().includes(q) ||
          c.level.toLowerCase().includes(q) ||
          c.keyPoints.some((k) => k.toLowerCase().includes(q))
      );
    }

    // 2. Category Filter
    if (activeCategory !== "Featured") {
      result = result.filter(
        (c) =>
          c.category.toLowerCase() === activeCategory.toLowerCase() ||
          c.categories.some(
            (cat) => cat.toLowerCase() === activeCategory.toLowerCase()
          )
      );
    }

    // 3. Level Filter
    if (activeLevel && activeLevel !== "All Levels") {
      result = result.filter(
        (c) => c.level.toLowerCase() === activeLevel.toLowerCase()
      );
    }

    // 4. Sorting
    switch (sortBy) {
      case "Highest Rated":
        result.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
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
      case "Most relevant":
      default:
        // Default curated order
        break;
    }

    return result;
  }, [effectiveQuery, activeCategory, activeLevel, sortBy]);

  const displayCourses = filteredCourses;

  const handleResetFilters = () => {
    setActiveCategory("Featured");
    setActiveLevel(null);
    setSortBy("Most relevant");
    setCurrentPage(1);
    onClearSearch?.();
  };

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Control Bar: Filters Row 1 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Top Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Filter / Reset Button */}
            <button
              type="button"
              onClick={handleResetFilters}
              title="Reset all filters"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 shadow-xs transition hover:bg-zinc-50 active:scale-95 cursor-pointer"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 text-zinc-700" />
              <span>Filter</span>
              {(activeCategory !== "Featured" || activeLevel || effectiveQuery) && (
                <span className="flex h-2 w-2 rounded-full bg-[#0052FE]" />
              )}
            </button>

            {/* Level Selector Button & Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsLevelMenuOpen((prev) => !prev);
                  setIsSortMenuOpen(false);
                  setIsCategoryMenuOpen(false);
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
                    const isSelected =
                      lvl === "All Levels"
                        ? !activeLevel
                        : activeLevel === lvl;
                    return (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setActiveLevel(lvl === "All Levels" ? null : lvl);
                          setIsLevelMenuOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2 text-xs font-semibold transition cursor-pointer ${
                          isSelected
                            ? "bg-[#D2FF00] text-zinc-950 font-bold"
                            : "text-zinc-700 hover:bg-zinc-100"
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

            {/* Category Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsCategoryMenuOpen((prev) => !prev);
                  setIsLevelMenuOpen(false);
                  setIsSortMenuOpen(false);
                }}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold shadow-xs transition hover:bg-zinc-50 active:scale-95 cursor-pointer ${
                  activeCategory !== "Featured"
                    ? "border-[#0052FE] bg-[#0052FE]/5 text-[#0052FE]"
                    : "border-zinc-200/90 bg-white text-zinc-800"
                }`}
              >
                <Shapes className="h-3.5 w-3.5" />
                <span>Category</span>
              </button>

              {isCategoryMenuOpen && (
                <div className="absolute left-0 mt-2 w-52 max-h-64 overflow-y-auto rounded-2xl border border-zinc-100 bg-white p-1.5 shadow-xl z-50 text-left animate-in fade-in zoom-in-95 duration-100">
                  {categories.map((cat) => {
                    const isSelected = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setActiveCategory(cat);
                          setIsCategoryMenuOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2 text-xs font-semibold transition cursor-pointer ${
                          isSelected
                            ? "bg-[#D2FF00] text-zinc-950 font-bold"
                            : "text-zinc-700 hover:bg-zinc-100"
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

          {/* Right: Sort Pill with Dropdown */}
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
                        isSelected
                          ? "bg-[#D2FF00] text-zinc-950 font-bold"
                          : "text-zinc-700 hover:bg-zinc-100"
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

        {/* Active Filter Chips Bar */}
        {(effectiveQuery || activeLevel || activeCategory !== "Featured") && (
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-zinc-500 font-medium">Active filters:</span>
            {effectiveQuery && (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 font-semibold text-[#0052FE]">
                &quot;{effectiveQuery}&quot;
              </span>
            )}
            {activeCategory !== "Featured" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-lime-50 px-3 py-1 font-semibold text-lime-900">
                Category: {activeCategory}
              </span>
            )}
            {activeLevel && (
              <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-3 py-1 font-semibold text-purple-700">
                Level: {activeLevel}
              </span>
            )}
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-900 underline font-semibold ml-2 cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </button>
          </div>
        )}

        {/* Row 2: Category Filter Horizontal Pills */}
        <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#D2FF00] text-zinc-950 shadow-xs font-bold"
                    : "bg-zinc-100/90 text-zinc-700 hover:bg-zinc-200 font-medium"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="mt-8 flex items-center justify-between text-xs sm:text-sm text-zinc-500">
          <p>
            Showing{" "}
            <span className="font-bold text-zinc-900">
              {displayCourses.length}
            </span>{" "}
            courses
          </p>
        </div>

        {/* Courses Cards Grid */}
        {displayCourses.length === 0 ? (
          <div className="my-16 text-center py-12 rounded-[28px] border border-dashed border-zinc-300 bg-zinc-50/50">
            <Shapes className="mx-auto h-12 w-12 text-zinc-300" />
            <h3 className="mt-4 text-base sm:text-lg font-bold text-zinc-900">
              No courses found
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-zinc-500 max-w-sm mx-auto">
              We couldn&apos;t find any courses matching your search or filters. Try
              adjusting your keywords.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D2FF00] px-5 py-2.5 text-xs sm:text-sm font-bold text-zinc-950 shadow-xs hover:bg-[#c2ed00] cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {displayCourses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col justify-between rounded-[28px] border border-zinc-200/90 bg-white p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
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

                    {/* Overlaid Badges at Bottom */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1">
                      <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-medium text-zinc-900 shadow-xs backdrop-blur-md">
                        {course.lessons}
                      </span>
                      <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-medium text-zinc-900 shadow-xs backdrop-blur-md">
                        {course.duration}
                      </span>
                      <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-medium text-zinc-900 shadow-xs backdrop-blur-md">
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

                  {/* Author Subtitle */}
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
        )}

        {/* Bottom Pagination Bar */}
        <div className="mt-14 sm:mt-18 flex items-center justify-center gap-2 sm:gap-3">
          {/* Previous Page Arrow */}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous Page"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-zinc-200/90 bg-white text-zinc-700 shadow-xs transition hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Page Numbers */}
          {[1, 2, 3, 4, 5].map((pageNum) => (
            <button
              key={pageNum}
              type="button"
              onClick={() => setCurrentPage(pageNum)}
              className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                currentPage === pageNum
                  ? "bg-zinc-100 text-zinc-950 font-bold shadow-xs"
                  : "text-zinc-600 hover:bg-zinc-50"
              }`}
            >
              {pageNum}
            </button>
          ))}

          {/* Next Page Arrow */}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
            disabled={currentPage === 5}
            aria-label="Next Page"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-zinc-200/90 bg-white text-zinc-700 shadow-xs transition hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
