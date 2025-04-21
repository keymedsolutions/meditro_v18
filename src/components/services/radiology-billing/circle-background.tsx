"use client"

export function CircleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-[800px] h-[800px] relative">
          {/* Large circle */}
          <div className="absolute inset-0 rounded-full border border-slate-200 opacity-20"></div>

          {/* Medium circle */}
          <div className="absolute inset-[100px] rounded-full border border-slate-200 opacity-30"></div>

          {/* Small circle */}
          <div className="absolute inset-[200px] rounded-full border border-slate-200 opacity-40"></div>

          {/* Tiny circle */}
          <div className="absolute inset-[300px] rounded-full border border-slate-200 opacity-50"></div>
        </div>
      </div>
    </div>
  )
}
