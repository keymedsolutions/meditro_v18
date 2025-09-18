"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };

    if (isTouchDevice) {
      setShowCursor(true); // Show custom cursor on touch devices too
      document.addEventListener("touchmove", handleTouchMove);
      return () => document.removeEventListener("touchmove", handleTouchMove);
    } else {
      setShowCursor(true);
      document.addEventListener("mousemove", handleMouseMove);
      return () => document.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  if (!showCursor) return null;

  return (
    <>
      {/* Blob Effect */}
      <div
        className="tw-fixed tw-pointer-events-none tw-opacity-30 dark:tw-opacity-30 tw-transition-all tw-duration-300 tw-ease-out tw-z-[999999]"
        style={{
          left: position.x - 300,
          top: position.y - 300,
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255, 159, 67, 0.6) 0%, rgba(255, 159, 67, 0.5) 25%, rgba(255, 159, 67, 0.3) 50%, rgba(255, 159, 67, 0.15) 75%, transparent 100%)",
          borderRadius: "50% 40% 60% 30%",
          filter: "blur(60px)",
          transform: "scale(1.2)",
        }}
      />

      {/* Outer Ring */}
      <div
        className="tw-fixed tw-top-0 tw-left-0 tw-w-16 tw-h-16 border-2 tw-border-blue-600 tw-rounded-full tw-pointer-events-none tw-transition-all tw-duration-150 tw-mix-blend-difference tw-ease-out tw-z-50"
        style={{
          transform: `translate(${position.x - 32}px, ${position.y - 32}px)`,
        }}
      />

      {/* Inner Dot */}
      {/* <div
        className="tw-fixed tw-w-8 tw-h-8 tw-bg-blue-600 tw-rounded-full tw-pointer-events-none tw-transition-all tw-duration-150 tw-mix-blend-difference tw-ease-out tw-z-[9999]"
        style={{ transform: `translate(${position.x - 16}px, ${position.y - 16}px)` }}
      /> */}
      <div
        className="tw-fixed tw-w-8 tw-h-8 tw-bg-accent-600 tw-rounded-full tw-pointer-events-none tw-z-[99999]"
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
}
