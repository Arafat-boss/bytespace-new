"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search as SearchIcon, ChevronDown } from "lucide-react";

export default function SearchBanner({
  onSearch,
  selectedType = "Courses",
  onTypeChange,
}: {
  onSearch?: (query: string) => void;
  selectedType?: string;
  onTypeChange?: (type: string) => void;
}) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [currentType, setCurrentType] = useState(selectedType);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const q = searchParams.get("q");
    if (q !== null) {
      setQuery(q);
      onSearch?.(q);
    }
  }, [searchParams]);

  const types = ["Courses", "Creators", "Categories", "Articles"];

  const handleTypeSelect = (type: string) => {
    setCurrentType(type);
    setIsDropdownOpen(false);
    onTypeChange?.(type);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <div className="relative z-10 mx-auto max-w-5xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:px-8 text-center">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight">
        Find Your Next Course
      </h1>

      {/* Search Bar Row */}
      <form
        onSubmit={handleSubmit}
        className="mt-6 sm:mt-8 flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 max-w-2xl mx-auto"
      >
        {/* Search Pill Input */}
        <div className="relative flex-1 min-w-[260px] sm:min-w-[340px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
            <SearchIcon className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onSearch?.(e.target.value);
            }}
            placeholder="Search"
            className="w-full rounded-full bg-white py-3 sm:py-3.5 pl-10 pr-4 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>

        {/* Dropdown Selector Pill Button */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full bg-[#D2FF00] px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-zinc-950 shadow-sm transition-all hover:bg-[#c2ed00] hover:scale-105 active:scale-95"
          >
            <span>{currentType}</span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Options Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-2xl border border-zinc-100 bg-white p-1.5 shadow-xl z-50 text-left animate-in fade-in zoom-in-95 duration-100">
              {types.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleTypeSelect(type)}
                  className={`w-full rounded-xl px-3.5 py-2 text-xs font-semibold transition text-left ${
                    currentType === type
                      ? "bg-[#D2FF00] text-zinc-950 font-bold"
                      : "text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
