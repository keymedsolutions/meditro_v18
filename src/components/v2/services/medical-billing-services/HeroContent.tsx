import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  DollarSign,
  Shield,
  Clock,
  Zap,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="tw-min-h-[90vh] tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-indigo-50 tw-py-12 tw-px-4">
      <div className="sm:tw-container tw-mx-auto">
        {/* Main content section */}
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="md:tw-text-5xl sm:tw-text-3xl tw-text-2xl tw-font-bold tw-font-serif tw-text-foreground">
                Boost Revenue Efficiency with a Reliable&nbsp;
                <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                  Medical Billing Company
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="sm:tw-text-xl tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
            >
              Revolutionize your practice’s efficiency with expert billing
              solutions. Our Medical Billing Company offers seamless,
              HIPAA-compliant services to maximise revenue and reduce
              administrative burdens, so you can focus on delivering exceptional
              patient care.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="sm:tw-text-xl tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
            >
              Experience higher reimbursements and faster claim approval today!
            </motion.div>
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4"
              >
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
                      Get a Free Consultation Now
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          {/* Right content - Enhanced animated cards */}

          <motion.div
            className="tw-space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* 1st card - Now styled like 3rd card */}
            <motion.div
              className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-6 border tw-border-gray-100 tw-overflow-hidden"
              initial={{ opacity: 0, x: -50, rotate: -1 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotate: 0,
                transition: { duration: 0.3 },
              }}
            >
              {/* Sliding accent bar */}
              <motion.div
                className="tw-absolute tw-left-0 tw-top-0 tw-w-1 tw-h-full tw-bg-gradient-to-b tw-from-blue-400 tw-to-indigo-500"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scaleY: 1.2 }}
              ></motion.div>

              <div className="tw-relative tw-z-10 tw-pl-4">
                <div className="tw-flex tw-items-start tw-justify-between">
                  <div className="tw-flex-1">
                    <p className="tw-text-gray-700 group-hover:tw-text-gray-800 tw-transition-colors tw-duration-500">
                      Navigating the financial side of healthcare can be
                      overwhelming for practices of any size, from solo
                      providers to large multispecialty clinics. That's where
                      partnering with a professional Medical Billing Company
                      like Key MedSolutions makes all the difference.
                    </p>
                  </div>
                  <ChevronRight className="tw-w-5 tw-h-5 tw-text-indigo-500 tw-flex-shrink-0 tw-ml-4 group-hover:tw-translate-x-1 tw-transition-transform" />
                </div>

                {/* Animated checkmarks */}
                <div className="tw-flex tw-flex-wrap tw-gap-3 tw-mt-4">
                  {["Trusted", "Professional", "Nationwide"].map(
                    (item, index) => (
                      <motion.div
                        key={index}
                        className="tw-inline-flex tw-items-center tw-bg-indigo-50 tw-text-indigo-700 tw-text-xs tw-font-medium tw-px-2 tw-py-1 tw-rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <CheckCircle className="tw-w-3 tw-h-3 tw-mr-1" />
                        {item}
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* 2nd card - Premium card with glowing effect (unchanged) */}
            <motion.div
              className="tw-group tw-relative tw-bg-gradient-to-br tw-from-blue-600 tw-via-blue-700 tw-to-indigo-800 tw-rounded-2xl tw-shadow-xl tw-p-6 tw-overflow-hidden"
              initial={{ opacity: 0, x: 50, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotate: 0,
                transition: { duration: 0.3 },
              }}
            >
              {/* Subtle pattern overlay */}
              <div className="tw-absolute tw-inset-0 tw-bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')] tw-opacity-20"></div>

              {/* Glow effect */}
              <div className="tw-absolute tw-inset-0 tw-bg-blue-500/10 group-hover:tw-bg-blue-500/20 tw-rounded-2xl tw-transition-all tw-duration-500"></div>

              <div className="tw-relative tw-z-10">
                <div className="tw-flex tw-items-start tw-justify-between">
                  <div className="tw-flex-1">
                    <p className="tw-text-white">
                      Serving as a leading medical billing agency in the USA, we
                      are dedicated to providing seamless, accurate, and fully
                      HIPAA-compliant billing solutions that help your
                      organization reduce denials, cut overhead costs, and
                      maximize revenue.
                    </p>
                  </div>
                  <Shield className="tw-w-6 tw-h-6 tw-text-blue-200 tw-flex-shrink-0 tw-ml-4 group-hover:tw-scale-110 tw-transition-transform" />
                </div>

                {/* Animated dots */}
                <div className="tw-flex tw-gap-2 tw-mt-4">
                  {[1, 2, 3].map((dot) => (
                    <motion.div
                      key={dot}
                      className="tw-w-2 tw-h-2 tw-bg-blue-300 tw-rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: dot * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.4 }}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 3rd card - Modern card with sliding accent (unchanged) */}
            <motion.div
              className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-6 border tw-border-gray-100 tw-overflow-hidden"
              initial={{ opacity: 0, x: -50, rotate: -1 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotate: 0,
                transition: { duration: 0.3 },
              }}
            >
              {/* Sliding accent bar */}
              <motion.div
                className="tw-absolute tw-left-0 tw-top-0 tw-w-1 tw-h-full tw-bg-gradient-to-b tw-from-blue-400 tw-to-indigo-500"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scaleY: 1.2 }}
              ></motion.div>

              <div className="tw-relative tw-z-10 tw-pl-4">
                <div className="tw-flex tw-items-start tw-justify-between">
                  <div className="tw-flex-1">
                    <p className="tw-text-gray-700 group-hover:tw-text-gray-800 tw-transition-colors tw-duration-500">
                      Whether you need Medical Billing Consulting Services or
                      are searching for a trusted medical billing company near
                      me, our tailored, scalable services are designed to fit
                      the unique needs of healthcare providers across the
                      country.
                    </p>
                  </div>
                  <ChevronRight className="tw-w-5 tw-h-5 tw-text-indigo-500 tw-flex-shrink-0 tw-ml-4 group-hover:tw-translate-x-1 tw-transition-transform" />
                </div>

                {/* Animated checkmarks */}
                <div className="tw-flex tw-flex-wrap tw-gap-3 tw-mt-4">
                  {["Tailored", "Scalable", "Nationwide"].map((item, index) => (
                    <motion.div
                      key={index}
                      className="tw-inline-flex tw-items-center tw-bg-indigo-50 tw-text-indigo-700 tw-text-xs tw-font-medium tw-px-2 tw-py-1 tw-rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <CheckCircle className="tw-w-3 tw-h-3 tw-mr-1" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
