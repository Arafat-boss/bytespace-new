import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseDetailsView from "@/components/course/CourseDetailsView";

export default function CourseDetailsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 antialiased">
      {/* 1. Top Banner Header with Royal Blue Grid Pattern */}
      <div className="hero-grid-pattern relative w-full overflow-hidden">
        <Navbar />
      </div>

      {/* 2. Course Details View (Hero Video + Sticky Sidebar + Tabs/Details) */}
      <div className="hero-grid-pattern relative w-full">
        <CourseDetailsView />
      </div>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
