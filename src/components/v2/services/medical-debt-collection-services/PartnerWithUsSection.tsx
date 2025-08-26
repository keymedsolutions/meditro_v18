"use client";

import { motion } from "framer-motion";

export function PartnerWithUsSection() {
  return (
    <section className="tw-py-24 tw-px-4 tw-relative tw-overflow-hidden tw-my-10">
      <div className="tw-absolute tw-inset-0 gradient-primary"></div>
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-[rgba(86,90,207,0.75)] tw-via-[rgba(241,119,50,0.7)] tw-to-[rgba(255,255,255,1)]"></div>

      {/* Floating decorative elements */}
      <div className="tw-absolute tw-top-10 tw-left-10 tw-w-24 tw-h-24 tw-bg-white/10 tw-rounded-full floating-animation"></div>
      <div
        className="tw-absolute tw-bottom-10 tw-right-10 tw-w-32 tw-h-32 tw-bg-white/5 tw-rounded-full floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="tw-absolute tw-top-1/2 tw-left-1/4 tw-w-16 tw-h-16 tw-bg-white/10 tw-rounded-full floating-animation"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-max-w-6xl tw-mx-auto tw-text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-4xl md:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-font-serif tw-text-white tw-mb-6 tw-leading-tight"
          >
            Partner with the Leading Medical Debt Collection&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-cyan-300 tw-to-blue-200 tw-bg-clip-text tw-text-transparent">
              Agency USA
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-xl tw-text-white/90 tw-mb-12 tw-leading-relaxed tw-max-w-4xl tw-mx-auto"
          >
            When you&nbsp;
            <span className="tw-font-bold">
              outsource healthcare debt collection services
            </span>
            &nbsp;to Key MedSolutions, you are partnering with a reputable&nbsp;
            <span className="tw-font-bold">
              medical debt collection company USA
            </span>
            &nbsp;that is committed to professionalism and measurable results.
            Our proven solutions, from comprehensive collections to advanced
            analytics, are designed to resolve your accounts faster, with
            integrity and compliance always at the forefront.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-xl tw-text-white/90 tw-mb-12 tw-leading-relaxed tw-max-w-4xl tw-mx-auto"
          >
            If you are ready for a more efficient, transparent, and
            patient-friendly approach to&nbsp;
            <span className="tw-font-bold">
              healthcare debt collection services,
            </span>
            &nbsp;let’s connect
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
