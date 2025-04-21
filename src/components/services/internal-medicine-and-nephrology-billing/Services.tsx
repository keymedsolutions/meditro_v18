/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/ui/card";
import SectionHeading from '@/components/ui/section-heading';

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3 + i * 0.2,
    },
  }),
};

const Services = () => {
  return (
    <section id="services" className="inmbp-section tw-bg-white tw-py-20">
      <div className="tw-container tw-mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="tw-rounded-2xl tw-border-none tw-shadow-xl tw-overflow-hidden">
            <div className="tw-flex tw-flex-col md:tw-flex-row">
              {/* Left Content */}
              <CardContent className="glass-card tw-p-8 md:tw-p-12 md:tw-w-3/5 tw-z-10 tw-relative">
                {/* Background Accent */}
                <div className="tw-absolute -top-24 -left-24 tw-w-48 tw-h-48 tw-bg-medical-lightTeal tw-rounded-full tw-opacity-40 blur-3xl"></div>

                <div className="tw-relative">
                  <motion.h3
                    className="tw-text-2xl md:tw-text-4xl tw-font-bold tw-text-medical-navy tw-mb-6 tw-font-display tw-relative"
                    variants={textVariant}
                    custom={0}
                  >
                    Comprehensive Internal Medicine & Nephrology Billing Services
                    <motion.div
                      className="tw-absolute -tw-bottom-2 tw-left-0 tw-h-1 tw-bg-gradient-to-r tw-from-medical-teal tw-to-medical-blue"
                      initial={{ width: 0 }}
                      whileInView={{ width: '25%' }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </motion.h3>

                  <motion.p
                    className="tw-text-medical-darkGray tw-mb-4"
                    variants={textVariant}
                    custom={1}
                  >
                    Only 4,532 nephrology practices nationwide provide kidney care for the more than 35.5 million Americans who suffer from chronic kidney disease (CKD), which affects 1 in 7 US adults. Focusing on disease management, prevention, and treatment while maintaining the practice's financial stability, nephrologists are overworked. In a similar vein, internal medicine specialists treat a variety of adult illnesses, necessitating thorough documentation, precise coding, and prompt claim submission in order to preserve a steady revenue cycle.
                  </motion.p>

                  <motion.p
                    className="tw-text-medical-darkGray tw-mb-4"
                    variants={textVariant}
                    custom={2}
                  >
                    For internal medicine and nephrology, Key MedSolutions offers specialist billing services that guarantee smooth revenue cycle management, fewer claim rejections, and maximized reimbursements. In order for doctors to concentrate on what really matters—patient care—our skilled medical billing team assists practices in overcoming intricate insurance regulations, coding difficulties, and administrative burdens.
                  </motion.p>
                </div>
              </CardContent>

              {/* Right Image */}
              <div className="md:tw-w-2/5 tw-relative tw-min-h-[300px] md:tw-min-h-0">
                <motion.div
                  className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-medical-blue/80 tw-to-medical-teal/80 tw-z-10 tw-opacity-70"
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="tw-absolute tw-inset-0 tw-bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80')] tw-bg-cover tw-bg-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-z-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="tw-text-white tw-text-center tw-px-6"
                  >
                    <h4 className="tw-text-xl md:tw-text-2xl tw-text-white tw-font-bold tw-mb-2 tw-drop-shadow-md">
                      Dedicated to Your Practice's Growth
                    </h4>
                    <p className="tw-text-white/90 tw-max-w-xs tw-mx-auto tw-drop-shadow-md">
                      Trusted billing expertise tailored for internal medicine & nephrology
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
