"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const WhatIsRPOSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f9fbff] tw-py-16 md:tw-py-20">
      {/* Background accent shapes */}
      <div className="tw-pointer-events-none tw-absolute -tw-top-10 tw-left-[-5%] tw-h-40 tw-w-40 tw-rounded-[32px] tw-bg-accent-100 tw-blur-3xl tw-opacity-80" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-4rem] tw-right-[0%] tw-h-44 tw-w-44 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-top-1/2 tw-right-[18%] tw-h-10 tw-w-10 tw-rounded-2xl tw-bg-accent-300/70 tw-blur-sm what-rpo-floating-1" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[18%] tw-right-[10%] tw-h-6 tw-w-16 tw-rounded-full tw-bg-accent-100/90 tw-blur-[1px] what-rpo-floating-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto  tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] tw-gap-10 tw-items-stretch">
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative tw-order-1 lg:tw-order-none"
          >
            <div
              className="tw-rounded-3xl tw-bg-white/90 tw-backdrop-blur-xl tw-px-6 tw-py-7 md:tw-px-8 md:tw-py-9"
              style={{
                border: "1px solid rgba(148,163,184,0.35)",
                boxShadow:
                  "0 24px 60px rgba(15,23,42,0.12), 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-4"
              >
                What Is Recruitment Process Outsourcing?
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-space-y-4 tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700"
              >
                <p>
                  If you’ve ever wondered what&nbsp;
                  <Link
                    href={APP_PATH.howToChooseTheBestUkRecruitmentAgency.path}
                    className="tw-font-semibold tw-text-inherit  active:tw-text-inherit focus:tw-text-inherit"
                  >
                    Recruitment Process Outsourcing
                  </Link>
                  &nbsp;actually means, you’re not alone. Simply put, RPO lets
                  you hand over all or part of your hiring process to
                  specialists, like us! Think of it as having a dedicated,
                  expert recruitment team, but with all the flexibility and
                  know-how of the recruitment process outsourcing industry.
                </p>
                <p>
                  What does RPO stand for? It stands for Recruitment Process
                  Outsourcing,a partnership where we handle everything from
                  initial candidate searches right through to onboarding. Unlike
                  traditional agencies that focus on one-off roles, RPO
                  providers like us manage your entire hiring journey.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: DECORATIVE PANEL WITH CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-items-stretch tw-justify-center tw-order-2 lg:tw-order-none"
          >
            <div className="tw-relative tw-w-full tw-max-w-sm">
              <div
                className="tw-relative tw-rounded-[28px] tw-bg-gradient-to-br tw-from-accent-50 tw-via-accent-100 tw-to-accent-200 tw-p-[2px]"
                style={{
                  border: "1px solid rgba(148,163,184,0.45)",
                  boxShadow:
                    "0 26px 70px rgba(15,23,42,0.2), 0 0 0 1px rgba(255,255,255,0.9)",
                }}
              >
                <div className="tw-rounded-[24px] tw-bg-white tw-p-5 tw-flex tw-flex-col tw-gap-5 tw-h-full">
                  {/* top header decoration */}
                  <div className="tw-flex tw-gap-1.5 tw-mb-1">
                    <span className="tw-h-2 tw-w-10 tw-rounded-full tw-bg-accent-100" />
                    <span className="tw-h-2 tw-w-5 tw-rounded-full tw-bg-accent-200" />
                  </div>

                  {/* REAL CONTENT ADDED HERE */}
                  <h3 className="tw-text-base tw-font-semibold tw-text-slate-900">
                    Why do companies choose Recruitment Process Outsourcing
                    services?
                  </h3>

                  <div className="tw-flex tw-flex-col tw-gap-3">
                    <div className="tw-rounded-2xl tw-bg-accent-50 tw-px-4 tw-py-3 tw-text-[13px] tw-text-slate-700 tw-leading-relaxed">
                      <strong className="tw-text-slate-900">
                        Scalability:
                      </strong>{" "}
                      Ramp hiring up or down as your needs change.
                    </div>

                    <div className="tw-rounded-2xl tw-bg-accent-50 tw-px-4 tw-py-3 tw-text-[13px] tw-text-slate-700 tw-leading-relaxed">
                      <strong className="tw-text-slate-900">
                        Cost Savings:
                      </strong>{" "}
                      Reduce recruitment costs and get more value from your
                      hiring budget.
                    </div>

                    <div className="tw-rounded-2xl tw-bg-accent-50 tw-px-4 tw-py-3 tw-text-[13px] tw-text-slate-700 tw-leading-relaxed">
                      <strong className="tw-text-slate-900">Speed:</strong> Fill
                      critical positions faster when it matters most.
                    </div>

                    <div className="tw-rounded-2xl tw-bg-accent-50 tw-px-4 tw-py-3 tw-text-[13px] tw-text-slate-700 tw-leading-relaxed">
                      <strong className="tw-text-slate-900">Quality:</strong>{" "}
                      Access better candidates using our advanced recruitment
                      tools.
                    </div>
                  </div>

                  {/* footer chips */}
                  <div className="tw-mt-3 tw-flex tw-justify-between tw-items-center">
                    <span className="tw-h-7 tw-w-20 tw-rounded-full tw-bg-accent-100" />
                    <span className="tw-h-7 tw-w-14 tw-rounded-full tw-bg-accent-200" />
                  </div>
                </div>
              </div>

              {/* floating accent */}
              <div
                className="tw-absolute -tw-top-5 tw-right-0 tw-h-9 tw-w-9 tw-rounded-2xl tw-bg-accent-200/90 tw-blur-[1px] what-rpo-floating-3"
                style={{
                  border: "1px solid rgba(226,232,240,0.9)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .what-rpo-floating-1 {
          animation: whatRpoUp 8s ease-in-out infinite;
        }
        .what-rpo-floating-2 {
          animation: whatRpoSide 9s ease-in-out infinite;
        }
        .what-rpo-floating-3 {
          animation: whatRpoRotate 14s linear infinite;
        }

        @keyframes whatRpoUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes whatRpoSide {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(14px);
          }
        }
        @keyframes whatRpoRotate {
          0% {
            transform: rotate(0deg) translateY(0);
          }
          50% {
            transform: rotate(180deg) translateY(-4px);
          }
          100% {
            transform: rotate(360deg) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhatIsRPOSection;
