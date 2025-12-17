"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MarketMappingServices(): JSX.Element {
  return (
    <section className="tw-relative tw-isolate tw-overflow-hidden tw-bg-white tw-text-accent-900 tw-py-20">
      <div className="tw-absolute tw-inset-0 tw-z-0" aria-hidden>
        <svg
          className="tw-w-full tw-h-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
      </div>

      <div className="tw-relative tw-z-10 tw-mx-auto">
        <div className="tw-container ">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-max-w-4xl tw-mx-auto"
          >
            <h2 className="tw-text-3xl md:tw-text-4xl tw-text-center tw-font-extrabold tw-leading-tight">
              Our Market Mapping Services
            </h2>

            <p className="tw-mt-4 tw-text-base tw-text-center md:tw-text-lg tw-leading-relaxed">
              We offer a range of services tailored to your business needs.
              Here’s what we can do for you:
            </p>
          </motion.div>
        </div>

        <div className="tw-mt-10 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-items-stretch tw-auto-rows-fr md:tw-h-[80vh] tw-min-h-full">
          {/* Card 1 */}
          <motion.article
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative tw-group tw-flex tw-flex-col tw-h-full tw-min-h-0 tw-p-6 tw-overflow-hidden"
            style={{ border: "1px solid gray" }}
          >
            {/* Hover image (hidden by default, visible on hover) */}
            <div className="tw-absolute tw-inset-0 tw-z-0 tw-pointer-events-none">
              <Image
                src="/assets/images/market-mapping-recruitment-services/service1.jpg"
                alt="decorative"
                fill
                className="tw-object-cover tw-block tw-w-full tw-h-full tw-transform tw-scale-105 group-hover:tw-scale-100 tw-transition tw-duration-400 tw-ease-out tw-opacity-0 group-hover:tw-opacity-60"
                style={{
                  filter: "grayscale(40%) contrast(90%)",
                  objectPosition: "center",
                }}
              />
              <div className="tw-absolute tw-inset-0 tw-bg-black/55 tw-opacity-0 group-hover:tw-opacity-100 tw-transition tw-duration-400" />
            </div>

            {/* Content (above image) */}
            <div className="tw-z-10 tw-flex-1 tw-min-h-0">
              <h3 className="tw-text-lg tw-font-semibold group-hover:tw-text-white">
                Talent Landscape Analysis
              </h3>

              <p className="tw-mt-3 tw-text-sm tw-leading-relaxed group-hover:tw-text-white">
                Understand the big picture. We’ll provide insights on:
              </p>

              <ul className="tw-mt-3 tw-ml-0 tw-space-y-1 tw-text-sm">
                <li className="tw-flex tw-items-start">
                  <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600 group-hover:tw-bg-white" />
                  <span className="group-hover:tw-text-white">
                    Talent availability in your industry.
                  </span>
                </li>

                <li className="tw-flex tw-items-start">
                  <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600 group-hover:tw-bg-white" />
                  <span className="group-hover:tw-text-white">
                    Skill shortages and seniority distribution.
                  </span>
                </li>
              </ul>
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative tw-group tw-flex tw-flex-col tw-h-full tw-min-h-0 tw-p-6 tw-overflow-hidden"
            style={{ border: "1px solid gray" }}
          >
            <div className="tw-absolute tw-inset-0 tw-z-0 tw-pointer-events-none">
              <Image
                src="/assets/images/market-mapping-recruitment-services/service2.jpg"
                alt="decorative"
                fill
                className="tw-object-cover tw-block tw-w-full tw-h-full tw-transform tw-scale-105 group-hover:tw-scale-100 tw-transition tw-duration-400 tw-ease-out tw-opacity-0 group-hover:tw-opacity-60"
                style={{
                  filter: "grayscale(40%) contrast(90%)",
                  objectPosition: "center",
                }}
              />
              <div className="tw-absolute tw-inset-0 tw-bg-black/55 tw-opacity-0 group-hover:tw-opacity-100 tw-transition tw-duration-400" />
            </div>

            <div className="tw-z-10 tw-flex-1 tw-min-h-0">
              <h3 className="tw-text-lg tw-font-semibold group-hover:tw-text-white">
                Competitor Intelligence
              </h3>

              <p className="tw-mt-3 tw-text-sm tw-leading-relaxed group-hover:tw-text-white">
                Want to know what your competitors are up to? We’ll map out:
              </p>

              <ul className="tw-mt-3 tw-ml-0 tw-space-y-1 tw-text-sm">
                <li className="tw-flex tw-items-start">
                  <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600 group-hover:tw-bg-white" />
                  <span className="group-hover:tw-text-white">
                    Competitor org charts.
                  </span>
                </li>

                <li className="tw-flex tw-items-start">
                  <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600 group-hover:tw-bg-white" />
                  <span className="group-hover:tw-text-white">
                    Hiring plans and strategies.
                  </span>
                </li>

                <li className="tw-flex tw-items-start">
                  <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600 group-hover:tw-bg-white" />
                  <span className="group-hover:tw-text-white">
                    Compensation structures.
                  </span>
                </li>
              </ul>
            </div>
          </motion.article>

          {/* Card 3 */}
          <motion.article
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative tw-group tw-flex tw-flex-col tw-h-full tw-min-h-0 tw-p-6 tw-overflow-hidden"
            style={{ border: "1px solid gray" }}
          >
            <div className="tw-absolute tw-inset-0 tw-z-0 tw-pointer-events-none">
              <Image
                src="/assets/images/market-mapping-recruitment-services/service3.jpg"
                alt="decorative"
                fill
                className="tw-object-cover tw-block tw-w-full tw-h-full tw-transform tw-scale-105 group-hover:tw-scale-100 tw-transition tw-duration-400 tw-ease-out tw-opacity-0 group-hover:tw-opacity-60"
                style={{
                  filter: "grayscale(40%) contrast(90%)",
                  objectPosition: "center",
                }}
              />
              <div className="tw-absolute tw-inset-0 tw-bg-black/55 tw-opacity-0 group-hover:tw-opacity-100 tw-transition tw-duration-400" />
            </div>

            <div className="tw-z-10 tw-flex-1 tw-min-h-0">
              <h3 className="tw-text-lg tw-font-semibold group-hover:tw-text-white">
                Salary Benchmarking
              </h3>

              <p className="tw-mt-3 tw-text-sm tw-leading-relaxed group-hover:tw-text-white">
                Get a clear picture of what top talent is earning across:
              </p>

              <ul className="tw-mt-3 tw-ml-0 tw-space-y-1 tw-text-sm group-hover:tw-text-white">
                <li className="tw-flex tw-items-start">
                  <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600 group-hover:tw-bg-white" />
                  <span>Different regions.</span>
                </li>

                <li className="tw-flex tw-items-start">
                  <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600 group-hover:tw-bg-white" />
                  <span>Various job roles.</span>
                </li>
              </ul>
            </div>
          </motion.article>

          {/* Card 4 */}
          <motion.article
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative tw-group tw-flex tw-flex-col tw-h-full tw-min-h-0 tw-p-6 tw-overflow-hidden"
            style={{ border: "1px solid gray" }}
          >
            <div className="tw-absolute tw-inset-0 tw-z-0 tw-pointer-events-none">
              <Image
                src="/assets/images/market-mapping-recruitment-services/service4.jpg"
                alt="decorative"
                fill
                className="tw-object-cover tw-block tw-w-full tw-h-full tw-transform tw-scale-105 group-hover:tw-scale-100 tw-transition tw-duration-400 tw-ease-out tw-opacity-0 group-hover:tw-opacity-60"
                style={{
                  filter: "grayscale(40%) contrast(90%)",
                  objectPosition: "center",
                }}
              />
              <div className="tw-absolute tw-inset-0 tw-bg-black/55 tw-opacity-0 group-hover:tw-opacity-100 tw-transition tw-duration-400" />
            </div>

            <div className="tw-z-10 tw-flex-1 tw-min-h-0">
              <h3 className="tw-text-lg tw-font-semibold group-hover:tw-text-white">
                Talent Pool Identification
              </h3>

              <p className="tw-mt-3 tw-text-sm tw-leading-relaxed group-hover:tw-text-white">
                We’ll create pre-qualified lists of candidates, so you’re ready
                to hire when the time comes.
              </p>
            </div>
          </motion.article>

          {/* Card 5 */}
          <motion.article
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative tw-group tw-flex tw-flex-col tw-h-full tw-min-h-0 tw-p-6 tw-overflow-hidden"
            style={{ border: "1px solid gray" }}
          >
            <div className="tw-absolute tw-inset-0 tw-z-0 tw-pointer-events-none">
              <Image
                src="/assets/images/market-mapping-recruitment-services/service5.jpg"
                alt="decorative"
                fill
                className={
                  "tw-object-cover tw-block tw-w-full tw-h-full " +
                  "tw-transform tw-scale-105 group-hover:tw-scale-100 " +
                  "tw-transition tw-duration-400 tw-ease-out tw-opacity-0 group-hover:tw-opacity-60 " +
                  // move filter to classes so group-hover can override
                  "tw-filter tw-grayscale tw-contrast-90 group-hover:tw-grayscale-0 group-hover:tw-contrast-100"
                }
                style={{ objectPosition: "center" }} // keep only objectPosition inline
              />
              <div className="tw-absolute tw-inset-0 tw-bg-black/55 tw-opacity-0 group-hover:tw-opacity-100 tw-transition tw-duration-400" />
            </div>

            <div className="tw-z-10 tw-flex-1 tw-min-h-0">
              <h3 className="tw-text-lg tw-font-semibold group-hover:tw-text-white">
                Market Mapping for Technology Sector
              </h3>

              <p className="tw-mt-3 tw-text-sm tw-leading-relaxed group-hover:tw-text-white">
                Specialised mapping for tech, IT, software, cybersecurity, AI,
                and engineering firms.
              </p>
            </div>
          </motion.article>

          {/* Card 6 */}
          <motion.article
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative tw-group tw-flex tw-flex-col tw-h-full tw-min-h-0 tw-p-6 tw-overflow-hidden"
            style={{ border: "1px solid gray" }}
          >
            <div className="tw-absolute tw-inset-0 tw-z-0 tw-pointer-events-none">
              <Image
                src="/assets/images/market-mapping-recruitment-services/service6.jpg"
                alt="decorative"
                fill
                className={
                  "tw-object-cover tw-block tw-w-full tw-h-full " +
                  "tw-transform tw-scale-105 group-hover:tw-scale-100 " +
                  "tw-transition tw-duration-400 tw-ease-out tw-opacity-0 group-hover:tw-opacity-60 " +
                  // move filter to classes so group-hover can override
                  "tw-filter tw-grayscale tw-contrast-90 group-hover:tw-grayscale-0 group-hover:tw-contrast-100"
                }
                style={{ objectPosition: "center" }} // keep only objectPosition inline
              />
              <div className="tw-absolute tw-inset-0 tw-bg-black/60 tw-opacity-0 group-hover:tw-opacity-100 tw-transition tw-duration-400" />
            </div>

            <div className="tw-z-10 tw-flex-1 tw-min-h-0">
              <h3 className="tw-text-lg tw-font-semibold group-hover:tw-text-white">
                Global Market Mapping
              </h3>

              <p className="tw-mt-3 tw-text-sm tw-leading-relaxed group-hover:tw-text-white">
                Our solutions aren’t limited to the UK. We cover:
              </p>

              <ul className="tw-mt-3 tw-ml-0 tw-space-y-1 tw-text-sm group-hover:tw-text-white">
                <li className="tw-flex tw-items-start">
                  <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600 group-hover:tw-bg-white" />
                  <span>Europe</span>
                </li>

                <li className="tw-flex tw-items-start">
                  <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600 group-hover:tw-bg-white" />
                  <span>Asia</span>
                </li>

                <li className="tw-flex tw-items-start">
                  <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600 group-hover:tw-bg-white" />
                  <span>North America</span>
                </li>

                <li className="tw-flex tw-items-start">
                  <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600 group-hover:tw-bg-white" />
                  <span>South America</span>
                </li>

                <li className="tw-flex tw-items-start">
                  <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600 group-hover:tw-bg-white" />
                  <span>Africa</span>
                </li>

                <li className="tw-flex tw-items-start">
                  <span className="tw-mr-3 tw-flex-shrink-0 tw-h-2 tw-w-2 tw-rounded-full tw-mt-2 tw-bg-accent-600 group-hover:tw-bg-white" />
                  <span>Middle East</span>
                </li>
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
