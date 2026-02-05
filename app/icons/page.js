"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import { ALL_ICONS, Search, XIcon, Globe } from "@/components/icons";
import IconDetail from "@/components/IconDetail";
import Counter from "@/components/Counter";
import { motion, AnimatePresence } from "framer-motion";

export default function IconsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIcon, setSelectedIcon] = useState(null);

    const filteredIcons = useMemo(() => {
        return ALL_ICONS.filter((icon) =>
            icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            icon.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-20">
                {/* Header and Search */}
                <header className="mb-20 space-y-12 pt-16">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-widest border border-blue-500/20"
                        >
                            <Globe size={12} />
                            Library v1.0
                        </motion.div>
                        <h1 className="text-5xl sm:text-6xl font-black tracking-tightest leading-none">
                            THE <span className="text-neutral-600">COLLECTION.</span>
                        </h1>
                        <p className="text-neutral-500 dark:text-neutral-400 max-w-xl text-lg leading-relaxed font-medium">
                            A carefully curated library of <Counter value={ALL_ICONS.length} className="font-black text-black dark:text-white" />+ production-ready animated icons.
                            Built for modern interfaces with Framer Motion.
                        </p>
                    </div>

                    <div className="relative max-w-8xl group">
                        <div className="absolute inset-0 bg-blue-500/5 blur-2xl group-focus-within:bg-blue-500/10 transition-all rounded-3xl" />
                        <div className="relative flex items-center">
                            <div className="absolute left-5 text-neutral-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                                <Search size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by name or category..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-12 py-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-lg font-medium shadow-sm"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-5 p-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400 hover:text-black dark:hover:text-white transition-all"
                                >
                                    <XIcon size={14} />
                                </button>
                            )}
                        </div>
                    </div>
                </header>

                {/* Icons Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredIcons.map((icon, index) => (
                            <motion.div
                                layout
                                key={icon.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index % 6 * 0.05 }}
                                onClick={() => setSelectedIcon(icon)}
                                className="group relative aspect-square flex flex-col items-center justify-center p-8 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-900 bg-neutral-50/30 dark:bg-neutral-900/30 hover:bg-white dark:hover:bg-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-800 hover:shadow-2xl hover:shadow-black/3 dark:hover:shadow-white/3 cursor-pointer transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <div className="flex-1 flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-110">
                                    <icon.component size={40} className="text-black dark:text-white" />
                                </div>
                                <span className="mt-6 text-[11px] font-bold text-neutral-400 group-hover:text-black dark:group-hover:text-white uppercase tracking-widest transition-colors z-10">
                                    {icon.name}
                                </span>

                                {/* Visual indicator for category */}
                                <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 text-[10px] font-bold text-neutral-500 opacity-0 group-hover:opacity-100 transition-all uppercase tracking-tighter">
                                    {icon.category}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredIcons.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-40 bg-neutral-50 dark:bg-neutral-950 rounded-[3rem] border border-dashed border-neutral-200 dark:border-neutral-800"
                    >
                        <div className="w-16 h-16 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center mx-auto mb-6 text-neutral-400">
                            <Search size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">No results found</h3>
                        <p className="text-neutral-500 max-w-xs mx-auto">
                            We couldn't find any icons matching "{searchQuery}". Try different keywords.
                        </p>
                    </motion.div>
                )}
            </main>

            {/* Icon Detail Modal */}
            <IconDetail
                icon={selectedIcon}
                onClose={() => setSelectedIcon(null)}
            />
        </div>
    );
}
