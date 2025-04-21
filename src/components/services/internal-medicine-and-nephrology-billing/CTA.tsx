/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { useState } from 'react';

const CTA = () => {
  const [hovered, setHovered] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="tw-relative tw-py-20 tw-bg-gradient-to-b tw-from-medical-light tw-to-white tw-overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="tw-absolute tw-inset-0 tw-pointer-events-none">
        <div className="tw-w-64 tw-h-64 tw-bg-medical-blue/10 tw-rounded-full tw-blur-3xl tw-animate-pulse tw-left-1/2 tw-transform tw--translate-x-1/2 tw-top-1/4" />
        <div className="tw-w-48 tw-h-48 tw-bg-medical-green/10 tw-rounded-full tw-blur-2xl tw-animate-pulse tw-right-1/4 tw-top-1/3" />
      </div>

      <div className="tw-container tw-mx-auto tw-px-4">
        <motion.div
          variants={container}
          className="tw-text-center tw-relative"
        >
          <motion.div variants={item} className="tw-mb-8">
            <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-medical-navy tw-relative">
              Ready to Transform Your Medical Billing?
              <span className="tw-block tw-text-medical-blue tw-font-extrabold tw-mt-2">
                Let's Get Started Today!
              </span>
            </h2>
          </motion.div>

          <motion.div variants={item} className="tw-mb-12">
            <p className="tw-text-lg tw-text-medical-darkGray tw-px-4 md:tw-px-0 tw-max-w-3xl tw-mx-auto">
              Our expert team is ready to help you streamline your medical billing processes and maximize your revenue.
              Get started with a free consultation today.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="tw-relative tw-mx-auto tw-max-w-md"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="tw-relative tw-group tw-w-full tw-flex tw-items-center tw-justify-center tw-px-8 tw-py-4 tw-rounded-lg tw-bg-gradient-to-r tw-from-medical-blue tw-to-medical-green tw-text-white tw-font-semibold tw-transition-all tw-duration-300 tw-transform tw-shadow-lg tw-hover:tw-shadow-xl tw-active:tw-scale-95"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span className="tw-relative tw-z-10">Schedule Free Consultation</span>
              <div
                className={`tw-absolute tw-inset-0 tw-bg-white/10 tw-rounded-lg ${hovered ? 'tw-animate-pulse' : ''}`}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Wave */}
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-h-20 tw-bg-white tw-pb-4">
        <svg
          className="tw-w-full tw-h-full"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 L50 10 L100 0 Z"
            fill="#000"
            fillOpacity="0.05"
          />
        </svg>
      </div>
    </motion.section>
  );
};

export default CTA;
