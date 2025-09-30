import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";

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
      className=" tw-px-4 tw-flex tw-flex-col tw-gap-y-3 tw-justify-center tw-items-center"
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
        we offer&nbsp;
        <Link
          href={APP_PATH.services.physicianBilling.claimBilling.path}
          className="tw-font-semibold"
        >
          Medical Claim Billing,
        </Link>
        &nbsp;helping you shorten the payment cycle and reduce administrative
        overhead while ensuring accuracy and compliance at every step.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
      >
        For organizations looking to maximize profitability, our&nbsp;
        <Link href={APP_PATH.services.profitEnhancement.path} className="tw-font-semibold">
          Profit Enhancement Services
        </Link>
        &nbsp;discover untapped revenues and improve yield, giving your practice
        a distinct edge in today’s competitive landscape.
      </motion.p>
    </motion.section>
  );
};

export default OptimizeRevenueSection;
