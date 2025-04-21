"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Clock3,
  BarChart3,
  FileText,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const billingPoints = [
  {
    icon: TrendingUp,
    title: "Boost Collections",
    desc: "See a rise in collections of 20–35% within the first few months.",
  },
  {
    icon: Clock3,
    title: "Reduce A/R Days",
    desc: "Minimize delays in payments with fast claim resolution.",
  },
  {
    icon: DollarSign,
    title: "98% Claim Acceptance",
    desc: "Enjoy smooth cash flow with a high first-pass rate.",
  },
  {
    icon: FileText,
    title: "Automated Patient Statements",
    desc: "Improve communication with automated dispatching.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Reports",
    desc: "Make data-driven decisions with financial transparency.",
  },
  {
    icon: ShieldCheck,
    title: "CPT & ICD-10 Compliance",
    desc: "Ensure coding accuracy and regulatory adherence.",
  },
  {
    icon: MessageSquare,
    title: "Smarter Billing Starts Here",
    desc: "Intelligent tools and expert guidance for optimized revenue.",
  },
];

const BillingFeature = () => {
  return (
    <section className="tw-py-28 tw-relative tw-bg-white tw-overflow-hidden">
      {/* Decorative Background */}
      <div className="tw-absolute tw-inset-0 tw-overflow-hidden -tw-z-10">
        <div className="tw-absolute tw-left-1/2 tw-top-0 tw-transform -tw-translate-x-1/2 tw-w-[120vw] tw-h-[120vw] tw-bg-gradient-radial tw-from-keymed-200/30 tw-to-transparent tw-blur-[120px] tw-rounded-full" />
      </div>

      <div className="tw-section-container">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-center tw-text-keymed-800 tw-mb-6"
        >
          Get Paid Faster and Smarter with KeyMed Solutions
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-text-keymed-700/80 tw-mb-16"
        >
          At KeyMed Solutions, we optimize your revenue cycle to guarantee the highest possible
          reimbursements with the fewest possible delays.
        </motion.p>



        <div className="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-10">
            
          {billingPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="tw-bg-white tw-rounded-3xl tw-shadow-lg tw-border tw-border-keymed-100 tw-p-8 tw-group tw-relative tw-transition-transform tw-duration-300 hover:tw-scale-105 hover:tw-shadow-keymed-300/30"
              >
                {/* Decorative Glow */}
                <div className="tw-absolute -tw-top-8 -tw-left-8 tw-w-24 tw-h-24 tw-bg-keymed-200 tw-rounded-full tw-blur-xl tw-opacity-30 -tw-z-10"></div>
                <div className="tw-absolute -tw-bottom-8 -tw-right-8 tw-w-32 tw-h-32 tw-bg-keymed-100 tw-rounded-full tw-blur-2xl tw-opacity-40 -tw-z-10"></div>

                <div className="tw-flex tw-items-start tw-gap-4">
                  <div className="tw-bg-gradient-to-br tw-from-keymed-500 tw-to-keymed-600 tw-text-white tw-p-3 tw-rounded-xl tw-shadow-md">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h4 className="tw-text-lg tw-font-semibold tw-text-keymed-800">
                      {point.title}
                    </h4>
                    <p className="tw-mt-2 tw-text-sm tw-text-keymed-700/80">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mt-20"
        >
          <span className="tw-inline-block tw-bg-gradient-to-r tw-from-keymed-500 tw-to-keymed-700 tw-text-white tw-rounded-full tw-px-10 tw-py-3 tw-font-medium tw-shadow-md hover:tw-shadow-xl tw-transition-all tw-duration-300">
            🚀 Transform your revenue cycle with KeyMed Solutions!
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default BillingFeature;
