// components/MedicalInsuranceSection.js
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const MedicalInsuranceSection = () => {
  return (
    <div className="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div className="sm:tw-container tw-mx-auto">
        <motion.div
          className="tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-indigo-50 tw-rounded-3xl tw-overflow-hidden tw-shadow-2xl tw-p-4 sm:tw-p-8 md:tw-p-12 lg:tw-p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
            {/* Left Content */}
            <div>
              <motion.div
                className="tw-text-center tw-mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="tw-mx-auto sm:tw-break-normal tw-break-all tw-text-start tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
                  Start Today with the Leaders in&nbsp;
                  <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                    Medical Insurance Eligibility Verification Services
                  </span>
                </h2>
              </motion.div>

              <motion.p
                className="tw-text-lg tw-text-gray-700 tw-mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Ready to improve your bottom line with trusted Medical Insurance
                Eligibility Verification Services and robust Health Insurance
                Eligibility Verification Services? Connect with our specialists,
                experience smooth onboarding, and see immediate ROI.
              </motion.p>

              <motion.p
                className="tw-text-lg tw-text-gray-700 tw-mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Contact us now for a custom consultation and discover how our
                experts can transform your insurance verification process.
              </motion.p>

              <motion.div
                className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="tw-flex tw-items-center tw-p-4 tw-bg-white tw-rounded-xl tw-shadow-md hover:tw-shadow-lg tw-transition-shadow tw-duration-300">
                  <div className="tw-bg-blue-100 tw-p-3 tw-rounded-full tw-mr-4">
                    <Phone className="tw-text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="tw-text-gray-600 tw-text-sm">Call Us:</p>
                    <p className="tw-text-gray-900 tw-font-medium">
                      +1 (336) 499-92994
                    </p>
                  </div>
                </div>

                <div className="tw-flex tw-items-center tw-p-4 tw-bg-white tw-rounded-xl tw-shadow-md hover:tw-shadow-lg tw-transition-shadow tw-duration-300">
                  <div className="tw-bg-indigo-100 tw-p-3 tw-rounded-full tw-mr-4">
                    <Mail className="tw-text-indigo-600" size={24} />
                  </div>
                  <div>
                    <p className="tw-text-gray-600 tw-text-sm">Email:</p>
                    <p className="tw-text-gray-900 tw-font-medium tw-break-all">
                      info@keymedsolution.com
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
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
                    Book a Free Consultation : Get Started Now
                  </span>
                </button>
              </motion.div>
            </div>

            {/* Right Content */}
            <motion.div
              className="tw-relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="tw-absolute tw--top-6 tw--right-6 tw-w-48 tw-h-48 tw-bg-blue-200 tw-rounded-full tw-opacity-30 tw-animate-pulse-slow"></div>
              <div className="tw-absolute tw--bottom-6 tw--left-6 tw-w-40 tw-h-40 tw-bg-indigo-200 tw-rounded-full tw-opacity-30 tw-animate-pulse-slow tw-animate-delay-1000"></div>

              <div className="tw-relative tw-bg-white sm:tw-p-8 tw-p-4 tw-rounded-2xl tw-shadow-xl">
                <h3 className="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-6">
                  Comprehensive Support Services
                </h3>
                <p>Don’t forget to explore our linked</p>
                <motion.div
                  className="tw-flex tw-items-start tw-mb-4 tw-p-4 tw-bg-blue-50 tw-rounded-lg tw-transition-all tw-duration-300 hover:tw-bg-blue-100 hover:tw-shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle
                    className="tw-text-blue-600 tw-mr-3 tw-mt-1"
                    size={20}
                  />
                  <p className="tw-text-gray-800">
                    Explore our linked&nbsp;
                    <Link href="/medical-claim-billing-company">
                      <span className="tw-font-semibold tw-text-blue-700">
                        Medical Claim Billing Services
                      </span>
                    </Link>
                  </p>
                </motion.div>

                <motion.div
                  className="tw-flex tw-items-start tw-mb-6 tw-p-4 tw-bg-indigo-50 tw-rounded-lg tw-transition-all tw-duration-300 hover:tw-bg-indigo-100 hover:tw-shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle
                    className="tw-text-indigo-600 tw-mr-3 tw-mt-1"
                    size={20}
                  />
                  <p className="tw-text-gray-800">
                    Explore our&nbsp;
                    <Link href="/medical-credentialing-services">
                      <span className="tw-font-semibold tw-text-indigo-700">
                        Physician Credentialing Services
                      </span>
                    </Link>
                  </p>
                </motion.div>

                <motion.p
                  className="tw-text-gray-700 tw-text-center tw-p-4 tw-bg-gray-50 tw-rounded-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  To create the most efficient healthcare revenue cycle
                  possible.
                </motion.p>

                <motion.div
                  className="tw-mt-8 tw-pt-6 tw-border-t tw-border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <p className="tw-text-lg tw-font-semibold tw-text-center tw-text-gray-900">
                    Let us be your partner in excellence. Choose a solution
                    built for results, security, and growth.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MedicalInsuranceSection;
