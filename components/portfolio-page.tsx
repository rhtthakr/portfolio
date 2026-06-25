"use client";

import { useLenis } from "@/hooks/use-animation";
import { BackgroundEffects } from "@/components/effects/background-effects";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { LoadingWrapper } from "@/components/effects/loading-screen";
import { Navbar } from "@/components/layout/navbar";
import { CommandPalette } from "@/components/layout/command-palette";
import { EasterEgg, MarqueeBanner } from "@/components/effects/extras";
import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { SkillsSection } from "@/sections/skills";
import { ExperienceSection } from "@/sections/experience";
import { ProjectsSection } from "@/sections/projects";
import { TestimonialsSection } from "@/sections/testimonials";
import { BlogSection, Footer } from "@/sections/footer";
import { ContactSection } from "@/sections/contact";

export function PortfolioPage() {
  useLenis();

  return (
    <LoadingWrapper>
      <BackgroundEffects />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <CommandPalette />
      <EasterEgg />

      <main>
        <HeroSection />
        <MarqueeBanner />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer />
    </LoadingWrapper>
  );
}
