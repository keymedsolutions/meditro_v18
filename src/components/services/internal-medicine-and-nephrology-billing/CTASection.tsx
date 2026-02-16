"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="tw-relative tw-py-20 tw-px-4 tw-overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="tw-relative tw-max-w-5xl tw-mx-auto tw-rounded-2xl tw-shadow-2xl tw-p-10 tw-text-center tw-overflow-hidden"
      >
        {/* 🔹 Animated gradient background inside card */}
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-500 tw-via-indigo-500 tw-to-purple-600 tw-animate-pulse tw-opacity-50"></div>

        {/* 🔹 White overlay for glass effect */}
        <div className="tw-absolute tw-inset-0 tw-bg-white/80 tw-backdrop-blur-xl"></div>

        {/* 🔹 Content */}
        <div className="tw-relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-4xl tw-font-extrabold tw-text-gray-900 tw-mb-4"
          >
            Looking to enhance your billing and take your practice to new
            heights?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-lg tw-text-gray-700 tw-mb-10 tw-leading-relaxed"
          >
            Choose our Internal Medicine Billing Services to secure reliable,
            compliant, and efficient billing processes. As a preferred Internal
            Medicine Billing Company, we are committed to streamlining your
            workflow, optimizing collections, and providing ongoing support
            every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-5 tw-justify-center tw-mb-8"
          >
           
            <Link href={APP_PATH.contactus.path}>
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
                  <svg
                    className="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  >
                    <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                  </svg>
                  Contact Us Today
                </span>
              </button>
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-gray-600 tw-max-w-2xl tw-mx-auto tw-leading-relaxed"
          >
            to find out how our expert team and comprehensive Medical&nbsp;<Link href={APP_PATH.services.rcmCompany.path} className="tw-font-semibold">RCM</Link>&nbsp;
            Solutions can empower your internal medicine practice to thrive.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-gray-600 tw-max-w-2xl tw-mx-auto tw-leading-relaxed"
          >
            Trust our specialized team to manage your billing accurately and
            efficiently, allowing you to dedicate more time to your patients
            while ensuring the financial health of your practice.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
