import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MessageSquare, RefreshCw, Bell } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const EligibilityServiceExperience = () => {
  const data = [
    {
      icon: (
        <ShieldCheck className="tw-w-8 tw-h-8 tw-text-blue-600 group-hover:tw-text-white" />
      ),
      title: "Verification at Appointment Scheduling or Check-In",
      desc: "Each patient's insurance status is checked in real time, covering policy activity and a clear summary of benefits owed.",
    },
    {
      icon: (
        <MessageSquare className="tw-w-8 tw-h-8 tw-text-purple-600 group-hover:tw-text-white" />
      ),
      title: "Transparent Communication with Patients",
      desc: "Provide clear, precise co-pay and deductible information prior to service, ensuring no financial surprises.",
    },
    {
      icon: (
        <RefreshCw className="tw-w-8 tw-h-8 tw-text-pink-600 group-hover:tw-text-white" />
      ),
      title: "Proactive Compliance & Authorization Checks",
      desc: "Every procedure’s referral and pre-authorization needs are identified and handled before claims submission.",
    },
    {
      icon: (
        <Bell className="tw-w-8 tw-h-8 tw-text-indigo-600 group-hover:tw-text-white" />
      ),
      title: "Ongoing Updates & Alerts",
      desc: "Our system tracks changes and updates, so your staff is always working with the latest coverage details.",
    },
  ];
  return (
    <section className="container tw-py-20 sm:tw-px-0 tw-px-4 tw-to-card">
      <div className="tw-max-w-7xl tw-mx-auto">
        <motion.div
          className="tw-text-center tw-mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-mx-auto tw-break-all tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            Elevate Your Patient
            <br />
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Insurance Eligibility Service
            </span>
            &nbsp; Experience
          </h2>
          <p>
            Here’s how our Patient Insurance Eligibility Service delivers
            results:
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mb-16">
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-relative tw-group tw-flex tw-items-center tw-gap-4 tw-overflow-hidden tw-rounded-2xl tw-border tw-border-white tw-bg-white tw-p-6 tw-shadow-lg tw-cursor-pointer tw-transition-all tw-duration-300 hover:tw-border-green-700"
            >
              {/* Animated background bar */}
              <div className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-1.5 tw-bg-accent-500 tw-transition-all tw-duration-300 tw-z-0 group-hover:tw-w-full" />

              {/* Icon */}
              <div className="tw-text-accent-500 group-hover:tw-text-white tw-flex-shrink-0 tw-relative tw-z-10">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="tw-flex tw-flex-col tw-gap-y-2 tw-relative tw-z-10">
                <span className="tw-font-semibold tw-text-lg tw-text-gray-800 group-hover:tw-text-white">
                  {item.title}
                </span>
                <span className="tw-text-gray-600 group-hover:tw-text-white tw-text-sm">
                  {item.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilityServiceExperience;
