"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                >
                  <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                </svg>
                Contact Us Today
              </span>
            </button>
            <button className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-px-8 tw-py-2.5 tw-overflow-hidden tw-tracking-tighter tw-text-white tw-bg-gray-800 tw-rounded-md tw-group">
              <span className="tw-absolute tw-w-0 tw-h-0 tw-transition-all tw-duration-500 tw-ease-out tw-bg-orange-600 tw-rounded-full group-hover:tw-w-60 group-hover:tw-h-56"></span>

              <span className="tw-absolute tw-bottom-0 tw-left-0 tw-h-full tw--ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tw-w-auto tw-h-full tw-opacity-100 tw-object-stretch"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                  ></path>
                </svg>
              </span>

              <span className="tw-absolute tw-top-0 tw-right-0 tw-w-12 tw-h-full tw--mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tw-object-cover tw-w-full tw-h-full"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                  ></path>
                </svg>
              </span>

              <span className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw--mt-1 tw-rounded-lg tw-opacity-30 tw-bg-gradient-to-b tw-from-transparent tw-via-transparent tw-to-gray-200"></span>

              <span className="tw-relative tw-text-base tw-font-semibold">
                Learn More
              </span>
            </button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-gray-600 tw-max-w-2xl tw-mx-auto tw-leading-relaxed"
          >
            to find out how our expert team and comprehensive Medical RCM
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
