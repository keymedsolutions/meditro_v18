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
import { Check, DollarSign } from "lucide-react";

const RcmPlan = () => {
  return (
    <div className="tw-page-content tw-bg-white">
      <section className="section-area section-sp5 work-area !tw-pb-0">
        <MedicalBillingSolutions />
        <div className="sm:tw-container plan-sections tw-px-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="tw-text-center tw-mb-10 tw-pt-20"
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="tw-mb-10"
          >
            {/* Main Card */}
            <div className="tw-relative tw-bg-gradient-to-br tw-from-slate-50 tw-to-blue-50 tw-rounded-2xl tw-border tw-border-slate-200 tw-shadow-lg tw-overflow-hidden tw-mb-8">
              {/* Decorative Elements */}
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-32 tw-h-32 tw-bg-primary/5 tw-rounded-full tw--translate-x-1/2 tw--translate-y-1/2"></div>
              <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-40 tw-h-40 tw-bg-secondary/5 tw-rounded-full tw-translate-x-1/2 tw-translate-y-1/2"></div>

              <div className="tw-relative tw-z-10 tw-p-8">
                {/* Header */}
                <div className="tw-text-center tw-mb-8">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="tw-inline-flex tw-items-center tw-gap-3 tw-bg-gradient-to-r tw-from-primary/10 tw-to-secondary/10 tw-px-6 tw-py-3 tw-rounded-full tw-border tw-border-primary/20"
                  >
                    <div className="tw-w-3 tw-h-3 tw-bg-primary tw-rounded-full tw-animate-pulse"></div>
                    <h3 className="tw-text-2xl tw-font-bold tw-text-gray-900">
                      Percentage-Based Model
                    </h3>
                    <div className="tw-w-3 tw-h-3 tw-bg-secondary tw-rounded-full tw-animate-pulse"></div>
                  </motion.div>
                </div>

                <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8">
                  {/* Included Services Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="tw-space-y-6"
                  >
                    <div className="tw-flex tw-items-center tw-gap-3 tw-mb-4">
                      <div className="tw-p-1 tw-bg-green-500 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                        <Check className="tw-text-white" />
                      </div>
                      <h4 className="tw-text-xl tw-font-semibold tw-text-gray-900">
                        Included Services
                      </h4>
                    </div>

                    <div className="tw-grid tw-grid-cols-1 tw-gap-3">
                      {[
                        "Charge Entry (CPT & ICD-10 Coding) & Claims Submission",
                        "Payment Posting Services",
                        "Rejection Analysis",
                        "Accounts Receivable (AR) Follow-up / Insurance Follow-Up",
                        "Denial Management",
                        "Patient Statements",
                        "Comprehensive Practice Reporting & Analysis",
                      ].map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.3 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="tw-flex tw-items-center tw-gap-3 tw-group"
                        >
                          <div className="tw-w-2 tw-h-2 tw-bg-primary tw-rounded-full tw-flex-shrink-0 group-hover:tw-scale-150 tw-transition-transform"></div>
                          <span className="tw-text-gray-700 group-hover:tw-text-gray-900 tw-transition-colors">
                            {service}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Pricing Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="tw-space-y-6"
                  >
                    <div className="tw-flex tw-items-center tw-gap-3 tw-mb-4">
                      <div className="tw-p-1 tw-bg-blue-500 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                        <DollarSign className="tw-text-white" />
                      </div>
                      <h4 className="tw-text-xl tw-font-semibold tw-text-gray-900">
                        Transparent Pricing
                      </h4>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="tw-bg-white tw-rounded-xl tw-p-6 tw-border-2 tw-border-dashed tw-border-primary/20 tw-shadow-md"
                    >
                      <div className="tw-text-center">
                        <div className="tw-inline-flex tw-items-baseline tw-gap-2 tw-mb-2">
                          <span className="tw-text-4xl tw-font-bold tw-text-primary">
                            4%
                          </span>
                          <span className="tw-text-lg tw-text-gray-600">
                            only
                          </span>
                        </div>
                        <p className="tw-text-gray-700 tw-text-sm">
                          of total monthly insurance collections
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
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
              <span className="tw-font-bold tw-text-black">Note&nbsp;:</span>
              &nbsp;Monthly agent plans cover staffing only and do not include
              per-ticket verification fees.
            </p>
          </motion.div>
        </div>
        <WhatIsIncluded />
        <TrustReasons />
        <FAQs />
        <CTASection />
        {/* <BonusTip /> */}
        {/* <motion.div
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
        </motion.div> */}
      </section>
    </div>
  );
};

export default RcmPlan;
