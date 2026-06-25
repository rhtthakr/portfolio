"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { FadeIn } from "@/components/effects/fade-in";

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 0.5;
      if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
      el.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm text-accent uppercase tracking-widest font-medium">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">What People Say</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Kind words from clients and colleagues I&apos;ve had the pleasure to work with.
            </p>
          </div>
        </FadeIn>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-hidden hide-scrollbar px-6">
        {doubled.map((t, i) => (
          <motion.div
            key={`${t.name}-${i}`}
            className="glass rounded-2xl p-8 min-w-[350px] max-w-[400px] shrink-0 hover:border-accent/30 transition-colors"
            whileHover={{ y: -4 }}
          >
            <Quote className="w-8 h-8 text-accent/40 mb-4" />
            <p className="text-muted leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
