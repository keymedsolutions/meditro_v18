"use client";

import React from "react";
import { motion } from "framer-motion";

const WhoWeServe = () => {
  const industries = [
    {
      title: "Startups",
      description: "Scaling rapidly with limited resources.",
    },

    { title: "SMEs", description: "Seeking cost-effective talent pipelines." },
    {
      title: "Enterprises",
      description: "Requiring high-volume sourcing support.",
    },
    {
      title: "Recruitment agencies",
      description: "Enhancing their sourcing capabilities.",
    },
    {
      title: "Tech companies",
      description: "Hiring for niche and hard-to-fill roles.",
    },
  ];

  return (
    <section className="tw-w-full tw-bg-white tw-py-16">
      <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-gap-y-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-14"
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-3">
            Who We Serve?
          </h2>
          <p className="tw-text-slate-600 tw-max-w-2xl tw-mx-auto tw-text-sm md:tw-text-base">
            We work with businesses of all sizes and industries, including:
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-8 tw-gap-y-16 tw-items-start tw-pb-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className="tw-relative tw-flex tw-flex-col tw-gap-y-4 sm:tw-p-12 tw-p-8 border tw-border-accent-500 tw-rounded-lg tw-h-full 
             tw-shadow-lg tw-shadow-accent-200"
            >
              {/* NUMBER TAG */}
              <div className="tw-bg-accent-500 tw-text-white tw-rounded-lg sm:tw-p-6 tw-p-4 tw-inline-block tw-absolute tw-top-0 sm:tw-left-[3.15rem] tw-left-[2.2rem] tw-translate-x-[-5px] tw-translate-y-[-50%]">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* TITLE */}
              <div className="tw-text-md tw-font-bold tw-text-black">
                {item.title}
              </div>
              {/* DESCRIPTION */}
              <div className="tw-text-sm tw-text-slate-600">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
