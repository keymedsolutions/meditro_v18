"use client";

import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, MessageSquare, Bell } from "lucide-react";

export default function PatientEligibilityService() {
  const features = [
    {
      icon: <ShieldCheck className="tw-w-8 tw-h-8 tw-text-blue-600" />,
      title: "Verification at Appointment Scheduling or Check-In",
      desc: "Each patient's insurance status is checked in real time, covering policy activity and a clear summary of benefits owed.",
    },
    {
      icon: <MessageSquare className="tw-w-8 tw-h-8 tw-text-purple-600" />,
      title: "Transparent Communication with Patients",
      desc: "Provide clear, precise co-pay and deductible information prior to service, ensuring no financial surprises.",
    },
    {
      icon: <RefreshCw className="tw-w-8 tw-h-8 tw-text-pink-600" />,
      title: "Proactive Compliance & Authorization Checks",
      desc: "Every procedure’s referral and pre-authorization needs are identified and handled before claims submission.",
    },
    {
      icon: <Bell className="tw-w-8 tw-h-8 tw-text-indigo-600" />,
      title: "Ongoing Updates & Alerts",
      desc: "Our system tracks changes and updates, so your staff is always working with the latest coverage details.",
    },
  ];

  return (
    <section className="tw-relative tw-py-20 tw-overflow-hidden tw-bg-gradient-to-br tw-from-blue-50 tw-via-purple-50 tw-to-pink-50">
      {/* Infinite moving gradient background */}
      <motion.div
        className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-100/60 tw-via-purple-100/60 tw-to-pink-100/60 tw-rounded-full tw-blur-3xl"
        animate={{
          x: ["-10%", "10%", "-10%"],
          y: ["-10%", "10%", "-10%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="tw-relative tw-z-10 tw-max-w-7xl tw-mx-auto tw-px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="tw-text-4xl tw-font-bold tw-text-gray-900 tw-text-center"
        >
          Elevate Your Patient Insurance Eligibility Service Experience
        </motion.h2>

        <div className="tw-mt-16 tw-grid tw-gap-8 md:tw-grid-cols-2">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="tw-group tw-h-full"
            >
              <div className="tw-bg-white tw-h-full tw-rounded-2xl tw-p-8 tw-shadow-sm tw-transition-all tw-duration-300 group-hover:tw-scale-105 group-hover:tw-shadow-2xl group-hover:tw-shadow-indigo-200/50">
                <div className="tw-flex tw-items-center tw-space-x-4">
                  {feature.icon}
                  <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="tw-mt-4 tw-text-gray-600">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
