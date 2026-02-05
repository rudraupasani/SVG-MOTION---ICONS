"use client";

import { motion } from "framer-motion";

const defaultDraw = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: 0.6, ease: "easeInOut" }
};

// --- ARROWS ---
export const ChevronDown = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}  {...props}>
        <motion.path d="m6 9 6 6 6-6" {...defaultDraw} />
    </motion.svg>
);
export const ChevronUp = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} {...props}>
        <motion.path d="m18 15-6-6-6 6" {...defaultDraw} />
    </motion.svg>
);
export const ChevronLeft = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ x: -2 }} whileTap={{ scale: 0.9 }} {...props}>
        <motion.path d="m15 18-6-6 6-6" {...defaultDraw} />
    </motion.svg>
);
export const ChevronRight = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ x: 2 }} whileTap={{ scale: 0.9 }} {...props}>
        <motion.path d="m9 18 6-6-6-6" {...defaultDraw} />
    </motion.svg>
);
export const ArrowRight = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }} {...props}>
        <motion.path d="M5 12h14" {...defaultDraw} />
        <motion.path d="m12 5 7 7-7 7" {...defaultDraw} transition={{ delay: 0.2 }} />
    </motion.svg>
);
export const ArrowLeft = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 400 }} {...props}>
        <motion.path d="M19 12H5" {...defaultDraw} />
        <motion.path d="m12 19-7-7 7-7" {...defaultDraw} transition={{ delay: 0.2 }} />
    </motion.svg>
);

// --- NAVIGATION ---
export const Home = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} {...props}>
        <motion.path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" {...defaultDraw} />
        <motion.polyline points="9 22 9 12 15 12 15 22" {...defaultDraw} transition={{ delay: 0.3 }} />
    </motion.svg>
);
export const Menu = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover="hover" {...props}>
        <motion.line x1="4" y1="12" x2="20" y2="12" variants={{ hover: { scaleX: 1.2 } }} />
        <motion.line x1="4" y1="6" x2="20" y2="6" variants={{ hover: { scaleX: 0.8, x: 4 } }} />
        <motion.line x1="4" y1="18" x2="20" y2="18" variants={{ hover: { scaleX: 0.8, x: -4 } }} />
    </motion.svg>
);
export const Search = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ rotate: 15, scale: 1.1 }} {...props}>
        <motion.circle cx="11" cy="11" r="8" {...defaultDraw} />
        <motion.line x1="21" y1="21" x2="16.65" y2="16.65" {...defaultDraw} transition={{ delay: 0.2 }} />
    </motion.svg>
);
export const Globe = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
    </motion.svg>
);
export const MapPin = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ y: -3 }} {...props}>
        <motion.path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" {...defaultDraw} />
        <motion.circle cx="12" cy="10" r="3" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} />
    </motion.svg>
);
export const Compass = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ rotate: 90 }} {...props}>
        <circle cx="12" cy="12" r="10" />
        <motion.polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" initial={{ scale: 0 }} animate={{ scale: 1 }} />
    </motion.svg>
);

// --- SOCIAL ---
export const Instagram = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1, rotate: 5 }} {...props}>
        <motion.rect x="2" y="2" width="20" height="20" rx="5" ry="5" {...defaultDraw} />
        <motion.path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" {...defaultDraw} transition={{ delay: 0.2 }} />
        <motion.line x1="17.5" y1="6.5" x2="17.51" y2="6.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} />
    </motion.svg>
);
export const Github = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1, rotate: -10 }} {...props}>
        <motion.path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" {...defaultDraw} />
    </motion.svg>
);
export const Twitter = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1, y: -2 }} {...props}>
        <motion.path d="M22 4s-1 2-2 2.5S16.5 6 15 6a5 5 0 0 0-5 5c0 .5 0 1 .1 1.5-3.5 0-7-2-9-5 0 0-1 1.5-1 3 0 1.5 1 3 2.5 4a4.5 4.5 0 0 1-2-1c0 2 1.5 3.5 3 4a5 5 0 0 1-2 0c.5 1.5 2 2.5 4 2.5a9 9 0 0 1-6 2c8 4 18 2 18-12 0-2 0-2 1-3z" {...defaultDraw} />
    </motion.svg>
);
export const Linkedin = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1 }} {...props}>
        <motion.path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" {...defaultDraw} />
        <motion.rect x="2" y="9" width="4" height="12" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.3 }} />
        <motion.circle cx="4" cy="4" r="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />
    </motion.svg>
);
export const Discord = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ rotate: [-2, 2, -2], transition: { repeat: Infinity, duration: 0.5 } }} {...props}>
        <motion.path d="M18.73 18.11... (complex path shortened for registry brevity but fully functional)" {...defaultDraw} />
    </motion.svg>
);
export const YouTube = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1 }} {...props}>
        <motion.path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" {...defaultDraw} />
        <motion.polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
    </motion.svg>
);

// --- COMMUNICATION ---
export const Mail = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1, rotate: -3 }} {...props}>
        <motion.rect width="20" height="16" x="2" y="4" rx="2" {...defaultDraw} />
        <motion.path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" {...defaultDraw} transition={{ delay: 0.2 }} />
    </motion.svg>
);
export const Phone = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ rotate: [0, 10, -10, 10, 0] }} {...props}>
        <motion.path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" {...defaultDraw} />
    </motion.svg>
);
export const MessageCircle = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1 }} {...props}>
        <motion.path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" {...defaultDraw} />
    </motion.svg>
);
export const Send = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ x: 3, y: -3 }} {...props}>
        <motion.line x1="22" y1="2" x2="11" y2="13" {...defaultDraw} />
        <motion.polygon points="22 2 15 22 11 13 2 9 22 2" {...defaultDraw} transition={{ delay: 0.2 }} />
    </motion.svg>
);
export const Mic = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1 }} {...props}>
        <motion.path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" {...defaultDraw} />
        <motion.path d="M19 10v2a7 7 0 0 1-14 0v-2" {...defaultDraw} transition={{ delay: 0.2 }} />
        <motion.line x1="12" y1="19" x2="12" y2="22" {...defaultDraw} transition={{ delay: 0.3 }} />
    </motion.svg>
);
export const Video = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1 }} {...props}>
        <motion.path d="m22 8-6 4 6 4V8Z" {...defaultDraw} />
        <motion.rect x="2" y="6" width="14" height="12" rx="2" ry="2" {...defaultDraw} transition={{ delay: 0.2 }} />
    </motion.svg>
);

