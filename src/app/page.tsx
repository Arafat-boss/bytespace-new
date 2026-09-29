import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CompanyLogos from "@/components/home/CompanyLogos";
import Courses from "@/components/home/Courses";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
      {/* Top Banner Section with Royal Blue Grid Pattern */}
      <div className="hero-grid-pattern relative w-full overflow-hidden">
        <Navbar />
        <Hero />
      </div>

      {/* Company Logos Bar */}
      <CompanyLogos />

      {/* Courses Section */}
      <Courses />

      {/* Other Sections */}
      <main className="flex-1">
        <Features />
        <About />
        <Services />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
