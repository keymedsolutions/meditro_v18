import { motion } from "framer-motion";
import {
  Award,
  Shield,
  BarChart3,
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

const KeyMedSolutionsPartner = () => {
  return (
    <div className="tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-indigo-50 tw-relative tw-overflow-hidden">
      {/* Background decorative elements */}
      <div className="tw-absolute tw--top-24 tw--right-24 tw-w-72 tw-h-72 tw-bg-blue-200/20 tw-rounded-full tw-blur-3xl"></div>
      <div className="tw-absolute tw--bottom-24 tw--left-24 tw-w-72 tw-h-72 tw-bg-indigo-200/20 tw-rounded-full tw-blur-3xl"></div>

      <div className="tw-container tw-mx-auto tw-relative tw-z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center  tw-pt-4"
        >
          <motion.div
            className="tw-text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
              Why&nbsp;
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Key MedSolutions
              </span>
              <br />
              is Your Preferred Medical Billing Partner
            </h2>
          </motion.div>
        </motion.div>
        {/* Benefits Grid */}
        <motion.div
          className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Benefit 1 */}
          <motion.div
            className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border tw-border-gray-100 tw-overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-50 tw-to-indigo-50 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"></div>
            <div className="tw-absolute tw--right-4 tw--top-4 tw-w-24 tw-h-24 tw-bg-blue-500/5 tw-rounded-full"></div>
            <div className="tw-relative tw-z-10">
              <div className="tw-w-14 tw-h-14 tw-bg-blue-100 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4">
                <Award className="tw-w-7 tw-h-7 tw-text-blue-600" />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                Trusted Expertise
              </h3>
              <p className="tw-text-gray-600">
                Decades of experience in Medical Billing Consulting Services for
                diverse specialties.
              </p>
            </div>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div
            className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border tw-border-gray-100 tw-overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-green-50 tw-to-emerald-50 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"></div>
            <div className="tw-absolute tw--right-4 tw--top-4 tw-w-24 tw-h-24 tw-bg-green-500/5 tw-rounded-full"></div>
            <div className="tw-relative tw-z-10">
              <div className="tw-w-14 tw-h-14 tw-bg-green-100 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4">
                <Shield className="tw-w-7 tw-h-7 tw-text-green-600" />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                HIPAA-Compliant Security
              </h3>
              <p className="tw-text-gray-600">
                We treat your data with industry-leading privacy and security
                controls.
              </p>
            </div>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div
            className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border tw-border-gray-100 tw-overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-amber-50 tw-to-orange-50 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"></div>
            <div className="tw-absolute tw--right-4 tw--top-4 tw-w-24 tw-h-24 tw-bg-amber-500/5 tw-rounded-full"></div>
            <div className="tw-relative tw-z-10">
              <div className="tw-w-14 tw-h-14 tw-bg-amber-100 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4">
                <MapPin className="tw-w-7 tw-h-7 tw-text-amber-600" />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                Flexible & Scalable
              </h3>
              <p className="tw-text-gray-600">
                Customizable solutions for solo providers, clinics, and
                enterprise healthcare networks.
              </p>
            </div>
          </motion.div>

          {/* Benefit 4 */}
          <motion.div
            className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border tw-border-gray-100 tw-overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-purple-50 tw-to-pink-50 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"></div>
            <div className="tw-absolute tw--right-4 tw--top-4 tw-w-24 tw-h-24 tw-bg-purple-500/5 tw-rounded-full"></div>
            <div className="tw-relative tw-z-10">
              <div className="tw-w-14 tw-h-14 tw-bg-purple-100 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4">
                <BarChart3 className="tw-w-7 tw-h-7 tw-text-purple-600" />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                Real-Time Transparency
              </h3>
              <p className="tw-text-gray-600">
                Instant access to analytics, claims status, and cash flow
                metrics via secure dashboards.
              </p>
            </div>
          </motion.div>

          {/* Benefit 5 */}
          <motion.div
            className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border tw-border-gray-100 tw-overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-red-50 tw-to-rose-50 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"></div>
            <div className="tw-absolute tw--right-4 tw--top-4 tw-w-24 tw-h-24 tw-bg-red-500/5 tw-rounded-full"></div>
            <div className="tw-relative tw-z-10">
              <div className="tw-w-14 tw-h-14 tw-bg-red-100 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4">
                <MapPin className="tw-w-7 tw-h-7 tw-text-red-600" />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                Nationwide Reach
              </h3>
              <p className="tw-text-gray-600">
                As a top medical billing company near me, we support practices
                everywhere in the USA.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyMedSolutionsPartner;
