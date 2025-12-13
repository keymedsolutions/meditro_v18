"use client";

import { motion } from "framer-motion";
import React from "react";

const RemoteStaffingHero: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-min-h-[90vh] tw-overflow-hidden tw-bg-[#0b1020] tw-flex tw-items-center sm:tw-py-0 tw-py-20">
      {/* ================= BACKGROUND SYSTEM ================= */}
      {/* Gradient base */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-[#0b1020] tw-via-[#0f1735] tw-to-[#0b1020]" />

      {/* Animated abstract shapes */}
      <div className="tw-absolute tw-top-[12%] tw-left-[10%] tw-h-56 tw-w-56 tw-rounded-full tw-bg-accent-500/20 tw-blur-[120px] rs-float-1" />
      <div className="tw-absolute tw-bottom-[18%] tw-right-[12%] tw-h-72 tw-w-72 tw-rounded-full tw-bg-indigo-400/20 tw-blur-[140px] rs-float-2" />
      <div className="tw-absolute tw-top-[40%] tw-right-[35%] tw-h-32 tw-w-32 tw-rounded-[36px] tw-border tw-border-accent-400/40 rs-rotate" />
      <div className="tw-absolute tw-bottom-[30%] tw-left-[30%] tw-h-20 tw-w-20 tw-rounded-full tw-bg-accent-300/40 rs-pulse" />

      {/* Grid overlay */}
      <div className="tw-absolute tw-inset-0 tw-bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] tw-bg-[size:48px_48px]" />

      {/* ================= CONTENT ================= */}
      <div className="tw-relative tw-z-10 tw-container tw-mx-auto tw-max-w-6xl tw-px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-max-w-3xl"
        >
          {/* Eyebrow */}
          <div className="tw-inline-flex tw-items-center tw-gap-3 tw-mb-5">
            <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-400" />
            <span className="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-[0.22em] tw-text-accent-300">
              Remote Staffing Agency
            </span>
          </div>

          {/* Heading */}
          <h1 className="tw-text-3xl sm:tw-text-4xl lg:tw-text-5xl tw-font-semibold tw-leading-tight tw-text-white tw-mb-6">
            Remote Staffing Agency: Build High-Performance Global Teams with Ease
          </h1>

          {/* Description */}
          <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-300 tw-mb-6">
            Building a great team shouldn’t be limited by location. With our UK-based Remote Staffing Agency,
            you get access to exceptional global talent, flexible hiring models, and seamless onboarding,
            all designed to help your business scale faster, smarter, and more cost-effectively.
          </p>

          <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-300 tw-mb-10">
            Whether you're expanding your team, launching a new project, or looking for consistent operational
            support, we match you with experienced remote professionals who integrate effortlessly into your workflows.
          </p>

          {/* CTAs */}
          <div className="tw-flex tw-flex-wrap tw-gap-4">
            <button className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-accent-500 tw-px-6 tw-py-3 tw-text-sm sm:tw-text-base tw-font-semibold tw-text-white tw-shadow-lg tw-shadow-accent-500/40 hover:tw-translate-y-[1px] tw-transition">
              Build Your Remote Team
            </button>

            <button
              className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-white/10 tw-backdrop-blur-xl tw-px-6 tw-py-3 tw-text-sm sm:tw-text-base tw-font-semibold tw-text-white hover:tw-bg-white/20 tw-transition"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            >
              Speak to a Remote Staffing Specialist
            </button>
          </div>
        </motion.div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        .rs-float-1 {
          animation: rsFloat1 10s ease-in-out infinite;
        }
        .rs-float-2 {
          animation: rsFloat2 14s ease-in-out infinite;
        }
        .rs-rotate {
          animation: rsRotate 22s linear infinite;
        }
        .rs-pulse {
          animation: rsPulse 8s ease-in-out infinite;
        }

        @keyframes rsFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes rsFloat2 {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(40px);
          }
        }

        @keyframes rsRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rsPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.25);
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  );
};

export default RemoteStaffingHero;
