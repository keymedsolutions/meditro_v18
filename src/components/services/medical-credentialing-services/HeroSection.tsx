"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  ArrowRight,
  FileText,
  Shield,
  Users,
  Clock,
  Zap,
} from "lucide-react";

const HeroSection = () => {
  return (
    <div className="tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-indigo-50 tw-relative tw-overflow-hidden">
      {/* Decorative elements */}
      <div className="tw-absolute tw-top-0 tw-right-0 tw-w-64 tw-h-64 tw-bg-blue-200 tw-rounded-full tw-opacity-20 tw-blur-3xl tw--translate-y-1/2 tw-translate-x-1/2"></div>
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-80 tw-h-80 tw-bg-indigo-200 tw-rounded-full tw-opacity-20 tw-blur-3xl tw-translate-y-1/2 tw--translate-x-1/2"></div>

      <div className="tw-container tw-mx-auto tw-relative">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-gray-800"
            >
              Medical Credentialing Services:{" "}
              <span className="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-blue-600 tw-to-indigo-600">
                Simplify Credentialing. Maximize Revenue.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-text-xl tw-text-gray-600 tw-font-medium"
            >
              Partner with Key MedSolutions for fast, reliable, and stress-free
              medical credentialing services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-prose tw-prose-lg tw-text-gray-600"
            >
              <p>
                At Key MedSolutions, we specialize in providing medical
                credentialing services that simplify the complex process of
                enrolling physicians and medical providers with insurance
                networks and payers. As a trusted physician credentialing
                company, we ensure that your practice is properly recognized by
                insurance providers, enabling you to focus on delivering
                exceptional patient care while we handle the administrative
                burden
              </p>
            </motion.div>

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
                Get Credentialed Today!
                <ArrowRight className="tw-w-5 tw-h-5 group-hover:tw-translate-x-1 tw-transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative"
          >
            <div className="tw-relative tw-w-full tw-h-96 lg:tw-h-[500px] tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
              <Image
                src="/images/medical-credentialing-services.png" // Replace with your actual image path
                alt="Medical Credentialing Services"
                fill
                className="tw-object-cover"
              />

              {/* Overlay gradient */}
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-blue-900/20 tw-to-transparent"></div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="tw-absolute tw-top-6 tw-right-6 tw-w-16 tw-h-16 tw-bg-white tw-rounded-xl tw-shadow-lg tw-flex tw-items-center tw-justify-center"
              >
                <CheckCircle className="tw-w-8 tw-h-8 tw-text-green-500" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="tw-absolute tw-bottom-6 tw-left-6 tw-w-14 tw-h-14 tw-bg-white tw-rounded-xl tw-shadow-lg tw-flex tw-items-center tw-justify-center"
              >
                <Shield className="tw-w-7 tw-h-7 tw-text-blue-500" />
              </motion.div>
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, rotate: -45 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="tw-absolute tw--bottom-4 tw--right-4 tw-w-24 tw-h-24 tw-bg-gradient-to-r tw-from-blue-500 tw-to-indigo-500 tw-rounded-2xl tw-opacity-10 tw-z-0"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
