import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  FileCheck,
  Heart,
  Shield,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="tw-text-black tw-relative tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-py-16 tw-px-4">
      {/* Animated background elements */}
      <motion.div
        className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-bg-blue-700 tw-rounded-full tw-opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="tw-absolute tw-bottom-1/3 tw-right-1/3 tw-w-48 tw-h-48 tw-bg-indigo-600 tw-rounded-lg tw-opacity-15 tw-rotate-45"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="tw-absolute tw-top-1/3 tw-right-1/4 tw-w-32 tw-h-32 tw-bg-cyan-400 tw-rounded-full tw-opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="tw-container tw-mx-auto tw-max-w-5xl tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center"
        >
          <motion.h1
            className="tw-text-4xl md:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-text-black tw-mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Discover Our Specialties —&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Key MedSolutions
            </span>
          </motion.h1>

          <motion.p
            className="tw-text-lg tw-text-gray-500 tw-max-w-3xl tw-mx-auto tw-leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            As an advanced medical billing company, Key MedSolutions understands
            that today's healthcare practices need more than clinical expertise,
            they require robust medical billing solutions and revenue cycle
            management (RCM) tailored to their specialty.
          </motion.p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-bg-white tw-backdrop-blur-sm tw-rounded-2xl tw-p-4 border tw-border-white/10 tw-shadow-xl"
          >
            <p className="tw-text-gray-500 tw-text-lg tw-leading-relaxed">
              That's why we deliver industry-leading services designed to
              maximize your financial performance while letting you focus on
              outstanding patient care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-bg-white tw-backdrop-blur-sm tw-rounded-2xl tw-p-4 border tw-border-white/10 tw-shadow-xl"
          >
            <p className="tw-text-gray-500 tw-text-lg tw-leading-relaxed">
              Our promise: Maximize your revenue, reduce your administrative
              burden, and ensure your practice remains 100% compliant—every step
              of the way.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center"
        >
          <p className="tw-text-gray-500 tw-text-lg tw-mb-8">
            From small clinics to large multispecialty groups, we're your
            partner in navigating the landscape of medical billing specialties
            in US healthcare, safeguarding your financial health so you can
            provide exceptional service.
          </p>

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
                Get Started
                <ArrowRight className="tw-w-5 tw-h-5 group-hover:tw-translate-x-1 tw-transition-transform" />
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Animated icon elements */}
        <div className="tw-flex tw-justify-center tw-gap-16 tw-mt-16">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <DollarSign className="tw-w-10 tw-h-10 tw-text-cyan-300" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <FileCheck className="tw-w-10 tw-h-10 tw-text-blue-300" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Shield className="tw-w-10 tw-h-10 tw-text-indigo-300" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <TrendingUp className="tw-w-10 tw-h-10 tw-text-cyan-300" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <Heart className="tw-w-10 tw-h-10 tw-text-blue-300" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
