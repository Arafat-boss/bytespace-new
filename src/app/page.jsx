import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CompanyLogos from "@/components/home/CompanyLogos";
import Courses from "@/components/home/Courses";
import LearningPaths from "@/components/home/LearningPaths";
import GrowthAndCreation from "@/components/home/GrowthAndCreation";
import CTA from "@/components/home/CTA";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 antialiased">
      {/* 1. Top Banner Section with Royal Blue Grid Pattern - Full Screen */}
      <div className="hero-grid-pattern relative w-full overflow-hidden min-h-screen min-h-[100dvh] flex flex-col justify-between">
        <Navbar />
        <Hero />
      </div>

      {/* 2. Company Logos Bar */}
      <CompanyLogos />

      {/* 3. Courses Section */}
      <Courses />

      {/* 4. Learning Paths Section */}
      <LearningPaths />

      {/* 5. Growth & Course Creation Dual Showcase Section */}
      <GrowthAndCreation />

      {/* 6. Creator CTA Banner with Royal Blue Grid */}
      <CTA />

      {/* 7. Community Testimonials Section */}
      <Testimonials />

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
