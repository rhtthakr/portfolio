"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Scene = dynamic(() => import("./hero-scene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
    </div>
  ),
});

export function Hero3D() {
  return (
    <Suspense fallback={null}>
      <Scene />
    </Suspense>
  );
}
