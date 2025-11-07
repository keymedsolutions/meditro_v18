"use client";

import { Suspense, lazy } from "react";

// Lazy load the Slider component
const Slider = lazy(() => import("react-slick"));

interface LazySliderProps {
  children: React.ReactNode;
  settings: any;
  className?: string;
}

export default function LazySlider({ children, settings, className }: LazySliderProps) {
  return (
    <Suspense fallback={<div className="tw-flex tw-justify-center tw-items-center tw-py-8">Loading...</div>}>
      <Slider {...settings} className={className}>
        {children}
      </Slider>
    </Suspense>
  );
}
