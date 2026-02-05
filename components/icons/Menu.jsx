"use client";

import { motion } from "framer-motion";

export function MenuIcon({ size = 24, className = "" }) {
    const lineVariants = {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
    };

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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                variants={lineVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.4 }}
            />
            <motion.line
                x1="4"
                y1="6"
                x2="20"
                y2="6"
                variants={lineVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.4, delay: 0.1 }}
            />
            <motion.line
                x1="4"
                y1="18"
                x2="20"
                y2="18"
                variants={lineVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.4, delay: 0.2 }}
            />
        </motion.svg>
    );
}
