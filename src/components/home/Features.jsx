import { Code2, Cpu, Rocket, ShieldCheck, Users, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Code2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Real-World Projects",
      description: "Build portfolio-ready full-stack applications with guided workflows and best practices.",
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: "Interactive Coding Labs",
      description: "Code directly in cloud-based sandboxes with instant feedback and test validation.",
    },
    {
      icon: <Users className="h-6 w-6 text-sky-500" />,
      title: "Community & Peer Review",
      description: "Collaborate with peers, get code reviews from senior developers, and grow faster.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-emerald-500" />,
      title: "Career Acceleration",
      description: "Resume optimization, mock interviews, and direct referrals to hiring partners.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-purple-500" />,
      title: "Modern AI & Tech Stack",
      description: "Stay ahead with modern frameworks, Next.js, AI integrations, and cloud architectures.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-rose-500" />,
      title: "Verified Certifications",
      description: "Earn shareable certificates verified on the blockchain and recognized by tech recruiters.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Everything you need to master modern technology
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Designed from the ground up for developers and tech enthusiasts seeking excellence.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="inline-flex rounded-xl bg-zinc-100 p-3 dark:bg-zinc-800">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-zinc-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
