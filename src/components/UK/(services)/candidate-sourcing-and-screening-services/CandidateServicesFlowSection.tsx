"use client";

import { motion } from "framer-motion";
import React from "react";

const CandidateServicesFlowSection: React.FC = () => {
  const flowItems = [
    {
      title: "1. Candidate Sourcing",
      lines: [
        "Active and passive sourcing: We identify candidates at all stages of their careers.",
        "Boolean and advanced search: Precision-driven methods for niche roles.",
        "Multi-channel sourcing: From LinkedIn to niche platforms, we leave no stone unturned.",
        "Industry expertise: Specialization in tech, healthcare, finance, and more.",
      ],
    },
    {
      title: "2. CV Sourcing Services",
      lines: [
        "ATS and database extraction: Uncover hidden talent in your systems.",
        "Custom filters: Screen for skills, location, experience, and salary.",
      ],
    },
    {
      title: "3. CV Screening & Shortlisting",
      lines: [
        "AI-supported screening: Combine technology with human expertise.",
        "Technical and cultural fit: Ensure candidates align with your needs.",
        "Shortlist reports: Deliver recruiter-ready profiles.",
      ],
    },
    {
      title: "4. Candidate Pre-Screening",
      lines: [
        "Telephonic screening: Quick, initial assessments.",
        "Employment verification: Basic checks for compliance.",
        "Eligibility checks: Verify right-to-work status.",
      ],
    },
    {
      title: "5. Employer Branding Support",
      lines: [
        "Job descriptions: Craft compelling, SEO-optimised JDs.",
        "Candidate messaging: Communicate your value effectively.",
        "Brand visibility: Make your company stand out in the talent market.",
      ],
    },
    {
      title: "6. Sourcing Metrics & Reporting",
      lines: [
        "Weekly reports: Stay updated on progress.",
        "Pipeline stats: Gain insights into candidate quality and volume.",
        "Talent market insights: Stay ahead of industry trends.",
      ],
    },
  ];

  return (
    <section className="tw-relative tw-w-full tw-bg-[#f3f6ff] tw-overflow-hidden tw-py-20">
      {/* BACKGROUND LAYERS */}
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,0.6),transparent_55%)]" />
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_bottom_right,_rgba(219,234,254,0.7),transparent_60%)]" />

      {/* FLOATING SHAPES */}
      <div className="tw-absolute tw-top-[10%] tw-left-[12%] tw-h-24 tw-w-24 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-80 cs-flow-up" />
      <div className="tw-absolute tw-bottom-[12%] tw-right-[10%] tw-h-20 tw-w-20 tw-rounded-3xl tw-bg-accent-100 tw-blur-2xl tw-opacity-80 cs-flow-side" />
      <div className="tw-absolute tw-top-[50%] tw-left-[5%] tw-h-14 tw-w-14 tw-rounded-full tw-bg-accent-300 tw-blur-xl tw-opacity-80 cs-flow-scale" />
      <div className="tw-absolute tw-bottom-[20%] tw-right-[25%] tw-h-28 tw-w-28 tw-rounded-full tw-border-[4px] tw-border-accent-300/70 tw-blur-sm cs-flow-rotate" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-5 md:tw-px-10">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-14"
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
            Our Candidate Sourcing &amp; Screening Services
          </h2>
          <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
            We offer a full range of services to meet your hiring needs. Here’s
            what we can do for you:
          </p>
        </motion.div>

        {/* DESKTOP / TABLET TIMELINE */}
        <div className="tw-relative tw-hidden md:tw-block tw-pt-4">
          {/* CENTER TIMELINE LINE (md+) */}
          <div className="tw-absolute tw-left-1/2 -tw-translate-x-1/2 tw-w-[3px] tw-h-full tw-bg-gradient-to-b tw-from-accent-400 tw-to-accent-200 tw-rounded-full" />

          <div className="tw-flex tw-flex-col tw-gap-16">
            {flowItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="tw-relative tw-grid tw-grid-cols-2 tw-gap-8 tw-items-start"
                >
                  {/* TIMELINE BULLET */}
                  <span className="tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-h-6 tw-w-6 tw-rounded-full tw-bg-accent-500 tw-shadow-lg tw-border tw-border-white" />

                  {isLeft ? (
                    <>
                      {/* LEFT CARD */}
                      <div className="tw-pr-10 tw-flex tw-justify-end">
                        <div
                          className="tw-bg-white tw-rounded-2xl tw-px-4 tw-py-4 tw-shadow-sm tw-max-w-md"
                          style={{
                            borderRight: "2px solid rgba(59,130,246,0.6)",
                          }}
                        >
                          <h3 className="tw-text-lg sm:tw-text-xl tw-font-bold tw-text-slate-900 tw-mb-3">
                            {item.title}
                          </h3>
                          <div className="tw-space-y-2">
                            {item.lines.map((line, i) => (
                              <p
                                key={i}
                                className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed"
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* RIGHT SPACER */}
                      <div />
                    </>
                  ) : (
                    <>
                      {/* LEFT SPACER */}
                      <div />

                      {/* RIGHT CARD */}
                      <div className="tw-pl-10 tw-flex tw-justify-start">
                        <div
                          className="tw-bg-white tw-rounded-2xl tw-px-4 tw-py-4 tw-shadow-sm tw-max-w-md"
                          style={{
                            borderLeft: "2px solid rgba(59,130,246,0.6)",
                          }}
                        >
                          <h3 className="tw-text-lg sm:tw-text-xl tw-font-bold tw-text-slate-900 tw-mb-3">
                            {item.title}
                          </h3>
                          <div className="tw-space-y-2">
                            {item.lines.map((line, i) => (
                              <p
                                key={i}
                                className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed"
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE SIMPLE LIST (NO DUPLICATES) */}
        <div className="md:tw-hidden tw-flex tw-flex-col tw-gap-6">
          {flowItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.04,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className="tw-bg-white tw-rounded-2xl tw-px-4 tw-py-4 tw-shadow-sm"
                style={{
                  borderLeft: "2px solid rgba(59,130,246,0.6)",
                }}
              >
                <h3 className="tw-text-lg tw-font-bold tw-text-slate-900 tw-mb-3">
                  {item.title}
                </h3>
                <div className="tw-space-y-2">
                  {item.lines.map((line, i) => (
                    <p
                      key={i}
                      className="tw-text-sm tw-text-slate-700 tw-leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        .cs-flow-up {
          animation: csFlowUp 9s ease-in-out infinite;
        }
        .cs-flow-side {
          animation: csFlowSide 12s ease-in-out infinite;
        }
        .cs-flow-scale {
          animation: csFlowScale 8s ease-in-out infinite;
        }
        .cs-flow-rotate {
          animation: csFlowRotate 16s linear infinite;
        }

        @keyframes csFlowUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes csFlowSide {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(25px);
          }
        }

        @keyframes csFlowScale {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.18);
          }
        }

        @keyframes csFlowRotate {
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

export default CandidateServicesFlowSection;