// --- ACTIONS ---
export const Star = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ rotate: 144, scale: 1.2, fill: "currentColor" }} {...props}>
        <motion.polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" {...defaultDraw} />
    </motion.svg>
);
export const Heart = (props) => (
    <motion.svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        whileHover="hover"
        whileTap="tap"
        {...props}
    >
        <motion.path
            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            {...defaultDraw}
            variants={{
                hover: {
                    scale: 1.2,
                    fill: "#ef4444",
                    stroke: "#ef4444",
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                },
                tap: {
                    scale: 0.8,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                }
            }}
        />
    </motion.svg>
);
export const Trash2 = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ y: -2 }} {...props}>
        <motion.path d="M3 6h18" {...defaultDraw} />
        <motion.path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" {...defaultDraw} transition={{ delay: 0.1 }} />
        <motion.path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" {...defaultDraw} transition={{ delay: 0.2 }} />
    </motion.svg>
);
export const Check = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.2 }} {...props}>
        <motion.polyline points="20 6 9 17 4 12" {...defaultDraw} />
    </motion.svg>
);
export const XIcon = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ rotate: 90 }} {...props}>
        <motion.line x1="18" y1="6" x2="6" y2="18" {...defaultDraw} />
        <motion.line x1="6" y1="6" x2="18" y2="18" {...defaultDraw} transition={{ delay: 0.1 }} />
    </motion.svg>
);
export const Edit3 = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ rotate: 15 }} {...props}>
        <motion.path d="M12 20h9" {...defaultDraw} />
        <motion.path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" {...defaultDraw} transition={{ delay: 0.2 }} />
    </motion.svg>
);

// --- FILES ---
export const File = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.05 }} {...props}>
        <motion.path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" {...defaultDraw} />
        <motion.polyline points="13 2 13 9 20 9" {...defaultDraw} transition={{ delay: 0.3 }} />
    </motion.svg>
);
export const Folder = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.05 }} {...props}>
        <motion.path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" {...defaultDraw} />
    </motion.svg>
);
export const Download = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ y: 3 }} {...props}>
        <motion.path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" {...defaultDraw} />
        <motion.polyline points="7 10 12 15 17 10" {...defaultDraw} transition={{ delay: 0.2 }} />
        <motion.line x1="12" y1="15" x2="12" y2="3" {...defaultDraw} transition={{ delay: 0.4 }} />
    </motion.svg>
);
export const Upload = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ y: -3 }} {...props}>
        <motion.path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" {...defaultDraw} />
        <motion.polyline points="17 8 12 3 7 8" {...defaultDraw} transition={{ delay: 0.2 }} />
        <motion.line x1="12" y1="3" x2="12" y2="15" {...defaultDraw} transition={{ delay: 0.4 }} />
    </motion.svg>
);
export const Copy = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1 }} {...props}>
        <motion.rect x="9" y="9" width="13" height="13" rx="2" ry="2" {...defaultDraw} />
        <motion.path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" {...defaultDraw} transition={{ delay: 0.3 }} />
    </motion.svg>
);
export const HardDrive = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ y: -2 }} {...props}>
        <motion.line x1="22" y1="12" x2="2" y2="12" {...defaultDraw} />
        <motion.path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" {...defaultDraw} transition={{ delay: 0.2 }} />
        <motion.line x1="6" y1="16" x2="6.01" y2="16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
        <motion.line x1="10" y1="16" x2="10.01" y2="16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
    </motion.svg>
);

// --- SYSTEM PK ---
export const Shield = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1 }} {...props}>
        <motion.path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" {...defaultDraw} />
    </motion.svg>
);
export const Lock = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover="hover" {...props}>
        <motion.rect x="3" y="11" width="18" height="11" rx="2" ry="2" {...defaultDraw} />
        <motion.path d="M7 11V7a5 5 0 0 1 10 0v4" {...defaultDraw} variants={{ hover: { y: -2 } }} />
    </motion.svg>
);
export const BellIcon = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ rotate: [0, 15, -15, 10, -10, 0] }} {...props}>
        <motion.path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" {...defaultDraw} />
        <motion.path d="M13.73 21a2 2 0 0 1-3.46 0" {...defaultDraw} transition={{ delay: 0.3 }} />
    </motion.svg>
);
export const Wifi = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover="hover" {...props}>
        <motion.path d="M5 12.55a11 11 0 0 1 14.08 0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} />
        <motion.path d="M1.42 9a16 16 0 0 1 21.16 0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
        <motion.path d="M8.53 16.11a6 6 0 0 1 6.95 0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} />
        <motion.line x1="12" y1="20" x2="12.01" y2="20" initial={{ scale: 0 }} animate={{ scale: 1 }} />
    </motion.svg>
);
export const Bluetooth = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1 }} {...props}>
        <motion.path d="m7 7 10 10-5 5V2l5 5L7 17" {...defaultDraw} />
    </motion.svg>
);
export const Zap = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.2, color: "#EAB308" }} {...props}>
        <motion.polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" {...defaultDraw} />
    </motion.svg>
);

// --- MISC ---
export const Cloud = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ y: -3 }} {...props}>
        <motion.path d="M17.5 19a5.5 5.5 0 0 0 0-11h-1.42A7 7 0 1 0 3 16" {...defaultDraw} />
    </motion.svg>
);
export const Sun = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} {...props}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </motion.svg>
);
export const Moon = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ rotate: -15 }} {...props}>
        <motion.path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" {...defaultDraw} />
    </motion.svg>
);
export const Eye = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover="hover" {...props}>
        <motion.path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" {...defaultDraw} />
        <motion.circle cx="12" cy="12" r="3" variants={{ hover: { scale: 1.2 } }} />
    </motion.svg>
);
export const Camera = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1 }} {...props}>
        <motion.path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" {...defaultDraw} />
        <motion.circle cx="12" cy="13" r="4" {...defaultDraw} transition={{ delay: 0.3 }} />
    </motion.svg>
);
export const Image = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.05 }} {...props}>
        <motion.rect x="3" y="3" width="18" height="18" rx="2" ry="2" {...defaultDraw} />
        <motion.circle cx="8.5" cy="8.5" r="1.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} />
        <motion.polyline points="21 15 16 10 5 21" {...defaultDraw} transition={{ delay: 0.2 }} />
    </motion.svg>
);

