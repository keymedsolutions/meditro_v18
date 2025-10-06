// components/RevenueCycleManagement.js
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Zap,
  ArrowRight,
  DollarSign,
  Clock,
  Shield,
  CheckCircle,
  BarChart3,
  FileText,
  Users,
  Target,
} from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import React from "react";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";

const HeroSection = () => {
  return (
    <React.Fragment>
      <div className="tw-relative tw-min-h-[90vh] tw-flex tw-items-center tw-justify-center tw-py-12 sm:tw-py-0 tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-overflow-hidden">
        {/* Background elements with infinite animations */}
        <motion.div
          className="tw-absolute tw-w-80 tw-h-80 tw-rounded-full tw-bg-gradient-to-r tw-from-blue-400/20 tw-to-purple-400/20 tw-blur-xl"
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="tw-absolute tw-w-64 tw-h-64 tw-bg-gradient-to-r tw-from-green-400/20 tw-to-teal-400/20 tw-blur-xl tw-rounded-lg -tw-rotate-45"
          animate={{
            x: [0, 30, 0],
            rotate: [-45, -40, -45],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="tw-absolute tw-w-72 tw-h-72 tw-bg-gradient-to-r tw-from-amber-400/15 tw-to-orange-400/15 tw-blur-xl tw-rounded-full tw-bottom-40 tw-right-40"
          animate={{
            y: [0, -35, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="sm:tw-container tw-mx-auto tw-relative tw-z-10">
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
            {/* Left Content */}
            <motion.div
              className="lg:tw-pt-0 tw-pt-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h1 className="md:tw-text-5xl sm:tw-text-3xl tw-text-2xl tw-font-bold tw-font-serif tw-text-foreground">
                  Expert&nbsp;
                  <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                    Revenue Cycle Management Services
                  </span>
                  &nbsp;for Healthcare Excellence
                </h1>
              </motion.div>
              <motion.p
                className="tw-text-lg tw-text-gray-700 tw-mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Supercharge your revenue, streamline every workflow, and ensure
                airtight compliance, all with our industry-leading Revenue Cycle
                Management Services. See a drop in denials, quicker payments,
                and gain more time to focus on quality patient care.
              </motion.p>
              <Link href={APP_PATH.contactus.path}>
                <motion.button
                  type="button"
                  className="button-get-started"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
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
                    <Zap className="tw-mr-2" size={20} />
                    Request Your Free Consultation
                    <ArrowRight
                      className="tw-ml-2 group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300"
                      size={16}
                    />
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Right Image */}
            <div className="sm:tw-max-w-[80%] tw-mx-auto tw-pb-10">
              <motion.div
                className="tw-relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="tw-absolute tw--top-6 tw--right-6 tw-w-48 tw-h-48 tw-bg-blue-500/10 tw-rounded-full tw-animate-pulse-slow"></div>
                <div className="tw-absolute tw--bottom-6 tw--left-6 tw-w-40 tw-h-40 tw-bg-purple-500/10 tw-rounded-full tw-animate-pulse-slow tw-animate-delay-1000"></div>

                <div className="tw-relative tw-bg-gradient-to-br tw-from-blue-100 tw-to-purple-100 tw-rounded-2xl tw-p-6 tw-shadow-xl tw-border tw-border-white/20">
                  <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-600/5 tw-to-purple-600/5 tw-rounded-2xl"></div>

                  <motion.div
                    className="tw-relative tw-rounded-xl tw-overflow-hidden tw-shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src="/images/revenue-cycle-management-services.png"
                      alt="Revenue Cycle Management Services"
                      width={600}
                      height={500}
                      className="tw-w-full tw-h-auto tw-object-cover"
                    />
                  </motion.div>

                  <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-mt-6">
                    <motion.div
                      className="tw-bg-white tw-p-3 tw-rounded-lg tw-shadow-md tw-text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={{ y: -5 }}
                    >
                      <DollarSign
                        className="tw-text-green-500 tw-mx-auto tw-mb-2"
                        size={24}
                      />
                      <p className="tw-text-sm tw-font-medium tw-text-gray-700">
                        Increased Revenue
                      </p>
                    </motion.div>

                    <motion.div
                      className="tw-bg-white tw-p-3 tw-rounded-lg tw-shadow-md tw-text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={{ y: -5 }}
                    >
                      <Clock
                        className="tw-text-blue-500 tw-mx-auto tw-mb-2"
                        size={24}
                      />
                      <p className="tw-text-sm tw-font-medium tw-text-gray-700">
                        Faster Payments
                      </p>
                    </motion.div>

                    <motion.div
                      className="tw-bg-white tw-p-3 tw-rounded-lg tw-shadow-md tw-text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={{ y: -5 }}
                    >
                      <Shield
                        className="tw-text-purple-500 tw-mx-auto tw-mb-2"
                        size={24}
                      />
                      <p className="tw-text-sm tw-font-medium tw-text-gray-700">
                        Better Compliance
                      </p>
                    </motion.div>

                    <motion.div
                      className="tw-bg-white tw-p-3 tw-rounded-lg tw-shadow-md tw-text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={{ y: -5 }}
                    >
                      <BarChart3
                        className="tw-text-amber-500 tw-mx-auto tw-mb-2"
                        size={24}
                      />
                      <p className="tw-text-sm tw-font-medium tw-text-gray-700">
                        Reduced Denials
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Floating elements with infinite animations */}
                <motion.div
                  className="tw-absolute tw--top-4 tw--right-4 tw-w-8 tw-h-8 tw-bg-blue-500/40 tw-rounded-full"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="tw-absolute tw--bottom-4 tw--left-4 tw-w-6 tw-h-6 tw-bg-purple-500/40 tw-rounded-lg"
                  animate={{
                    x: [0, 15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-container !tw-py-10 md:tw-py-0">
        <motion.p
          className="tw-text-lg tw-text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Managing the financial operations of a healthcare organization is a
          challenging endeavor. At the core of maintaining a thriving practice
          is ensuring smooth billing processes, timely reimbursements, and
          efficient administrative workflows. Revenue Cycle Management Services
          are designed to streamline these processes, enabling healthcare
          providers to focus on delivering unparalleled patient care. Whether
          you are seeking to optimize operations or reduce the burden of
          billing, our comprehensive services offer the perfect solution.
        </motion.p>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
