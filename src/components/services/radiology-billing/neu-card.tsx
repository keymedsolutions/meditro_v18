/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { cn } from "@/lib/utils"

export function NeuCard({ children, className }:any) {
  return (
    <div
      className={cn(
        "tw-relative tw-bg-white tw-rounded-2xl tw-shadow-[0_10px_20px_rgba(0,0,0,0.03)] tw-border tw-border-slate-100",
        "tw-before:absolute tw-before:inset-0 tw-before:rounded-2xl tw-before:p-[1px] tw-before:bg-gradient-to-b tw-before:from-white tw-before:to-slate-100 tw-before:-z-10",
        "tw-after:absolute tw-after:inset-0 tw-after:rounded-2xl tw-after:p-[1px] tw-after:bg-gradient-to-b tw-after:from-slate-100 tw-after:to-white tw-after:-z-10 tw-after:translate-y-[3px] tw-after:blur-md",
        className,
      )}
    >
      {children}
    </div>
  )
}