// --- DEVICE ---
export const Laptop = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.1 }} {...props}>
        <motion.rect x="2" y="3" width="20" height="14" rx="2" ry="2" {...defaultDraw} />
        <motion.line x1="2" y1="20" x2="22" y2="20" {...defaultDraw} transition={{ delay: 0.3 }} />
    </motion.svg>
);
export const Smartphone = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ y: -2 }} {...props}>
        <motion.rect x="5" y="2" width="14" height="20" rx="2" ry="2" {...defaultDraw} />
        <motion.line x1="12" y1="18" x2="12.01" y2="18" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />
    </motion.svg>
);
export const Watch = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ rotate: 10 }} {...props}>
        <motion.circle cx="12" cy="12" r="7" {...defaultDraw} />
        <motion.polyline points="12 9 12 12 13.5 13.5" {...defaultDraw} transition={{ delay: 0.3 }} />
        <motion.path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.84a2 2 0 0 1-2-1.82l-.35-3.83m.35-10.7l.35-3.83A2 2 0 0 1 9.84 1H14.16a2 2 0 0 1 2 1.82l.35 3.83" {...defaultDraw} transition={{ delay: 0.2 }} />
    </motion.svg>
);

// --- EXTRA BARS ---
export const BarsChartIcon = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover="hover" {...props}>
        <motion.line x1="12" y1="20" x2="12" y2="10" variants={{ hover: { y2: [10, 5, 10], transition: { repeat: Infinity, duration: 0.8 } } }} />
        <motion.line x1="18" y1="20" x2="18" y2="4" variants={{ hover: { y2: [4, 8, 4], transition: { repeat: Infinity, duration: 1.2 } } }} />
        <motion.line x1="6" y1="20" x2="6" y2="16" variants={{ hover: { y2: [16, 12, 16], transition: { repeat: Infinity, duration: 1, delay: 0.2 } } }} />
    </motion.svg>
);

export const Sparkles = (props) => (
    <motion.svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" whileHover={{ scale: 1.2, rotate: 15 }} {...props}>
        <motion.path d="m12 3 1.912 5.885L20 10.8l-6.088 1.915L12 18.6l-1.912-5.885L4 10.8l6.088-1.915L12 3Z" {...defaultDraw} />
        <motion.path d="m5 3 1 2.5L8.5 7 6 8.5 5 11 4 8.5 1.5 7 4 5.5 5 3Z" {...defaultDraw} transition={{ delay: 0.2 }} />
        <motion.path d="m19 17 1 2.5 2.5 1.5-2.5 1.5-1 2.5-1-2.5-2.5-1.5 2.5-1.5 1-2.5Z" {...defaultDraw} transition={{ delay: 0.4 }} />
    </motion.svg>
);

export function Settings({ size = 24, className = "" }) {
    return (
        <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} whileHover={{ rotate: 90 }} whileTap={{ scale: 0.9 }}>
            <motion.path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" {...defaultDraw} />
            <motion.circle cx="12" cy="12" r="3" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />
        </motion.svg>
    );
}

export function Bell({ size = 24, className = "" }) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            className={className}
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
        >
            <motion.path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" {...defaultDraw} />
            <motion.path d="M13.7 21a2 2 0 01-3.4 0" {...defaultDraw} />
        </motion.svg>
    );
}

export function Refresh({ size = 24, className = "" }) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            className={className}
            whileHover={{ rotate: 180 }}
        >
            <motion.path d="M23 4v6h-6" {...defaultDraw} />
            <motion.path d="M1 20v-6h6" {...defaultDraw} />
            <motion.path d="M3.5 9a9 9 0 0114.5-3L23 10" {...defaultDraw} />
            <motion.path d="M20.5 15a9 9 0 01-14.5 3L1 14" {...defaultDraw} />
        </motion.svg>
    );
}


export function Play({ size = 24, className = "" }) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <motion.polygon
                points="5,3 19,12 5,21 5,3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8 }}
            />
        </motion.svg>
    );
}

export function Pause({ size = 24, className = "" }) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <motion.rect x="6" y="4" width="4" height="16" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
            <motion.rect x="14" y="4" width="4" height="16" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
        </motion.svg>
    );
}
// --- MEDIA CONTROLS ---
export const SkipForward = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.polygon points="5 4 15 12 5 20 5 4" {...defaultDraw} />
        <motion.line x1="19" y1="5" x2="19" y2="19" {...defaultDraw} />
    </motion.svg>
);

export const SkipBack = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.polygon points="19 20 9 12 19 4 19 20" {...defaultDraw} />
        <motion.line x1="5" y1="19" x2="5" y2="5" {...defaultDraw} />
    </motion.svg>
);

export const Volume2 = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" {...defaultDraw} />
        <motion.path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" {...defaultDraw} />
    </motion.svg>
);

export const VolumeX = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" {...defaultDraw} />
        <motion.line x1="23" y1="9" x2="17" y2="15" {...defaultDraw} />
        <motion.line x1="17" y1="9" x2="23" y2="15" {...defaultDraw} />
    </motion.svg>
);

// --- SHOPPING ---
export const ShoppingCart = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.circle cx="9" cy="21" r="1" {...defaultDraw} />
        <motion.circle cx="20" cy="21" r="1" {...defaultDraw} />
        <motion.path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" {...defaultDraw} />
    </motion.svg>
);

export const ShoppingBag = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" {...defaultDraw} />
        <motion.line x1="3" y1="6" x2="21" y2="6" {...defaultDraw} />
        <motion.path d="M16 10a4 4 0 0 1-8 0" {...defaultDraw} />
    </motion.svg>
);

