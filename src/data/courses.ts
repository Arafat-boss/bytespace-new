export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
}

export interface CourseData {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  instructor: string;
  instructorRole: string;
  instructorAvatar: string;
  rating: number;
  reviewsCount: number;
  studentsCount: string;
  level: string;
  price: string;
  period: string;
  image: string;
  videoPreviewImage: string;
  lessons: string;
  duration: string;
  comments: string;
  totalLessonsInfo: string;
  description: string[];
  keyPoints: string[];
  lessonsList: CourseLesson[];
  sneakPeakImages: string[];
}

export const coursesData: CourseData[] = [
  {
    id: 1,
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    subtitle: "Master UI/UX Design from Wireframes to Interactive Prototypes",
    instructor: "purepearl studio",
    instructorRole: "UI/UX Design Specialist",
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 4.8,
    reviewsCount: 230,
    studentsCount: "340 Students",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop&q=80",
    videoPreviewImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=800&fit=crop&q=80",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    totalLessonsInfo: "17 Lessons (2 hours 16 mins)",
    description: [
      "Embark on an exciting creative journey into user interface and user experience design with Figma. This comprehensive course takes you step-by-step from the very basics of the Figma interface to creating industry-standard interactive prototypes and responsive components.",
      "You will explore core design concepts including auto layout, design tokens, typography scale, component variants, and interactive prototyping that will empower you to build real-world digital products.",
      "By the end of this course, you will possess the confidence and practical portfolio-ready designs to land freelance clients or transition into product design roles."
    ],
    keyPoints: [
      "Figma Interface and Workspace Setup",
      "Vector Networks and Pen Tool Fundamentals",
      "Auto Layout 5.0 and Responsive Constraints",
      "Component Variants, Properties, and Design Systems",
      "Interactive Prototyping and Micro-Animations",
      "Developer Handoff and Design Specifications",
      "Design Critique and Portfolio Review",
      "Capstone Project: Full Mobile & Web App Design"
    ],
    lessonsList: [
      { id: "01", title: "Introduction to Figma and Workspace", duration: "10 mins" },
      { id: "02", title: "Mastering Shapes, Frames, and Vectors", duration: "18 mins" },
      { id: "03", title: "Auto Layout and Responsive Systems", duration: "25 mins" },
      { id: "04", title: "Component Variants and Design Tokens", duration: "22 mins" },
    ],
    sneakPeakImages: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&q=80",
    ]
  },
  {
    id: 2,
    slug: "build-digital-asset",
    title: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    instructor: "purepearl studio",
    instructorRole: "Professional Creator",
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 4.8,
    reviewsCount: 172,
    studentsCount: "199 Students",
    level: "Intermediate",
    price: "$25",
    period: "/lifetime",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&q=80",
    videoPreviewImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    totalLessonsInfo: "112 Lessons (24 hours)",
    description: [
      "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios."
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio"
    ],
    lessonsList: [
      { id: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
      { id: "02", title: "Design Principles for Impacts", duration: "21 mins" },
      { id: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
    ],
    sneakPeakImages: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&q=80",
    ]
  },
  {
    id: 3,
    slug: "the-power-of-big-data",
    title: "the Power of Big Data: Analytics & Insights",
    subtitle: "Transform Complex Data into Scalable Decisions and High-Impact Visualizations",
    instructor: "purepearl studio",
    instructorRole: "Data Science & BI Lead",
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 4.9,
    reviewsCount: 310,
    studentsCount: "520 Students",
    level: "Advanced",
    price: "$25",
    period: "/lifetime",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
    videoPreviewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    totalLessonsInfo: "48 Lessons (14 hours)",
    description: [
      "Discover the immense power of modern big data analytics and statistical engineering. This in-depth course teaches you how to collect, clean, model, and visualize large datasets to unlock actionable business intelligence.",
      "Learn how industry leaders utilize data pipelines, SQL querying, Python analytics libraries, and real-time dashboards to forecast trends and optimize complex systems.",
      "Equip yourself with the tools and techniques required to present executive-ready data visual models that drive strategic decisions."
    ],
    keyPoints: [
      "Big Data Infrastructure and Architecture Overview",
      "Data Cleaning and ETL Pipeline Construction",
      "Statistical Modeling and Machine Learning Foundations",
      "Interactive Dashboards and BI Visualizations",
      "SQL Query Optimization for Massive Datasets",
      "Real-Time Stream Processing",
      "Data Security, Privacy, and Compliance",
      "Capstone Project: Enterprise Analytics Dashboard"
    ],
    lessonsList: [
      { id: "01", title: "Introduction to Big Data Ecosystems", duration: "14 mins" },
      { id: "02", title: "Building Scalable Data Pipelines", duration: "24 mins" },
      { id: "03", title: "Interactive Dashboard Visualizations", duration: "19 mins" },
    ],
    sneakPeakImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&q=80",
    ]
  },
  {
    id: 4,
    slug: "balancing-productivity-and-wellbeing",
    title: "Balancing Productivity and Wellbeing",
    subtitle: "Optimize Daily Focus, Time Management, and High-Performance Habits",
    instructor: "purepearl studio",
    instructorRole: "Productivity Coach",
    instructorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 4.7,
    reviewsCount: 145,
    studentsCount: "280 Students",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop&q=80",
    videoPreviewImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=800&fit=crop&q=80",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    totalLessonsInfo: "32 Lessons (8 hours)",
    description: [
      "Achieving peak productivity without burnout is an essential skill in today's fast-paced digital world. This course provides actionable systems and cognitive frameworks to master your workflow, eliminate distractions, and maintain sustainable momentum.",
      "Learn practical time blocking, deep work habits, task prioritization models, and wellness routines that maximize both output and life satisfaction."
    ],
    keyPoints: [
      "The Neuroscience of Focus and Attention",
      "Time Blocking and Calendar Architecture",
      "Overcoming Procrastination and Cognitive Overload",
      "Digital Minimalism and Distraction Shielding",
      "Energy Management vs Time Management",
      "Sustainable Goal Setting Frameworks",
      "Burnout Prevention Strategies",
      "Capstone Project: Personalized Productivity Operating System"
    ],
    lessonsList: [
      { id: "01", title: "The Science of Focus & Flow", duration: "11 mins" },
      { id: "02", title: "Time Blocking and Deep Work Architecture", duration: "18 mins" },
      { id: "03", title: "Sustaining High Energy Throughout the Day", duration: "15 mins" },
    ],
    sneakPeakImages: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&q=80",
    ]
  },
  {
    id: 5,
    slug: "mastering-money-management",
    title: "Mastering Money Management: Financial Freedom",
    subtitle: "Smart Budgeting, Wealth Creation, and Strategic Investment Tactics",
    instructor: "purepearl studio",
    instructorRole: "Financial Consultant",
    instructorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 4.9,
    reviewsCount: 410,
    studentsCount: "670 Students",
    level: "Intermediate",
    price: "$25",
    period: "/lifetime",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop&q=80",
    videoPreviewImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=800&fit=crop&q=80",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    totalLessonsInfo: "40 Lessons (11 hours)",
    description: [
      "Take complete control of your financial destiny with proven wealth creation, cash flow management, and investment strategies tailored for creators and modern professionals.",
      "Understand asset allocation, tax efficiency, inflation hedging, and building diversified passive income streams."
    ],
    keyPoints: [
      "Personal Cash Flow Architecture",
      "Asset Allocation and Risk Diversification",
      "Index Investing and Long-Term Wealth Compound Growth",
      "Tax Strategy and Entity Optimization for Creators",
      "Building Automated Savings & Investment Engines",
      "Understanding Real Estate and Alternative Assets",
      "Protecting Your Wealth: Risk & Insurance Essentials",
      "Capstone Project: 10-Year Financial Independence Blueprint"
    ],
    lessonsList: [
      { id: "01", title: "Foundations of Financial Architecture", duration: "15 mins" },
      { id: "02", title: "Asset Allocation and Compounding", duration: "22 mins" },
      { id: "03", title: "Automating Wealth and Cash Flow", duration: "17 mins" },
    ],
    sneakPeakImages: [
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&q=80",
    ]
  },
  {
    id: 6,
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success: Founder's Playbook",
    subtitle: "Validate, Build, and Scale Your Tech Business from Scratch",
    instructor: "purepearl studio",
    instructorRole: "Startup Founder & Advisor",
    instructorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    rating: 4.8,
    reviewsCount: 195,
    studentsCount: "310 Students",
    level: "Advanced",
    price: "$25",
    period: "/lifetime",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80",
    videoPreviewImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=80",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    totalLessonsInfo: "56 Lessons (16 hours)",
    description: [
      "Turn your innovative idea into a thriving, scalable business. This comprehensive startup masterclass guides you through validation, product-market fit, fundraising, team assembly, and go-to-market execution.",
      "Learn how to build Minimum Viable Products rapidly, attract early adopters, and execute high-growth marketing strategies."
    ],
    keyPoints: [
      "Idea Validation and Customer Discovery Interviews",
      "Rapid MVP Prototyping and No-Code Stack",
      "Finding and Measuring Product-Market Fit",
      "Go-To-Market and Early Traction Channels",
      "Unit Economics, Pricing, and Business Modeling",
      "Pitch Deck Creation and Angel/VC Fundraising",
      "Hiring, Culture, and Leadership for Founders",
      "Capstone Project: Full Pitch Deck and Launch Plan"
    ],
    lessonsList: [
      { id: "01", title: "Validating Market Demand & Customer Pain", duration: "16 mins" },
      { id: "02", title: "Building Your Lean MVP in 14 Days", duration: "24 mins" },
      { id: "03", title: "Customer Acquisition & Launch Strategy", duration: "20 mins" },
    ],
    sneakPeakImages: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&q=80",
    ]
  }
];

export function getCourseById(id: number | string): CourseData {
  const numericId = typeof id === "string" ? parseInt(id, 10) : id;
  const course = coursesData.find((c) => c.id === numericId || c.slug === id);
  return course || coursesData[1]; // fallback to course 2 (Build Digital Asset)
}
