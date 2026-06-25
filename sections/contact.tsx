"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Copy, Check, Send, Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";
import { FadeIn } from "@/components/effects/fade-in";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/utils";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  email: <Mail className="w-5 h-5" />,
};

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(siteConfig.email);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm text-accent uppercase tracking-widest font-medium">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Let&apos;s Work Together</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Send me a message!
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <div className="space-y-6">
              <button
                onClick={handleCopyEmail}
                className="glass rounded-2xl p-6 w-full flex items-center gap-4 hover:border-accent/30 transition-colors group text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:glow-sm transition-shadow">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted">Email me at</p>
                  <p className="font-medium">{siteConfig.email}</p>
                </div>
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
                )}
              </button>

              <div className="glass rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 h-48 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative text-center">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted">Map placeholder</p>
                  <p className="text-xs text-muted/60 mt-1">San Francisco Bay Area</p>
                </div>
              </div>

              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:border-accent/30 hover:glow-sm transition-all"
                    aria-label={link.label}
                    data-cursor="pointer"
                  >
                    {socialIconMap[link.icon]}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
                  >
                    <Check className="w-8 h-8 text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-8 space-y-6"
                >
                  <div className="relative">
                    <Input
                      id="name"
                      placeholder=" "
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="peer pt-6"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-2 text-xs text-muted transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                    >
                      Your Name
                    </label>
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder=" "
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="peer pt-6"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-2 text-xs text-muted transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                    >
                      Email Address
                    </label>
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="relative">
                    <Textarea
                      id="message"
                      placeholder=" "
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="peer pt-6"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-2 text-xs text-muted transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                    >
                      Your Message
                    </label>
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" className="w-full h-12" size="lg">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
