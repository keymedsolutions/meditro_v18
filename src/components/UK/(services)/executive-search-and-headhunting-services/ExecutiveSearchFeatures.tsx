"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

const items = [
  "A leading Professional Headhunting Company in the UK serving clients globally.",
  "We support high-growth industries like tech, finance, engineering, healthcare, renewables, and professional services.",
  "Our UK team partners with global networks, putting us among the leading Global Executive Search Firms.",
  "We combine research, outreach, behavioural evaluation, and market intelligence for every assignment.",
];

export default function ExecutiveSearchFeaturesGrid() {
  const matches = useMediaQuery("(min-width: 640px)");

  console.log(matches, "matches");

  return (
    <section className="tw-relative tw-py-20 tw-bg-[#041227]">
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6 sm:tw-px-8 lg:tw-px-12">
        {/* Heading + intro (centered like the screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center"
        >
          <h2 className="tw-text-4xl sm:tw-text-5xl lg:tw-text-5xl tw-font-extrabold tw-text-white tw-tracking-tight">
            What Makes Our Executive Search Different?
          </h2>

          <p className="tw-mx-auto tw-max-w-3xl tw-mt-6 tw-text-lg tw-text-[#cbd5e1]">
            Leadership hiring is a whole different game. You’re not just filling
            a vacancy, you’re choosing someone who will define culture, growth,
            stability, and long-term direction. That’s why companies turn to
            specialised executive headhunting firms instead of general
            recruitment.
          </p>

          <p className="tw-mx-auto tw-max-w-3xl tw-mt-4 tw-text-lg tw-text-[#e6eef8]">
            Here’s what sets us apart:
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2  tw-gap-6 tw-mt-10"
        >
          {items.map((text, idx) => {
            // Alternate card style to match screenshot: blue / white pattern
            // Cards you want in accent blue style (example: 2nd & 4th)
            const accentIndices = matches
              ? [1, 3] // desktop: 2nd & 4th
              : [1, 2]; // mobile: 2nd & 3rd
            const isAccent = accentIndices.includes(idx);
            return (
              <motion.article
                key={idx}
                className={`tw-relative tw-rounded-xl tw-p-6 tw-min-h-[180px] tw-flex tw-flex-col tw-justify-start tw-gap-4 tw-shadow-[0_10px_30px_rgba(2,6,23,0.5)]`}
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: isAccent
                    ? "linear-gradient(180deg,#1597F3,#0590E6)"
                    : "#ffffff",
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                aria-hidden={false}
              >
                {/* small icon - visual only */}
                <div className="tw-flex tw-items-center tw-justify-start">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                    className={
                      isAccent ? "tw-text-white" : "tw-text-accent-600"
                    }
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="3"
                      stroke={
                        isAccent
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(16,24,40,0.12)"
                      }
                      strokeWidth="1.2"
                      fill={isAccent ? "rgba(255,255,255,0.06)" : "transparent"}
                    />
                    <path
                      d="M7 12h10"
                      stroke={
                        isAccent
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(16,24,40,0.6)"
                      }
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 8h10"
                      stroke={
                        isAccent
                          ? "rgba(255,255,255,0.8)"
                          : "rgba(16,24,40,0.45)"
                      }
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Card text (only text from your content) */}
                <div className="tw-flex-1">
                  <p
                    className={`tw-text-base ${
                      isAccent ? "tw-text-white" : "tw-text-accent-900"
                    } tw-font-medium`}
                  >
                    {text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="tw-mt-10 tw-rounded-lg tw-p-6 border tw-border-accent-500 tw-bg-accent-500/5 tw-text-md tw-font-semibold tw-text-white tw-shadow-md tw-shadow-accent-200">
          You get a search partner who understands your market, your challenges,
          and the type of leadership your organisation truly needs.
        </div>
      </div>
    </section>
  );
}
