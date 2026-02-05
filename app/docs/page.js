"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
    Terminal,
    Zap,
    MousePointer2,
    Code2,
    Shield,
    Sparkles,
    Globe,
    Rocket,
    Copy,
    Check,
} from "lucide-react";
import { useState } from "react";

/* =============================
   Reusable Section Component
============================= */
function Section({ title, description, icon: Icon, children }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 shadow-sm">
                    <Icon size={20} />
                </div>

                <div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
                    {description && (
                        <p className="text-neutral-500 dark:text-neutral-400 mt-2 max-w-2xl leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            <div className="pl-[3.25rem]">{children}</div>
        </motion.section>
    );
}

/* =============================
   Code Block
============================= */
function CodeBlock({ code }) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group">
            <pre className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-neutral-300 text-sm font-mono overflow-x-auto">
                <code>{code}</code>
            </pre>

            <button
                onClick={copy}
                className="absolute top-3 right-3 p-2 rounded-xl bg-neutral-800 text-neutral-400 opacity-0 group-hover:opacity-100 transition hover:text-white"
            >
                {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
        </div>
    );
}

/* =============================
   Badge Chip
============================= */
function Chip({ children }) {
    return (
        <span className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
            {children}
        </span>
    );
}

/* =============================
   Page
============================= */
export default function DocsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
            <Navbar />

            <main className="max-w-5xl mx-auto px-6 py-28 space-y-28">
                {/* ================= HEADER ================= */}
                <header className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                        <Terminal size={12} />
                        Documentation
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                        SVG Motion <span className="text-neutral-400">Docs</span>
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
                        Professional animated SVG icons powered by Framer Motion. Lightweight,
                        customizable, and production‑ready for modern React & Next.js apps.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <Chip>React</Chip>
                        <Chip>Next.js</Chip>
                        <Chip>Framer Motion</Chip>
                        <Chip>Tailwind</Chip>
                    </div>
                </header>

                {/* ================= INSTALL ================= */}
                <Section
                    className="cursor-pointer"
                    title="Installation"
                    description="SVGMotion depends on Framer Motion. Install it before using any icon components."
                    icon={Rocket}
                >
                    <CodeBlock
                        className="cursor-pointer"
                        code={`npm install framer-motion`} />
                </Section>

                {/* ================= QUICK START ================= */}
                <Section
                    className="cursor-pointer"
                    title="Quick Start"
                    description="Import an icon component or create your own motion-enabled SVG in seconds."
                    icon={Code2}
                >
                    <CodeBlock
                        code={`import { motion } from "framer-motion";

export function SparkleIcon({ size = 24 }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
    >
      <path d="M12 3l1.9 5.9h6.2l-5 3.6 1.9 5.9-5-3.6-5 3.6 1.9-5.9-5-3.6h6.2z" />
    </motion.svg>
  );
}`} />
                </Section>

                {/* ================= TRIGGERS ================= */}
                <Section
                    title="Animation Triggers"
                    description="Choose how animations start — hover, click, or automatic loops."
                    icon={Zap}
                >
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: MousePointer2,
                                title: "Hover",
                                desc: "Use whileHover for smooth micro‑interactions.",
                            },
                            {
                                icon: Sparkles,
                                title: "Click",
                                desc: "Use whileTap for tactile feedback and replayable effects.",
                            },
                            {
                                icon: Globe,
                                title: "Auto",
                                desc: "Use animate + transition for continuous looping motion.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 space-y-3"
                            >
                                <item.icon size={20} className="text-blue-500" />
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* ================= CUSTOMIZATION ================= */}
                <Section
                    title="Customization"
                    description="All icons are pure SVG and fully controllable through props and motion variants."
                    icon={Shield}
                >
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            ["size", "Control width & height"],
                            ["className", "Apply Tailwind or custom styles"],
                            ["strokeWidth", "Adjust line thickness"],
                            ["whileHover", "Override hover animation"],
                            ["whileTap", "Override click animation"],
                            ["animate", "Create looping animations"],
                        ].map(([prop, desc], i) => (
                            <div
                                key={i}
                                className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40"
                            >
                                <div className="font-mono text-sm font-bold text-blue-500">
                                    {prop}
                                </div>
                                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                    {desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* ================= PRESETS ================= */}
                <Section
                    title="Animation Presets"
                    description="Use these ready-made motion ideas as starting points for consistent UI feedback."
                    icon={Sparkles}
                >
                    <div className="space-y-8">
                        <div className="flex flex-wrap gap-3">
                            {["Scale", "Rotate", "Shake", "Float", "Glow", "Bounce"].map(
                                (s) => (
                                    <Chip key={s}>{s}</Chip>
                                )
                            )}
                        </div>
                    </div>
                </Section>

                {/* ================= FOOTER ================= */}
                <footer className="pt-20 border-t border-neutral-100 dark:border-neutral-900 text-center space-y-6">
                    <p className="text-neutral-400 text-sm">
                        Ready to explore the full collection?
                    </p>

                    <a
                        href="/icons"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:scale-105 active:scale-95 transition"
                    >
                        Browse Icons
                    </a>
                </footer>
            </main>
        </div>
    );
}
