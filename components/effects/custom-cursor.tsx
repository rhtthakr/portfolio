"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-hooks";

export function CustomCursor() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    if (!isDesktop) return;

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail((prev) => {
        const next = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return next.slice(-8);
      });
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-cursor='pointer']").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {trail.map((point, i) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full bg-accent/20"
          style={{
            width: 4 + i * 0.5,
            height: 4 + i * 0.5,
            x: point.x - 2,
            y: point.y - 2,
          }}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - (isHovering ? 20 : 8),
          y: position.y - (isHovering ? 20 : 8),
          width: isHovering ? 40 : 16,
          height: isHovering ? 40 : 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-full h-full rounded-full border border-white/80" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          width: 300,
          height: 300,
        }}
        animate={{
          x: position.x - 150,
          y: position.y - 150,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />
    </>
  );
}
