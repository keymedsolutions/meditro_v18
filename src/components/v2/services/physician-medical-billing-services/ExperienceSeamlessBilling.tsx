import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ExperienceSeamlessBilling = () => {
  return (
    <section className="tw-relative tw-py-20 tw-overflow-hidden">
      <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="tw-text-4xl md:tw-text-6xl tw-font-bold tw-text-foreground tw-mb-6 font-space-grotesk">
            Experience Seamless Billing,&nbsp;
            <span className="tw-text-[#565acf]">Greater Revenue</span>
          </h1>
          <p className="tw-text-muted-foreground tw-mb-8  tw-mx-auto font-dm-sans">
            Running a successful medical practice requires more than exceptional
            patient care; it also demands a streamlined, effective approach to
            your revenue cycle. At Key MedSolutions, we offer industry-leading
            Physician Medical Billing Services that empower physicians and
            healthcare groups to maximize revenue, reduce administrative
            burdens, and focus more on patient outcomes. As a premier Physician
            Billing Company in the USA , our suite of solutions combines
            advanced technology, skilled professionals, and a deep understanding
            of healthcare reimbursement to deliver measurable results, no matter
            the size of your practice.
          </p>
          <motion.div
            className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <button className="star-button">
              Get Started: Maximize Your Practice Today!
              <div className="star-1">
                <img
                  src="/images/icon/geomatricShape.png"
                  className="tw-h-4 tw-w-4"
                />
              </div>
              <div className="star-2">
                <img
                  src="/images/icon/geomatricShape.png"
                  className="tw-h-4 tw-w-4"
                />
              </div>
              <div className="star-3">
                <img
                  src="/images/icon/geomatricShape.png"
                  className="tw-h-4 tw-w-4"
                />
              </div>
              <div className="star-4">
                <img
                  src="/images/icon/geomatricShape.png"
                  className="tw-h-4 tw-w-4"
                />
              </div>
              <div className="star-5">
                <img
                  src="/images/icon/geomatricShape.png"
                  className="tw-h-4 tw-w-4"
                />
              </div>
              <div className="star-6">
                <img
                  src="/images/icon/geomatricShape.png"
                  className="tw-h-4 tw-w-4"
                />
              </div>
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
                Request Free Demo
                <ArrowRight className="tw-ml-3 tw-h-6 tw-w-6" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="tw-absolute tw-top-20 tw-right-10 tw-w-20 tw-h-20 tw-bg-[#f17732] tw-rounded-full tw-opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="tw-absolute tw-bottom-20 tw-left-10 tw-w-16 tw-h-16 tw-bg-[#565acf] tw-rounded-full tw-opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
    </section>
  );
};

export default ExperienceSeamlessBilling;
