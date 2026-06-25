"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython,
  SiGraphql, SiOpenai, SiPytorch, SiVercel, SiGooglecloud,
  SiDocker, SiKubernetes, SiPostgresql, SiMongodb,
  SiRedis, SiSupabase, SiGit, SiFigma, SiPostman,
} from "react-icons/si";
import { Cloud, Code2, Server } from "lucide-react";
import { skillCategories } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/fade-in";
import { cn } from "@/lib/utils";

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  python: SiPython,
  graphql: SiGraphql,
  ai: SiOpenai,
  langchain: SiOpenai,
  pytorch: SiPytorch,
  vision: SiPytorch,
  aws: Server,
  vercel: SiVercel,
  gcp: SiGooglecloud,
  azure: Cloud,
  docker: SiDocker,
  k8s: SiKubernetes,
  cicd: SiDocker,
  terraform: Cloud,
  postgres: SiPostgresql,
  mongo: SiMongodb,
  redis: SiRedis,
  supabase: SiSupabase,
  git: SiGit,
  figma: SiFigma,
  vscode: Code2,
  postman: SiPostman,
  motion: SiReact,
  api: SiGraphql,
};

function SkillCard({
  name,
  level,
  icon,
}: {
  name: string;
  level: number;
  icon: string;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconComponents[icon] || SiReact;

  return (
    <motion.div
      className="glass rounded-2xl p-5 relative overflow-hidden group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {hovered && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-accent/60"
              initial={{ x: Math.random() * 100 + "%", y: "100%", opacity: 0 }}
              animate={{ y: "-20%", opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      )}

      <div className="relative flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:glow-sm transition-shadow">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm">{name}</h4>
          <span className="text-xs text-muted">{level}%</span>
        </div>
      </div>

      <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent-blue rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const categories = Object.keys(skillCategories);
  const [active, setActive] = useState(categories[0]);
  const skills = skillCategories[active as keyof typeof skillCategories];

  return (
    <section id="skills" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm text-accent uppercase tracking-widest font-medium">Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Technical Arsenal</h2>
            <p className="text-muted max-w-2xl mx-auto">
              A curated collection of technologies I use to bring ideas to life.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm transition-all duration-300",
                  active === cat
                    ? "bg-gradient-to-r from-accent to-accent-blue text-white glow-sm"
                    : "glass hover:border-accent/30"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" key={active}>
          {skills.map((skill) => (
            <StaggerItem key={skill.name}>
              <SkillCard {...skill} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
