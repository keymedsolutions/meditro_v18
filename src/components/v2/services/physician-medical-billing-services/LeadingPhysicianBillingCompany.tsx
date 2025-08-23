import React from "react";
import { motion } from "framer-motion";

const LeadingPhysicianBillingCompany = () => {
  return (
    <section className="container tw-py-20 ">
      <div className="tw-max-w-5xl tw-mx-auto tw-px-6">
        {/* Section Heading */}
        <motion.h2
          className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-gray-900 tw-text-center tw-mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Why We’re the Leading Physician Billing Company in the USA
        </motion.h2>

        {/* Features List */}
        <div className="space-y-10">
          {[
            {
              title: "Decades of Combined Experience",
              desc: "Our skilled professionals bring deep industry expertise, keeping your practice compliant and profitable.",
            },
            {
              title: "Technology-Driven Solutions",
              desc: "We deploy state-of-the-art billing and reporting platforms for speed, security, and total accuracy.",
            },
            {
              title: "Complete Transparency",
              desc: "With real-time dashboards and regular performance updates, you always know where your revenue stands.",
            },
            {
              title: "Outstanding Client Support",
              desc: "Our knowledgeable team, including seasoned physician billing specialists, is always on hand to answer questions and resolve concerns.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="tw-relative tw-pl-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Decorative Line + Dot */}
              <div className="tw-absolute tw-left-0 tw-top-2 tw-h-4 tw-w-4 tw-rounded-full tw-bg-blue-500"></div>
              <div className="tw-absolute tw-left-2 tw-top-6 tw-w-0.5 tw-h-full tw-bg-gray-200"></div>

              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900">
                {item.title}
              </h3>
              <p className="tw-mt-2 tw-text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadingPhysicianBillingCompany;
