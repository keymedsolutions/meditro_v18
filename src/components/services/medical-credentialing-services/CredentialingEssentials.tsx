import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Shield, FileCheck, Clock, DollarSign } from 'lucide-react';
import Image from 'next/image';

const CredentialingEssentials = () => {
  return (
    <div className="tw-min-h-screen tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-indigo-50">
      <div className="tw-container tw-mx-auto">
        {/* Header Section */}
        <motion.div 
          className="tw-text-center tw-mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 
            className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-gray-800 tw-mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Why Are Medical Credentialing Services Essential?
          </motion.h1>
          <motion.div 
            className="tw-h-1 tw-w-20 tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-500 tw-mx-auto tw-rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          />
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p 
              className="tw-text-lg tw-text-gray-700 tw-mb-8 tw-leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Credentialing is an essential step for every healthcare provider to ensure trust and compliance. It ensures that physicians, nurse practitioners, and other medical professionals are verified and approved by insurance companies to provide services to patients. Without proper medical provider credentialing services in the USA, practices risk delays in payments, reduced revenue, and even the inability to bill for services rendered.
            </motion.p>
            
            <motion.p 
              className="tw-text-lg tw-text-gray-700 tw-mb-10 tw-leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              At Key MedSolutions, we understand the challenges healthcare providers face when navigating the credentialing process. That's why we offer comprehensive physician credentialing services in the USA designed to save you time, reduce stress, and maximize your revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <button className="tw-group tw-relative tw-inline-flex tw-items-center tw-justify-center tw-px-8 tw-py-4 tw-overflow-hidden tw-font-medium tw-text-white tw-transition-all tw-duration-300 tw-ease-out tw-rounded-full tw-shadow-lg tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600 hover:tw-from-blue-700 hover:tw-to-purple-700">
                <span className="tw-absolute tw-inset-0 tw-rounded-full tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-500 tw-shadow-lg tw-animate-pulse"></span>
                <span className="tw-absolute tw-bottom-0 tw-right-0 tw-block tw-w-64 tw-h-64 tw-mb-32 tw-mr-4 tw-transition tw-duration-500 tw-origin-bottom-left tw-transform tw-rotate-45 tw-translate-x-24 tw-bg-blue-300 tw-rounded-full tw-opacity-30 tw-group-hover:tw-rotate-90 tw-ease"></span>
                <span className="tw-relative tw-flex tw-items-center">
                  Get Started Now <ArrowRight className="tw-ml-2 tw-transition-transform tw-duration-300 group-hover:tw-translate-x-1" size={20} />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-lg tw-border tw-border-gray-100 hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-group"
            >
              <div className="tw-w-14 tw-h-14 tw-bg-blue-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mb-4 group-hover:tw-bg-blue-200 tw-transition-colors tw-duration-300">
                <Shield className="tw-text-blue-600" size={28} />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">Compliance & Trust</h3>
              <p className="tw-text-gray-600">Ensure regulatory compliance and build trust with patients and insurers.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-lg tw-border tw-border-gray-100 hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-group"
            >
              <div className="tw-w-14 tw-h-14 tw-bg-green-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mb-4 group-hover:tw-bg-green-200 tw-transition-colors tw-duration-300">
                <FileCheck className="tw-text-green-600" size={28} />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">Verification</h3>
              <p className="tw-text-gray-600">Thorough verification process for all medical professionals.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-lg tw-border tw-border-gray-100 hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-group"
            >
              <div className="tw-w-14 tw-h-14 tw-bg-purple-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mb-4 group-hover:tw-bg-purple-200 tw-transition-colors tw-duration-300">
                <Clock className="tw-text-purple-600" size={28} />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">Time Saving</h3>
              <p className="tw-text-gray-600">Streamlined process that saves valuable time for healthcare providers.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-lg tw-border tw-border-gray-100 hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-group"
            >
              <div className="tw-w-14 tw-h-14 tw-bg-amber-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mb-4 group-hover:tw-bg-amber-200 tw-transition-colors tw-duration-300">
                <DollarSign className="tw-text-amber-600" size={28} />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">Revenue Maximization</h3>
              <p className="tw-text-gray-600">Prevent payment delays and maximize your practice's revenue potential.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonial/Stats Section */}
        <motion.div 
          className="tw-mt-20 tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="tw-bg-gradient-to-br tw-from-blue-500 tw-to-purple-600 tw-rounded-2xl tw-p-6 tw-text-white tw-shadow-xl tw-text-center">
            <h3 className="tw-text-4xl tw-font-bold tw-mb-2">98%</h3>
            <p className="tw-text-blue-100">Success Rate</p>
          </div>
          
          <div className="tw-bg-gradient-to-br tw-from-purple-500 tw-to-pink-600 tw-rounded-2xl tw-p-6 tw-text-white tw-shadow-xl tw-text-center">
            <h3 className="tw-text-4xl tw-font-bold tw-mb-2">500+</h3>
            <p className="tw-text-purple-100">Providers Served</p>
          </div>
          
          <div className="tw-bg-gradient-to-br tw-from-pink-500 tw-to-red-600 tw-rounded-2xl tw-p-6 tw-text-white tw-shadow-xl tw-text-center">
            <h3 className="tw-text-4xl tw-font-bold tw-mb-2">30 Days</h3>
            <p className="tw-text-pink-100">Average Processing Time</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CredentialingEssentials;