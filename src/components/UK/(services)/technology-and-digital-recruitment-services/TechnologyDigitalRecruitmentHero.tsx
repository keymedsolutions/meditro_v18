"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const TechnologyDigitalRecruitmentHero: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden  tw-py-20 lg:tw-py-28">
      {/* LIGHTWEIGHT BACKGROUND IMAGE */}
      <div className="tw-pointer-events-none tw-absolute tw-inset-0">
        <Image
          src="/assets/images/technology-and-digital-recruitment-services/tech-hero-light.jpg"
          alt=""
          fill
          priority
          className="tw-object-cover tw-opacity-[0.40]"
        />
        {/* <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-white tw-via-white/90 tw-to-[#f7f9ff]" /> */}
      </div>

      {/* Soft animated accents */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[18%] tw-left-[8%] tw-h-28 tw-w-28 tw-rounded-full tw-bg-accent-200/60 tw-blur-3xl tech-float-y" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[20%] tw-right-[10%] tw-h-36 tw-w-36 tw-rounded-[48px] tw-border tw-border-accent-300/40 tw-blur-sm tech-rotate" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] tw-gap-12 tw-items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Tag */}
            <div className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white tw-px-4 tw-py-1.5 tw-shadow-sm tw-mb-5">
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-text-[11px] tw-font-semibold tw-tracking-[0.22em] tw-uppercase tw-text-slate-600">
                Technology & Digital Recruitment
              </span>
            </div>

            <h1 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl xl:tw-text-5xl tw-font-semibold tw-text-slate-900 tw-leading-tight tw-mb-5">
              Technology &amp; Digital Recruitment Services
              <br />
              <span className="tw-text-accent-600">
                Hire Exceptional Tech Talent Across the UK and Worldwide
              </span>
            </h1>

            <div className="tw-space-y-4 tw-max-w-2xl">
              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Finding great tech talent shouldn’t feel like a never-ending
                challenge. Whether you're scaling fast, building a new product,
                or filling a specialist role, Key Medsolutions UK makes hiring
                simpler, faster, and far more predictable.
              </p>

              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                We specialise in Technology and Digital Recruitment, helping
                businesses connect with skilled professionals who can deliver
                real impact from day one.
              </p>

              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                As a trusted Technology Recruitment Agency, we support startups,
                scaleups, and large enterprises across the UK and global
                markets, delivering talent that truly aligns with your vision.
              </p>
            </div>
          </motion.div>

          {/* RIGHT VISUAL – TECH SIGNAL PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true }}
            className="lg:tw-flex tw-justify-center tw-hidden"
          >
            <div
              className="tw-relative tw-w-full tw-max-w-md tw-rounded-[36px] tw-bg-white/90 tw-backdrop-blur-xl tw-p-6 tw-shadow-xl"
              style={{
                border: "1px solid rgba(203,213,225,0.9)",
                boxShadow:
                  "0 24px 70px rgba(15,23,42,0.15), 0 0 0 1px rgba(255,255,255,0.95)",
              }}
            >
              {/* Header dots */}
              <div className="tw-flex tw-gap-2 tw-mb-4">
                <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-400" />
                <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-200" />
                <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-slate-200" />
              </div>

              <div className="tw-space-y-3 tw-mt-1">
                <div className="tw-h-3 tw-rounded-full tw-bg-accent-100 tw-overflow-hidden">
                  <div className="tw-h-full tw-w-[78%] tw-bg-accent-400/90" />
                </div>
                <div className="tw-h-3 tw-rounded-full tw-bg-accent-50 tw-overflow-hidden">
                  <div className="tw-h-full tw-w-[62%] tw-bg-accent-300/90" />
                </div>
                <div className="tw-h-3 tw-rounded-full tw-bg-accent-50 tw-overflow-hidden">
                  <div className="tw-h-full tw-w-[88%] tw-bg-accent-500/90" />
                </div>
              </div>

              {/* Mini chips */}
              <div className="tw-mt-6 tw-flex tw-flex-wrap tw-gap-3">
                <span className="tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-1.5 tw-text-xs tw-font-medium tw-text-black">
                  UK & Global Talent
                </span>
                <span className="tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-1.5 tw-text-xs tw-font-medium tw-text-black">
                  Tech Specialists
                </span>
                <span className="tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-1.5 tw-text-xs tw-font-medium tw-text-black">
                  Predictable Hiring
                </span>
              </div>
              <div className="tw-mt-3 tw-flex tw-justify-between tw-items-center">
                <span className="tw-h-7 tw-w-24 tw-rounded-full tw-bg-accent-100" />
                <span className="tw-h-7 tw-w-16 tw-rounded-full tw-bg-accent-200" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .tech-float-y {
          animation: techFloatY 9s ease-in-out infinite;
        }
        .tech-rotate {
          animation: techRotate 28s linear infinite;
        }

        @keyframes techFloatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-22px);
          }
        }

        @keyframes techRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default TechnologyDigitalRecruitmentHero;
