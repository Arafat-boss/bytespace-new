"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart2,
  Star,
  Users,
  Share2,
  Play,
  FileText,
  Video,
  Award,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { getCourseById } from "@/data/courses";

export default function CourseDetailsView({ course }) {
  const currentCourse = course || getCourseById(2);

  const [activeTab, setActiveTab] = useState("About");
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState("all");

  return (
    <div className="w-full">
      {/* 1. Top Royal Blue Hero Section with Video */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Hero Content: Title, Subtitle, Badges, Video Frame */}
          <div className="lg:col-span-8">
            {/* Title & Share Button */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-white leading-[1.2]">
                  {currentCourse.title}
                </h1>
                <p className="mt-2 text-xs sm:text-sm font-medium text-white/90">
                  {currentCourse.subtitle}
                </p>
                <p className="mt-1 text-xs text-white/80">
                  by{" "}
                  <Link href="/creators" className="font-semibold text-[#D2FF00] hover:underline">
                    {currentCourse.instructor}
                  </Link>
                </p>
              </div>

              {/* Share Pill Button */}
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#D2FF00] px-4 py-2 text-xs font-bold text-zinc-950 shadow-sm transition hover:bg-[#c2ed00] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Share</span>
              </button>
            </div>

            {/* Meta Pills Row */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Level */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm">
                <BarChart2 className="h-3.5 w-3.5 text-[#0052FE]" />
                <span>{currentCourse.level}</span>
              </div>

              {/* Rating */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm">
                <Star className="h-3.5 w-3.5 fill-[#EAB308] text-[#EAB308]" />
                <span>{currentCourse.rating} ({currentCourse.reviewsCount} reviews)</span>
              </div>

              {/* Students */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm">
                <Users className="h-3.5 w-3.5 text-[#0052FE]" />
                <span>{currentCourse.studentsCount}</span>
              </div>
            </div>

            {/* Video Player Frame */}
            <div className="relative mt-8 sm:mt-10 aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-zinc-900 shadow-2xl border-4 border-white/10 group">
              <Image
                src={currentCourse.videoPreviewImage || currentCourse.image}
                alt={currentCourse.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                priority
              />
              
              {/* Frosted Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button
                  type="button"
                  aria-label="Play course video preview"
                  className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/40 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-black/60 active:scale-95 cursor-pointer"
                >
                  <Play className="h-7 w-7 sm:h-8 sm:w-8 fill-current ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Floating Sidebar Placeholder on Desktop */}
          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </div>

      {/* 2. White Content Section with Sidebar Overlay */}
      <div className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              {/* Navigation Tabs */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                {["About", "Lesson", "Reviews"].map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#D2FF00] text-zinc-950 shadow-xs font-bold"
                          : "bg-zinc-100/90 text-zinc-700 hover:bg-zinc-200"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* TAB 1: About */}
              {activeTab === "About" && (
                <div className="mt-8 sm:mt-10 animate-in fade-in duration-300">
                  {/* Description Content */}
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950">
                      Description
                    </h2>

                    <div className="mt-4 space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-zinc-600 font-normal">
                      {currentCourse.description.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* Sneak Peak Gallery */}
                  <div className="mt-10 sm:mt-12">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-950">
                      Sneak Peak
                    </h3>

                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                      {currentCourse.sneakPeakImages.map((src, i) => (
                        <div
                          key={i}
                          className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] sm:rounded-[20px] bg-zinc-100 border border-zinc-200/80 shadow-xs group"
                        >
                          <Image
                            src={src}
                            alt={`Sneak Peak ${i + 1}`}
                            fill
                            className="object-cover transition duration-300 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Points Checklist */}
                  <div className="mt-10 sm:mt-12">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-950">
                      Key Points
                    </h3>

                    <div className="mt-4 space-y-3.5">
                      {currentCourse.keyPoints.map((point, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#0052FE] shrink-0 fill-[#0052FE]/10" />
                          <span className="text-xs sm:text-sm font-medium text-zinc-800">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Lesson */}
              {activeTab === "Lesson" && (
                <div className="mt-8 sm:mt-10 space-y-10 sm:space-y-12 animate-in fade-in duration-300">
                  {/* 1. Explore the Modules */}
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950">
                      Explore the Modules
                    </h2>
                    <p className="mt-3 text-xs sm:text-[13.5px] leading-relaxed text-zinc-600 font-normal max-w-3xl">
                      {currentCourse.modulesOverview ||
                        "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences."}
                    </p>
                  </div>

                  {/* 2. Lesson List */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-950">
                      Lesson List
                    </h3>

                    <div className="mt-5 space-y-5 sm:space-y-6">
                      {currentCourse.modules?.map((mod, idx) => (
                        <div key={idx} className="flex items-start gap-3.5 sm:gap-4.5 group">
                          {/* Neon Green Video Icon Box */}
                          <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D2FF00] shadow-xs transition-transform duration-300 group-hover:scale-105">
                            <Video className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-950 stroke-[2]" />
                          </div>
                          
                          {/* Title & Description */}
                          <div className="flex-1 pt-0.5">
                            <h4 className="text-xs sm:text-sm font-bold text-zinc-950 leading-snug">
                              {mod.title}
                            </h4>
                            <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-zinc-600 font-normal">
                              {mod.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Lesson Content */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-950">
                      Lesson Content
                    </h3>
                    <p className="mt-3 text-xs sm:text-[13.5px] leading-relaxed text-zinc-600 font-normal max-w-3xl">
                      {currentCourse.lessonContentText ||
                        "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes."}
                    </p>
                  </div>

                  {/* 4. Lesson Progress Tracking */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-950">
                      Lesson Progress Tracking
                    </h3>
                    <p className="mt-3 text-xs sm:text-[13.5px] leading-relaxed text-zinc-600 font-normal max-w-3xl">
                      {currentCourse.progressTrackingText ||
                        "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey."}
                    </p>

                    {/* Progress Card */}
                    <div className="mt-5 rounded-2xl border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-xs max-w-2xl">
                      <p className="text-xs font-semibold text-zinc-500">
                        Learning Progress
                      </p>
                      <div className="mt-1 text-2xl sm:text-3xl font-black tracking-tight text-zinc-950">
                        {currentCourse.progressPercentage || "55%"}
                      </div>
                      <div className="mt-3.5 h-2.5 w-full rounded-full bg-zinc-100 overflow-hidden border border-zinc-200/50">
                        <div
                          className="h-full bg-[#D2FF00] rounded-full transition-all duration-700 ease-out"
                          style={{ width: currentCourse.progressPercentage || "55%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: Reviews */}
              {activeTab === "Reviews" && (
                <div className="mt-8 sm:mt-10 space-y-8 sm:space-y-10 animate-in fade-in duration-300">
                  {/* 1. Header & Description */}
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950">
                      What Learners Are Saying
                    </h2>
                    <p className="mt-3 text-xs sm:text-[13.5px] leading-relaxed text-zinc-600 font-normal max-w-3xl">
                      Discover what our learners have to say about their experience with &apos;{currentCourse.title}.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering {currentCourse.category ? currentCourse.category.toLowerCase() : "digital"} creation.
                    </p>
                  </div>

                  {/* 2. Rating Breakdown Card */}
                  <div className="rounded-2xl sm:rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                    {/* Big Lime Rating Badge */}
                    <div className="flex h-28 w-28 sm:h-32 sm:w-32 flex-col items-center justify-center rounded-2xl bg-[#D2FF00] shrink-0 shadow-xs">
                      <span className="text-xs font-semibold text-zinc-900">
                        Ratings
                      </span>
                      <span className="mt-0.5 text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
                        {currentCourse.rating || "4.7"}
                      </span>
                    </div>

                    {/* Progress Breakdown Bars */}
                    <div className="flex-1 w-full space-y-2.5">
                      {[
                        { stars: 5, count: 720, width: "80%" },
                        { stars: 4, count: 120, width: "35%" },
                        { stars: 3, count: 21, width: "8%" },
                        { stars: 2, count: 12, width: "4%" },
                        { stars: 1, count: 16, width: "6%" },
                      ].map((row) => (
                        <div key={row.stars} className="flex items-center gap-3 sm:gap-4 text-xs">
                          {/* Progress Line */}
                          <div className="h-2 sm:h-2.5 flex-1 rounded-full bg-zinc-100 overflow-hidden border border-zinc-200/40">
                            <div
                              className="h-full bg-[#D2FF00] rounded-full transition-all duration-700 ease-out"
                              style={{ width: row.width }}
                            />
                          </div>

                          {/* 5 Dark Stars */}
                          <div className="flex items-center gap-0.5 text-zinc-800 shrink-0">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-zinc-800 text-zinc-800" />
                            ))}
                          </div>

                          {/* Count */}
                          <span className="w-8 text-right text-[11px] sm:text-xs font-medium text-zinc-600 shrink-0">
                            {row.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Individual Reviews Filter Pills */}
                  <div className="space-y-3.5">
                    <h3 className="text-sm sm:text-base font-bold text-zinc-950">
                      Individual Reviews:
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                      <button
                        type="button"
                        onClick={() => setSelectedRatingFilter("all")}
                        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                          selectedRatingFilter === "all"
                            ? "bg-[#D2FF00] text-zinc-950 font-bold shadow-xs"
                            : "bg-zinc-100/90 text-zinc-700 hover:bg-zinc-200"
                        }`}
                      >
                        All rating
                      </button>

                      {[5, 4, 3, 2, 1].map((rating) => {
                        const isFilterActive = selectedRatingFilter === String(rating);
                        return (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => setSelectedRatingFilter(String(rating))}
                            className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                              isFilterActive
                                ? "bg-[#D2FF00] text-zinc-950 font-bold shadow-xs"
                                : "bg-zinc-100/90 text-zinc-700 hover:bg-zinc-200"
                            }`}
                          >
                            <Star className={`h-3 w-3 ${isFilterActive ? "fill-zinc-950 text-zinc-950" : "fill-zinc-700 text-zinc-700"}`} />
                            <span>{rating}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. Individual Review Cards */}
                  <div className="space-y-4 sm:space-y-5">
                    {[
                      {
                        id: 1,
                        name: "PurePearl Studio",
                        role: "UI/UX Designer",
                        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
                        date: "a year ago",
                        stars: 5,
                        comment: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
                      },
                      {
                        id: 2,
                        name: "Albert Flores",
                        role: "UI/UX Designer",
                        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
                        date: "a year ago",
                        stars: 5,
                        comment: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
                      },
                      {
                        id: 3,
                        name: "Cody Fisher",
                        role: "UI/UX Designer",
                        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
                        date: "a year ago",
                        stars: 5,
                        comment: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
                      },
                      {
                        id: 4,
                        name: "Brooklyn Simmons",
                        role: "UI/UX Designer",
                        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
                        date: "a year ago",
                        stars: 5,
                        comment: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
                      },
                      {
                        id: 5,
                        name: "Eleanor Pena",
                        role: "Product Strategist",
                        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
                        date: "a year ago",
                        stars: 4,
                        comment: "Great pacing and practical frameworks. The exercises gave me immediate clarity on building scalable design systems.",
                      },
                      {
                        id: 6,
                        name: "Guy Hawkins",
                        role: "Digital Specialist",
                        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop",
                        date: "a year ago",
                        stars: 3,
                        comment: "Good structured lessons and clear instructor communication. Recommended for getting familiar with core tools.",
                      },
                    ]
                      .filter((rev) => (selectedRatingFilter === "all" ? true : rev.stars === Number(selectedRatingFilter)))
                      .map((rev) => (
                        <div
                          key={rev.id}
                          className="rounded-2xl sm:rounded-3xl border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-3.5 transition hover:border-zinc-300"
                        >
                          {/* Card Header: Avatar, Name, Role, Date */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-zinc-100 shrink-0 border border-zinc-200/60">
                                <Image src={rev.avatar} alt={rev.name} fill className="object-cover" />
                              </div>
                              <div>
                                <h4 className="text-xs sm:text-sm font-bold text-zinc-950">{rev.name}</h4>
                                <p className="text-[11px] text-zinc-500 font-medium">{rev.role}</p>
                              </div>
                            </div>
                            <span className="text-[11px] sm:text-xs text-zinc-400 font-normal shrink-0">
                              {rev.date}
                            </span>
                          </div>

                          {/* 5 Dark Stars */}
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
                                  i < rev.stars ? "fill-zinc-800 text-zinc-800" : "fill-zinc-200 text-zinc-200"
                                }`}
                              />
                            ))}
                          </div>

                          {/* Comment Body */}
                          <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-600 font-normal">
                            {rev.comment}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Purchase Sidebar */}
            <div className="lg:col-span-4 lg:-mt-72 relative z-20">
              <div className="sticky top-6 rounded-[32px] sm:rounded-[36px] border border-zinc-200/90 bg-white p-6 sm:p-7 shadow-2xl">
                {/* Lessons Header */}
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-950">
                  {currentCourse.totalLessonsInfo}
                </h3>

                {/* Lesson Preview List */}
                <div className="mt-4 space-y-3">
                  {currentCourse.lessonsList.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between text-xs sm:text-[13px] border-b border-zinc-100 pb-2.5">
                      <div className="flex items-center gap-2 font-medium text-zinc-800">
                        <span className="text-zinc-400 font-semibold">{lesson.id}</span>
                        <span className="line-clamp-1">{lesson.title}</span>
                      </div>
                      <span className="font-semibold text-[#0052FE] shrink-0">{lesson.duration}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-3 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition cursor-pointer"
                >
                  99 more videos
                </button>

                {/* Motivational CTA Subtext */}
                <p className="mt-5 text-xs text-zinc-600 leading-relaxed font-normal">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                {/* Price */}
                <div className="mt-3">
                  <span className="text-2xl sm:text-3xl font-black text-[#0052FE]">
                    {currentCourse.price}
                  </span>
                  <span className="text-xs text-zinc-400 font-normal ml-0.5">
                    {currentCourse.period}
                  </span>
                </div>

                {/* Enroll Button */}
                <button
                  type="button"
                  onClick={() => setIsEnrolled((prev) => !prev)}
                  className="mt-4 w-full rounded-full bg-[#D2FF00] py-3.5 text-center text-sm font-bold text-zinc-950 shadow-md transition-all hover:bg-[#c2ed00] hover:scale-[1.02] active:scale-98 cursor-pointer"
                >
                  {isEnrolled ? "Enrolled Successfully" : "Enroll Now"}
                </button>

                {/* This course include Checklist */}
                <div className="mt-6 pt-6 border-t border-zinc-100">
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-950">
                    This course include
                  </h4>
                  <ul className="mt-3.5 space-y-2.5 text-xs text-zinc-600">
                    <li className="flex items-center gap-2.5">
                      <FileText className="h-4 w-4 text-[#0052FE]" />
                      <span>Learning Resources</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Video className="h-4 w-4 text-[#0052FE]" />
                      <span>Quality Lesson Videos</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Award className="h-4 w-4 text-[#0052FE]" />
                      <span>Certificate of Completion</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <MessageCircle className="h-4 w-4 text-[#0052FE]" />
                      <span>Private Consultation</span>
                    </li>
                  </ul>
                </div>

                {/* Creator Profile Section */}
                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-zinc-200">
                      <Image
                        src={currentCourse.instructorAvatar}
                        alt={currentCourse.instructor}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-zinc-900">
                        {currentCourse.instructor}
                      </h5>
                      <p className="text-[11px] text-zinc-500">
                        {currentCourse.instructorRole}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] text-zinc-600 leading-relaxed font-normal">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>

                  <Link
                    href="/creators"
                    className="mt-3 inline-block rounded-full border border-zinc-200/90 bg-white px-5 py-2 text-xs font-semibold text-zinc-800 shadow-xs transition hover:bg-zinc-50 hover:border-zinc-300"
                  >
                    See Full Profile
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
