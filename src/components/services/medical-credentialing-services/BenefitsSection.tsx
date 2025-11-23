"use client"
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  Phone,
  Mail,
} from "lucide-react";

const BenefitsSection = () => {
  return (
    <div className="tw-min-h-screen tw-bg-accent-500 tw-py-16 tw-px-4">
      <div className="tw-container tw-mx-auto">
        {/* Header Section */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-20 tw-pt-20"
        >
          <motion.div
            className="tw-text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-white tw-mb-10">
              The Benefits of&nbsp;
              <span className="tw-bg-accentOrange-500 tw-bg-clip-text tw-text-transparent">
                Professional
                <br />
                Credentialing
              </span>
              &nbsp; Services
            </h2>
          </motion.div>
          <p className="tw-text-lg tw-text-gray-200 tw-max-w-3xl tw-mx-auto tw-font-serif">
            Outsourcing your credentialing needs to a professional physician
            credentialing company like KMS offers numerous benefits
          </p>
        </motion.div>
        {/* Benefits Grid */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8 tw-mb-16">
          {/* Time Savings Card */}
          <motion.div
            className="tw-group tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-relative tw-overflow-hidden tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw-translate-y-[-5px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tw-absolute tw-top-0 tw-right-0 tw-w-32 tw-h-32 tw-bg-blue-100 tw-rounded-bl-full tw-transition-all tw-duration-300 group-hover:tw-bg-blue-200"></div>
            <div className="tw-relative tw-z-10">
              <div className="tw-w-14 tw-h-14 tw-bg-blue-500 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mb-4">
                <Clock className="tw-text-white" size={28} />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                Time Savings
              </h3>
              <p className="tw-text-gray-600">
                Free up your staff to focus on patient care instead of
                administrative tasks.
              </p>
            </div>
          </motion.div>

          {/* Improved Cash Flow Card */}
          <motion.div
            className="tw-group tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-relative tw-overflow-hidden tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw-translate-y-[-5px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tw-absolute tw-top-0 tw-right-0 tw-w-32 tw-h-32 tw-bg-green-100 tw-rounded-bl-full tw-transition-all tw-duration-300 group-hover:tw-bg-green-200"></div>
            <div className="tw-relative tw-z-10">
              <div className="tw-w-14 tw-h-14 tw-bg-green-500 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mb-4">
                <TrendingUp className="tw-text-white" size={28} />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                Improved Cash Flow
              </h3>
              <p className="tw-text-gray-600">
                Ensure timely payments by avoiding credentialing delays and
                errors.
              </p>
            </div>
          </motion.div>

          {/* Stay Compliant Card */}
          <motion.div
            className="tw-group tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-relative tw-overflow-hidden tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw-translate-y-[-5px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tw-absolute tw-top-0 tw-right-0 tw-w-32 tw-h-32 tw-bg-purple-100 tw-rounded-bl-full tw-transition-all tw-duration-300 group-hover:tw-bg-purple-200"></div>
            <div className="tw-relative tw-z-10">
              <div className="tw-w-14 tw-h-14 tw-bg-purple-500 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mb-4">
                <Shield className="tw-text-white" size={28} />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                Stay Compliant
              </h3>
              <p className="tw-text-gray-600">
                Navigate changing regulations and payer requirements with
                confidence and ease.
              </p>
            </div>
          </motion.div>

          {/* Revenue Maximization Card */}
          <motion.div
            className="tw-group tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-relative tw-overflow-hidden tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw-translate-y-[-5px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tw-absolute tw-top-0 tw-right-0 tw-w-32 tw-h-32 tw-bg-amber-100 tw-rounded-bl-full tw-transition-all tw-duration-300 group-hover:tw-bg-amber-200"></div>
            <div className="tw-relative tw-z-10">
              <div className="tw-w-14 tw-h-14 tw-bg-amber-500 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mb-4">
                <CheckCircle className="tw-text-white" size={28} />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                Revenue Maximization
              </h3>
              <p className="tw-text-gray-600">
                Capture every billing opportunity by ensuring all team members
                are properly credentialed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
