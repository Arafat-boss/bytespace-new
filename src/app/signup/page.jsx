"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Star, BarChart2, ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
  const router = useRouter();
  const { signup, loginWithGoogle } = useAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await signup(fullName, email, password);
      router.push("/");
    } catch (err) {
      setErrorMessage(err.message || "Failed to create account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignup = async () => {
    setErrorMessage("");
    setIsGoogleLoading(true);

    try {
      await loginWithGoogle();
      router.push("/");
    } catch (err) {
      setErrorMessage(err.message || "Google sign-up failed. Please try again.");
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=faces&q=80",
  ];

  return (
    <div className="hero-grid-pattern relative min-h-screen w-full flex items-center justify-center p-4 sm:p-8 lg:p-12 overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-6 sm:py-10">
        
        {/* Left Column: Brand, Intro, and 3D Showcase Collage */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 transition hover:opacity-90">
              <div className="relative h-9 w-9 flex items-center justify-center">
                <Image
                  src="/assets/Logo.png"
                  alt="ByteSpace Logo"
                  width={36}
                  height={36}
                  className="h-9 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Intro Text */}
            <h1 className="mt-6 text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white">
              Sign up and come in
            </h1>
            <p className="mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-white/80">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
            </p>

            {/* Back to Home Button */}
            <div className="mt-4 sm:mt-5">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 border border-white/15 shadow-sm active:scale-95"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>

          {/* 3D Collage Graphic Stack */}
          <div className="relative mt-8 sm:mt-12 h-[400px] sm:h-[450px] w-full max-w-[480px]">
            {/* Lime Torus Ring (Top-Left) */}
            <div className="absolute left-2 sm:left-4 top-4 sm:top-6 w-16 sm:w-20 z-30 pointer-events-none animate-float-slow">
              <Image
                src="/assets/hero/left3.png"
                alt="Lime Torus Ring"
                width={80}
                height={80}
                className="h-auto w-full object-contain filter hue-rotate-60"
              />
            </div>

            {/* Card 1: Back Left Card */}
            <div className="absolute -left-2 sm:left-0 top-12 sm:top-14 w-[270px] sm:w-[310px] rounded-[24px] bg-white/95 p-4 shadow-xl -rotate-3 z-10 opacity-90 border border-white/60 backdrop-blur-sm pointer-events-none">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-zinc-200">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&q=80"
                  alt="Build Digital Asset"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2">
                  <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-medium text-zinc-800 shadow-sm backdrop-blur-md">
                    17 Lessons
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <h4 className="text-sm font-bold text-zinc-900 line-clamp-1">
                  Build Digital Products
                </h4>
                <p className="text-[11px] text-[#0052FE] font-medium">
                  by purepearl studio
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-medium text-zinc-700">
                  <BarChart2 className="h-3 w-3" />
                  <span>Beginner</span>
                </div>
                <div className="flex items-center -space-x-1.5">
                  {avatars.slice(0, 3).map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt="Student"
                      className="h-5 w-5 rounded-full border border-white object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Front Main Card */}
            <div className="absolute left-8 sm:left-14 top-20 sm:top-24 w-[290px] sm:w-[330px] rounded-[28px] bg-white p-5 shadow-2xl z-20 border border-white/80">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop&q=80"
                  alt="Learn Figma from Basic"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5">
                  <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold text-zinc-900 shadow-sm backdrop-blur-md">
                    17 Lessons
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-base font-bold text-zinc-950">
                  Learn Figma from Basic
                </h3>
                <div className="flex items-center gap-1 text-xs sm:text-sm font-bold text-zinc-900">
                  <span>4.5</span>
                  <Star className="h-3.5 w-3.5 fill-[#EAB308] text-[#EAB308]" />
                </div>
              </div>

              <p className="mt-0.5 text-xs text-[#0052FE] font-medium">
                by purepearl studio
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                  <BarChart2 className="h-3.5 w-3.5 text-zinc-700" />
                  <span>Beginner</span>
                </div>

                <div className="flex items-center -space-x-2">
                  {avatars.slice(0, 4).map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt="Student"
                      className="h-6 w-6 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-black text-[9px] font-bold text-white">
                    26+
                  </span>
                </div>
              </div>

              <div className="mt-3.5">
                <span className="text-lg sm:text-xl font-extrabold text-[#0052FE]">
                  $25
                </span>
                <span className="text-xs text-zinc-400 font-normal ml-0.5">
                  /lifetime
                </span>
              </div>
            </div>

            {/* White 3D Zigzag Ribbon */}
            <div className="absolute right-0 sm:right-2 top-32 sm:top-36 w-16 sm:w-20 z-30 pointer-events-none animate-float-reverse">
              <Image
                src="/assets/hero/left2.png"
                alt="White Zigzag Ribbon"
                width={80}
                height={80}
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Card 3: Happy Students */}
            <div className="absolute left-24 sm:left-32 -bottom-2 sm:bottom-0 w-[230px] sm:w-[260px] rounded-[24px] bg-[#D2FF00] p-4 shadow-xl z-25 transition hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-950">
                    Happy Students
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-zinc-900 mt-0.5">
                    <span>4.5 (290)</span>
                    <Star className="h-3 w-3 fill-zinc-950 text-zinc-950" />
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center -space-x-2">
                {avatars.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt="Student Avatar"
                    className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-white bg-black text-[9px] font-bold text-white">
                  2K+
                </span>
              </div>
            </div>

            {/* Lime 3D Pyramid */}
            <div className="absolute -left-4 sm:-left-2 bottom-0 w-18 sm:w-22 z-30 pointer-events-none animate-float-slow -rotate-12">
              <Image
                src="/assets/hero/right2.png"
                alt="Lime Pyramid"
                width={90}
                height={90}
                className="h-auto w-full object-contain filter hue-rotate-60"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Signup Form Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[480px] lg:max-w-[500px] rounded-[36px] sm:rounded-[44px] bg-white p-8 sm:p-12 lg:p-14 shadow-2xl relative z-20">
            {/* Header */}
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#0052FE]">
                Create an Account
              </p>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 leading-[1.15]">
                Welcome to <br />
                ByteSpace
              </h2>
            </div>

            {/* Error Message Alert */}
            {errorMessage && (
              <div className="mt-6 flex items-center gap-2 rounded-2xl bg-red-50 border border-red-200 p-3.5 text-xs text-red-700">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleEmailSignup} className="mt-6 space-y-4 sm:space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold text-zinc-700 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  className="w-full rounded-[14px] border border-zinc-200/90 bg-white px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-zinc-700 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  className="w-full rounded-[14px] border border-zinc-200/90 bg-white px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-zinc-700 mb-1.5"
                >
                  Password (min. 6 characters)
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-[14px] border border-zinc-200/90 bg-white px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D2FF00] px-8 py-3 sm:px-9 sm:py-3.5 text-sm font-bold text-zinc-950 shadow-sm transition-all duration-200 hover:bg-[#c2ed00] hover:scale-105 active:scale-95 text-center cursor-pointer disabled:opacity-70 disabled:pointer-events-none"
                >
                  {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                  <span>{isSubmitting ? "Creating Account..." : "Continue"}</span>
                </button>
              </div>
            </form>

            {/* Social Signup Divider */}
            <div className="relative my-7 sm:my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200/80" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-3 text-zinc-400 font-normal">or continue with</span>
              </div>
            </div>

            {/* Google OAuth Signup Button */}
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={handleGoogleSignup}
                disabled={isGoogleLoading}
                aria-label="Sign up with Google"
                className="w-full flex items-center justify-center gap-3 rounded-2xl border border-zinc-200/90 bg-white py-3 px-4 text-xs sm:text-sm font-semibold text-zinc-800 transition-all hover:bg-zinc-50 hover:border-zinc-300 hover:scale-[1.02] active:scale-98 shadow-xs cursor-pointer disabled:opacity-70"
              >
                {isGoogleLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin text-zinc-600" />
                ) : (
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                )}
                <span>Sign up with Google</span>
              </button>
            </div>

            {/* Bottom Link */}
            <div className="mt-8 sm:mt-10 text-center text-xs text-zinc-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#0052FE] hover:underline transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
