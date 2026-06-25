"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Search } from "lucide-react";
import { projects, projectFilters } from "@/lib/data";
import { FadeIn } from "@/components/effects/fade-in";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const matchesFilter = filter === "All" || p.category === filter;
    const matchesSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-sm text-accent uppercase tracking-widest font-medium">Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Featured Work</h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              A selection of projects that showcase my expertise in building premium digital experiences.
            </p>

            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <Input
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-11"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {projectFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm transition-all duration-300",
                    filter === f
                      ? "bg-gradient-to-r from-accent to-accent-blue text-white"
                      : "glass hover:border-accent/30"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative glass rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                  style={{
                    background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(124,58,237,0.1), transparent 40%)",
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                  }}
                />

                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full glass">
                    {project.category}
                  </span>
                </div>

                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl glass hover:border-accent/30 transition-colors"
                      data-cursor="pointer"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-accent to-accent-blue text-white hover:shadow-lg hover:shadow-accent/25 transition-shadow"
                      data-cursor="pointer"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
