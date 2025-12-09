"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f3f6fc] tw-py-20 lg:tw-py-28 tw-flex tw-items-center">
      
      {/* Optional Background Image */}
      <div className="tw-absolute tw-inset-0 tw-z-0 tw-pointer-events-none tw-overflow-hidden">
        <Image
          src="/assets/images/candidate-sourcing-and-screening-services/Hero.png"
          alt="candidate sourcing background"
          fill
          className="tw-object-cover tw-opacity-[0.55] tw-blur-[2px]"
        />
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-white/80 tw-via-white/60 tw-to-white/80" />
      </div>

      {/* Floating Shapes */}
      <div className="tw-absolute tw-top-[12%] tw-left-[10%] tw-h-20 tw-w-20 tw-bg-accent-200 tw-rounded-full tw-blur-2xl tw-opacity-60 hero-float-1"></div>
      <div className="tw-absolute tw-bottom-[10%] tw-right-[12%] tw-h-28 tw-w-28 tw-bg-accent-300 tw-rounded-[28px] tw-blur-3xl tw-opacity-70 hero-float-2"></div>
      <div className="tw-absolute tw-top-[40%] tw-right-[28%] tw-h-8 tw-w-24 tw-bg-accent-100 tw-rounded-full tw-blur-sm tw-opacity-80 hero-float-3"></div>

      {/* Content */}
      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-px-6 md:tw-px-10 lg:tw-px-14 tw-max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header Badge */}
          <div className="tw-inline-flex tw-items-center tw-gap-2 tw-bg-accent-50 tw-px-4 tw-py-1.5 tw-rounded-full tw-mb-5 border tw-border-accent-100">
            <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-400"></span>
            <p className="tw-text-[11px] tw-font-medium tw-tracking-[0.16em] tw-mb-0 tw-uppercase tw-text-accent-700">
              Candidate Sourcing & Screening
            </p>
          </div>

          {/* TITLE */}
          <h1 className="tw-text-3xl sm:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-slate-900 tw-leading-[1.25] tw-mb-6">
            Candidate Sourcing & Screening Services Built for Speed, Accuracy & Scalability
          </h1>

          {/* DESCRIPTION FULL TEXT – EXACTLY AS YOU WROTE */}
          <p className="tw-text-base sm:tw-text-lg tw-text-slate-700 tw-leading-relaxed tw-mb-6">
            Recruiting the right talent shouldn’t feel overwhelming. But the reality is, finding qualified
            candidates can be overwhelming. That’s where we step in. Our Candidate Sourcing & Screening
            Services are designed to take the stress out of hiring, delivering the right candidates quickly,
            accurately, and cost-effectively.
          </p>

          <p className="tw-text-base sm:tw-text-lg tw-text-slate-700 tw-leading-relaxed tw-mb-6">
            Here’s why we are trusted by businesses across the UK and worldwide.
          </p>

          {/* FULL LIST – NOTHING REMOVED */}
          <div className="tw-space-y-3 tw-mb-8">
            <p className="tw-text-base tw-text-slate-800 tw-leading-relaxed">
              • 24–48-hour candidate shortlist delivery: No more waiting weeks for results.
            </p>
            <p className="tw-text-base tw-text-slate-800 tw-leading-relaxed">
              • 70% cost savings: Save money without compromising on quality.
            </p>
            <p className="tw-text-base tw-text-slate-800 tw-leading-relaxed">
              • Sector-specific expertise: From tech to healthcare, we’ve got you covered.
            </p>
            <p className="tw-text-base tw-text-slate-800 tw-leading-relaxed">
              • UK-focused quality + global reach: Local precision with worldwide talent access.
            </p>
          </div>

          {/* FULL SENTENCE (YOU SAID DO NOT CUT) */}
          <p className="tw-text-lg tw-font-semibold tw-text-slate-900 tw-mb-8">
            Ready to transform your hiring process?
          </p>

          {/* CTA BUTTONS – FULL TEXT EXACTLY AS WRITTEN */}
          <div className="tw-flex tw-flex-wrap tw-gap-4">
            <button className="tw-bg-accent-600 tw-text-white tw-px-6 tw-py-3 tw-rounded-full tw-font-medium tw-flex tw-items-center tw-gap-2 hover:tw-bg-accent-700 tw-transition-all tw-border-none">
              Speak to a Sourcing Specialist
              <ArrowRight className="tw-w-4 tw-h-4" />
            </button>

            <button className="tw-bg-white border tw-border-accent-300 tw-text-accent-700 tw-px-6 tw-py-3 tw-rounded-full tw-font-medium hover:tw-bg-accent-50 tw-transition">
              Request a Fee Talent Pipeline Review
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .hero-float-1 { animation: heroFloat1 8s ease-in-out infinite; }
        .hero-float-2 { animation: heroFloat2 11s ease-in-out infinite; }
        .hero-float-3 { animation: heroFloat3 13s ease-in-out infinite; }

        @keyframes heroFloat1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-18px) scale(1.06); }
        }
        @keyframes heroFloat2 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-20px); }
        }
        @keyframes heroFloat3 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(25px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
