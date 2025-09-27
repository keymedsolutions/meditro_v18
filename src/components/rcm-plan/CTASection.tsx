import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Quote } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <div className="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-p-4 tw-bg-gradient-to-br tw-from-indigo-900 tw-via-purple-900 tw-to-pink-800">
      <div className="sm:tw-container tw-mx-auto tw-max-w-6xl">
        <motion.div
          className="tw-bg-gradient-to-br tw-from-white/10 tw-to-white/5 tw-backdrop-blur-md tw-rounded-3xl tw-shadow-2xl tw-overflow-hidden tw-border tw-border-white/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="sm:tw-p-10 tw-p-4">
            {/* Left Content */}
            <motion.div
              className="tw-flex tw-flex-col tw-justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-white tw-mb-6">
                Get Started Today
              </h2>
              <p className="tw-text-lg tw-text-white/90 tw-mb-8">
                Ready to streamline your billing and strengthen your&nbsp;
                <Link
                  href={APP_PATH.services.rcmCompany.path}
                  className="tw-font-semibold tw-text-inherit"
                >
                  revenue cycle management?
                </Link>
                &nbsp;Let's get started!
              </p>

              {/* Animated decorative elements */}
              <div className="tw-relative">
                <motion.div
                  className="tw-absolute tw--top-10 tw--left-6 tw-w-24 tw-h-24 tw-bg-pink-500/30 tw-rounded-full tw-blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                />
                <motion.div
                  className="tw-absolute tw--bottom-8 tw--right-8 tw-w-16 tw-h-16 tw-bg-indigo-500/30 tw-rounded-full tw-blur-xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Right Content - Action Cards */}
            <div className="tw-space-y-6 tw-max-w-xl tw-mx-auto">
              {/* Card 1 */}
              <motion.div
                className="tw-bg-gradient-to-r tw-from-indigo-600/20 tw-to-purple-600/20 tw-backdrop-blur-sm tw-rounded-xl tw-p-6 tw-border tw-border-white/10 tw-shadow-lg tw-hover:tw-shadow-purple-500/20 tw-transition-all tw-duration-300 tw-hover:tw-scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="tw-flex sm:tw-flex-row tw-flex-col tw-items-start">
                  <div className="tw-bg-purple-500/10 tw-p-3 tw-rounded-lg tw-mr-4">
                    <Quote className="tw-text-purple-300" size={24} />
                  </div>
                  <div className="tw-flex-1">
                    <h3 className="tw-text-xl tw-font-semibold tw-text-white tw-mb-2">
                      Request a Custom Quote
                    </h3>
                    <p className="tw-text-white/80">
                      Receive a plan crafted specifically for your practice's
                      requirements.
                    </p>
                  </div>
                </div>
                <motion.button
                  className="tw-mt-4 tw-w-full tw-bg-gradient-to-r tw-from-purple-500 tw-to-pink-500 tw-text-white tw-font-medium tw-py-3 tw-px-4 tw-rounded-lg tw-shadow-lg tw-shadow-purple-500/30 tw-flex tw-items-center tw-justify-center tw-gap-2 tw-group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Quote
                  <ArrowRight
                    className="tw-group-hover:tw-translate-x-1 tw-transition-transform"
                    size={18}
                  />
                </motion.button>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="tw-bg-gradient-to-r tw-from-blue-600/20 tw-to-indigo-600/20 tw-backdrop-blur-sm tw-rounded-xl tw-p-6 tw-border tw-border-white/10 tw-shadow-lg tw-hover:tw-shadow-blue-500/20 tw-transition-all tw-duration-300 tw-hover:tw-scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="tw-flex  sm:tw-flex-row tw-flex-col tw-items-start">
                  <div className="tw-bg-blue-500/10 tw-p-3 tw-rounded-lg tw-mr-4">
                    <Calendar className="tw-text-blue-300" size={24} />
                  </div>
                  <div className="tw-flex-1">
                    <h3 className="tw-text-xl tw-font-semibold tw-text-white tw-mb-2">
                      Schedule a Free Consultation
                    </h3>
                    <p className="tw-text-white/80">
                      Speak with one of our experts to learn more about our
                      services.
                    </p>
                  </div>
                </div>
                <motion.button
                  className="tw-mt-4 tw-w-full tw-bg-gradient-to-r tw-from-blue-500 tw-to-indigo-500 tw-text-white tw-font-medium tw-py-3 tw-px-4 tw-rounded-lg tw-shadow-lg tw-shadow-blue-500/30 tw-flex tw-items-center tw-justify-center tw-gap-2 tw-group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Now
                  <ArrowRight
                    className="tw-group-hover:tw-translate-x-1 tw-transition-transform"
                    size={18}
                  />
                </motion.button>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="tw-bg-gradient-to-r tw-from-green-600/20 tw-to-teal-600/20 tw-backdrop-blur-sm tw-rounded-xl tw-p-6 tw-border tw-border-white/10 tw-shadow-lg tw-hover:tw-shadow-green-500/20 tw-transition-all tw-duration-300 tw-hover:tw-scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="tw-flex  sm:tw-flex-row tw-flex-col tw-items-start">
                  <div className="tw-bg-green-500/10 tw-p-3 tw-rounded-lg tw-mr-4">
                    <ArrowRight className="tw-text-green-300" size={24} />
                  </div>
                  <div className="tw-flex-1">
                    <h3 className="tw-text-xl tw-font-semibold tw-text-white tw-mb-2">
                      Get Started Now
                    </h3>
                    <p className="tw-text-white/80">
                      Start streamlining your billing process today!
                    </p>
                  </div>
                </div>
                <motion.button
                  className="tw-mt-4 tw-w-full tw-bg-gradient-to-r tw-from-green-500 tw-to-teal-500 tw-text-white tw-font-medium tw-py-3 tw-px-4 tw-rounded-lg tw-shadow-lg tw-shadow-green-500/30 tw-flex tw-items-center tw-justify-center tw-gap-2 tw-group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  <ArrowRight
                    className="tw-group-hover:tw-translate-x-1 tw-transition-transform"
                    size={18}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
