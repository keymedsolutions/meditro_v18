/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import FloatingElements from './FloatingElements';
import { Input } from '@/ui/input';
import { Button } from '@/ui/button';

const Hero = () => {
  return (
    <section
      style={{ background: "url('/images/background/bg.webp')" }}
      className="tw-relative tw-pt-24 md:tw-pt-28 lg:tw-pt-20 tw-pb-16 md:tw-pb-20 tw-bg-gradient-to-br tw-from-medical-gray tw-to-white tw-overflow-hidden"
    >
      <FloatingElements />

      <div className="tw-absolute tw-top-0 tw-right-0 tw-w-1/2 md:tw-w-1/3 tw-h-full tw-bg-medical-lightTeal tw-opacity-30 tw-rounded-bl-[100px]" />
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-1/2 md:tw-w-1/4 tw-h-2/3 tw-bg-medical-lightBlue tw-opacity-10 tw-rounded-tr-[100px]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="tw-container tw-mx-auto tw-px-4 md:tw-px-6 tw-relative tw-z-10"
      >
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-10 md:tw-gap-12 tw-items-center">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="tw-bg-primary-100 tw-text-primary-700 tw-text-xs sm:tw-text-sm tw-font-medium tw-px-4 tw-py-1.5 tw-rounded-md tw-inline-block tw-mb-4 sm:tw-mb-6"
            >
              Expert Medical Billing Services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-medical-navy tw-leading-tight tw-mb-4 sm:tw-mb-6"
            >
              <span className="tw-relative tw-inline-block">
                Expert
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="tw-absolute -tw-bottom-2 tw-left-0 tw-h-1 tw-bg-medical-blue/40 tw-rounded-full"
                />
              </span>{' '}
              Internal Medicine & <span className="tw-text-primary-600">Nephrology Billing Services</span>
            </motion.h1>

            <div className="tw-space-y-4 tw-mb-6 sm:tw-mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
              >
                <p className="tw-text-sm sm:tw-text-base md:tw-text-lg tw-text-slate-700 tw-text-justify">
                  At Key MedSolutions, we offer internal medicine and nephrology billing services in the USA, tailored to optimize reimbursements, minimize claim denials, and maintain payer compliance. Our staff is aware of the intricacies of nephrology coding, dialysis billing, and chronic care management, allowing your practice to streamline operations and enhance cash flow.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <div className="tw-relative tw-w-full">
            <motion.div
              initial={{ rotate: 3 }}
              animate={{ rotate: 6 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="tw-absolute tw-inset-0 tw-bg-medical-teal tw-rounded-2xl tw-opacity-20"
            />
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="glass-card tw-p-6 sm:tw-p-8 tw-relative"
            >
              <div className="tw-grid tw-grid-cols-1 tw-gap-6">
                <h2 className="tw-text-xl sm:tw-text-2xl tw-font-bold tw-mb-4 sm:tw-mb-6 tw-text-center tw-bg-gradient-to-r tw-from-blue-600 tw-to-indigo-700 tw-bg-clip-text tw-text-transparent">
                  Request a Free Demo
                </h2>
                <form className="tw-space-y-5">
                  <Input
                    type="text"
                    placeholder="Full Name*"
                    className="tw-bg-slate-50 tw-border-slate-200 focus:tw-border-blue-500 focus:tw-ring-blue-500/20 tw-rounded-xl tw-text-sm md:tw-text-base tw-py-5 md:tw-py-6"
                  />
                  <Input
                    type="email"
                    placeholder="Email*"
                    className="tw-bg-slate-50 tw-border-slate-200 focus:tw-border-blue-500 focus:tw-ring-blue-500/20 tw-rounded-xl tw-text-sm md:tw-text-base tw-py-5 md:tw-py-6"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number*"
                    className="tw-bg-slate-50 tw-border-slate-200 focus:tw-border-blue-500 focus:tw-ring-blue-500/20 tw-rounded-xl tw-text-sm md:tw-text-base tw-py-5 md:tw-py-6"
                  />
                  <Input
                    type="textarea"
                    placeholder="Message"
                    className="tw-bg-slate-50 tw-border-slate-200 focus:tw-border-blue-500 focus:tw-ring-blue-500/20 tw-rounded-xl tw-text-sm md:tw-text-base tw-min-h-[120px]"
                  />
                  <Button className="tw-w-full tw-bg-gradient-to-r tw-from-blue-600 tw-to-indigo-700 hover:tw-from-blue-700 hover:tw-to-indigo-800 tw-text-white tw-py-5 md:tw-py-6 tw-rounded-xl tw-shadow-lg tw-shadow-blue-500/20 tw-transition-all hover:tw-shadow-blue-500/40">
                    Schedule A Demo
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
