"use client";

import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Home, User, Code, Briefcase, FolderOpen, MessageSquare,
  BookOpen, Mail, Download, Github, Sun, Moon,
} from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { useTheme } from "@/hooks/use-hooks";

const iconMap: Record<string, React.ReactNode> = {
  About: <User className="w-4 h-4" />,
  Skills: <Code className="w-4 h-4" />,
  Experience: <Briefcase className="w-4 h-4" />,
  Projects: <FolderOpen className="w-4 h-4" />,
  Testimonials: <MessageSquare className="w-4 h-4" />,
  Blog: <BookOpen className="w-4 h-4" />,
  Contact: <Mail className="w-4 h-4" />,
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const navigate = useCallback((href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs text-muted glass rounded-lg border border-border hover:border-accent/30 transition-colors fixed bottom-6 right-6 z-40"
        aria-label="Open command palette"
      >
        <Search className="w-3 h-3" />
        <span>Search</span>
        <kbd className="ml-2 px-1.5 py-0.5 rounded bg-white/5 text-[10px] font-mono">Ctrl K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-lg mx-4"
            >
              <Command className="glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-accent/10">
                <div className="flex items-center gap-3 px-4 border-b border-border">
                  <Search className="w-4 h-4 text-muted shrink-0" />
                  <Command.Input
                    placeholder="Search sections, actions..."
                    className="w-full py-4 bg-transparent text-sm outline-none placeholder:text-muted"
                  />
                </div>
                <Command.List className="max-h-80 overflow-y-auto p-2 hide-scrollbar">
                  <Command.Empty className="py-8 text-center text-sm text-muted">
                    No results found.
                  </Command.Empty>

                  <Command.Group heading="Navigation" className="text-xs text-muted px-2 py-2">
                    <Command.Item
                      onSelect={() => navigate("#hero")}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-sm hover:bg-white/5 data-[selected=true]:bg-white/5"
                    >
                      <Home className="w-4 h-4" /> Home
                    </Command.Item>
                    {navLinks.map((link) => (
                      <Command.Item
                        key={link.href}
                        onSelect={() => navigate(link.href)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-sm hover:bg-white/5 data-[selected=true]:bg-white/5"
                      >
                        {iconMap[link.label]} {link.label}
                      </Command.Item>
                    ))}
                  </Command.Group>

                  <Command.Group heading="Actions" className="text-xs text-muted px-2 py-2">
                    <Command.Item
                      onSelect={() => { toggleTheme(); setOpen(false); }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-sm hover:bg-white/5 data-[selected=true]:bg-white/5"
                    >
                      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                      Toggle Theme
                    </Command.Item>
                    <Command.Item
                      onSelect={() => { window.open(siteConfig.github, "_blank"); setOpen(false); }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-sm hover:bg-white/5 data-[selected=true]:bg-white/5"
                    >
                      <Github className="w-4 h-4" /> View GitHub
                    </Command.Item>
                    <Command.Item
                      onSelect={() => { window.open(siteConfig.resumeUrl, "_blank"); setOpen(false); }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-sm hover:bg-white/5 data-[selected=true]:bg-white/5"
                    >
                      <Download className="w-4 h-4" /> Download Resume
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
