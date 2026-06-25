"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/lib/data";
import { FadeIn } from "@/components/effects/fade-in";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const cards = timelineRef.current.querySelectorAll(".timeline-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -60, filter: "blur(8px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="experience" className="py-32 relative" ref={sectionRef}>
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm text-accent uppercase tracking-widest font-medium">Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Professional Journey</h2>
            <p className="text-muted max-w-2xl mx-auto">
              My career path through innovative companies and challenging projects.
            </p>
          </div>
        </FadeIn>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent-blue to-accent/20 md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`timeline-card relative flex flex-col md:flex-row gap-8 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background md:-translate-x-1/2 z-10 glow-sm" />

              <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="ml-16 md:ml-0">
                  <span className="text-sm text-accent font-mono">{exp.duration}</span>
                </div>
              </div>

              <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="ml-16 md:ml-0 glass rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300 group">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-gradient transition-all">
                    {exp.position}
                  </h3>
                  <p className="text-accent text-sm mb-4">{exp.company}</p>
                  <ul className={`space-y-2 ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                    {exp.responsibilities.map((item) => (
                      <li key={item} className="text-sm text-muted flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
