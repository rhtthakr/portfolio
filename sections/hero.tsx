"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { SplitText } from "@/components/effects/split-text";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { Button } from "@/components/ui/button";
import { Hero3D } from "@/components/effects/hero-3d";
import { useMousePosition } from "@/hooks/use-hooks";

export function HeroSection() {
  const mouse = useMousePosition();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(124,58,237,0.08), transparent 40%)`,
        }}
      />

      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] hidden lg:block opacity-60">
        <Hero3D />
      </div>

      {[
        { className: "top-20 left-10 w-20 h-20", delay: 0 },
        { className: "top-40 right-20 w-12 h-12", delay: 1 },
        { className: "bottom-40 left-20 w-16 h-16", delay: 2 },
      ].map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.className} border border-accent/20 rounded-xl hidden md:block`}
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{
            duration: 5 + shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:text-left lg:max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted">
            Available for freelance work
          </span>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
          <SplitText text={siteConfig.name} className="text-gradient" />
        </h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-muted max-w-2xl mx-auto lg:mx-0 mb-10"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          Full Stack Web Developer | MERN Stack | Problem Solver
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <MagneticButton
            className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-xl text-base font-medium bg-gradient-to-r from-accent to-accent-blue text-white glow-sm hover:shadow-lg hover:shadow-accent/25 transition-shadow"
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            data-cursor="pointer"
          >
            View Projects
          </MagneticButton>
          <MagneticButton
            className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-xl text-base font-medium border border-border hover:bg-white/5 hover:border-accent/50 transition-all"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            data-cursor="pointer"
          >
            Contact Me
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs text-muted uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
