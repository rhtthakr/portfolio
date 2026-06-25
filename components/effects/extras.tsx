"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKonamiCode } from "@/hooks/use-hooks";

export function EasterEgg() {
  const [active, setActive] = useState(false);

  useKonamiCode(useCallback(() => setActive(true), []));

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="text-6xl font-bold text-gradient"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            🎮 You found the secret!
          </motion.div>
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: i % 2 === 0 ? "#7C3AED" : "#3B82F6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -200],
                opacity: [1, 0],
                scale: [1, 0],
              }}
              transition={{ duration: 2, delay: Math.random(), repeat: Infinity }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MarqueeBanner() {
  const items = [
    "React", "Next.js", "TypeScript", "AI/ML", "Node.js", "Three.js",
    "Framer Motion", "GSAP", "Tailwind CSS", "PostgreSQL",
  ];

  return (
    <div className="py-6 border-y border-border overflow-hidden" aria-hidden="true">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-sm text-muted/40 uppercase tracking-widest font-medium flex items-center gap-8">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
