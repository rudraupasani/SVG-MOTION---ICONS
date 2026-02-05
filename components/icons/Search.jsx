"use client";

import { motion } from "framer-motion";

export function SearchIcon({ size = 24, className = "" }) {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.circle
                cx="11"
                cy="11"
                r="8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
            />
            <motion.line
                x1="21"
                y1="21"
                x2="16.65"
                y2="16.65"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
            />
        </motion.svg>
    );
}
