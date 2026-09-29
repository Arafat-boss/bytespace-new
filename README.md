# ByteSpace

ByteSpace is a modern online course marketplace and digital learning platform built with Next.js (App Router), React 19, and Tailwind CSS. The application connects students with industry experts across software development, UI/UX design, marketing, data science, and creative arts, while providing creators with a platform to publish, manage, and monetize educational content.

## Table of Contents

- Overview
- Core Features
- Technology Stack
- Project Architecture
- Application Routes
- Getting Started
  - Prerequisites
  - Installation
  - Running the Development Server
  - Building for Production
- NPM Scripts
- Code Style and Conventions
- License

---

## Overview

ByteSpace provides a clean, responsive, and intuitive interface designed for modern web learning. The platform emphasizes fast navigation, accessible component structure, interactive course previews, and an integrated user authentication workflow.

---

## Core Features

### 1. Course Discovery and Search
- Dynamic search functionality allowing users to query by course title, topic, creator, or keyword.
- Category-based filtering covering UI/UX Design, Web Development, Data Science, Marketing, Music, Animation, Cooking, and more.
- Skill level filtering (Beginner, Intermediate, Advanced, All Levels).
- Sorting options including Most Relevant, Highest Rated, Price (Low to High), Price (High to Low), and Newest.
- Active filter tags with single-click reset functionality.

### 2. Comprehensive Course Detail View
- Video player preview container with overlay controls.
- Tabbed content layout with About, Lesson, and Reviews sections.
- Curriculum breakdown detailing modules, lesson titles, and lecture durations.
- Student review showcase filterable by star ratings (1 to 5 stars).
- Sticky checkout and enrollment sidebar displaying lesson counts, pricing, enrollment status, and creator summary.

### 3. Creator Profiles
- Dedicated creator storefront highlighting instructor biography, role, follower count, and total product count.
- Interactive follower counter with state toggling.
- Creator course catalog with custom filtering and sorting.

### 4. Authentication System
- Client-side authentication powered by React Context (`AuthContext`).
- Support for full name, email, and password registration.
- Login authentication with validation feedback.
- Mock Google OAuth sign-in integration.
- Session persistence via browser storage (`localStorage`).
- User profile dropdown in navigation with user details, initials avatar, and sign-out action.

### 5. Responsive Design and Visual Polish
- Custom royal blue hero grid pattern aesthetic.
- Floating geometrical accents with smooth CSS keyframe animations.
- Mobile slide-down navigation drawer with responsive action buttons.
- Custom 404 Not Found page with high-contrast typography and return-to-home navigation.

---

## Technology Stack

- Framework: Next.js 16 (App Router, Turbopack)
- Library: React 19
- Styling: Tailwind CSS v4, PostCSS
- Icons: Lucide React
- Fonts: Geist Sans and Geist Mono via `next/font/google`
- State Management: React Context API
- Storage: Browser LocalStorage API

---

## Project Architecture

```
bytespace-new/
├── public/
│   ├── assets/
│   │   ├── company logo/      # Partner and client brand assets
│   │   ├── hero/              # 3D floating shapes, student illustration, background arcs
│   │   └── Logo.png           # ByteSpace brand logo
│   └── favicon.ico
├── src/
│   ├── app/                   # Next.js App Router directory
│   │   ├── course-details/    # Course details route
│   │   ├── courses/           # Courses catalogue and dynamic [id] route
│   │   ├── creator/           # Creator route alias
│   │   ├── creators/          # Creator profile and courses page
│   │   ├── login/             # User login page
│   │   ├── register/          # Sign up route alias
│   │   ├── search/            # Course search and filter page
│   │   ├── signup/            # User registration page
│   │   ├── globals.css        # Global CSS styles and animations
│   │   ├── layout.jsx         # Root layout with font and AuthProvider
│   │   ├── not-found.jsx      # Custom 404 page
│   │   └── page.jsx           # Landing homepage
│   ├── components/
│   │   ├── course/            # CourseDetailsView and related modules
│   │   ├── creator/           # CreatorBanner and CreatorCourses
│   │   ├── home/              # Hero, Courses, LearningPaths, Growth, CTA, Testimonials
│   │   ├── layout/            # Navbar and Footer components
│   │   └── search/            # SearchBanner and SearchResults
│   ├── context/
│   │   └── AuthContext.jsx    # Authentication provider, session handlers, login/signup methods
│   └── data/
│       └── courses.js         # Course data definitions, modules, and lookup helpers
├── jsconfig.json              # Path aliases configuration (@/* mapped to ./src/*)
├── next.config.mjs            # Next.js configuration and remote image domains
├── package.json               # Project dependencies and script commands
└── postcss.config.mjs         # PostCSS configuration for Tailwind CSS v4
```

---

## Application Routes

| Route | Description |
| --- | --- |
| `/` | Landing page featuring Hero, Partners, Featured Courses, Learning Paths, Showcase, and Testimonials |
| `/search` | Course exploration hub with real-time query parameters, category filters, and sorting |
| `/courses` | Shortcut redirect to search catalog |
| `/courses/[id]` | Dynamic route displaying individual course details, modules, reviews, and enrollment |
| `/course-details` | Static fallback route for previewing the course detail interface |
| `/creators` | Creator profile page displaying creator bio, statistics, and published courses |
| `/login` | User authentication sign-in page with email/password and Google login |
| `/signup` | User registration page |
| `/*` (Not Found) | Custom 404 page for nonexistent routes |

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your local environment:

- Node.js (version 18.18.0 or later recommended)
- npm (version 9 or later) or yarn / pnpm

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project root directory:
   ```bash
   cd bytespace-new
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the Next.js development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

---

## NPM Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Starts the Next.js development server on localhost:3000 |
| `npm run build` | Compiles the production build with Turbopack |
| `npm run start` | Launches the compiled Next.js production server |
| `npm run lint` | Runs ESLint to inspect code quality and catch syntax issues |

---

## Code Style and Conventions

- Components are modularized inside `src/components/` grouped by domain.
- Path aliases (`@/...`) resolve directly from `src/`.
- Dynamic parameters in Next.js 16 App Router are resolved asynchronously (`const resolvedParams = await params`).
- Images are optimized using `next/image` with remote patterns configured in `next.config.mjs`.

---

## License

This project is private and maintained for educational and commercial application development.
