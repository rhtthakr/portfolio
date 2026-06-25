"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Briefcase } from "lucide-react";
import { stats } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/fade-in";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm text-accent uppercase tracking-widest font-medium">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Crafting Digital Excellence</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Passionate developer with a keen eye for design and a love for building
              immersive digital experiences.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <FadeIn direction="left" delay={0.1}>
            <div className="glass rounded-2xl p-8 h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden shrink-0 glow-sm">
                  <Image
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                    alt="Profile photo"
                    fill
                    className="object-cover bg-accent/10"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{/* siteConfig.name */}Alex Morgan</h3>
                  <p className="text-muted leading-relaxed">
                    I&apos;m a full stack developer and AI engineer with 5+ years of experience
                    building scalable web applications and intelligent systems. I specialize in
                    React, Next.js, Node.js, and machine learning — turning complex problems into
                    elegant, user-friendly solutions.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Briefcase,
                title: "Experience",
                content: "5+ years building products for startups and enterprises across fintech, AI, and e-commerce.",
              },
              {
                icon: GraduationCap,
                title: "Education",
                content: "B.S. Computer Science — Stanford University. Focus on AI/ML and distributed systems.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass rounded-2xl p-6 h-full hover:border-accent/30 transition-colors duration-300 group">
                  <item.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{item.content}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass rounded-2xl p-6 text-center hover:glow-sm transition-shadow duration-500">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted mt-2">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
