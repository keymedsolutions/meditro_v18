"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="tw-relative tw-min-h-screen tw-w-full tw-overflow-hidden tw-isolate">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="tw-absolute tw-inset-0 tw-z-0">
        <Image
          src="/assets/images/about-us/Hero.jpeg"
          alt="Key Medsolutions UK"
          fill
          priority
          className="tw-object-cover tw-opacity-[0.80]"
        />

        {/* DARK BASE */}
        <div className="tw-absolute tw-inset-0 tw-bg-[#020617]/80" />

        {/* ACCENT GRADIENT ENERGY */}
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-accent-600/40 tw-via-transparent tw-to-accent-500/30" />
      </div>

      {/* ================= ANIMATED ACCENT ORBS ================= */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[12%] tw-left-[6%] tw-h-40 tw-w-40 tw-rounded-full tw-bg-accent-500/35 tw-blur-[90px] orb-float-y" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[14%] tw-right-[8%] tw-h-48 tw-w-48 tw-rounded-full tw-bg-accent-400/30 tw-blur-[100px] orb-float-x" />

      {/* ORBIT RING */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[45%] tw-right-[22%] tw-h-28 tw-w-28 tw-rounded-full tw-border tw-border-accent-500/40 orb-rotate" />

      {/* ================= CONTENT ================= */}
      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-px-4 tw-min-h-screen tw-flex tw-items-center sm:tw-pt-0 tw-pt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="tw-max-w-4xl tw-text-center tw-mx-auto"
        >
          {/* ACCENT BADGE */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-500/15 tw-border tw-border-accent-500/30 tw-px-5 tw-py-2 tw-mb-6"
          >
            <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
            <span className="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-[0.25em] tw-text-accent-400">
              About Us
            </span>
          </motion.div>

          {/* HEADING WITH ACCENT SPOTLIGHT */}
          <div className="tw-relative tw-inline-block tw-mb-8">
            <div className="tw-absolute tw-inset-0 tw-bg-accent-500/20 tw-blur-3xl tw-rounded-full" />
            <h1 className="tw-relative tw-text-3xl sm:tw-text-4xl lg:tw-text-6xl tw-font-bold tw-leading-tight tw-text-white">
              About{" "}
              <span className="tw-text-accent-500">Key Medsolutions UK</span>
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="tw-text-base sm:tw-text-lg lg:tw-text-xl tw-leading-relaxed tw-text-slate-200">
            Looking for a recruitment partner who truly understands what you
            need? That’s exactly what we’re here for. Key Medsolutions UK is
            your go-to Global Recruitment Process Outsourcing Company. We’re not
            just another recruitment service; we’re people who care, helping
            businesses all over the UK and Global find and build stronger, more
            successful teams. You can relax knowing your recruitment is in
            expert hands, while you stay focused on those broader strategic
            goals. With Key Medsolutions UK, you’ll get real support, proven
            strategies, and a team that’s as invested in your success as you
            are.
          </p>
        </motion.div>
      </div>

      {/* ================= MOTION ================= */}
      <style jsx>{`
        .orb-float-y {
          animation: floatY 10s ease-in-out infinite;
        }
        .orb-float-x {
          animation: floatX 12s ease-in-out infinite;
        }
        .orb-rotate {
          animation: rotateSlow 22s linear infinite;
        }

        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes floatX {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(36px);
          }
        }

        @keyframes rotateSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
