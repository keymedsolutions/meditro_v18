// Advantages.tsx
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundShapes from './BackgroundShapes';
import { AspectRatio } from '@/ui/aspect-ratio';
import { Card, CardContent, CardHeader } from '@/ui/card';
import { CheckCircle, Shield, Clock, Award, Zap } from 'lucide-react';

const Advantages = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const iconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="tw-relative tw-py-16 md:tw-py-24 tw-overflow-hidden">
      <BackgroundShapes variant="secondary" />

      <div className="tw-icd-10-container-custom">
        <div className="tw-text-center tw-mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="tw-mb-4"
          >
            Why Our ICD-10 Coding Services?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="tw-text-muted-foreground tw-max-w-2xl tw-mx-auto"
          >
            Our certified medical coders ensure accuracy, compliance, and timely processing of all medical claims.
          </motion.p>
        </div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-10 tw-items-center">
          <motion.div
            className="tw-order-2 md:tw-order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="tw-grid tw-gap-6">
              {[ 
                { icon: <CheckCircle className="tw-w-5 tw-h-5" />, title: "Accuracy Guaranteed", text: "Our certified coders maintain a 95%+ accuracy rate, reducing claim denials and ensuring proper reimbursement for healthcare providers." },
                { icon: <Shield className="tw-w-5 tw-h-5" />, title: "Compliance Focused", text: "We stay current with all coding updates and regulatory changes to ensure your practice remains compliant with healthcare regulations." },
                { icon: <Clock className="tw-w-5 tw-h-5" />, title: "Faster Reimbursement", text: "Quick turnaround times and accurate coding lead to faster claim processing and improved cash flow for your healthcare facility." },
                { icon: <Award className="tw-w-5 tw-h-5" />, title: "Industry Expertise", text: "Our team consists of experienced medical coders with specialized knowledge across various medical specialties and healthcare settings." }
              ].map(({ icon, title, text }, i) => (
                <motion.div
                  key={i}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  className="tw-rounded-lg tw-overflow-hidden"
                >
                  <Card className="tw-border-none tw-shadow-md tw-h-full tw-transition-all tw-duration-300">
                    <CardHeader className="tw-pb-2 tw-flex tw-flex-row tw-items-center tw-gap-3">
                      <motion.div
                        className="tw-rounded-full tw-bg-primary/10 tw-p-2 tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-text-primary"
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                      >
                        {icon}
                      </motion.div>
                      <h3 className="tw-text-xl tw-font-semibold tw-text-primary">{title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="tw-text-gray-700">{text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="tw-relative tw-order-1 md:tw-order-2 tw-mb-10 md:tw-mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover="hover"
          >
            <div className="tw-relative">
              <motion.div
                className="tw-absolute -tw-top-6 -tw-right-6 tw-w-24 tw-h-24 tw-bg-secondary/20 tw-rounded-full tw-blur-xl tw-z-0"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              />
              <motion.div
                className="tw-absolute -tw-bottom-8 -tw-left-8 tw-w-32 tw-h-32 tw-bg-primary/10 tw-rounded-full tw-blur-xl tw-z-0"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
              />
              <div
                className="tw-relative tw-z-10 tw-bg-white tw-shadow-xl tw-overflow-hidden"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  borderRadius: '0.5rem',
                }}
              >
                <AspectRatio ratio={4 / 3} className="tw-bg-muted">
                  <motion.img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Medical coding specialists analyzing healthcare data"
                    className="tw-object-cover tw-h-full tw-w-full"
                    variants={imageVariants}
                    loading="lazy"
                  />
                </AspectRatio>
              </div>

              <motion.div
                className="tw-absolute tw-top-1/4 -tw-left-4 tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-2 tw-z-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="tw-w-12 tw-h-12 tw-bg-secondary/20 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                  <Zap className="tw-w-6 tw-h-6 tw-text-primary" />
                </div>
              </motion.div>

              <motion.div
                className="tw-absolute tw-bottom-1/4 -tw-right-4 tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-2 tw-z-20"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="tw-w-6 tw-h-6 tw-text-primary" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                  </svg>
                </div>
              </motion.div>

              <motion.div
                className="tw-absolute tw-top-2/3 tw-right-1/4 tw-bg-white tw-shadow-lg tw-rounded-full tw-p-1 tw-z-20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="tw-w-10 tw-h-10 tw-bg-blue-50 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                  <span className="tw-text-primary tw-font-bold tw-text-xs">95%</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
