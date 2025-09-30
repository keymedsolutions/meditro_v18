"use client";

import React from "react";
import MedicalBillingSolutions from "./MedicalBillingSolutions";
import { motion } from "framer-motion";
import RCMPlansList from "../pricing/rcm-plan";
import { WhatIsIncluded } from "./WhatIsIncluded";
import TrustReasons from "./TrustReasons";
import FAQs from "./FAQs";
import CTASection from "./CTASection";
import BonusTip from "./BonusTip";

const RcmPlan = () => {
  return (
    <div className="tw-page-content tw-bg-white">
      <section className="section-area section-sp5 work-area">
        <MedicalBillingSolutions />
        <div className="sm:tw-container plan-sections tw-px-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="tw-text-center tw-mb-20 tw-pt-20"
          >
            <motion.div
              className="tw-text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
                Our&nbsp;
                <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                  Plans & Pricing
                </span>
              </h2>
            </motion.div>
            <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
              Find the perfect plan for your practice. Pay only for what you
              need, with no hidden fees or long-term commitments.
            </p>
          </motion.div>

          <RCMPlansList />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
            }}
            className="container tw-bg-gradient-to-r tw-from-blue-50 tw-to-blue-100 tw-border-l-4 tw-border-blue-500 tw-rounded-xl tw-p-5 tw-shadow-md tw-mb-10"
          >
            <p className="tw-text-gray-800 tw-text-base tw-m-0">
              <span className="tw-font-bold tw-text-black">Note&nbsp;:</span>&nbsp;Monthly agent plans cover staffing only and do not include
              per-ticket verification fees.
            </p>
          </motion.div>
        </div>
        <WhatIsIncluded />
        <TrustReasons />
        <FAQs />
        <CTASection />
        <BonusTip />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
          }}
          className="container tw-bg-gradient-to-r tw-from-blue-50 tw-to-blue-100 tw-border-l-4 tw-border-blue-500 tw-rounded-xl tw-p-5 tw-shadow-md"
        >
          <p className="tw-text-gray-800 tw-text-base tw-m-0">
            Interactive pricing tools simplify decision-making, build trust, and
            showcase the flexibility of your services — turning your pricing
            page into a conversion powerhouse.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default RcmPlan;