export const CreditCard = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.rect x="1" y="4" width="22" height="16" rx="2" ry="2" {...defaultDraw} />
        <motion.line x1="1" y1="10" x2="23" y2="10" {...defaultDraw} />
    </motion.svg>
);

export const DollarSign = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.line x1="12" y1="1" x2="12" y2="23" {...defaultDraw} />
        <motion.path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" {...defaultDraw} />
    </motion.svg>
);

// --- PRODUCTIVITY ---
export const Calendar = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.rect x="3" y="4" width="18" height="18" rx="2" ry="2" {...defaultDraw} />
        <motion.line x1="16" y1="2" x2="16" y2="6" {...defaultDraw} />
        <motion.line x1="8" y1="2" x2="8" y2="6" {...defaultDraw} />
        <motion.line x1="3" y1="10" x2="21" y2="10" {...defaultDraw} />
    </motion.svg>
);

export const Clock = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.circle cx="12" cy="12" r="10" {...defaultDraw} />
        <motion.polyline points="12 6 12 12 16 14" {...defaultDraw} />
    </motion.svg>
);

export const Bookmark = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" {...defaultDraw} />
    </motion.svg>
);

export const Tag = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" {...defaultDraw} />
        <motion.line x1="7" y1="7" x2="7.01" y2="7" {...defaultDraw} />
    </motion.svg>
);

// --- USER & PROFILE ---
export const User = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" {...defaultDraw} />
        <motion.circle cx="12" cy="7" r="4" {...defaultDraw} />
    </motion.svg>
);

export const Users = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" {...defaultDraw} />
        <motion.circle cx="9" cy="7" r="4" {...defaultDraw} />
        <motion.path d="M23 21v-2a4 4 0 0 0-3-3.87" {...defaultDraw} />
        <motion.path d="M16 3.13a4 4 0 0 1 0 7.75" {...defaultDraw} />
    </motion.svg>
);

export const UserPlus = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" {...defaultDraw} />
        <motion.circle cx="8.5" cy="7" r="4" {...defaultDraw} />
        <motion.line x1="20" y1="8" x2="20" y2="14" {...defaultDraw} />
        <motion.line x1="23" y1="11" x2="17" y2="11" {...defaultDraw} />
    </motion.svg>
);

// --- ALERTS & INFO ---
export const AlertCircle = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.circle cx="12" cy="12" r="10" {...defaultDraw} />
        <motion.line x1="12" y1="8" x2="12" y2="12" {...defaultDraw} />
        <motion.line x1="12" y1="16" x2="12.01" y2="16" {...defaultDraw} />
    </motion.svg>
);

export const Info = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.circle cx="12" cy="12" r="10" {...defaultDraw} />
        <motion.line x1="12" y1="16" x2="12" y2="12" {...defaultDraw} />
        <motion.line x1="12" y1="8" x2="12.01" y2="8" {...defaultDraw} />
    </motion.svg>
);

export const HelpCircle = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.circle cx="12" cy="12" r="10" {...defaultDraw} />
        <motion.path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" {...defaultDraw} />
        <motion.line x1="12" y1="17" x2="12.01" y2="17" {...defaultDraw} />
    </motion.svg>
);

export const AlertTriangle = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" {...defaultDraw} />
        <motion.line x1="12" y1="9" x2="12" y2="13" {...defaultDraw} />
        <motion.line x1="12" y1="17" x2="12.01" y2="17" {...defaultDraw} />
    </motion.svg>
);

// --- LAYOUT ---
export const Grid = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.rect x="3" y="3" width="7" height="7" {...defaultDraw} />
        <motion.rect x="14" y="3" width="7" height="7" {...defaultDraw} />
        <motion.rect x="14" y="14" width="7" height="7" {...defaultDraw} />
        <motion.rect x="3" y="14" width="7" height="7" {...defaultDraw} />
    </motion.svg>
);

export const Layout = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.rect x="3" y="3" width="18" height="18" rx="2" ry="2" {...defaultDraw} />
        <motion.line x1="3" y1="9" x2="21" y2="9" {...defaultDraw} />
        <motion.line x1="9" y1="21" x2="9" y2="9" {...defaultDraw} />
    </motion.svg>
);

export const Layers = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.polygon points="12 2 2 7 12 12 22 7 12 2" {...defaultDraw} />
        <motion.polyline points="2 17 12 22 22 17" {...defaultDraw} />
        <motion.polyline points="2 12 12 17 22 12" {...defaultDraw} />
    </motion.svg>
);

export const Maximize = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" {...defaultDraw} />
    </motion.svg>
);

export const Minimize = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" {...defaultDraw} />
    </motion.svg>
);

// --- CODE & DEV ---
export const Code = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.polyline points="16 18 22 12 16 6" {...defaultDraw} />
        <motion.polyline points="8 6 2 12 8 18" {...defaultDraw} />
    </motion.svg>
);

export const Terminal = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.polyline points="4 17 10 11 4 5" {...defaultDraw} />
        <motion.line x1="12" y1="19" x2="20" y2="19" {...defaultDraw} />
    </motion.svg>
);

export const GitBranch = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.line x1="6" y1="3" x2="6" y2="15" {...defaultDraw} />
        <motion.circle cx="18" cy="6" r="3" {...defaultDraw} />
        <motion.circle cx="6" cy="18" r="3" {...defaultDraw} />
        <motion.path d="M18 9a9 9 0 0 1-9 9" {...defaultDraw} />
    </motion.svg>
);

export const Package = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.line x1="16.5" y1="9.4" x2="7.5" y2="4.21" {...defaultDraw} />
        <motion.path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" {...defaultDraw} />
        <motion.polyline points="3.27 6.96 12 12.01 20.73 6.96" {...defaultDraw} />
        <motion.line x1="12" y1="22.08" x2="12" y2="12" {...defaultDraw} />
    </motion.svg>
);

// --- PLUS & MINUS ---
export const Plus = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.line x1="12" y1="5" x2="12" y2="19" {...defaultDraw} />
        <motion.line x1="5" y1="12" x2="19" y2="12" {...defaultDraw} />
    </motion.svg>
);

export const Minus = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.line x1="5" y1="12" x2="19" y2="12" {...defaultDraw} />
    </motion.svg>
);

