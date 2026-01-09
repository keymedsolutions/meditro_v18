/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

export function HowItWorks() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const features = [
    {
      title: "Step 1: Let’s Chat",
      text: "We talk through your goals, your must-haves, and what makes the perfect fit for your team.",
    },
    {
      title: "Step 2: We Search, You Choose",
      text: "We handle the search, the screening, and the shortlisting. You review and meet only the best options, saving you a significant amount of time.",
    },
    {
      title: "Step 3: Welcome Your New Hire",
      text: "Once you’ve picked your candidate, we sort all the contracts, compliance, payroll, and onboarding. You just focus on getting them settled in.",
    },
  ];

  return (
    <>
      {/* More About Physician Billing Section */}
      <section className="tw-py-16  tw-relative tw-overflow-hidden">
        <div className="tw-absolute tw-top-0 tw-right-0 tw-w-64 tw-h-64  tw-rounded-full tw-opacity-50 tw-transform tw-translate-x-1/2 -tw-translate-y-1/2"></div>
        <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-48 tw-h-48 tw-bg-keymed-100 tw-rounded-full tw-opacity-50 tw-transform tw-translate-x-1/2 tw-translate-y-1/2"></div>

        <div className="tw-text-center tw-space-y-3 tw-mb-8">
          <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
            How It Works:
          </p>
          <h2 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-font-bold tw-text-slate-900">
            Simple, Straightforward, Seamless
          </h2>
        </div>

        <div className="tw-container tw-px-4 md:tw-px-6 tw-relative tw-z-10">
          <div className="tw-mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="tw-relative"
            >
              {/* Enhanced background elements */}
              <div className="tw-absolute -tw-top-20 -tw-left-20 tw-w-80 tw-h-80 tw-bg-blue-100/30 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-70 tw-animate-pulse"></div>
              <div
                className="tw-absolute -tw-bottom-20 -tw-right-20 tw-w-80 tw-h-80 tw-bg-purple-100/30 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-70 tw-animate-pulse"
                style={{ animationDuration: "8s" }}
              ></div>
              <div
                className="tw-absolute tw-top-1/3 tw-right-1/4 tw-w-40 tw-h-40 tw-bg-cyan-100/20 tw-rounded-full tw-filter tw-blur-2xl tw-opacity-50 tw-animate-pulse"
                style={{ animationDuration: "12s" }}
              ></div>

              <div className="tw-relative tw-bg-white/90 tw-backdrop-blur-sm tw-rounded-2xl sm:tw-p-8 md:tw-p-12  border tw-border-gray-100/80 tw-overflow-hidden">
                {/* Decorative elements */}
                <div className="tw-absolute -tw-top-5 -tw-right-5 tw-w-20 tw-h-20 tw-bg-primary-500/10 tw-rounded-full"></div>
                <div className="tw-absolute -tw-bottom-3 -tw-left-3 tw-w-12 tw-h-12 tw-bg-secondary-500/10 tw-rounded-full"></div>

                {/* Decorative patterns */}
                <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-opacity-5 tw-pointer-events-none">
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                <div className="tw-container lg:tw-p-4 tw-p-6 tw-mx-auto tw-relative tw-z-10">
                  <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 lg:tw-gap-x-10 tw-gap-y-8">
                    <div className="tw-col-span-1 tw-flex tw-justify-center tw-items-center">
                      <div className="tw-relative">
                        <div className="tw-absolute tw-inset-0 tw-bg-keymed-100 tw-rounded-lg tw-transform  tw-scale-110"></div>
                        <img
                          src="/assets/images/main-banner/HowItWorks.webp"
                          alt="Medical billing professional"
                          className="tw-rounded-2xl tw-shadow-lg tw-relative tw-z-10 tw-h-full tw-w-full tw-object-cover"
                        />
                        <div className="tw-absolute sm:-tw-bottom-8 sm:-tw-right-8 -tw-right-6 -tw-bottom-6  tw-bg-accent-800 tw-text-white tw-p-3 tw-rounded-xl tw-z-20 tw-shadow-lg">
                          <BadgeCheck className="tw-h-6 tw-w-6" />
                        </div>
                      </div>
                    </div>

                    <div className="tw-col-span-2 tw-flex tw-flex-col tw-justify-center">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="tw-space-y-6"
                      >
                        {features.map((item, i) => (
                          <motion.div
                            key={i}
                            variants={itemVariants}
                            className="tw-flex tw-items-start tw-space-x-3 border tw-border-accent-500 tw-rounded-lg tw-pt-4 tw-pl-4"
                          >
                            <div className="tw-flex-shrink-0 tw-bg-accent-500 tw-text-white tw-rounded-full tw-h-10 tw-w-10 tw-shadow-md tw-flex tw-items-center tw-justify-center">
                              <BadgeCheck className="tw-h-6 tw-w-6" />
                            </div>
                            <div>
                              <p className="tw-font-semibold tw-text-gray-900">
                                {item.title}
                              </p>
                              <p className="tw-text-gray-700">{item.text}</p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="tw-flex tw-justify-center tw-items-center tw-mt-6">
            <button
              className=" tw-rounded-lg tw-bg-transparent"
              style={{ border: "2px solid var(--accent-700)" }}
            >
              <span className="tw-inline-block tw-font-bold tw-text-accent-700 tw-px-10 tw-py-3 tw-rounded-md tw-shadow-md tw-transition-transform tw-duration-300 hover:tw-scale-105 tw-uppercase">
                Speak to an Expert Today
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
