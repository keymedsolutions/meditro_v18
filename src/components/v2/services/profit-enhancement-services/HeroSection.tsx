/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const HeroSection = () => {
  const mainTitle = [
    {
      text: "Elevate",
    },
    {
      text: "Your",
    },
    {
      text: "Financial",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Performance",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "with",
    },
    {
      text: "Expert",
    },
    {
      text: "Profit",
    },
    {
      text: "Enhancement",
    },
    {
      text: "Services",
    },
  ];
  return (
    <React.Fragment>
      <section
        className="tw-py-12 md:tw-py-20 tw-overflow-hidden"
        style={{
          background: "url('/images/background/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-min-h-[80vh]  tw-container tw-mx-auto tw-grid lg:tw-grid-cols-2 tw-gap-12 tw-items-center tw-px-6">
            <div className="tw-mb-8 md:tw-mb-0 md:tw-pr-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="md:tw-text-5xl sm:tw-text-3xl tw-text-2xl tw-font-bold tw-font-serif tw-text-foreground">
                  Elevate Your Financial Performance with Expert&nbsp;
                  <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                    Profit Enhancement Services
                  </span>
                  &nbsp;
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-xl tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
              >
                Partner with Key MedSolutions, your trusted specialists in
                healthcare profit enhancement. We deliver strategy-driven
                solutions to recover lost revenue, reduce operational costs, and
                propel your practice toward lasting financial success.
              </motion.div>
            </div>
            <div className="tw-flex tw-justify-center">
              <motion.img
                src="/images/profit-enhancement-services.png"
                alt="Medical Team"
                className="tw-object-cover sm:!tw-w-2/3 md:!tw-w-full tw-w-full "
                initial={{ x: 150, opacity: 0 }} // start off-screen left
                animate={{
                  x: 0, // move to normal position
                  opacity: 1,
                }}
                transition={{
                  x: { duration: 1, ease: "easeOut" }, // entrance motion
                  opacity: { duration: 1, ease: "easeOut" },
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8f9fb] text-gray-900">
        <div className="container tw-flex tw-flex-col tw-items-center mx-auto text-center max-w-3xl px-6">
          <motion.div
            className="tw-text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
              Ready to Accelerate&nbsp;
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Your Practice’s Growth and Profitability?
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-mb-4"
          >
            <button type="button" className="button-get-started">
              <span className="fold"></span>

              <div className="points_wrapper">
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
              </div>

              <span className="inner">
                Book Your Complimentary Financial Assessment Today
              </span>
            </button>
          </motion.div>
          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl"
          >
            Effective financial management can be challenging in the healthcare
            industry. With evolving regulations, payer models, and rising
            operational costs, healthcare providers must adapt to remain viable.
            At&nbsp;<span className="tw-font-semibold">Key MedSolutions</span>
            &nbsp;, a leading Financial Profit Enhancement Company in the USA,
            we offer comprehensive&nbsp;
            <span className="tw-font-semibold">
              Profit Enhancement Services
            </span>
            &nbsp;to help healthcare organizations boost their financial
            performance, reduce costs, and improve operational efficiency, all
            while delivering exceptional patient care.
          </motion.p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
