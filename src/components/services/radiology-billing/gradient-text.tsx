/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { cn } from "@/lib/utils"

export function GradientText({ children, className }:any) {
  return (
    <span
      className={cn(
        "tw-bg-gradient-to-r tw-from-primary-400 tw-to-secondary-700   tw-bg-clip-text tw-text-transparent",
        className,
      )}
    >
      {children}
    </span>
  )
}
