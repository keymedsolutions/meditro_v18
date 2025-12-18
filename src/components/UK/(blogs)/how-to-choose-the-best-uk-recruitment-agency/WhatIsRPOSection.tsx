"use client";

import { motion } from "framer-motion";

const WhatIsRPOSection = () => {
  return (
    <section className="tw-bg-accent-50/40 tw-py-20 md:tw-py-28">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-14 tw-items-start">
          {/* LEFT — Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Accent divider */}
            <span className="tw-inline-block tw-h-1 tw-w-16 tw-rounded-full tw-bg-accent-500 tw-mb-6" />

            <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-6">
              What Is{" "}
              <span className="tw-text-accent-600">
                Recruitment Process Outsourcing (RPO)?
              </span>
            </h2>

            <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-mb-6">
              Many companies ask: what is recruitment process outsourcing? In
              simple terms, RPO is when a business partners with a specialist
              provider like{" "}
              <span className="tw-font-medium tw-text-slate-900">
                Key Medsolutions UK
              </span>{" "}
              to manage part or all of its recruitment function.
            </p>

            <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-mb-6">
              Unlike traditional agencies that focus on filling single
              vacancies, RPO offers ongoing, long-term support designed to
              elevate the entire hiring strategy.
            </p>

            <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
              Through our{" "}
              <span className="tw-font-medium tw-text-slate-900">
                Global RPO Solutions
              </span>
              , we also help companies expand their talent reach internationally.
            </p>
          </motion.div>

          {/* RIGHT — Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="tw-rounded-3xl tw-bg-white tw-p-8 md:tw-p-10"
            style={{
              border: "1px solid rgba(203,213,225,0.9)",
              boxShadow:
                "0 18px 50px rgba(15,23,42,0.1), 0 0 0 1px rgba(255,255,255,0.9)",
            }}
          >
            <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-slate-900 tw-mb-6">
              With RPO, companies gain:
            </h3>

            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4">
              {[
                "Dedicated recruiters and hiring resources",
                "More predictable and often lower hiring costs",
                "Access to advanced recruitment technology",
                "Talent pipelines for future roles",
                "Stronger employer branding",
                "Reduced time-to-hire and better-quality candidates",
                "Data-driven insights and recruitment analytics",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="tw-flex tw-items-start tw-gap-3 tw-rounded-xl tw-bg-accent-50 tw-p-4"
                >
                  {/* <div className="tw-flex-1 tw-mt-1.5 tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-500" /> */}
                  <p className="tw-text-slate-800 tw-text-sm sm:tw-text-base tw-leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsRPOSection;
