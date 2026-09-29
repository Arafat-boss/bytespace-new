import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchBanner from "@/components/search/SearchBanner";
import CreatorCourses from "@/components/creator/CreatorCourses";

export default function SearchPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 antialiased">
      {/* 1. Top Banner with Royal Blue Grid Pattern */}
      <div className="hero-grid-pattern relative w-full overflow-hidden">
        <Navbar />
        <Suspense fallback={<div className="py-20 text-center text-white">Loading...</div>}>
          <SearchBanner />
        </Suspense>
      </div>

      {/* 2. Search Results / Courses Section */}
      <CreatorCourses />

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
