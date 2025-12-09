"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  MonitorSmartphone,
  LineChart,
  HeartPulse,
  BriefcaseBusiness,
  Cog,
  ShoppingBag,
  Rocket,
} from "lucide-react";

const RPOSpecialisationsSection: React.FC = () => {
  const sectors = [
    {
      icon: <MonitorSmartphone className="tw-w-5 tw-h-5" />,
      text: "We’re recognised as one of the leading RPO partners for technology sector hiring globally, but that's not the only thing we do well.",
    },
    { icon: <LineChart className="tw-w-5 tw-h-5" />, text: "Finance & Accounting" },
    { icon: <HeartPulse className="tw-w-5 tw-h-5" />, text: "Healthcare" },
    { icon: <BriefcaseBusiness className="tw-w-5 tw-h-5" />, text: "Professional Services" },
    { icon: <Cog className="tw-w-5 tw-h-5" />, text: "Engineering & Energy" },
    { icon: <ShoppingBag className="tw-w-5 tw-h-5" />, text: "Retail" },
    { icon: <Rocket className="tw-w-5 tw-h-5" />, text: "Startups & SMEs" },
  ];

  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f3f6fc] tw-py-16 md:tw-py-20">

      {/* === Background Image Layer === */}
      <div className="tw-absolute tw-inset-0 tw-z-0 tw-opacity-90 tw-pointer-events-none">
        <Image
          src="/assets/images/recruitment-process-outsourcing-services/rpo-bg-light.jpeg" // <-- replace with your image
          alt=""
          fill
          className="tw-object-cover tw-object-center tw-blur-[3px]"
        />
        <div className="tw-absolute tw-inset-0 tw-bg-white/70" /> 
      </div>

      {/* Accent floating shapes */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-3rem] tw-right-[15%] tw-h-28 tw-w-28 tw-rounded-[32px] tw-bg-accent-100 tw-blur-3xl tw-opacity-80" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-4rem] tw-left-[8%] tw-h-40 tw-w-40 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[30%] tw-left-[25%] tw-h-8 tw-w-8 tw-rounded-xl tw-bg-accent-300/70 tw-blur-sm rpo-spec-float-1" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[18%] tw-right-[22%] tw-h-6 tw-w-16 tw-rounded-full tw-bg-accent-100/90 tw-blur-[1px] rpo-spec-float-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">

        {/* ---------------- Heading ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-max-w-3xl tw-mx-auto tw-text-center tw-mb-10 md:tw-mb-12"
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-4">
            Our RPO Specialisations
          </h2>
          <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-mb-4">
            Every industry has its own challenges, which is why our Recruitment
            Process Outsourcing services are tailored to your sector. We’re
            recognised as one of the leading RPO partners for technology sector hiring
            globally, but that's not the only thing we do well.
          </p>
          <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed">
            We also specialise in:
          </p>
        </motion.div>

        {/* ---------------- Main Card ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-max-w-4xl tw-mx-auto"
        >
          <div
            className="tw-relative tw-rounded-[32px] tw-bg-white tw-px-5 tw-py-7 md:tw-px-8 md:tw-py-9"
            style={{
              border: "1px solid rgba(203,213,225,0.8)",
              boxShadow:
                "0 22px 60px rgba(15,23,42,0.12), 0 0 0 1px rgba(255,255,255,0.9)",
            }}
          >
            <div className="tw-flex tw-justify-center tw-mb-6">
              <div className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-1.5">
                <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-400" />
                <span className="tw-text-[11px] sm:tw-text-xs tw-font-medium tw-tracking-[0.16em] tw-uppercase tw-text-slate-600">
                  Sector-Focused RPO Coverage
                </span>
              </div>
            </div>

            {/* --------------- Grid of Cards --------------- */}
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 md:tw-gap-5 tw-mb-6">
              {sectors.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div
                    className="tw-h-full tw-rounded-2xl tw-bg-[#f9fbff] tw-px-4 tw-py-3.5 tw-flex tw-items-start tw-gap-3"
                    style={{
                      border: "1px solid rgba(226,232,240,0.9)",
                    }}
                  >
                    <div className="tw-flex tw-items-center tw-justify-center tw-h-9 tw-w-9 tw-rounded-2xl tw-bg-accent-50">
                      <span className="tw-text-accent-600">{item.icon}</span>
                    </div>

                    <p className="tw-text-sm tw-font-semibold tw-text-slate-900">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-text-center tw-mt-2"
            >
              So, regardless of your industry, you get RPO solutions that actually
              fit your world.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Floating animation styles */}
      <style jsx>{`
        .rpo-spec-float-1 {
          animation: rpoSpecFloat1 9s ease-in-out infinite;
        }
        .rpo-spec-float-2 {
          animation: rpoSpecFloat2 11s ease-in-out infinite;
        }

        @keyframes rpoSpecFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes rpoSpecFloat2 {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(18px);
          }
        }
      `}</style>
    </section>
  );
};

export default RPOSpecialisationsSection;
