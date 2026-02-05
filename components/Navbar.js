"use client";

import { Globe, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
            <nav className="relative flex items-center justify-between px-6 py-3 bg-white/70 dark:bg-black/30 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl shadow-2xl shadow-black/5 dark:shadow-white/5">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500">
                        <Globe size={20} />
                    </div>

                    <h1 className="text-lg font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-black to-neutral-500 dark:from-white dark:to-neutral-400">
                        SVG Motion
                    </h1>
                </Link>

                {/* Desktop Links */}
                <div className="hidden sm:flex items-center gap-6 text-sm font-semibold">
                    <Link
                        href="/icons"
                        className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                    >
                        Library
                    </Link>

                    <Link
                        href="/docs"
                        className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                    >
                        Documentation
                    </Link>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="sm:hidden p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            className="absolute top-[110%] left-0 w-full p-4 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 flex flex-col gap-4 sm:hidden"
                        >
                            <Link
                                href="/icons"
                                onClick={() => setOpen(false)}
                                className="text-neutral-600 dark:text-neutral-300 font-medium"
                            >
                                Library
                            </Link>

                            <Link
                                href="/docs"
                                onClick={() => setOpen(false)}
                                className="text-neutral-600 dark:text-neutral-300 font-medium"
                            >
                                Documentation
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
}
