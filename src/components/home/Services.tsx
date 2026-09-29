import { Code, Database, Layout, Sparkles, Terminal, Video } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Layout className="h-6 w-6 text-blue-500" />,
      title: "Frontend Engineering",
      description: "Master React, Next.js, Tailwind CSS, TypeScript, and state management for scalable web interfaces.",
    },
    {
      icon: <Database className="h-6 w-6 text-emerald-500" />,
      title: "Backend & API Architecture",
      description: "Design robust REST/GraphQL APIs, microservices, databases (PostgreSQL, MongoDB), and caching systems.",
    },
    {
      icon: <Terminal className="h-6 w-6 text-amber-500" />,
      title: "DevOps & Cloud Deployment",
      description: "Automate CI/CD pipelines, Docker containerization, AWS/Vercel deployments, and monitoring.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-purple-500" />,
      title: "AI Integration & Agents",
      description: "Integrate LLMs, OpenAI API, LangChain, and build next-gen autonomous agentic workflows.",
    },
    {
      icon: <Code className="h-6 w-6 text-pink-500" />,
      title: "Full-Stack Bootcamps",
      description: "Comprehensive cohort-based learning paths with intensive live coding sessions and capstones.",
    },
    {
      icon: <Video className="h-6 w-6 text-indigo-500" />,
      title: "1-on-1 Mentorship",
      description: "Personalized code reviews, technical mock interviews, and career navigation from top tech engineers.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Services & Tracks
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Tailored learning paths for your tech goals
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Choose from comprehensive tracks designed to transform you into a job-ready developer.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="inline-flex rounded-xl bg-zinc-100 p-3 dark:bg-zinc-800">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-zinc-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
