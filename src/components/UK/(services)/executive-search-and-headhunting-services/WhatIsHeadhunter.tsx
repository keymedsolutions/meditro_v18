"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatIsHeadhunterEnhanced() {
  return (
    <section className="tw-relative tw-py-24 tw-bg-white">
      {/* background gradients */}
      <div
        aria-hidden
        className="tw-absolute -tw-left-20 -tw-top-16 tw-w-[520px] tw-h-[520px] tw-rounded-full tw-bg-accent-50 tw-opacity-70 tw-blur-3xl"
      />
      <div
        aria-hidden
        className="tw-absolute -tw-right-24 -tw-bottom-12 tw-w-[480px] tw-h-[480px] tw-rounded-full tw-bg-accent-200 tw-opacity-60 tw-blur-3xl"
      />

      <div className="tw-relative tw-z-10 tw-max-w-7xl tw-mx-auto tw-px-6 sm:tw-px-8 lg:tw-px-12">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-10 tw-items-stretch">
          {/* LEFT SIDE — stays exactly as before */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-flex-col tw-gap-6 tw-h-full"
          >
            <div
              className="tw-rounded-3xl tw-bg-white tw-px-6 tw-py-8 sm:tw-px-8 sm:tw-py-10 tw-flex-1 tw-flex tw-flex-col"
              style={{
                border: "1px solid var(--accent-800)",
                boxShadow:
                  "0 30px 80px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <h2 className="tw-text-3xl sm:tw-text-4xl tw-font-extrabold tw-text-accent-900 tw-leading-tight">
                What Is a Headhunter?
              </h2>

              <div className="tw-mt-4 tw-space-y-4 tw-text-base tw-text-accent-700 tw-leading-relaxed max-w-3xl">
                <p>A lot of clients ask: "What is a headhunter?"</p>

                <p>
                  A headhunter is a talent specialist who proactively
                  identifies, approaches, and engages top-tier professionals,
                  people who aren’t applying for jobs but are open to
                  well-matched opportunities. They use intelligence, networks,
                  and research to locate exactly who you need.
                </p>

                <p>A great headhunter staffing agency helps you:</p>

                <ul className="tw-list-none tw-space-y-2 tw-pl-0">
                  <li>Access hidden talent</li>
                  <li>Speed up leadership hiring</li>
                  <li>Engage senior candidates confidently and discreetly</li>
                  <li>Understand competitor landscapes</li>
                  <li>Reduce the risk of hiring mistakes</li>
                </ul>

                <p>
                  If you’re unsure how to work with headhunters, it’s simple:
                  share your goals, refine your ideal candidate profile, and let
                  them manage the heavy lifting, from outreach to interviews to
                  negotiation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — replaced all shapes with IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-items-center tw-justify-center tw-h-full"
          >
            <div
              className="tw-relative tw-rounded-3xl tw-overflow-hidden tw-shadow-2xl tw-w-full tw-max-w-md tw-bg-white"
              style={{
                border: "1px solid var(--accent-800)",
              }}
            >
              <div className="tw-relative">
                <Image
                  src="/assets/images/executive-search-and-headhunting-services/headhunter.jpg"
                  alt="Headhunter"
                  width={700}
                  height={600}
                  className="tw-w-full tw-h-full tw-object-cover"
                  priority
                />
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-950/70 tw-via-slate-900/20 tw-to-transparent" />
              </div>
              <div className="tw-absolute tw-top-4 tw-left-4 tw-flex tw-flex-col tw-gap-2">
                <div
                  className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white/10 tw-px-3 tw-py-1 tw-backdrop-blur-xl"
                  style={{
                    border: "1px solid rgba(248,250,252,0.25)",
                  }}
                >
                  <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-emerald-400" />
                  <span className="tw-text-[11px] tw-font-medium tw-text-accent-500">
                    Senior Roles
                  </span>
                </div>
                <div
                  className="tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-full tw-bg-white/5 tw-px-2.5 tw-py-1 tw-backdrop-blur-xl"
                  style={{
                    border: "1px solid rgba(148,163,184,0.5)",
                  }}
                >
                  <span className="tw-h-1.5 tw-w-6 tw-rounded-full tw-bg-accent-300" />
                  <span className="tw-text-[10px] tw-text-emerald-500">
                    Headhunter
                  </span>
                </div>
              </div>
              <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-px-5 tw-py-4 tw-flex tw-items-center tw-justify-between">
                <div className="tw-flex tw-flex-col tw-gap-1">
                  <span className="tw-h-1.5 tw-w-10 tw-rounded-full tw-bg-slate-100/80" />
                  <span className="tw-h-1 tw-w-6 tw-rounded-full tw-bg-slate-300/80" />
                </div>
                <div className="tw-flex tw-gap-2">
                  <span className="tw-h-7 tw-w-16 tw-rounded-full tw-bg-accent-500/90" />
                  <span className="tw-h-7 tw-w-10 tw-rounded-full tw-bg-slate-200/90" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
