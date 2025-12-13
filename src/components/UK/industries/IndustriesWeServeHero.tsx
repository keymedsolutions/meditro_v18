"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const IndustriesWeServeHero: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f7faff] tw-py-20 md:tw-py-28">
      {/* OPTIONAL LIGHT BACKGROUND IMAGE */}
      <div className="tw-pointer-events-none tw-absolute tw-inset-0 tw-opacity-[0.30]">
        <Image
          src="/assets/images/industries/industries-hero-bg.jpg" // optional, very light
          alt=""
          fill
          className="tw-object-cover"
        />
      </div>

      {/* ACCENT GRADIENT LAYERS */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-180px] tw-left-[10%] tw-h-[420px] tw-w-[420px] tw-rounded-full tw-bg-accent-100/70 tw-blur-3xl industries-float-1" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-220px] tw-right-[8%] tw-h-[460px] tw-w-[460px] tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl industries-float-2" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[20%] tw-right-[22%] tw-h-16 tw-w-16 tw-rounded-2xl tw-bg-accent-300/80 tw-blur-sm industries-float-3" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] tw-gap-12 tw-items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Accent label */}
            <div className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white tw-px-4 tw-py-1.5 tw-shadow-sm tw-mb-5">
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-text-[11px] tw-font-semibold tw-tracking-[0.22em] tw-uppercase tw-text-slate-600">
                Industries We Serve
              </span>
            </div>

            <h1 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-leading-snug tw-mb-5">
              Empowering UK And Global Businesses with Industry-Specialised
              Talent Solutions
            </h1>

            <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-max-w-xl tw-mb-8">
              Recruitment shouldn’t feel stressful. Whether you’re growing a
              tech team, filling urgent healthcare roles, or boosting your
              customer support, we help you access qualified talent quickly and
              confidently. Our mix of human expertise and smart tech gives you
              reliable results, every time.
            </p>

            {/* CTAs */}
            <div className="tw-flex tw-flex-wrap tw-gap-4">
              <button
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-6 tw-py-3 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-accent-500 tw-text-white tw-shadow-lg tw-shadow-accent-300/60 tw-transition hover:tw-translate-y-[1px]"
                style={{ border: "1px solid rgba(255,255,255,0.9)" }}
              >
                Build Your Team
              </button>

              <button
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-6 tw-py-3 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-white tw-text-slate-900 tw-shadow-sm tw-transition hover:tw-translate-y-[1px]"
                style={{ border: "1px solid rgba(148,163,184,0.55)" }}
              >
                Speak to an Industry Specialist
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL BLOCK (ABSTRACT, NOT CARD) */}

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-justify-center"
          >
            <div className="tw-relative tw-w-full tw-max-w-md">
              {/* Glow base */}
              <div className="tw-absolute tw-inset-x-8 tw-bottom-[-18px] tw-h-10 tw-rounded-[28px] tw-bg-slate-900/10 tw-blur-md" />

              <div
                className="tw-relative tw-rounded-[28px] tw-overflow-hidden tw-bg-slate-900 tw-shadow-2xl"
                style={{
                  border: "1px solid rgba(15,23,42,0.85)",
                  boxShadow:
                    "0 28px 70px rgba(15,23,42,0.45), 0 0 0 1px rgba(15,23,42,0.9)",
                }}
              >
                <div className="tw-relative tw-aspect-[4/3]">
                  <Image
                    src="/assets/images/industries/HeroBanner.jpg" // optional, very light
                    alt=""
                    fill
                    className="tw-object-cover tw-opacity-[0.96]"
                  />
                  <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-950/75 tw-via-slate-900/25 tw-to-transparent" />
                </div>

                {/* Overlay pill chips */}
                <div className="tw-absolute tw-top-4 tw-left-4 tw-flex tw-flex-col tw-gap-2">
                  <div
                    className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white/10 tw-px-3 tw-py-1 tw-backdrop-blur-xl"
                    style={{ border: "1px solid rgba(248,250,252,0.25)" }}
                  >
                    <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-emerald-400" />
                    <span className="tw-text-[11px] tw-font-medium tw-text-slate-50">
                      Industries We Serve
                    </span>
                  </div>
                  <div
                    className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white/8 tw-px-2.5 tw-py-1 tw-backdrop-blur-xl"
                    style={{ border: "1px solid rgba(148,163,184,0.55)" }}
                  >
                    <span className="tw-h-1.5 tw-w-6 tw-rounded-full tw-bg-accent-300" />
                    <span className="tw-text-[10px] tw-text-slate-100">
                      Pipelines & branding
                    </span>
                  </div>
                </div>

                {/* Bottom decorative bars */}
                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-px-5 tw-py-4 tw-flex tw-items-center tw-justify-between">
                  <div className="tw-flex tw-flex-col tw-gap-1">
                    <span className="tw-h-1.5 tw-w-10 tw-rounded-full tw-bg-slate-100/85" />
                    <span className="tw-h-1 tw-w-6 tw-rounded-full tw-bg-slate-300/85" />
                  </div>
                  <div className="tw-flex tw-gap-2">
                    <span className="tw-h-7 tw-w-16 tw-rounded-full tw-bg-accent-500/90" />
                    <span className="tw-h-7 tw-w-10 tw-rounded-full tw-bg-slate-200/90" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FLOATING ANIMATIONS */}
      <style jsx>{`
        .industries-float-1 {
          animation: industriesFloat1 18s ease-in-out infinite;
        }
        .industries-float-2 {
          animation: industriesFloat2 22s ease-in-out infinite;
        }
        .industries-float-3 {
          animation: industriesFloat3 14s ease-in-out infinite;
        }

        @keyframes industriesFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(36px);
          }
        }

        @keyframes industriesFloat2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-42px);
          }
        }

        @keyframes industriesFloat3 {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(12deg);
          }
        }
      `}</style>
    </section>
  );
};

export default IndustriesWeServeHero;
