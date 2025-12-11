"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MarketMappingServices(): JSX.Element {
  const [hovered, setHovered] = useState(false);

  // Path to the image you supplied — add the file to public/images/hover-bg.png
  const bgImage = "/images/hover-bg.png";

  return (
    <section className="tw-relative tw-isolate tw-overflow-hidden tw-bg-white tw-text-accent-900 tw-py-20">
      {/* Decorative background (subtle neutral gradient) */}
      <div className="tw-absolute tw-inset-0 tw-z-0" aria-hidden>
        <svg className="tw-w-full tw-h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
      </div>

      {/* Hover image overlay (visible when hovering any card) */}
      <div
        aria-hidden
        className="tw-absolute tw-inset-0 tw-z-10 tw-pointer-events-none tw-flex tw-items-center tw-justify-start"
      >
        {/* Image container positioned to the left, similar to your screenshot */}
        <div
          className={`tw-pointer-events-none tw-absolute tw-left-1/2 lg:tw-left-[28%] tw-top-1/2 tw-translate-y-[-50%] tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl tw-transition-all tw-duration-500 tw-ease-out`}
          style={{
            width: hovered ? "520px" : "380px",
            height: hovered ? "520px" : "0px",
            transform: hovered ? "translateY(-50%) scale(1)" : "translateY(-50%) scale(0.98)",
            opacity: hovered ? 1 : 0,
            // keep layout stable on mobile
            maxWidth: "38vw",
            maxHeight: "60vh",
          }}
        >
          {/* Background image with dark overlay and desaturate effect to match screenshot vibe */}
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(40%) contrast(90%)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.55) 100%)",
                display: "flex",
                alignItems: "center",
                padding: "40px",
              }}
            >
              {/* Decorative text block inside image — visually only, not changing your content */}
              <div className="tw-text-white tw-max-w-xs tw-leading-snug">
                <h3 className="tw-text-2xl tw-font-extrabold">ONBOARDING & CONSULTANT CARE</h3>
                <p className="tw-mt-3 tw-text-sm">
                  Receive comprehensive coverage of every aspect of the employee onboarding process, ensuring that all recruitment process steps are executed seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content (cards) */}
      <div className="tw-relative tw-z-20 tw-max-w-7xl tw-mx-auto tw-px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-max-w-4xl"
        >
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-extrabold tw-leading-tight">
            Our Market Mapping Services
          </h2>

          <p className="tw-mt-4 tw-text-base md:tw-text-lg tw-leading-relaxed">
            We offer a range of services tailored to your business needs. Here’s what we can do for you:
          </p>
        </motion.div>

        <div className="tw-mt-10 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {/* Card 1 */}
          <motion.article
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow-md tw-cursor-pointer"
            style={{ border: "1px solid rgba(16,24,40,0.04)" }}
          >
            <h3 className="tw-text-lg tw-font-semibold">Talent Landscape Analysis</h3>

            <p className="tw-mt-3 tw-text-sm tw-leading-relaxed">
              Understand the big picture. We’ll provide insights on:
            </p>

            <ul className="tw-mt-3 tw-ml-0 tw-space-y-1 tw-text-sm">
              <li className="tw-flex tw-items-start">
                <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600" />
                <span>Talent availability in your industry.</span>
              </li>

              <li className="tw-flex tw-items-start">
                <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600" />
                <span>Skill shortages and seniority distribution.</span>
              </li>
            </ul>
          </motion.article>

          {/* Card 2 */}
          <motion.article
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow-md tw-cursor-pointer"
            style={{ border: "1px solid rgba(16,24,40,0.04)" }}
          >
            <h3 className="tw-text-lg tw-font-semibold">Competitor Intelligence</h3>

            <p className="tw-mt-3 tw-text-sm tw-leading-relaxed">
              Want to know what your competitors are up to? We’ll map out:
            </p>

            <ul className="tw-mt-3 tw-ml-0 tw-space-y-1 tw-text-sm">
              <li className="tw-flex tw-items-start">
                <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600" />
                <span>Competitor org charts.</span>
              </li>

              <li className="tw-flex tw-items-start">
                <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600" />
                <span>Hiring plans and strategies.</span>
              </li>

              <li className="tw-flex tw-items-start">
                <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600" />
                <span>Compensation structures.</span>
              </li>
            </ul>
          </motion.article>

          {/* Card 3 */}
          <motion.article
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow-md tw-cursor-pointer"
            style={{ border: "1px solid rgba(16,24,40,0.04)" }}
          >
            <h3 className="tw-text-lg tw-font-semibold">Salary Benchmarking</h3>

            <p className="tw-mt-3 tw-text-sm tw-leading-relaxed">
              Get a clear picture of what top talent is earning across:
            </p>

            <ul className="tw-mt-3 tw-ml-0 tw-space-y-1 tw-text-sm">
              <li className="tw-flex tw-items-start">
                <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600" />
                <span>Different regions.</span>
              </li>

              <li className="tw-flex tw-items-start">
                <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600" />
                <span>Various job roles.</span>
              </li>
            </ul>
          </motion.article>

          {/* Card 4 */}
          <motion.article
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow-md tw-cursor-pointer"
            style={{ border: "1px solid rgba(16,24,40,0.04)" }}
          >
            <h3 className="tw-text-lg tw-font-semibold">Talent Pool Identification</h3>

            <p className="tw-mt-3 tw-text-sm tw-leading-relaxed">We’ll create pre-qualified lists of candidates, so you’re ready to hire when the time comes.</p>
          </motion.article>

          {/* Card 5 */}
          <motion.article
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow-md tw-cursor-pointer"
            style={{ border: "1px solid rgba(16,24,40,0.04)" }}
          >
            <h3 className="tw-text-lg tw-font-semibold">Market Mapping for Technology Sector</h3>

            <p className="tw-mt-3 tw-text-sm tw-leading-relaxed">Specialised mapping for tech, IT, software, cybersecurity, AI, and engineering firms.</p>
          </motion.article>

          {/* Card 6 */}
          <motion.article
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow-md tw-cursor-pointer"
            style={{ border: "1px solid rgba(16,24,40,0.04)" }}
          >
            <h3 className="tw-text-lg tw-font-semibold">Global Market Mapping</h3>

            <p className="tw-mt-3 tw-text-sm tw-leading-relaxed">Our solutions aren’t limited to the UK. We cover:</p>

            <ul className="tw-mt-3 tw-ml-0 tw-space-y-1 tw-text-sm">
              <li className="tw-flex tw-items-start">
                <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600" />
                <span>Europe</span>
              </li>

              <li className="tw-flex tw-items-start">
                <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600" />
                <span>Asia</span>
              </li>

              <li className="tw-flex tw-items-start">
                <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600" />
                <span>North America</span>
              </li>

              <li className="tw-flex tw-items-start">
                <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600" />
                <span>South America</span>
              </li>

              <li className="tw-flex tw-items-start">
                <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600" />
                <span>Africa</span>
              </li>

              <li className="tw-flex tw-items-start">
                <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600" />
                <span>Middle East</span>
              </li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
