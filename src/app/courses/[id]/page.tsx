import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseDetailsView from "@/components/course/CourseDetailsView";
import { getCourseById } from "@/data/courses";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const course = getCourseById(resolvedParams.id);

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 antialiased">
      {/* 1. Top Banner Header with Royal Blue Grid Pattern */}
      <div className="hero-grid-pattern relative w-full overflow-hidden">
        <Navbar />
      </div>

      {/* 2. Course Details View (Hero Video + Sticky Sidebar + Tabs/Details) */}
      <div className="hero-grid-pattern relative w-full">
        <CourseDetailsView course={course} />
      </div>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
