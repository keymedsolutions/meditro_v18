"use client"

import { cn } from "@/lib/utils"

export function GlassCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn("relative bg-white/40 rounded-2xl shadow-lg backdrop-blur-md border border-white/20", className)}
    >
      {children}
    </div>
  )
}
