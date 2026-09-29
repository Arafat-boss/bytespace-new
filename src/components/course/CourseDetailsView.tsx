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
import { CourseData, getCourseById } from "@/data/courses";

export default function CourseDetailsView({ course }: { course?: CourseData }) {
  const currentCourse = course || getCourseById(2);

  const [activeTab, setActiveTab] = useState("About");
  const [isEnrolled, setIsEnrolled] = useState(false);

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
                {["About", "Lessons", "Reviews"].map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all ${
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

              {/* Description Content */}
              <div className="mt-8 sm:mt-10">
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
