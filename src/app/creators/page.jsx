import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CreatorBanner from "@/components/creator/CreatorBanner";
import CreatorCourses from "@/components/creator/CreatorCourses";

export default function CreatorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 antialiased">
      {/* 1. Top Banner with Royal Blue Grid Pattern */}
      <div className="hero-grid-pattern relative w-full overflow-hidden">
        <Navbar />
        <CreatorBanner />
      </div>

      {/* 2. Creator Products / Courses Section with Filter Bar */}
      <CreatorCourses />

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
