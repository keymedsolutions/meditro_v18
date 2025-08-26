import React from "react";
import { motion } from "framer-motion";

const OptimizeRevenueSection = () => {
  return (
    <motion.section
      style={{
        background: "url('/images/home/medicatioIconBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(1.15)",
      }}
      animate={{
        x: 0, // move to normal position
        opacity: 1,
        borderRadius: [
          "89% 11% 99% 1% / 10% 89% 11% 90%",
          "10% 90% 12% 88% / 82% 9% 91% 18%",
          "89% 11% 99% 1% / 10% 89% 11% 90%",
        ],
      }}
      transition={{
        x: { duration: 1, ease: "easeOut" }, // entrance motion
        opacity: { duration: 1, ease: "easeOut" },
        borderRadius: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="tw-container   tw-px-4 border tw-border-gray-500 tw-shadow-2xl tw-rounded-2xl tw-flex tw-flex-col tw-gap-y-3 tw-justify-center tw-items-center"
    >
      <motion.div
        className="tw-text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-max-w-4xl tw-text-foreground tw-mb-10">
          Optimize Your Revenue with
          <br />
          <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
            Medical Claim Billing and Profit
          </span>
          &nbsp;Enhancement Services
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
      >
        Your practice deserves a partner who can adapt to your demands and
        accelerate your financial return. As part of our full-service approach,
        we offer Medical Claim Billing, helping you shorten the payment cycle
        and reduce administrative overhead while ensuring accuracy and
        compliance at every step.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
      >
        For organizations looking to maximize profitability, our Profit
        Enhancement Services discover untapped revenues and improve yield,
        giving your practice a distinct edge in today’s competitive landscape.
      </motion.p>
    </motion.section>
  );
};

export default OptimizeRevenueSection;
