"use client";

import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  strength = 0.25,
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  return (
    <button
      className={cn(className)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * strength;
        const y = (e.clientY - rect.top - rect.height / 2) * strength;
        e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
        onMouseMove?.(e);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0, 0)";
        onMouseLeave?.(e);
      }}
      style={{ transition: "transform 0.3s cubic-bezier(0.25, 0.4, 0.25, 1)" }}
      {...props}
    >
      {children}
    </button>
  );
}
