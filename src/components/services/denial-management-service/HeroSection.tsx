import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import {
  DollarSign,
  Shield,
  TrendingUp,
  ArrowRight,
  Zap,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="tw-min-h-screen tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-accent-100 tw-via-white tw-to-accent-100/50 tw-relative tw-overflow-hidden">
      {/* Background decorative elements */}
      <div className="tw-absolute tw-top-10 tw-left-10 tw-w-64 tw-h-64 tw-bg-accent-200 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-40"></div>
      <div className="tw-absolute tw-bottom-10 tw-right-10 tw-w-80 tw-h-80 tw-bg-accent-300 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-30"></div>

      <div className="tw-container tw-mx-auto tw-relative tw-z-10">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
          {/* Left Content */}
          <motion.div
            className="tw-space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="tw-text-5xl md:tw-text-6xl tw-font-bold tw-text-gray-800">
              Turn Denials into{" "}
              <span className="tw-bg-gradient-to-r tw-from-accent-500 tw-to-accent-600 tw-bg-clip-text tw-text-transparent">
                Dollars.
              </span>
            </h1>

            <p className="tw-text-xl tw-text-gray-600">
              Trust Key MedSolutions to simplify denial management, recover lost
              revenue, and ensure your practice thrives.
            </p>

            <div className="tw-space-y-4">
              <div className="tw-flex tw-items-center tw-gap-3">
                <div className="tw-w-8 tw-h-8 tw-bg-accent-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-accent-600">
                  <CheckCircle className="tw-w-4 tw-h-4" />
                </div>
                <span className="tw-text-gray-700">
                  Streamline denial resolution
                </span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-3">
                <div className="tw-w-8 tw-h-8 tw-bg-accent-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-accent-600">
                  <CheckCircle className="tw-w-4 tw-h-4" />
                </div>
                <span className="tw-text-gray-700">Reduce revenue loss</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-3">
                <div className="tw-w-8 tw-h-8 tw-bg-accent-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-accent-600">
                  <CheckCircle className="tw-w-4 tw-h-4" />
                </div>
                <span className="tw-text-gray-700">
                  Optimize your revenue cycle
                </span>
              </div>
            </div>

            <Link href={APP_PATH.contactus.path} >
              <motion.button
                type="button"
                className="button-get-started tw-mt-4"
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
                  Resolve Your Denials Today!
                  <ArrowRight className="tw-w-5 tw-h-5 group-hover:tw-translate-x-1 tw-transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Image with Animation */}
          <motion.div
            className="tw-relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tw-relative tw-w-full tw-h-96 md:tw-h-[500px]">
              {/* Main Image Container */}
              <motion.div
                className="tw-absolute tw-inset-0 tw-bg-white tw-rounded-3xl tw-shadow-2xl tw-overflow-hidden tw-border-8 tw-border-white"
                initial={{ scale: 0.9, rotate: -2 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="tw-w-full tw-h-full tw-relative">
                  <Image
                    src="/images/denial-management-service.webp"
                    alt="Denial Management Services by Key MedSolutions"
                    fill
                    className="tw-object-cover"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-accent-600/20 tw-to-accent-400/10"></div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="tw-absolute tw-top-4 tw--left-4 tw-w-24 tw-h-24 tw-bg-accent-500 tw-rounded-2xl tw-shadow-lg tw-flex tw-items-center tw-justify-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Shield className="tw-w-10 tw-h-10 tw-text-white" />
              </motion.div>

              <motion.div
                className="tw-absolute tw-bottom-8 tw--right-4 tw-w-20 tw-h-20 tw-bg-accent-600 tw-rounded-2xl tw-shadow-lg tw-flex tw-items-center tw-justify-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <TrendingUp className="tw-w-8 tw-h-8 tw-text-white" />
              </motion.div>

              <motion.div
                className="tw-absolute tw-top-1/2 tw--right-6 tw-w-16 tw-h-16 tw-bg-accentOrange-500 tw-rounded-xl tw-shadow-lg tw-flex tw-items-center tw-justify-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <CheckCircle className="tw-w-6 tw-h-6 tw-text-white" />
              </motion.div>
            </div>

            {/* Background Decorative Element */}
            <div className="tw-absolute tw--z-10 tw-top-8 tw-left-8 tw-w-full tw-h-full tw-bg-gradient-to-r tw-from-accent-200 tw-to-accent-300 tw-rounded-3xl tw-shadow-md"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
