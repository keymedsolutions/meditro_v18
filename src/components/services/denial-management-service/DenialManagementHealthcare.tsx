"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Target,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const DenialManagementHealthcare = () => {
  return (
    <div className="tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-gray-50 tw-via-white tw-to-blue-50 tw-relative tw-overflow-hidden">
      {/* Background decorative elements */}
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-72 tw-h-72 tw-bg-blue-100 tw-rounded-full tw-opacity-20 tw--translate-x-1/2 tw--translate-y-1/2"></div>
      <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-80 tw-h-80 tw-bg-indigo-100 tw-rounded-full tw-opacity-20 tw-translate-x-1/2 tw-translate-y-1/2"></div>

      <div className="tw-container tw-mx-auto tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-20 tw-pt-20 "
        >
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            Denial Management in&nbsp;
            <br />
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Healthcare
            </span>
          </h2>
          <p className="tw-max-w-4xl tw-mx-auto tw-text-center">
            Insurance denials pose a major challenge for healthcare providers,
            resulting in revenue loss and reduced operational efficiency.
            At&nbsp;
            <Link
              href={APP_PATH.home.path}
              className="tw-font-semibold tw-text-inherit"
            >
              Key MedSolutions
            </Link>
            , we understand the complexities of denial management in healthcare
            and offer solutions that address these challenges head-on.
          </p>
        </motion.div>
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-mb-16">
          {/* Left side - Denials vs Rejections */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="tw-text-2xl tw-font-semibold tw-text-gray-800 tw-mb-6">
              Understanding the distinction between claim denials and claim
              rejections is essential to effective denial management:
            </h3>

            <div className="tw-space-y-6">
              <motion.div
                style={{ borderLeft: "4px solid red" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 "
              >
                <div className="tw-flex tw-items-start">
                  <div className="tw-p-4 tw-rounded-full tw-bg-red-100 tw-flex tw-items-center tw-justify-center tw-mr-4">
                    <XCircle className="tw-w-6 tw-h-6 tw-text-red-600" />
                  </div>
                  <div>
                    <h4 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                      Claim Denials
                    </h4>
                    <p className="tw-text-gray-600">
                      These occur when a claim hasn't been processed due to
                      errors or missing information. Denied claims require
                      corrections and resubmission to the payer.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ borderLeft: "4px solid #f59e0b" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-border-l-4 tw-border-amber-500"
              >
                <div className="tw-flex tw-items-start">
                  <div className="tw-p-4 tw-rounded-full tw-bg-amber-100 tw-flex tw-items-center tw-justify-center tw-mr-4">
                    <AlertTriangle className="tw-w-6 tw-h-6 tw-text-amber-600" />
                  </div>
                  <div>
                    <h4 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                      Claim Rejections
                    </h4>
                    <p className="tw-text-gray-600">
                      These are processed claims that have been classified as
                      unpayable by the insurance company, often due to
                      non-compliance or coding errors.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative"
          >
            <div className="tw-sticky tw-top-24 tw-h-full">
              <div className="tw-bg-gradient-to-br tw-from-blue-600 tw-to-indigo-700 tw-rounded-2xl tw-shadow-xl tw-p-8 tw-text-white tw-h-full">
                <div className="tw-absolute tw-top-0 tw-right-0 tw-w-32 tw-h-32 tw-bg-white tw-rounded-full tw-opacity-10 tw--translate-y-1/2 tw-translate-x-1/2"></div>

                <div className="tw-relative tw-z-10">
                  <div className="tw-w-16 tw-h-16 tw-rounded-full tw-bg-white tw-bg-opacity-20 tw-flex tw-items-center tw-justify-center tw-mb-6">
                    <Target className="tw-w-8 tw-h-8" />
                  </div>

                  <h3 className="tw-text-2xl tw-font-semibold tw-mb-4 tw-text-accentOrange-500">
                    Our Approach
                  </h3>

                  <div className="tw-space-y-4">
                    <div className="tw-flex tw-items-start">
                      <div className="tw-w-6 tw-h-6 tw-rounded-full tw-bg-white tw-bg-opacity-30 tw-flex tw-items-center tw-justify-center tw-mr-3 tw-mt-1">
                        <div className="tw-w-2 tw-h-2 tw-bg-white tw-rounded-full"></div>
                      </div>
                      <p className="tw-text-white">
                        Identify root causes of denials
                      </p>
                    </div>

                    <div className="tw-flex tw-items-start">
                      <div className="tw-w-6 tw-h-6 tw-rounded-full tw-bg-white tw-bg-opacity-30 tw-flex tw-items-center tw-justify-center tw-mr-3 tw-mt-1">
                        <div className="tw-w-2 tw-h-2 tw-bg-white tw-rounded-full"></div>
                      </div>
                      <p className="tw-text-white">
                        Implement corrective actions
                      </p>
                    </div>

                    <div className="tw-flex tw-items-start">
                      <div className="tw-w-6 tw-h-6 tw-rounded-full tw-bg-white tw-bg-opacity-30 tw-flex tw-items-center tw-justify-center tw-mr-3 tw-mt-1">
                        <div className="tw-w-2 tw-h-2 tw-bg-white tw-rounded-full"></div>
                      </div>
                      <p className="tw-text-white">
                        Avoid unnecessary financial setbacks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
          {/* Coding Denial Management Services */}
          <motion.div
            style={{ borderTop: "4px solid #16a34a" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-group tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-8 tw-hover:shadow-xl tw-transition-all tw-duration-300"
          >
            <div className="tw-w-14 tw-h-14 tw-rounded-full tw-bg-green-100 tw-flex tw-items-center tw-justify-center tw-mb-6 group-hover:tw-scale-110 tw-transition-transform tw-duration-300">
              <CheckCircle className="tw-w-7 tw-h-7 tw-text-green-600" />
            </div>

            <h3 className="tw-text-2xl tw-font-semibold tw-text-gray-800 tw-mb-4">
              Our Coding Denial Management Services
            </h3>

            <p className="tw-text-gray-600 tw-mb-6">
              focus on resolving these issues swiftly and effectively. By
              identifying the root causes of denials and implementing corrective
              actions, we help healthcare providers avoid unnecessary financial
              setbacks.
            </p>
          </motion.div>

          {/* Denial Management Services for Hospitals */}
          <motion.div
            style={{ borderTop: "4px solid #2563eb" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-group tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-8 tw-hover:shadow-xl tw-transition-all tw-duration-300 "
          >
            <div className="tw-w-14 tw-h-14 tw-rounded-full tw-bg-blue-100 tw-flex tw-items-center tw-justify-center tw-mb-6 group-hover:tw-scale-110 tw-transition-transform tw-duration-300">
              <BarChart3 className="tw-w-7 tw-h-7 tw-text-blue-600" />
            </div>

            <h3 className="tw-text-2xl tw-font-semibold tw-text-gray-800 tw-mb-4">
              Our Denial Management Services for Hospitals and clinics
            </h3>

            <p className="tw-text-gray-600 tw-mb-6">
              are designed to address every aspect of the denial process, from
              identifying trends in denials to implementing preventive measures.
              By outsourcing your denial management needs to Key MedSolutions,
              you can reduce claim denials, accelerate payments, and improve
              your practice's cash flow.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DenialManagementHealthcare;
