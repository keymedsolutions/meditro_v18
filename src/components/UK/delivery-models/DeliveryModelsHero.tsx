"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const DeliveryModelsHero: React.FC = () => {
  return (
    <section className="tw-relative tw-overflow-hidden xl:tw-min-h-[80vh] tw-bg-[#f6f9ff] tw-flex tw-items-center">
      {/* BACKGROUND IMAGE */}
      <div className="tw-absolute tw-inset-0 tw-pointer-events-none">
        <Image
          src="/assets/images/delivery-models/hero-bg.jpg" // ✅ lightweight, abstract/corporate image
          alt="Recruitment delivery models background"
          fill
          priority
          className="tw-object-cover"
        />

        {/* ACCENT OVERLAY */}
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-accent-100/70 tw-via-white/60 tw-to-accent-200/60" />
      </div>

      {/* FLOATING ACCENT SHAPES */}
      <div className="tw-absolute tw-top-[18%] tw-left-[8%] tw-h-28 tw-w-28 tw-rounded-full tw-bg-accent-300/70 tw-blur-3xl dm-float-y" />
      <div className="tw-absolute tw-bottom-[22%] tw-right-[10%] tw-h-36 tw-w-36 tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl dm-float-x" />
      <div className="tw-absolute tw-top-[42%] tw-right-[6%] tw-h-20 tw-w-20 tw-rounded-full tw-border-[4px] tw-border-accent-400/60 tw-blur-sm dm-rotate" />

      {/* CONTENT */}
      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-text-center tw-py-20"
        >
          {/* Eyebrow */}
          <span className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-white/90 tw-backdrop-blur tw-px-5 tw-py-1.5 tw-text-xs tw-font-semibold tw-text-accent-700 tw-mb-6 tw-shadow-sm">
            Delivery Models
          </span>

          {/* Heading */}
          <h1 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-5xl tw-font-semibold tw-text-slate-900 tw-leading-tight tw-mb-6">
            Flexible Recruitment Delivery Models Designed for Every Hiring Need
          </h1>

          {/* Description */}
          <p className="tw-text-sm sm:tw-text-base lg:tw-text-lg tw-text-slate-700 tw-leading-relaxed tw-max-w-4xl tw-mx-auto tw-mb-10">
            Hiring doesn’t have to be complicated. Whether you need Full RPO,
            On-Demand Recruitment Support, or Dedicated Offshore Teams, Key
            Medsolutions UK makes it simple. Our Recruitment Delivery Models
            combine UK expertise with global efficiency so you can scale
            quickly, save costs, and access the right talent, right when you
            need it.
          </p>

          {/* CTA */}
          <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-4">
            <button
              className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-7 tw-py-3 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-accent-500 tw-text-white tw-shadow-xl tw-shadow-accent-300/70 tw-transition hover:tw-translate-y-[1px]"
              style={{ border: "1px solid rgba(255,255,255,0.9)" }}
            >
              Explore Delivery Models
            </button>

            <button
              className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-7 tw-py-3 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-white/90 tw-backdrop-blur tw-text-slate-900 tw-shadow-md tw-transition hover:tw-translate-y-[1px]"
              style={{ border: "1px solid rgba(148,163,184,0.5)" }}
            >
              Speak to a Recruitment Expert
            </button>
          </div>
        </motion.div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        .dm-float-y {
          animation: dmFloatY 9s ease-in-out infinite;
        }
        .dm-float-x {
          animation: dmFloatX 11s ease-in-out infinite;
        }
        .dm-rotate {
          animation: dmRotate 18s linear infinite;
        }

        @keyframes dmFloatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-24px);
          }
        }

        @keyframes dmFloatX {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(28px);
          }
        }

        @keyframes dmRotate {
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

export default DeliveryModelsHero;
