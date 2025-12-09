"use client";

import { motion } from "framer-motion";
import { Globe2, Cpu, Briefcase, Layers, ShieldCheck } from "lucide-react";

const BestSourcingPartnerSection = () => {
  const features = [
    {
      icon: Globe2,
      title: "1. Global Reach, UK Quality Delivered.",
      desc:
        "We combine global sourcing capabilities with UK-level screening standards, ensuring compliance and quality.",
    },
    {
      icon: Cpu,
      title: "2. Top Tools & Technology",
      desc:
        "Our team uses industry-leading candidate sourcing software and AI-based talent intelligence to deliver unmatched results.",
    },
    {
      icon: Briefcase,
      title: "3. Sector Expertise",
      desc:
        "We specialise in sourcing for: Technology, Healthcare, Finance, Education, Engineering.",
    },
    {
      icon: Layers,
      title: "4. Flexible Engagement Models",
      desc:
        "Choose a model that fits your needs: Pay-per-position, Monthly subscription, Dedicated sourcing teams, On-demand sourcing.",
    },
    {
      icon: ShieldCheck,
      title: "5. Talent Quality Guarantee",
      desc:
        "We stand by our results with: Replacement support, SLA-driven delivery, Quality assurance checks.",
    },
  ];

  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f5f8ff] tw-py-20">

      {/* BACKGROUND AESTHETIC SHAPES */}
      <div className="tw-absolute tw-top-[10%] tw-left-[10%] tw-h-32 tw-w-32 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-60 animate-floatUp" />
      <div className="tw-absolute tw-bottom-[12%] tw-right-[12%] tw-h-40 tw-w-40 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70 animate-floatSide" />
      <div className="tw-absolute tw-top-[45%] tw-left-[50%] tw-h-16 tw-w-16 tw-rounded-full tw-bg-accent-300/70 tw-blur-xl tw-opacity-80 animate-pulseGlow" />
      <div className="tw-absolute tw-top-[25%] tw-right-[28%] tw-h-24 tw-w-24 tw-rounded-full tw-border-4 tw-border-accent-200/40 tw-blur-[2px] animate-rotateSlow" />

      {/* CENTRAL CONTENT */}
      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-5xl !tw-px-0">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-14"
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-3">
            What Makes Us the Best Candidate Sourcing Partner?
          </h2>
        </motion.div>

        {/* GLASS PANEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-bg-white/80 tw-backdrop-blur-xl tw-rounded-3xl tw-shadow-xl tw-px-8 tw-py-10 tw-border tw-border-slate-200/60"
        >
          <div className="tw-flex tw-flex-col tw-gap-10">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="tw-flex tw-items-start tw-gap-5"
                >
                  <div className="tw-h-12 tw-w-12 tw-flex tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-100 tw-shadow-md tw-border tw-border-accent-200">
                    <Icon className="tw-w-6 tw-h-6 tw-text-accent-700" />
                  </div>

                  <div className="tw-flex-1">
                    <h3 className="tw-text-lg tw-font-semibold tw-text-slate-900 tw-mb-1">
                      {feat.title}
                    </h3>
                    <p className="tw-text-slate-700 tw-text-sm sm:tw-text-base tw-leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-floatUp { animation: floatUp 8s ease-in-out infinite; }

        @keyframes floatSide {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(28px); }
        }
        .animate-floatSide { animation: floatSide 10s ease-in-out infinite; }

        @keyframes rotateSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-rotateSlow { animation: rotateSlow 18s linear infinite; }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.75; }
          50% { transform: scale(1.25); opacity: 1; }
        }
        .animate-pulseGlow { animation: pulseGlow 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default BestSourcingPartnerSection;
