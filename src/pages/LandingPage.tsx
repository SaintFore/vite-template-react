import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap, Layers, Code, Route, Database, FileInput, Sparkles, Shield, Rocket } from "lucide-react";

const smooth = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };
const spring = { type: "spring", stiffness: 100, damping: 15 } as const;

const navItems = [
  { label: "Tech Stack", href: "#stack" },
  { label: "Features", href: "#features" },
  { label: "Get Started", href: "#start" },
];

const techStack = [
  { name: "React 19", icon: Layers, color: "bg-sky-500", desc: "Modern UI library" },
  { name: "TypeScript", icon: Code, color: "bg-blue-600", desc: "Type safety" },
  { name: "Vite", icon: Zap, color: "bg-yellow-500", desc: "Lightning fast builds" },
  { name: "Tailwind CSS", icon: Sparkles, color: "bg-cyan-500", desc: "Utility-first CSS" },
  { name: "React Router", icon: Route, color: "bg-red-500", desc: "Client-side routing" },
  { name: "React Query", icon: Database, color: "bg-amber-500", desc: "Data fetching" },
  { name: "React Hook Form", icon: FileInput, color: "bg-pink-500", desc: "Form handling" },
  { name: "shadcn/ui", icon: Shield, color: "bg-violet-600", desc: "UI components" },
];

const features = [
  {
    title: "Type-Safe by Default",
    description: "Full TypeScript support with strict typing, Zod validation, and excellent developer experience.",
    icon: Shield,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    title: "Blazing Fast DX",
    description: "Vite-powered development with instant HMR, optimized builds, and zero config.",
    icon: Zap,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    title: "Modern Routing",
    description: "React Router for seamless client-side navigation with code splitting support.",
    icon: Route,
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50 dark:bg-red-950/30",
  },
  {
    title: "Smart Data Fetching",
    description: "React Query handles caching, background updates, and stale data with ease.",
    icon: Database,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
];

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating Nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, ...smooth }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-1 bg-background/90 backdrop-blur-xl rounded-full px-2 py-2 shadow-lg shadow-black/5 border border-border"
        >
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, ...smooth }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-44 md:pb-32">
        {/* Subtle background */}
        <motion.div className="absolute inset-0 -z-10 overflow-hidden" style={{ y: heroY }}>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/[0.05] rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-chart-4/[0.05] rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20"
          >
            <Rocket className="w-4 h-4" />
            Production Ready Template
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, ...smooth }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            Build faster with
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              modern React
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ...smooth }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            A production-ready React + TypeScript template with Vite, Tailwind CSS, shadcn/ui, and all the tools you need to ship fast.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ...smooth }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("start")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/SaintFore/vite-template-react"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium text-base hover:bg-accent transition-colors border border-border"
            >
              View on GitHub
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smooth}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything included</h2>
            <p className="text-muted-foreground text-lg">Carefully selected tools that work great together</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, ...smooth }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group p-5 rounded-2xl bg-card border border-border/50 hover:border-border hover:shadow-lg transition-all"
              >
                <div className={`w-10 h-10 ${tech.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <tech.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
                <p className="text-xs text-muted-foreground">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smooth}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why this template?</h2>
            <p className="text-muted-foreground text-lg">Built for real-world production applications</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ...smooth }}
                whileHover={{ y: -4 }}
                className={`${feature.bgColor} rounded-2xl p-7 border border-border/50`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="start" className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smooth}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Start</h2>
            <p className="text-muted-foreground text-lg">Get up and running in seconds</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ...smooth }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">Terminal</span>
            </div>
            
            {/* Code blocks */}
            <div className="p-6 space-y-4 font-mono text-sm">
              <div>
                <p className="text-muted-foreground mb-2"># Create project from template</p>
                <code className="text-foreground">pnpm dlx degit SaintFore/vite-template-react my-app</code>
              </div>
              <div>
                <p className="text-muted-foreground mb-2"># Install dependencies</p>
                <code className="text-foreground">cd my-app && pnpm install</code>
              </div>
              <div>
                <p className="text-muted-foreground mb-2"># Start development server</p>
                <code className="text-foreground">pnpm dev</code>
              </div>
            </div>
          </motion.div>

          {/* Scripts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ...smooth }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { cmd: "pnpm dev", desc: "Dev server" },
              { cmd: "pnpm build", desc: "Production build" },
              { cmd: "pnpm lint", desc: "Run ESLint" },
              { cmd: "pnpm preview", desc: "Preview build" },
            ].map((script, i) => (
              <motion.div
                key={script.cmd}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05, ...smooth }}
                whileHover={{ scale: 1.03 }}
                className="p-4 rounded-xl bg-card border border-border/50 text-center"
              >
                <code className="text-sm font-medium text-primary">{script.cmd}</code>
                <p className="text-xs text-muted-foreground mt-1">{script.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Structure */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smooth}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Structure</h2>
            <p className="text-muted-foreground text-lg">Clean and organized codebase</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ...smooth }}
            className="bg-card rounded-2xl border border-border p-6 font-mono text-sm"
          >
            <pre className="text-foreground">
{`src/
├── api/          # API client and type definitions
├── components/   # Reusable components
│   └── ui/       # shadcn/ui components
├── lib/          # Utility functions
├── pages/        # Page components
├── schemas/      # Zod validation schemas
├── App.tsx       # Main app component
└── main.tsx      # Entry point`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smooth}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Start your next project with a solid foundation.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("start")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg" />
              <span className="font-semibold">Vite Template React</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="https://github.com/SaintFore/vite-template-react" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}