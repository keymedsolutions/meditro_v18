"use client";

import { motion } from "framer-motion";
import React from "react";

const WhyChooseKeyMedsolutionsUK: React.FC = () => {
  const flowItems = [
    {
      title: "A Trusted Technology Recruitment Agency",
      lines: [
        "We work closely with businesses of all sizes to place technical specialists, digital experts, and senior IT leaders.",
      ],
    },
    {
      title: "One of the Best Biotechnology Recruitment Agencies",
      lines: [
        "Niche sectors like BioTech require a deep understanding of scientific and technical skill sets, and we bring exactly that.",
      ],
    },
    {
      title: "Digital Recruitment Expertise",
      lines: [
        "If you’re scaling your digital or creative team, our expertise as a Digital recruitment agency ensures you get the right people.",
      ],
    },
    {
      title: "AI-Powered Sourcing",
      lines: [
        "We combine AI tools with human expertise to deliver strong candidate matches quickly.",
      ],
    },
    {
      title: "Access top senior IT consultants in the UK and worldwide.",
      lines: [
        "Our consultants guide you through hiring decisions, market insights, and talent strategy.",
      ],
    },
    {
      title: "Consistently Faster Hiring",
      lines: ["Most roles are filled in days, not months."],
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
            Why Choose Key Medsolutions UK for Technology & Digital Hiring?{" "}
          </h2>
          <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
            Key Medsolutions UK is known for delivering fast, accurate, and
            high-quality hiring across all digital and tech sectors. We’re not
            just another recruiter, we’re a strategic hiring partner.
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
                      <div className="tw-pr-10 tw-flex tw-justify-end tw-w-full">
                        <div
                          className="tw-w-full tw-bg-white tw-rounded-2xl tw-px-4 tw-py-4 tw-shadow-sm tw-max-w-md"
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
                      <div className="tw-pl-10 tw-flex tw-justify-start tw-w-full">
                        <div
                          className="tw-bg-white tw-w-full tw-rounded-2xl tw-px-4 tw-py-4 tw-shadow-sm tw-max-w-md"
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

export default WhyChooseKeyMedsolutionsUK;
