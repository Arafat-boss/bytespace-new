"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchBanner from "@/components/search/SearchBanner";
import SearchResults from "@/components/search/SearchResults";

function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 antialiased">
      {/* 1. Top Banner with Royal Blue Grid Pattern */}
      <div className="hero-grid-pattern relative w-full overflow-hidden">
        <Navbar />
        <SearchBanner
          query={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
        />
      </div>

      {/* 2. Search Results / Courses Section with Dual Filters and Pagination */}
      <SearchResults
        searchQuery={searchQuery}
        onClearSearch={() => setSearchQuery("")}
      />

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0052FE] flex items-center justify-center text-white font-medium">
          Loading Search...
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
