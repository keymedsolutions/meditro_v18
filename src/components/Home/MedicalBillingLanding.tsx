"use client";

import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";

export default function MedicalBillingLanding() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="tw-min-h-screen ">
      {/* Hero Section */}
      <section className="tw-relative  tw-py-20 tw-px-4 tw-overflow-hidden   before:tw-content-[''] before:tw-absolute before:tw-inset-20 before:tw-rounded-2xl before:tw-bg-purple-300 before:tw-blur-3xl before:tw-opacity-30 before:tw-z-[-1]">
        <div className="tw-absolute tw-inset-0 tw-bg-grid-pattern tw-opacity-5"></div>
        <div className="tw-max-w-7xl tw-mx-auto tw-relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-center tw-max-w-4xl tw-mx-auto"
          >
            <h1 className="tw-text-5xl md:tw-text-6xl tw-font-bold tw-text-gray-900 tw-mb-6 tw-leading-tight">
              We Handle Your <span className="tw-text-blue-600">Billing</span>&nbsp;
              So You Can Handle Your&nbsp;
              <span className="tw-text-green-600">Patients</span>
            </h1>
            <p className="tw-text-lg tw-text-gray-600 tw-mb-8 tw-leading-relaxed">
              Smart, Simple, and Stress Free Medical Billing Services
            </p>
            <p className="tw-text-lg tw-text-gray-700 tw-mb-12  tw-max-w-3xl tw-mx-auto">
              At Key MedSolutions, we are not just a Medical Billing Company. We
              are your partner in making revenue management effortless. Say
              goodbye to claim denials, slow reimbursements, and admin overload.
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="tw-grid md:tw-grid-cols-3 tw-gap-6 tw-mb-12"
          >
            {[
              "Fewer Denials. Faster Payments.",
              "30 Percent Fewer Claim Issues.",
              "20 Percent Quicker Reimbursements.",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-relative tw-group tw-flex tw-items-center tw-gap-4 tw-overflow-hidden tw-rounded-2xl tw-border tw-border-white-222 tw-bg-white tw-p-6 tw-shadow-lg tw-cursor-pointer tw-transition-all tw-duration-300 hover:tw-border-green-700"
              >
                {/* Animated background div */}
                <div className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-2 tw-bg-green-500 tw-transition-all tw-duration-300 tw-z-0 group-hover:tw-w-full" />
                <CheckCircle
                  className="tw-text-green-500 group-hover:tw-text-white tw-mr-3 tw-flex-shrink-0 tw-relative tw-z-10"
                  size={24}
                />
                <span className="tw-text-gray-800 group-hover:tw-text-white tw-transition-colors tw-duration-300 tw-font-medium tw-relative tw-z-10">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center"
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
                Get Started Today
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
                <Phone className="tw-mr-2" size={20} />
                Book a Free Call
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="tw-py-20 tw-px-4 tw-bg-gradient-to-r tw-from-accent-400 tw-to-accentOrange-400 tw-mb-20">
        <div className="tw-max-w-4xl tw-mx-auto tw-text-center">
          <motion.div {...fadeInUp} viewport={{ once: true, amount: 0.2 }}>
            <h2 className="tw-text-4xl tw-font-bold tw-text-white tw-mb-6">
              Seamless Technology Integration
            </h2>
            <p className="tw-text-xl tw-text-blue-100 tw-mb-8">
              Our medical billing systems effortlessly integrate with your
              existing in-house software, including medicine billing software
              and revenue cycle management solutions, ensuring smooth and
              efficient operations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