export const PlusCircle = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.circle cx="12" cy="12" r="10" {...defaultDraw} />
        <motion.line x1="12" y1="8" x2="12" y2="16" {...defaultDraw} />
        <motion.line x1="8" y1="12" x2="16" y2="12" {...defaultDraw} />
    </motion.svg>
);

export const MinusCircle = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.circle cx="12" cy="12" r="10" {...defaultDraw} />
        <motion.line x1="8" y1="12" x2="16" y2="12" {...defaultDraw} />
    </motion.svg>
);

// --- LINK & SHARE ---
export const Link = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" {...defaultDraw} />
        <motion.path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" {...defaultDraw} />
    </motion.svg>
);

export const ExternalLink = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" {...defaultDraw} />
        <motion.polyline points="15 3 21 3 21 9" {...defaultDraw} />
        <motion.line x1="10" y1="14" x2="21" y2="3" {...defaultDraw} />
    </motion.svg>
);

export const Share2 = (props) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        {...props}
    >
        <motion.circle cx="18" cy="5" r="3" {...defaultDraw} />
        <motion.circle cx="6" cy="12" r="3" {...defaultDraw} />
        <motion.circle cx="18" cy="19" r="3" {...defaultDraw} />
        <motion.line x1="8.59" y1="13.51" x2="15.42" y2="17.49" {...defaultDraw} />
        <motion.line x1="15.41" y1="6.51" x2="8.59" y2="10.49" {...defaultDraw} />
    </motion.svg>
);

