/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button } from '@/ui/button';
import { motion } from 'framer-motion';
import BackgroundShapes from './BackgroundShapes';
import { AspectRatio } from '@/ui/aspect-ratio';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section className="tw-pt-32 tw-pb-16 md:tw-pt-40 md:tw-pb-24 tw-overflow-hidden tw-relative">
      <BackgroundShapes variant="primary" />

      <div className="tw-icd-10-container-custom tw-relative">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-10 tw-items-center">
          <motion.div
            className="tw-max-w-xl"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.span
              variants={fadeInUp}
              className="tw-inline-block tw-px-4 tw-py-1.5 tw-mb-4 tw-text-xs tw-font-medium tw-rounded-full tw-bg-primary/10 tw-text-primary"
            >
              ICD-10 Medical Coding Experts
            </motion.span>

            <motion.h1 variants={fadeInUp} className="tw-mb-6">
              ICD-10 Coding Services for Accurate Medical Billing
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="tw-max-w-2xl tw-mb-8"
            >
              For billing and insurance purposes, healthcare providers throughout the United States use the standardized ICD-10 medical coding system to precisely record and code patient diagnoses and procedures. More specificity and accuracy in medical billing are provided by the system's 87,000 procedure codes and more than 68,000 diagnosis codes.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-start tw-gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button className="tw-rounded-full tw-h-12 tw-px-8 tw-shadow-lg tw-text-base tw-w-full sm:tw-w-auto">
                  Schedule a Free Consultation
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button variant="outline" className="tw-rounded-full tw-h-12 tw-px-8 tw-text-base tw-w-full sm:tw-w-auto">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="tw-relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover="hover"
          >
            <div className="tw-relative">
              {/* Decorative elements */}
              <motion.div
                className="tw-absolute -tw-top-6 -tw-left-6 tw-w-24 tw-h-24 tw-bg-primary/10 tw-rounded-full tw-blur-xl tw-z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
              <motion.div
                className="tw-absolute -tw-bottom-8 -tw-right-8 tw-w-32 tw-h-32 tw-bg-accent/20 tw-rounded-full tw-blur-xl tw-z-0"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1
                }}
              />

              {/* Image with clip path */}
              <div
                className="tw-relative tw-z-10 tw-bg-white tw-shadow-xl tw-overflow-hidden"
                style={{
                  clipPath:
                    'polygon(0% 20%, 20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%)',
                  borderRadius: '1rem'
                }}
              >
                <AspectRatio ratio={4 / 3} className="tw-bg-muted">
                  <motion.img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Medical coding professionals at work"
                    className="tw-object-cover tw-h-full tw-w-full"
                    variants={imageVariants}
                    loading="eager"
                  />
                </AspectRatio>
              </div>

              {/* Floating elements */}
              <motion.div
                className="tw-absolute tw-top-1/4 -tw-right-4 tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-2 tw-z-20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                  {/* SVG icon */}
                  {/* ... */}
                </div>
              </motion.div>

              <motion.div
                className="tw-absolute tw-bottom-1/4 -tw-left-4 tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-2 tw-z-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="tw-w-12 tw-h-12 tw-bg-accent/20 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                  {/* SVG icon */}
                  {/* ... */}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
