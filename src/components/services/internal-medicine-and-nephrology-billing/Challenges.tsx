/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileWarning, ClipboardX, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card';
import FloatingElements from './FloatingElements';
import { Button } from '@/ui/button';
import SectionHeading from '@/components/ui/section-heading';

const Challenges = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const challenges = [
    {
      icon: <Shield className="tw-w-10 tw-h-10 tw-text-white" />,
      title: "Inaccurate Coding",
      description: "For accurate nephrology billing, CPT, ICD-10-CM, and HCPCS codes are necessary. It is difficult to choose the best codes from hundreds of possibilities, and improper coding results in claims being denied. Our skilled programmers minimize claim errors by ensuring accuracy and compliance."
    },
    {
      icon: <FileWarning className="tw-w-10 tw-h-10 tw-text-white" />,
      title: "Non-Compliance with Regulations",
      description: "Nephrology billing is highly regulated, and noncompliance with payer-specific, state, and federal regulations may lead to denials or legal action. We prevent expensive fines by keeping your practice in line with the most recent regulations."
    },
    {
      icon: <ClipboardX className="tw-w-10 tw-h-10 tw-text-white" />,
      title: "Insufficient Records",
      description: "Inadequate supporting documentation, such as clinical notes, referral letters, or medical histories, frequently results in insurance payers rejecting claims. In order to prove the medical necessity of services and increase claim approvals, we make sure that the right paperwork is in place."
    },
    {
      icon: <Clock className="tw-w-10 tw-h-10 tw-text-white" />,
      title: "Aging Accounts Receivable (AR)",
      description: "Nephrology practices frequently experience high AR days, which can result in lost or postponed revenue. Cash flow is slowed down and bad debt rises when payments are not collected. Through effective collections techniques, proactive follow-ups, and denial management, we contribute to a decrease in AR days."
    }
  ];

  return (
    <section className="inmbp-section tw-bg-medical-gray tw-relative tw-overflow-hidden">
      <FloatingElements />
      <div className="tw-container tw-mx-auto tw-relative tw-z-10">
      <SectionHeading
       title="Common Challenges in Nephrology Medical Billing" 
       subtitle="Challenges & Solutions" showUnderline={false}
       description={`The "denials danger zone" refers to medical specialties with a claim denial rate higher than 10%; regrettably, nephrology is one of these specialties, with an average denial rate of 14%. Coding mistakes, inadequate documentation, non-compliance, or billing for services that were not rendered are frequently the causes of these denials. The financial stability of nephrology practices is further complicated by staff shortages, payment reductions, and continuously changing regulations.`}
      
       />


{/* 
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="tw-text-center tw-mb-16"
        >
          <span className="tw-inline-block tw-px-4 tw-py-1 tw-rounded-full tw-bg-medical-lightTeal tw-text-medical-teal tw-text-sm tw-font-medium tw-mb-4">
            Challenges & Solutions
          </span>
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-medical-navy tw-mb-6">
            Common Challenges in Nephrology Medical Billing
          </h2>
          <p className="tw-max-w-3xl tw-text-center tw-mx-auto tw-text-medical-darkGray">
            The "denials danger zone" refers to medical specialties with a claim denial rate higher than 10%; regrettably, nephrology is one of these specialties, with an average denial rate of 14%. Coding mistakes, inadequate documentation, non-compliance, or billing for services that were not rendered are frequently the causes of these denials. The financial stability of nephrology practices is further complicated by staff shortages, payment reductions, and continuously changing regulations.
          </p>
        </motion.div> */}

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8"
        >
          {challenges.map((challenge, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="tw-group"
            >
              <Card className="tw-overflow-hidden tw-border-none tw-h-full tw-rounded-xl tw-shadow-lg tw-relative tw-bg-white">
                {/* Animated background gradient */}
                <motion.div 
                  className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-medical-blue tw-via-medical-lightBlue tw-to-medical-teal tw-opacity-0 group-hover:tw-opacity-5 tw-transition-opacity tw-duration-500"
                  animate={{ 
                    background: ['linear-gradient(45deg, #0070ba, #00a3a3)', 'linear-gradient(135deg, #00a3a3, #0070ba)', 'linear-gradient(225deg, #0070ba, #00a3a3)', 'linear-gradient(315deg, #00a3a3, #0070ba)'],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Card header with icon */}
                <div className="tw-relative tw-overflow-hidden">
                  <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-medical-blue tw-to-medical-teal tw-opacity-90 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"></div>
                  <div className="tw-relative tw-p-6 tw-flex tw-items-center tw-z-10">
                    <div className="tw-w-16 tw-h-16 tw-rounded-full tw-bg-white/10 tw-backdrop-blur-sm tw-flex tw-items-center tw-justify-center tw-mr-4 group-hover:tw-scale-110 tw-transition-transform tw-duration-300">
                      {challenge.icon}
                    </div>
                    <CardTitle className="tw-text-white tw-text-xl group-hover:tw-translate-x-2 tw-transition-transform tw-duration-300 tw-font-display">{challenge.title}</CardTitle>
                  </div>
                  <motion.div 
                    className="tw-absolute tw-top-2 tw-right-2 tw-w-32 tw-h-32 tw-opacity-10 group-hover:tw-opacity-20 tw-transition-opacity tw-duration-300"
                    animate={{ 
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.05, 1, 0.95, 1]
                    }}
                    transition={{ 
                      duration: 6, 
                      ease: "easeInOut", 
                      repeat: Infinity 
                    }}
                  >
                    {challenge.icon}
                  </motion.div>
                </div>
                
                {/* Card content */}
                <CardContent className="tw-p-6 tw-relative tw-z-10 tw-mt-6">
                  <p className="tw-text-medical-darkGray group-hover:tw-text-medical-navy tw-transition-colors tw-duration-300">{challenge.description}</p>
                  
                  {/* Animated underline */}
                  <motion.div 
                    className="tw-mt-4 tw-h-1 tw-bg-gradient-to-r tw-from-medical-blue tw-to-medical-teal tw-rounded-full tw-w-12 group-hover:tw-w-1/2 tw-transition-all tw-duration-500"
                  />
                  
                  {/* Learn more button that appears on hover */}
                  {/* <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="tw-mt-4 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"
                  >
                    <Button 
                      variant="ghost" 
                      className="tw-p-0 tw-text-medical-teal hover:tw-text-medical-blue hover:tw-bg-transparent"
                    >
                      Learn more
                      <motion.span 
                        className="tw-ml-1"
                        animate={{ x: [0, 5, 0] }} 
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Button>
                  </motion.div> */}
                </CardContent>

                {/* Corner accent */}
                <motion.div 
                  className="tw-absolute tw-top-0 tw-right-0 tw-w-0 tw-h-0 tw-border-t-[50px] tw-border-r-[50px] tw-border-t-transparent tw-border-r-medical-lightTeal tw-opacity-0 group-hover:tw-opacity-50 tw-transition-opacity tw-duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Challenges;