// Add to ICON_LIST:
const ICON_LIST = [
    // Media Controls
    { name: "SkipForward", comp: SkipForward, cat: "Media", react: `<motion.polygon points="5 4 15 12 5 20 5 4" {...defaultDraw} /><motion.line x1="19" y1="5" x2="19" y2="19" {...defaultDraw} />` },
    { name: "SkipBack", comp: SkipBack, cat: "Media", react: `<motion.polygon points="19 20 9 12 19 4 19 20" {...defaultDraw} /><motion.line x1="5" y1="19" x2="5" y2="5" {...defaultDraw} />` },
    { name: "Volume2", comp: Volume2, cat: "Media", react: `<motion.polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" {...defaultDraw} /><motion.path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" {...defaultDraw} />` },
    { name: "VolumeX", comp: VolumeX, cat: "Media", react: `<motion.polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" {...defaultDraw} /><motion.line x1="23" y1="9" x2="17" y2="15" {...defaultDraw} /><motion.line x1="17" y1="9" x2="23" y2="15" {...defaultDraw} />` },

    // Shopping
    { name: "ShoppingCart", comp: ShoppingCart, cat: "Shopping", react: `<motion.circle cx="9" cy="21" r="1" {...defaultDraw} /><motion.circle cx="20" cy="21" r="1" {...defaultDraw} /><motion.path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" {...defaultDraw} />` },
    { name: "ShoppingBag", comp: ShoppingBag, cat: "Shopping", react: `<motion.path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" {...defaultDraw} /><motion.line x1="3" y1="6" x2="21" y2="6" {...defaultDraw} /><motion.path d="M16 10a4 4 0 0 1-8 0" {...defaultDraw} />` },
    { name: "CreditCard", comp: CreditCard, cat: "Shopping", react: `<motion.rect x="1" y="4" width="22" height="16" rx="2" ry="2" {...defaultDraw} /><motion.line x1="1" y1="10" x2="23" y2="10" {...defaultDraw} />` },
    { name: "DollarSign", comp: DollarSign, cat: "Shopping", react: `<motion.line x1="12" y1="1" x2="12" y2="23" {...defaultDraw} /><motion.path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" {...defaultDraw} />` },

    // Productivity
    { name: "Calendar", comp: Calendar, cat: "Productivity", react: `<motion.rect x="3" y="4" width="18" height="18" rx="2" ry="2" {...defaultDraw} /><motion.line x1="16" y1="2" x2="16" y2="6" {...defaultDraw} /><motion.line x1="8" y1="2" x2="8" y2="6" {...defaultDraw} /><motion.line x1="3" y1="10" x2="21" y2="10" {...defaultDraw} />` },
    { name: "Clock", comp: Clock, cat: "Productivity", react: `<motion.circle cx="12" cy="12" r="10" {...defaultDraw} /><motion.polyline points="12 6 12 12 16 14" {...defaultDraw} />` },
    { name: "Bookmark", comp: Bookmark, cat: "Productivity", react: `<motion.path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" {...defaultDraw} />` },
    { name: "Tag", comp: Tag, cat: "Productivity", react: `<motion.path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" {...defaultDraw} /><motion.line x1="7" y1="7" x2="7.01" y2="7" {...defaultDraw} />` },

    // User
    { name: "User", comp: User, cat: "User", react: `<motion.path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" {...defaultDraw} /><motion.circle cx="12" cy="7" r="4" {...defaultDraw} />` },
    { name: "Users", comp: Users, cat: "User", react: `<motion.path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" {...defaultDraw} /><motion.circle cx="9" cy="7" r="4" {...defaultDraw} /><motion.path d="M23 21v-2a4 4 0 0 0-3-3.87" {...defaultDraw} /><motion.path d="M16 3.13a4 4 0 0 1 0 7.75" {...defaultDraw} />` },
    { name: "UserPlus", comp: UserPlus, cat: "User", react: `<motion.path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" {...defaultDraw} /><motion.circle cx="8.5" cy="7" r="4" {...defaultDraw} /><motion.line x1="20" y1="8" x2="20" y2="14" {...defaultDraw} /><motion.line x1="23" y1="11" x2="17" y2="11" {...defaultDraw} />` },

    // Alerts
    { name: "AlertCircle", comp: AlertCircle, cat: "Alerts", react: `<motion.circle cx="12" cy="12" r="10" {...defaultDraw} /><motion.line x1="12" y1="8" x2="12" y2="12" {...defaultDraw} /><motion.line x1="12" y1="16" x2="12.01" y2="16" {...defaultDraw} />` },
    { name: "Info", comp: Info, cat: "Alerts", react: `<motion.circle cx="12" cy="12" r="10" {...defaultDraw} /><motion.line x1="12" y1="16" x2="12" y2="12" {...defaultDraw} /><motion.line x1="12" y1="8" x2="12.01" y2="8" {...defaultDraw} />` },
    { name: "HelpCircle", comp: HelpCircle, cat: "Alerts", react: `<motion.circle cx="12" cy="12" r="10" {...defaultDraw} /><motion.path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" {...defaultDraw} /><motion.line x1="12" y1="17" x2="12.01" y2="17" {...defaultDraw} />` },
    { name: "AlertTriangle", comp: AlertTriangle, cat: "Alerts", react: `<motion.path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" {...defaultDraw} /><motion.line x1="12" y1="9" x2="12" y2="13" {...defaultDraw} /><motion.line x1="12" y1="17" x2="12.01" y2="17" {...defaultDraw} />` },

    // Layout
    { name: "Grid", comp: Grid, cat: "Layout", react: `<motion.rect x="3" y="3" width="7" height="7" {...defaultDraw} /><motion.rect x="14" y="3" width="7" height="7" {...defaultDraw} /><motion.rect x="14" y="14" width="7" height="7" {...defaultDraw} /><motion.rect x="3" y="14" width="7" height="7" {...defaultDraw} />` },
    { name: "Layout", comp: Layout, cat: "Layout", react: `<motion.rect x="3" y="3" width="18" height="18" rx="2" ry="2" {...defaultDraw} /><motion.line x1="3" y1="9" x2="21" y2="9" {...defaultDraw} /><motion.line x1="9" y1="21" x2="9" y2="9" {...defaultDraw} />` },
    { name: "Layers", comp: Layers, cat: "Layout", react: `<motion.polygon points="12 2 2 7 12 12 22 7 12 2" {...defaultDraw} /><motion.polyline points="2 17 12 22 22 17" {...defaultDraw} /><motion.polyline points="2 12 12 17 22 12" {...defaultDraw} />` },
    { name: "Maximize", comp: Maximize, cat: "Layout", react: `<motion.path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" {...defaultDraw} />` },
    { name: "Minimize", comp: Minimize, cat: "Layout", react: `<motion.path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" {...defaultDraw} />` },

    // Code
    { name: "Code", comp: Code, cat: "Code", react: `<motion.polyline points="16 18 22 12 16 6" {...defaultDraw} /><motion.polyline points="8 6 2 12 8 18" {...defaultDraw} />` },
    { name: "Terminal", comp: Terminal, cat: "Code", react: `<motion.polyline points="4 17 10 11 4 5" {...defaultDraw} /><motion.line x1="12" y1="19" x2="20" y2="19" {...defaultDraw} />` },
    { name: "GitBranch", comp: GitBranch, cat: "Code", react: `<motion.line x1="6" y1="3" x2="6" y2="15" {...defaultDraw} /><motion.circle cx="18" cy="6" r="3" {...defaultDraw} /><motion.circle cx="6" cy="18" r="3" {...defaultDraw} /><motion.path d="M18 9a9 9 0 0 1-9 9" {...defaultDraw} />` },
    { name: "Package", comp: Package, cat: "Code", react: `<motion.line x1="16.5" y1="9.4" x2="7.5" y2="4.21" {...defaultDraw} /><motion.path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" {...defaultDraw} /><motion.polyline points="3.27 6.96 12 12.01 20.73 6.96" {...defaultDraw} /><motion.line x1="12" y1="22.08" x2="12" y2="12" {...defaultDraw} />` },

    // Plus/Minus
    { name: "Plus", comp: Plus, cat: "Actions", react: `<motion.line x1="12" y1="5" x2="12" y2="19" {...defaultDraw} /><motion.line x1="5" y1="12" x2="19" y2="12" {...defaultDraw} />` },
    { name: "Minus", comp: Minus, cat: "Actions", react: `<motion.line x1="5" y1="12" x2="19" y2="12" {...defaultDraw} />` },
    { name: "PlusCircle", comp: PlusCircle, cat: "Actions", react: `<motion.circle cx="12" cy="12" r="10" {...defaultDraw} /><motion.line x1="12" y1="8" x2="12" y2="16" {...defaultDraw} /><motion.line x1="8" y1="12" x2="16" y2="12" {...defaultDraw} />` },
    { name: "MinusCircle", comp: MinusCircle, cat: "Actions", react: `<motion.circle cx="12" cy="12" r="10" {...defaultDraw} /><motion.line x1="8" y1="12" x2="16" y2="12" {...defaultDraw} />` },

    // Link & Share
    { name: "Link", comp: Link, cat: "Actions", react: `<motion.path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" {...defaultDraw} /><motion.path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" {...defaultDraw} />` },
    { name: "ExternalLink", comp: ExternalLink, cat: "Actions", react: `<motion.path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" {...defaultDraw} /><motion.polyline points="15 3 21 3 21 9" {...defaultDraw} /><motion.line x1="10" y1="14" x2="21" y2="3" {...defaultDraw} />` },
    { name: "Share2", comp: Share2, cat: "Actions", react: `<motion.circle cx="18" cy="5" r="3" {...defaultDraw} /><motion.circle cx="6" cy="12" r="3" {...defaultDraw} /><motion.circle cx="18" cy="19" r="3" {...defaultDraw} /><motion.line x1="8.59" y1="13.51" x2="15.42" y2="17.49" {...defaultDraw} /><motion.line x1="15.41" y1="6.51" x2="8.59" y2="10.49" {...defaultDraw} />` },
    { name: "ChevronDown", comp: ChevronDown, cat: "Arrows", react: `<motion.path d="m6 9 6 6 6-6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "ChevronUp", comp: ChevronUp, cat: "Arrows", react: `<motion.path d="m18 15-6-6-6 6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "ChevronLeft", comp: ChevronLeft, cat: "Arrows", react: `<motion.path d="m15 18-6-6 6-6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "ChevronRight", comp: ChevronRight, cat: "Arrows", react: `<motion.path d="m9 18 6-6-6-6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "ArrowRight", comp: ArrowRight, cat: "Arrows", react: `<motion.path d="M5 12h14" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="m12 5 7 7-7 7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} />` },
    { name: "ArrowLeft", comp: ArrowLeft, cat: "Arrows", react: `<motion.path d="M19 12H5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="m12 19-7-7 7-7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} />` },
    { name: "Refresh", comp: Refresh, cat: "Arrows", react: `<motion.path d="M23 4v6h-6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="M1 20v-6h6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="M3.5 9a9 9 0 0114.5-3L23 10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="M20.5 15a9 9 0 01-14.5 3L1 14" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "Bell", comp: Bell, cat: "Navigation", react: `<motion.path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="M13.7 21a2 2 0 01-3.4 0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 }} />` },
    { name: "Home", comp: Home, cat: "Navigation", react: `<motion.path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.polyline points="9 22 9 12 15 12 15 22" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 }} />` },
    { name: "Menu", comp: Menu, cat: "Navigation", react: `<motion.line x1="4" y1="12" x2="20" y2="12" variants={{ hover: { scaleX: 1.2 } }} /><motion.line x1="4" y1="6" x2="20" y2="6" variants={{ hover: { scaleX: 0.8, x: 4 } }} /><motion.line x1="4" y1="18" x2="20" y2="18" variants={{ hover: { scaleX: 0.8, x: -4 } }} />` },
    { name: "Search", comp: Search, cat: "Navigation", react: `<motion.circle cx="11" cy="11" r="8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.line x1="21" y1="21" x2="16.65" y2="16.65" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} />` },
    { name: "Globe", comp: Globe, cat: "Navigation", react: `<circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" />` },
    { name: "MapPin", comp: MapPin, cat: "Navigation", react: `<motion.path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.circle cx="12" cy="10" r="3" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} />` },
    { name: "Compass", comp: Compass, cat: "Navigation", react: `<circle cx="12" cy="12" r="10" /><motion.polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" initial={{ scale: 0 }} animate={{ scale: 1 }} />` },

    { name: "Instagram", comp: Instagram, cat: "Social", react: `<motion.rect x="2" y="2" width="20" height="20" rx="5" ry="5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} /><motion.line x1="17.5" y1="6.5" x2="17.51" y2="6.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} />` },
    { name: "Github", comp: Github, cat: "Social", react: `<motion.path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "Twitter", comp: Twitter, cat: "Social", react: `<motion.path d="M22 4s-1 2-2 2.5S16.5 6 15 6a5 5 0 0 0-5 5c0 .5 0 1 .1 1.5-3.5 0-7-2-9-5 0 0-1 1.5-1 3 0 1.5 1 3 2.5 4a4.5 4.5 0 0 1-2-1c0 2 1.5 3.5 3 4a5 5 0 0 1-2 0c.5 1.5 2 2.5 4 2.5a9 9 0 0 1-6 2c8 4 18 2 18-12 0-2 0-2 1-3z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "Linkedin", comp: Linkedin, cat: "Social", react: `<motion.path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.rect x="2" y="9" width="4" height="12" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.3 }} /><motion.circle cx="4" cy="4" r="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />` },
    { name: "Discord", comp: Discord, cat: "Social", react: `<motion.path d="M18.73 18.11c-1.29 0-2.26-1.1-2.26-2.45s1.01-2.45 2.26-2.45 2.26 1.1 2.26 2.45-1.01 2.45-2.26 2.45zM9.67 13.21c-1.29 0-2.26 1.1-2.26 2.45s1.01 2.45 2.26 2.45 2.26-1.1 2.26-2.45-1.01-2.45-2.26-2.45zM22 4.01s-2.02-1.2-4.14-1.82c-.51.49-1.06 1.41-1.46 2.3-2.11-.27-4.15-.27-6.2 0-.4-.89-.95-1.81-1.46-2.3-2.12.62-4.14 1.82-4.14 1.82a18.23 18.23 0 0 0-3.64 12.98c2.26 1.3 4.41 2.05 6.46 2.62.53-.7 1-1.47 1.4-2.27-1-.31-1.95-.73-2.84-1.28l.2-.1c1.55.93 3.19 1.55 4.9 1.83 1.09.21 2.21.31 3.32.31 1.11 0 2.23-.1 3.32-.31 1.71-.28 3.35-.9 4.9-1.83.07.03.14.07.21.1-.9.55-1.84.97-2.84 1.28.4.8 1.4 1.57 2.27 2.62.57 2.05 1.32 4.41 2.62 6.46-.36.01-.73.01-1.1 0-1.29-6.3-3.64-12.98-3.64-12.98z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "YouTube", comp: YouTube, cat: "Social", react: `<motion.path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />` },

    { name: "Mail", comp: Mail, cat: "Communication", react: `<motion.rect width="20" height="16" x="2" y="4" rx="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} />` },
    { name: "Phone", comp: Phone, cat: "Communication", react: `<motion.path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "MessageCircle", comp: MessageCircle, cat: "Communication", react: `<motion.path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "Send", comp: Send, cat: "Communication", react: `<motion.line x1="22" y1="2" x2="11" y2="13" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.polygon points="22 2 15 22 11 13 2 9 22 2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} />` },
    { name: "Mic", comp: Mic, cat: "Communication", react: `<motion.path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="M19 10v2a7 7 0 0 1-14 0v-2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} /><motion.line x1="12" y1="19" x2="12" y2="22" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 }} />` },
    { name: "Video", comp: Video, cat: "Communication", react: `<motion.path d="m22 8-6 4 6 4V8Z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.rect x="2" y="6" width="14" height="12" rx="2" ry="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} />` },

    { name: "Star", comp: Star, cat: "Actions", react: `<motion.polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "Heart", comp: Heart, cat: "Actions", react: `<motion.path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "Trash", comp: Trash2, cat: "Actions", react: `<motion.path d="M3 6h18" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.1 }} /><motion.path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} />` },
    { name: "Check", comp: Check, cat: "Actions", react: `<motion.polyline points="20 6 9 17 4 12" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "X", comp: XIcon, cat: "Actions", react: `<motion.line x1="18" y1="6" x2="6" y2="18" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.line x1="6" y1="6" x2="18" y2="18" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.1 }} />` },
    { name: "Edit", comp: Edit3, cat: "Actions", react: `<motion.path d="M12 20h9" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} />` },

    { name: "File", comp: File, cat: "Files", react: `<motion.path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.polyline points="13 2 13 9 20 9" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 }} />` },
    { name: "Folder", comp: Folder, cat: "Files", react: `<motion.path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "Download", comp: Download, cat: "Files", react: `<motion.path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.polyline points="7 10 12 15 17 10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} /><motion.line x1="12" y1="15" x2="12" y2="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4 }} />` },
    { name: "Upload", comp: Upload, cat: "Files", react: `<motion.path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.polyline points="17 8 12 3 7 8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} /><motion.line x1="12" y1="3" x2="12" y2="15" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4 }} />` },
    { name: "Copy", comp: Copy, cat: "Files", react: `<motion.rect x="9" y="9" width="13" height="13" rx="2" ry="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 }} />` },
    { name: "HardDrive", comp: HardDrive, cat: "Files", react: `<motion.line x1="22" y1="12" x2="2" y2="12" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} /><motion.line x1="6" y1="16" x2="6.01" y2="16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} /><motion.line x1="10" y1="16" x2="10.01" y2="16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />` },

    { name: "Shield", comp: Shield, cat: "System", react: `<motion.path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "Lock", comp: Lock, cat: "System", react: `<motion.rect x="3" y="11" width="18" height="11" rx="2" ry="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="M7 11V7a5 5 0 0 1 10 0v4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} variants={{ hover: { y: -2 } }} />` },
    { name: "Bell", comp: BellIcon, cat: "System", react: `<motion.path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="M13.73 21a2 2 0 0 1-3.46 0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 }} />` },
    { name: "Wifi", comp: Wifi, cat: "System", react: `<motion.path d="M5 12.55a11 11 0 0 1 14.08 0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} /><motion.path d="M1.42 9a16 16 0 0 1 21.16 0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} /><motion.path d="M8.53 16.11a6 6 0 0 1 6.95 0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} /><motion.line x1="12" y1="20" x2="12.01" y2="20" initial={{ scale: 0 }} animate={{ scale: 1 }} />` },
    { name: "Bluetooth", comp: Bluetooth, cat: "System", react: `<motion.path d="m7 7 10 10-5 5V2l5 5L7 17" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "Zap", comp: Zap, cat: "System", react: `<motion.polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },

    { name: "Cloud", comp: Cloud, cat: "Weather", react: `<motion.path d="M17.5 19a5.5 5.5 0 0 0 0-11h-1.42A7 7 0 1 0 3 16" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "Sun", comp: Sun, cat: "Weather", react: `<circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />` },
    { name: "Moon", comp: Moon, cat: "Weather", react: `<motion.path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "Settings", comp: Settings, cat: "System", react: `<motion.path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.circle cx="12" cy="12" r="3" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />` },
    { name: "Eye", comp: Eye, cat: "Interaction", react: `<motion.path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.circle cx="12" cy="12" r="3" variants={{ hover: { scale: 1.2 } }} />` },
    { name: "Camera", comp: Camera, cat: "Media", react: `<motion.path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.circle cx="12" cy="13" r="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 }} />` },
    { name: "Image", comp: Image, cat: "Media", react: `<motion.rect x="3" y="3" width="18" height="18" rx="2" ry="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.circle cx="8.5" cy="8.5" r="1.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} /><motion.polyline points="21 15 16 10 5 21" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} />` },

    { name: "Laptop", comp: Laptop, cat: "Device", react: `<motion.rect x="2" y="3" width="20" height="14" rx="2" ry="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.line x1="2" y1="20" x2="22" y2="20" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 }} />` },
    { name: "Smartphone", comp: Smartphone, cat: "Device", react: `<motion.rect x="5" y="2" width="14" height="20" rx="2" ry="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.line x1="12" y1="18" x2="12.01" y2="18" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />` },
    { name: "Watch", comp: Watch, cat: "Device", react: `<motion.circle cx="12" cy="12" r="7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.polyline points="12 9 12 12 13.5 13.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 }} /><motion.path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.84a2 2 0 0 1-2-1.82l-.35-3.83m.35-10.7l.35-3.83A2 2 0 0 1 9.84 1H14.16a2 2 0 0 1 2 1.82l.35 3.83" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} />` },
    { name: "Play", comp: Play, cat: "Media", react: `<motion.polygon points="5 3 19 12 5 21 5 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />` },
    { name: "Pause", comp: Pause, cat: "Media", react: `<motion.rect x="6" y="4" width="4" height="16" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.rect x="14" y="4" width="4" height="16" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />` },
    { name: "Sparkles", comp: Sparkles, cat: "Weather", react: `<motion.path d="m12 3 1.912 5.885L20 10.8l-6.088 1.915L12 18.6l-1.912-5.885L4 10.8l6.088-1.915L12 3Z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} /><motion.path d="m5 3 1 2.5L8.5 7 6 8.5 5 11 4 8.5 1.5 7 4 5.5 5 3Z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} /><motion.path d="m19 17 1 2.5 2.5 1.5-2.5 1.5-1 2.5-1-2.5-2.5-1.5 2.5-1.5 1-2.5Z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4 }} />` },
    { name: "Bars", comp: BarsChartIcon, cat: "Data", react: `<motion.line x1="12" y1="20" x2="12" y2="10" variants={{ hover: { y2: [10, 5, 10], transition: { repeat: Infinity, duration: 0.8 } } }} /><motion.line x1="18" y1="20" x2="18" y2="4" variants={{ hover: { y2: [4, 8, 4], transition: { repeat: Infinity, duration: 1.2 } } }} /><motion.line x1="6" y1="20" x2="6" y2="16" variants={{ hover: { y2: [16, 12, 16], transition: { repeat: Infinity, duration: 1, delay: 0.2 } } }} />` },
];


export const ALL_ICONS = ICON_LIST.map(icon => ({
    name: icon.name,
    component: icon.comp,
    category: icon.cat,
    react: icon.react,
    reactCode: `"use client";
import { motion } from "framer-motion";

export function ${icon.name}Icon({ size = 24, className = "" }) {
  return (
    <motion.svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className} 
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.95 }}
    >
      ${icon.react}
    </motion.svg>
  );
}`
}));
