"use client";

import { motion } from "framer-motion";


export function WhyPartnerwithOurRadiologyBillingExperts() {
 const values = [
  {
    title: "Proven Performance",
    description:
      "Decades of combined experience delivering measurable results for U.S. radiology providers of all sizes.",
  },
  {
    title: "Certified, U.S.-Based Team",
    description:
      "Our billing specialists and coders are credentialed, continuously trained, and deeply familiar with American payer requirements.",
  },
  {
    title: "Commitment to Transparency",
    description:
      "We prioritize clear communication, comprehensive reporting, and easy access to your data, so you’re always informed.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Using data and feedback, we continually optimize processes to increase clean claim rates, lower denial ratios, and enhance net collections month over month.",
  },
];


  return (
    <section className="tw-py-24 tw-px-4 tw-bg-gradient-to-br tw-from-background tw-to-card">
      <div className="sm:container tw-mx-auto tw-max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-6">
            Why Partner with Our&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Radiology Billing Experts
            </span>
          </h2>
          <p className="sm:tw-text-xl tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
            Choosing the right billing partner is essential for sustainable
            success in today’s competitive healthcare environment.
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="border tw-bg-white tw-shadow-[0px_0px_15px_rgba(0,0,0,0.09)] sm:tw-p-9 tw-p-4 tw-space-y-3 tw-relative tw-overflow-hidden tw-rounded-2xl tw-transition-transform tw-duration-300 hover:tw-scale-105"
            >
              {/* Floating Number Bubble */}
              <div className="tw-w-24 tw-h-24 tw-bg-accent-500 tw-rounded-full tw-absolute tw--right-5 tw--top-7">
                <p className="tw-absolute tw-bottom-6 tw-left-7 tw-text-white tw-text-2xl tw-mb-0">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

             

              {/* Title */}
              <h3 className="tw-font-bold tw-text-xl">{item.title}</h3>

              {/* Description */}
              <p className="tw-text-sm tw-text-zinc-500 tw-leading-6">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
     
      </div>
    </section>
  );
}
