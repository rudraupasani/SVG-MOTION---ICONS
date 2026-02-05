"use client";

import Navbar from "@/components/Navbar";
import {
  Play,
  Search,
  Settings,
  Github,
  Instagram,
  Twitter,
  Linkedin,
  YouTube,
  Discord,
  Heart,
  Star,
  Zap,
  Shield,
  Sparkles,
  Home as HomeIcon,
  Globe,
  ArrowRight,
  Copy,
  ALL_ICONS
} from "@/components/icons";
import Counter from "@/components/Counter";
import { Terminal, Cpu, MousePointer2, Code } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -8 }}
    className="p-8 rounded-4xl bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 shadow-xl shadow-black/2 dark:shadow-white/2 flex flex-col gap-4"
  >
    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold tracking-tight">{title}</h3>
    <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

const FloatingIcon = ({ icon: Icon, x, y, delay, rotate }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.2, 0.5, 0.2],
      scale: 1,
      x: [0, 10, 0],
      y: [0, -10, 0],
      rotate: rotate
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    className="absolute text-neutral-200 dark:text-neutral-800 pointer-events-none"
    style={{ left: x, top: y }}
  >
    <Icon size={48} />
  </motion.div>
);

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const featuredIcons = [
    { icon: Heart, color: "text-red-500" },
    { icon: Star, color: "text-yellow-500" },
    { icon: Zap, color: "text-blue-500" },
    { icon: Shield, color: "text-green-500" },
    { icon: Sparkles, color: "text-purple-500" },
    { icon: Globe, color: "text-cyan-500" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black overflow-hidden selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 px-6 overflow-hidden">
        {/* ===== Background ===== */}
        <div className="absolute inset-0 z-0">

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[40px_40px]" />

          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]" />

          {/* Animated Squares */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm rounded-xl"
              style={{
                width: 40 + Math.random() * 80,
                height: 40 + Math.random() * 80,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 90, 180],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Floating icons (your existing ones) */}
          <FloatingIcon icon={Heart} x="10%" y="20%" delay={0} rotate={15} />
          <FloatingIcon icon={Star} x="85%" y="15%" delay={1} rotate={-10} />
          <FloatingIcon icon={Zap} x="15%" y="70%" delay={2} rotate={20} />
          <FloatingIcon icon={Shield} x="80%" y="75%" delay={3} rotate={-15} />
          <FloatingIcon icon={Globe} x="50%" y="85%" delay={4} rotate={5} />
        </div>

        {/* ===== Content ===== */}
        <div className="max-w-5xl mx-auto text-center relative z-10">

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 inline-block border border-blue-500/20"
          >
            Introducing SVG Motion 1.0
          </motion.span>

          {/* Animated Heading */}
          <motion.h1
            className="text-6xl sm:text-8xl flex flex-col font-black leading-[0.9] mb-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {["INTERFACES", "IN", "MOTION"].map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                className={`bg-clip-text text-transparent ${i > 0
                  ? "bg-linear-to-r from-blue-500 to-cyan-400 animate-gradient-x"
                  : "bg-linear-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-500"
                  }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Paragraph animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Beautifully crafted, high-performance library of <Counter value={ALL_ICONS.length} className="font-black text-black dark:text-white" />+ animated icons for modern React apps.
            Zero dependencies, infinite scalability, and pure SVG.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/icons"
              className="px-6 py-3 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
            >
              Explore Library
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://github.com"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white font-bold text-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </motion.div>
        </div>
      </section>


      {/* Icon Showcase Row */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-16 border-y border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/50 overflow-hidden"
      >
        <div className="flex items-center gap-12 sm:gap-24 whitespace-nowrap animate-scroll">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-24">
              {featuredIcons.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className={`p-3 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm border border-neutral-200 dark:border-neutral-800 ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={32} />
                  </div>
                  <span className="text-sm font-bold text-neutral-400 uppercase tracking-widest">{item.icon.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-6">BUILT FOR BUILDERS.</h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
              We did the heavy lifting with Framer Motion so you don't have to.
              Just copy, paste, and ship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Cpu}
              title="Blazing Fast"
              description="Optimized SVG paths and lightweight Framer Motion variants ensure buttery smooth 60fps animations."
            />
            <FeatureCard
              icon={Shield}
              title="Fully Typed"
              description="Built with TypeScript in mind. Every icon component is fully typed and ready for your IDE."
            />
            <FeatureCard
              icon={Sparkles}
              title="Modern Design"
              description="Aesthetic minimal icons designed to fit perfectly into any modern high-end user interface."
            />
          </div>
        </div>
      </section>

      {/* Code Integration Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-8 leading-none">
              PUSH TO <br />
              <span className="text-blue-500 text-5xl lg:text-6xl">PRODUCTION.</span>
            </h2>
            <ul className="space-y-6">
              {[
                { title: "React & Next.js Ready", desc: "Seamless integration with your favorite frameworks." },
                { title: "Tailwind CSS Support", desc: "Easily style icons using standard Tailwind classes." },
                { title: "Customizable Motion", desc: "Control speed, delay, and behavior with standard Framer Motion props." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-1">
                    <Zap size={14} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-neutral-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-1 rounded-2xl bg-linear-to-br from-blue-500 to-purple-500">
              <div className="bg-neutral-900 rounded-xl p-6 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="h-4 w-px bg-neutral-800 mx-2" />
                  <span className="text-xs text-neutral-500 font-mono">AnimatedIcon.jsx</span>
                </div>
                <pre className="text-sm font-mono text-neutral-300 leading-relaxed overflow-x-auto">
                  <code>{`import { motion } from "framer-motion";

export function PlayIcon() {
  return (
    <motion.svg 
      viewBox="0 0 24 24"
      whileHover={{ scale: 1.1 }}
    >
      <motion.path 
        d="m5 3 14 9-14 9V3z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
      />
    </motion.svg>
  );
}`}</code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Floating UI Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-15 right-4 p-4 bg-white text-black rounded-2xl shadow-2xl items-center gap-3 hidden sm:flex border border-neutral-100"
          >
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
              <Terminal size={18} />
            </div>
            <div className="pr-4">
              <p className="text-[10px] uppercase tracking-widest font-black text-neutral-400">Status</p>
              <p className="text-sm font-bold">Successfully Exported</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* Design System Section */}
      < section className="py-24 sm:py-32 px-6 bg-neutral-50 dark:bg-neutral-950" >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h3 className="text-3xl font-black tracking-tighter mb-6 uppercase">Design Philosophy</h3>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Every icon in NanoMotion follows a strict 24x24 grid with a 2px stroke width.
                We believe in consistency over complexity.
              </p>
              <Link
                href="/icons"
                className="text-blue-500 font-bold hover:underline flex items-center gap-2"
              >
                View full spec
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="aspect-square rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center gap-4 group cursor-help transition-all hover:border-blue-500/50">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 dark:bg-black flex items-center justify-center text-neutral-400 group-hover:text-blue-500 transition-colors">
                    {i === 1 && <MousePointer2 size={24} />}
                    {i === 2 && <Settings size={24} />}
                    {i === 3 && <Play size={24} />}
                    {i === 4 && <Search size={24} />}
                    {i === 5 && <Code size={24} />}
                    {i === 6 && <Zap size={24} />}
                    {i === 7 && <Heart size={24} />}
                    {i === 8 && <Globe size={24} />}
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    24px Grid
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="py-20 px-6 border-t border-neutral-100 dark:border-neutral-900" >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Globe className="text-blue-500" size={24} />
            <span className="font-black text-xl tracking-tighter">SVG MOTION</span>
          </div>

          <div className="flex gap-8 text-neutral-500 font-bold text-sm">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Discord</a>
          </div>

          <p className="text-neutral-400 text-sm font-medium">
            © 2026 SVG Motion Icons. Build with intention.
          </p>
        </div>
      </footer >

    </main >
  );
}
