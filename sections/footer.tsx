"use client";

import { motion } from "framer-motion";
import { ArrowUp, Clock, Linkedin } from "lucide-react";
import { blogPosts, siteConfig, socialLinks } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/fade-in";
import { useVisitorCount } from "@/hooks/use-hooks";
import { SiGithub, SiX, SiSpotify } from "react-icons/si";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <SiGithub className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  twitter: <SiX className="w-4 h-4" />,
  email: null,
};

export function BlogSection() {
  return (
    <section id="blog" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm text-accent uppercase tracking-widest font-medium">Blog</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Latest Articles</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Thoughts on development, design, and the future of technology.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <StaggerItem key={post.title}>
              <article className="glass rounded-2xl p-6 h-full hover:border-accent/30 transition-all duration-300 group cursor-pointer">
                <span className="text-xs text-accent px-2 py-1 rounded-lg bg-accent/10">{post.tag}</span>
                <h3 className="text-lg font-bold mt-4 mb-2 group-hover:text-gradient transition-all">
                  {post.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <Clock className="w-3 h-3" />
                  {post.date} · {post.readTime}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function SpotifyWidget() {
  return (
    <div className="glass rounded-2xl p-4 flex items-center gap-3 max-w-xs">
      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
        <SiSpotify className="w-5 h-5 text-green-400" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted">Now Playing</p>
        <p className="text-sm font-medium truncate">Midnight City — M83</p>
      </div>
      <div className="flex gap-0.5 items-end h-4">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-0.5 bg-green-400 rounded-full"
            animate={{ height: [4, 12, 6, 10, 4] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}

function GitHubGraph() {
  const weeks = 26;
  const days = 7;
  const levels = [0, 1, 2, 3, 4];

  return (
    <div className="glass rounded-2xl p-4">
      <p className="text-xs text-muted mb-3 flex items-center gap-2">
        <SiGithub className="w-4 h-4" /> GitHub Activity
      </p>
      <div className="flex gap-[3px] overflow-x-auto hide-scrollbar">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }).map((_, d) => {
              const level = levels[Math.floor(Math.random() * levels.length)];
              const colors = ["bg-white/5", "bg-accent/20", "bg-accent/40", "bg-accent/60", "bg-accent/80"];
              return (
                <div key={d} className={`w-2.5 h-2.5 rounded-sm ${colors[level]}`} />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  const visitorCount = useVisitorCount();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="h-[1px] w-full mb-12"
          style={{
            background: "linear-gradient(90deg, transparent, #7C3AED, #3B82F6, transparent)",
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold text-gradient mb-2">{siteConfig.name}</h3>
            <p className="text-sm text-muted leading-relaxed">
              Building premium digital experiences with code and creativity.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <SpotifyWidget />
            <GitHubGraph />
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-sm text-muted">
              Visitor #{visitorCount.toLocaleString()}
            </p>
            <div className="flex gap-3">
              {socialLinks.filter((s) => s.icon !== "email").map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:border-accent/30 transition-colors"
                  aria-label={link.label}
                >
                  {socialIconMap[link.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:border-accent/30 hover:glow-sm transition-all"
            whileHover={{ y: -2 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
