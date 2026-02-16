import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";

const AccelerateYourRevenue = () => {
  return (
    <React.Fragment>
      <section className="tw-relative  tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
        {/* Animated background elements */}
        {/* <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-accent-100 tw-via-accent-orange-100 tw-to-accent-200 tw-gradient-shift"></div> */}

        {/* Floating geometric shapes */}
        <motion.div
          className="tw-absolute tw-top-20 tw-left-10 tw-w-32 tw-h-32 tw-bg-accent-400 tw-rounded-full tw-opacity-20 tw-float-animation"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div
          className="tw-absolute tw-bottom-20 tw-right-10 tw-w-24 tw-h-24 tw-bg-accent-orange-400 tw-rounded-lg tw-opacity-20 tw-rotate-45"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.2, rotate: 45 }}
          transition={{ duration: 2, delay: 1 }}
          style={{ animation: "float 8s ease-in-out infinite reverse" }}
        />
        <motion.div
          className="tw-absolute tw-top-1/2 tw-right-1/4 tw-w-16 tw-h-16 tw-bg-accent-600 tw-rounded-full tw-opacity-15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 1.5 }}
          style={{ animation: "float 10s ease-in-out infinite" }}
        />

        <motion.div
          className="tw-relative tw-z-10 tw-max-w-7xl tw-mx-auto tw-text-center tw-px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="tw-mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tw-text-3xl md:tw-text-5xl lg:tw-text-6xl tw-font-black tw-text-gradient tw-mb-6 tw-leading-tight">
              Accelerate Your Revenue
            </div>
            <motion.div
              className="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-primary tw-mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Get Started Today
            </motion.div>
          </motion.div>

          <motion.div
            className="tw-max-w-5xl tw-mx-auto tw-mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="sm:tw-text-xl tw-text-md sm:tw-p-0 tw-p-2  tw-mb-8 tw-leading-relaxed tw-font-medium">
              Looking to cut down denials, boost collections, and l give your
              team more time to focus on patient care? Whether you want support
              for everyday billing or need advanced specialty help with&nbsp;
              <Link
                href={APP_PATH.services.nephrology.path}
                className="tw-font-semibold"
              >
                Nephrology Billing Services
              </Link>
              ,&nbsp;
              <Link
                href={APP_PATH.services.codingServices.icd10Coding.path}
                className="tw-font-semibold "
              >
                ICD-10 Coding Services
              </Link>
              , &nbsp;or&nbsp;
              <Link
                href={APP_PATH.services.physicianBilling.path}
                className="tw-font-semibold "
              >
                Physician Billing Solutions,
              </Link>
              &nbsp;Key Med Solutions is your trusted resource.
            </p>
          </motion.div>

          <motion.div
            className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-6 tw-justify-center tw-items-center tw-mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                    Schedule Your Free Consultation
                  </span>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <section className="container tw-relative tw-flex tw-items-center tw-justify-center tw-bg-indigo-600 tw-text-white tw-p-10 tw-rounded-2xl tw-shadow-xl custom-background">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-space-y-6"
        >
          <motion.h2
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-4xl tw-font-extrabold tw-drop-shadow-lg tw-text-white"
          >
            Questions? Let’s Connect
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-flex-col tw-items-center tw-gap-4"
          >
            <a
              href="tel:+13364999299"
              className="!tw-text-white tw-flex tw-items-center tw-gap-3 tw-text-lg tw-font-medium tw-bg-white/10 tw-backdrop-blur-md tw-px-6 tw-py-3 tw-rounded-full tw-shadow-md tw-hover:tw-bg-white/20 tw-transition"
            >
              <Phone className="tw-w-6 tw-h-6 tw-text-yellow-300" />
              <span>+1 (336) 499-9299</span>
            </a>

            <a
              href="mailto:info@keymedsolutions.com"
              className="!tw-text-white tw-flex tw-items-center tw-gap-3 tw-text-lg tw-font-medium tw-bg-white/10 tw-backdrop-blur-md tw-px-6 tw-py-3 tw-rounded-full tw-shadow-md tw-hover:tw-bg-white/20 tw-transition"
            >
              <Mail className="tw-w-6 tw-h-6 tw-text-green-300" />
              <span>info@keymedsolutions.com</span>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </React.Fragment>
  );
};

export default AccelerateYourRevenue;
