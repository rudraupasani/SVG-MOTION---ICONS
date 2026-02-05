"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Terminal } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { XIcon } from "@/components/icons";
import { useEffect } from "react";

export default function IconDetail({ icon, onClose }) {
    const [copied, setCopied] = useState(false);
    const [triggerType, setTriggerType] = useState("hover"); // 'hover' or 'click'
    const [hoverStyle, setHoverStyle] = useState("scale"); // 'scale', 'rotate', 'shake', 'float', 'glow'
    const [clickStyle, setClickStyle] = useState("jelly"); // 'jelly', 'ripple', 'burst', 'flip', 'spin'
    const [clickCount, setClickCount] = useState(0);

    const [mounted, setMounted] = useState(false);

    // Dynamic Parameter State
    const [params, setParams] = useState({
        scale: 1.1,
        rotate: 15,
        x: 2,
        y: -10,
        blur: 15,
        rippleScale: 4,
        rippleDuration: 0.6
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!icon || !mounted) return null;

    const copyToClipboard = () => {
        const code = generateCode();
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleIconClick = () => {
        if (triggerType === "click") {
            setClickCount(prev => prev + 1);
        }
    };

    const generateCode = () => {
        if (triggerType === "hover") {
            const hoverConfigs = {
                scale: { whileHover: { scale: params.scale }, whileTap: { scale: 0.95 } },
                rotate: { whileHover: { rotate: params.rotate }, whileTap: { scale: 0.95 } },
                shake: { whileHover: { x: [-params.x, params.x, -params.x, params.x, 0], transition: { repeat: Infinity, duration: 0.4 } } },
                float: { whileHover: { y: params.y }, transition: { type: "spring", stiffness: 300 } },
                glow: { whileHover: { filter: `drop-shadow(0 0 ${params.blur}px rgba(0,0,0,0.2))`, scale: 1.05 } }
            };
            const config = hoverConfigs[hoverStyle];

            return `"use client";
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
      whileHover={${JSON.stringify(config.whileHover || {})}} 
      whileTap={${JSON.stringify(config.whileTap || {})}}
      ${config.transition ? `transition={${JSON.stringify(config.transition)}}` : ''}
    >
      ${icon.react}
    </motion.svg>
  );
}`;
        }

        const clickConfigs = {
            jelly: {
                className: "cursor-pointer",
                whileTap: { scale: 0.8, rotate: [-5, 5, 0], transition: { duration: 0.4 } }
            },
            ripple: {
                className: "cursor-pointer relative",
                whileTap: { scale: 0.95 }
            },
            burst: {
                className: "cursor-pointer",
                whileTap: { scale: params.scale, filter: `blur(${params.blur / 7}px)`, opacity: 0.8 }
            },
            flip: {
                className: "cursor-pointer",
                whileTap: { rotateY: 180, transition: { duration: 0.4 } }
            },
            spin: {
                className: "cursor-pointer",
                whileTap: { rotate: 360, transition: { duration: 0.5, ease: "easeInOut" } }
            }
        };

        const config = clickConfigs[clickStyle];

        return `"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export function ${icon.name}Icon({ size = 24, className = "" }) {
  const [count, setCount] = useState(0);
  
  return (
    <div className="relative inline-block overflow-hidden rounded-xl">
      <motion.svg 
        key={count}
        onClick={() => setCount(prev => prev + 1)}
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={\`${config.className} \${className}\`}
        whileTap={${JSON.stringify(config.whileTap)}}
      >
        ${icon.react}
      </motion.svg>
      ${clickStyle === 'ripple' ? `
      {/* Ripple Effect */}
      <motion.div
        key={"ripple-" + count}
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{ scale: ${params.rippleScale}, opacity: 0 }}
        transition={{ duration: ${params.rippleDuration} }}
        className="absolute inset-0 bg-current rounded-full pointer-events-none"
        style={{ originX: "50%", originY: "50%" }}
      />` : ''}
    </div>
  );
}`;
    };

    const updateParam = (key, val) => {
        setParams(prev => ({ ...prev, [key]: parseFloat(val) }));
    };

    return (
        <AnimatePresence>
            {icon && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 mb-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50"
                    >
                        <div className="flex flex-col max-h-[90vh]">
                            {/* Header */}
                            <div className="flex items-center justify-between p-8 border-b border-light-200 dark:border-neutral-800/50">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-bold tracking-tight">{icon.name}</h2>
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[10px] font-bold text-neutral-500 uppercase tracking-wider">{icon.category}</span>
                                        <span className="text-[10px] text-neutral-400 font-medium">React Component</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center bg-neutral-100 dark:bg-neutral-800 p-1 rounded-2xl">
                                        <button
                                            onClick={() => setTriggerType("hover")}
                                            className={`px-4 py-1.5 text-xs font-bold rounded-xl transition-all ${triggerType === "hover"
                                                ? "bg-white dark:bg-neutral-700 text-black dark:text-white shadow-sm"
                                                : "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                                                }`}
                                        >
                                            Hover
                                        </button>
                                        <button
                                            onClick={() => setTriggerType("click")}
                                            className={`px-4 py-1.5 text-xs font-bold rounded-xl transition-all ${triggerType === "click"
                                                ? "bg-white dark:bg-neutral-700 text-black dark:text-white shadow-sm"
                                                : "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                                                }`}
                                        >
                                            Click
                                        </button>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="p-2  cursor-pointer rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                                    >
                                        <XIcon size={20} className="text-neutral-400 cursor-pointer group-hover:text-black dark:group-hover:text-white transition-colors" />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
                                {/* Icon Preview */}
                                <div
                                    onClick={handleIconClick}
                                    className={`flex items-center justify-center p-20 rounded-4xl bg-neutral-50 dark:bg-black/50 border border-neutral-100 dark:border-neutral-800 group relative overflow-hidden transition-all duration-300 ${triggerType === 'click' ? 'cursor-pointer' : ''}`}
                                >
                                    {/* Premium Grid Background */}
                                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                                        style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                                    />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)]" />

                                    <div className="relative">
                                        <icon.component
                                            key={clickCount + "-" + hoverStyle + "-" + JSON.stringify(params)}
                                            size={160}
                                            className="relative z-10 text-black dark:text-white"
                                            whileHover={triggerType === 'hover' ? (
                                                hoverStyle === 'rotate' ? { rotate: params.rotate } :
                                                    hoverStyle === 'shake' ? { x: [-params.x, params.x, -params.x, params.x, 0], transition: { repeat: Infinity, duration: 0.4 } } :
                                                        hoverStyle === 'float' ? { y: params.y } :
                                                            hoverStyle === 'glow' ? { filter: `drop-shadow(0 0 ${params.blur}px rgba(0,0,0,0.2))`, scale: 1.05 } :
                                                                { scale: params.scale }
                                            ) : {}}
                                            whileTap={triggerType === 'click' ? (
                                                clickStyle === 'jelly' ? { scale: 0.8, rotate: [-5, 5, 0], transition: { duration: 0.4 } } :
                                                    clickStyle === 'burst' ? { scale: params.scale, filter: `blur(${params.blur / 7}px)`, opacity: 0.8 } :
                                                        clickStyle === 'flip' ? { rotateY: 180 } :
                                                            clickStyle === 'spin' ? { rotate: 360 } :
                                                                { scale: 0.95 }
                                            ) : {}}
                                        />
                                        {triggerType === 'click' && clickStyle === 'ripple' && (
                                            <motion.div
                                                key={"ripple-" + clickCount}
                                                initial={{ scale: 0, opacity: 0.5 }}
                                                animate={{ scale: params.rippleScale, opacity: 0 }}
                                                transition={{ duration: params.rippleDuration }}
                                                className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-full pointer-events-none"
                                            />
                                        )}
                                    </div>

                                    <div className="absolute bottom-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest animate-pulse">
                                        {triggerType === 'hover' ? `Hover to ${hoverStyle} animate` : `Click to ${clickStyle} animate`}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 p-6 bg-neutral-50 dark:bg-black/20 rounded-3xl border border-neutral-100 dark:border-neutral-800/50">
                                    <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-4">
                                        <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                                            {triggerType === 'hover' ? 'Hover Style' : 'Click Style'}
                                        </span>
                                        <div className="flex items-center gap-2 bg-neutral-200/50 dark:bg-neutral-800 p-1 rounded-xl">
                                            {(triggerType === 'hover' ? ['scale', 'rotate', 'shake', 'float', 'glow'] : ['jelly', 'ripple', 'burst', 'flip', 'spin']).map((style) => (
                                                <button
                                                    key={style}
                                                    onClick={() => triggerType === 'hover' ? setHoverStyle(style) : setClickStyle(style)}
                                                    className={`px-3 py-1 text-[10px] font-bold uppercase tracking-tight rounded-lg transition-all ${(triggerType === 'hover' ? hoverStyle : clickStyle) === style
                                                        ? "bg-white cursor-pointer dark:bg-neutral-700 text-black dark:text-white shadow-sm"
                                                        : "text-neutral-500 cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-300"
                                                        }`}
                                                >
                                                    {style}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Editable Parameters */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Tune Parameters</span>
                                            <span className="text-[10px] p-1 px-2 rounded-md bg-blue-500/10 text-blue-500 font-bold uppercase">Real-time Preview</span>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {/* Scale Slider */}
                                            {(triggerType === 'hover' && hoverStyle === 'scale') || (triggerType === 'click' && clickStyle === 'burst') ? (
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <label className="text-xs font-bold text-neutral-500">Scale Factor</label>
                                                        <span className="text-xs font-mono font-bold text-blue-500">{params.scale}x</span>
                                                    </div>
                                                    <input
                                                        type="range"
                                                        min="0.5"
                                                        max="2"
                                                        step="0.05"
                                                        value={params.scale}
                                                        onChange={(e) => updateParam('scale', e.target.value)}
                                                        className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                                    />
                                                </div>
                                            ) : null}

                                            {/* Rotation Slider */}
                                            {triggerType === 'hover' && hoverStyle === 'rotate' ? (
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <label className="text-xs font-bold text-neutral-500">Rotation Angle</label>
                                                        <span className="text-xs font-mono font-bold text-blue-500">{params.rotate}°</span>
                                                    </div>
                                                    <input
                                                        type="range"
                                                        min="-180"
                                                        max="180"
                                                        step="1"
                                                        value={params.rotate}
                                                        onChange={(e) => updateParam('rotate', e.target.value)}
                                                        className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                                    />
                                                </div>
                                            ) : null}

                                            {/* X Translation Slider */}
                                            {triggerType === 'hover' && hoverStyle === 'shake' ? (
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <label className="text-xs font-bold text-neutral-500">Shake Intensity</label>
                                                        <span className="text-xs font-mono font-bold text-blue-500">{params.x}px</span>
                                                    </div>
                                                    <input
                                                        type="range"
                                                        min="1"
                                                        max="20"
                                                        step="1"
                                                        value={params.x}
                                                        onChange={(e) => updateParam('x', e.target.value)}
                                                        className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                                    />
                                                </div>
                                            ) : null}

                                            {/* Y Translation Slider */}
                                            {triggerType === 'hover' && hoverStyle === 'float' ? (
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <label className="text-xs font-bold text-neutral-500">Float Offset</label>
                                                        <span className="text-xs font-mono font-bold text-blue-500">{params.y}px</span>
                                                    </div>
                                                    <input
                                                        type="range"
                                                        min="-50"
                                                        max="50"
                                                        step="1"
                                                        value={params.y}
                                                        onChange={(e) => updateParam('y', e.target.value)}
                                                        className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                                    />
                                                </div>
                                            ) : null}

                                            {/* Blur/Glow Slider */}
                                            {(triggerType === 'hover' && hoverStyle === 'glow') || (triggerType === 'click' && clickStyle === 'burst') ? (
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <label className="text-xs font-bold text-neutral-500">Effect Intensity</label>
                                                        <span className="text-xs font-mono font-bold text-blue-500">{params.blur}px</span>
                                                    </div>
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="50"
                                                        step="1"
                                                        value={params.blur}
                                                        onChange={(e) => updateParam('blur', e.target.value)}
                                                        className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                                    />
                                                </div>
                                            ) : null}

                                            {/* Ripple Params */}
                                            {triggerType === 'click' && clickStyle === 'ripple' ? (
                                                <>
                                                    <div className="space-y-3">
                                                        <div className="flex justify-between">
                                                            <label className="text-xs font-bold text-neutral-500">Ripple Scale</label>
                                                            <span className="text-xs font-mono font-bold text-blue-500">{params.rippleScale}x</span>
                                                        </div>
                                                        <input
                                                            type="range"
                                                            min="1"
                                                            max="10"
                                                            step="0.5"
                                                            value={params.rippleScale}
                                                            onChange={(e) => updateParam('rippleScale', e.target.value)}
                                                            className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div className="flex justify-between">
                                                            <label className="text-xs font-bold text-neutral-500">Ripple Duration</label>
                                                            <span className="text-xs font-mono font-bold text-blue-500">{params.rippleDuration}s</span>
                                                        </div>
                                                        <input
                                                            type="range"
                                                            min="0.1"
                                                            max="2"
                                                            step="0.1"
                                                            value={params.rippleDuration}
                                                            onChange={(e) => updateParam('rippleDuration', e.target.value)}
                                                            className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                                        />
                                                    </div>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>

                                {/* Code Section */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm font-semibold text-neutral-400">
                                            <Terminal size={14} />
                                            <span>React Code</span>
                                        </div>
                                        <button
                                            onClick={copyToClipboard}
                                            className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-black dark:bg-white text-white dark:text-black hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-black/10"
                                        >
                                            {copied ? (
                                                <>
                                                    <Check size={14} />
                                                    Copied
                                                </>
                                            ) : (
                                                <>
                                                    <Copy size={14} />
                                                    Copy Code
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    <div className="rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800 shadow-inner bg-black">
                                        <SyntaxHighlighter
                                            language="jsx"
                                            style={oneDark}

                                            customStyle={{
                                                margin: 0,
                                                padding: "1.5rem",
                                                fontSize: "0.8rem",
                                                background: "transparent",   // ✅ IMPORTANT
                                                backgroundColor: "transparent", // ✅ IMPORTANT
                                                maxHeight: "300px",
                                                color: "#fff"
                                            }}
                                            codeTagProps={{
                                                style: {
                                                    background: "transparent", // ✅ removes inner white bg
                                                }
                                            }}
                                        >
                                            {generateCode()}
                                        </SyntaxHighlighter>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
