import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

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
            <h1 className="tw-text-3xl md:tw-text-5xl lg:tw-text-6xl tw-font-black tw-text-gradient tw-mb-6 tw-leading-tight">
              Accelerate Your Revenue
            </h1>
            <motion.div
              className="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-primary tw-mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Get Started Today 🚀
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
              <span className="tw-text-accent-600 tw-font-bold">
                Nephrology Billing Services, ICD-10 Coding Services,
              </span>
              &nbsp;or&nbsp;
              <span className="tw-text-accent-600 tw-font-bold">
                Physician Billing Solutions,
              </span>
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
                  Schedule Your Free Consultation
                </span>
              </button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                  Book Now
                  <ArrowRight className="tw-ml-3 tw-h-6 tw-w-6" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <section className="tw-container tw-flex tw-items-center tw-justify-center  tw-bg-gradient-to-r tw-from-indigo-600 tw-to-purple-600 tw-text-white tw-p-10 tw-rounded-2xl tw-shadow-xl">
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
