/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { useRef } from 'react';
import { Check } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const SpecialtyServices = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const solutions = [
    'Patient Eligibility & Verification',
    'Claim Scrubbing & Submission',
    'Denial & AR Recovery Solutions',
    'Fast & Efficient Reimbursements'
  ];

  const benefits = [
    'Higher Reimbursement Rates – Reduce denials with accurate coding and billing.',
    'Compliance Assurance – Stay aligned with HIPAA and payer guidelines.',
    'Customized EHR Integration – Seamlessly sync with your practice\'s workflows.',
    'Faster Claims Processing – Improve cash flow with streamlined submissions.'
  ];

  const partnershipBenefits = [
    'Optimize reimbursements through precise coding and submission of claims.',
    'Shorten payment cycles and decrease denials',
    'Assure adherence to industry and HIPAA regulations.'
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="specialties" className="tw-py-20 md:tw-py-24 " ref={sectionRef}>
      <div className="tw-container tw-mx-auto tw-px-6 md:tw-px-8">
      
        
        <motion.div 
          className="tw-bg-white tw-rounded-2xl tw-shadow-card tw-p-8 md:tw-p-10 tw-relative tw-overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="tw-absolute -tw-top-10 -tw-right-10 tw-w-40 tw-h-40 tw-bg-primary/5 tw-rounded-full"></div>
          <div className="tw-absolute -tw-bottom-8 -tw-left-8 tw-w-32 tw-h-32 tw-bg-primary/10 tw-rounded-full"></div>
          
          <div className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-12 tw-relative tw-z-10">
            <div className="tw-inline-block tw-bg-primary/10 tw-text-primary tw-px-4 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium tw-mb-4">
              Specialty Services
            </div>
            <h2 className="tw-mb-4 tw-font-display">Specialty Medical Billing Services</h2>
            <p>
              Our specialized medical billing solutions are made to optimize specialty provider reimbursements. Our ICD-10 coding specialists guarantee accurate claims processing catered to the particular needs of your specialty, whether you work in urgent care, behavioural health, orthopaedics, cardiology, or laboratory billing.
            </p>
          </div>
          
          <div className="tw-mb-10 tw-relative tw-z-10">
            <h3 className="tw-text-xl tw-font-medium tw-mb-6 tw-text-center">Why Choose Our Specialty Billing Services?</h3>
            
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="tw-flex tw-items-start tw-gap-3 tw-bg-secondary/50 tw-p-4 tw-rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
                >
                  <Check className="tw-text-green-500 tw-flex-shrink-0 tw-mt-1" size={18} />
                  <p className="tw-text-muted-foreground">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="tw-bg-gradient-to-r tw-from-primary/5 tw-to-primary/10 tw-rounded-xl tw-p-6 md:tw-p-8 tw-relative tw-z-10">
            <h4 className="tw-flex tw-items-center tw-gap-2 tw-mb-4 tw-font-display">
              <span className="tw-text-primary">💰</span> Affordable Pricing & Scalable Solutions
            </h4>
            <p className="tw-text-muted-foreground tw-mb-6">
              With our reasonable 2.49% collection rate, you can increase your revenue while lowering your overhead expenses. Our all-inclusive billing services aid in streamlining operations, and our adaptable pay-for-performance model guarantees that you only pay for outcomes.
            </p>
            <a href="#contact" className="tw-btn-primary">Schedule a Free Consultation Today!</a>
          </div>
        </motion.div>

        <motion.div 
          className="tw-mt-20 tw-bg-gradient-to-r tw-from-primary/5 tw-to-primary/10 tw-rounded-2xl tw-p-8 md:tw-p-10 tw-relative tw-overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-pattern-grid tw-opacity-50"></div>
          
          <div className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-8 tw-relative tw-z-10">
            <div className="tw-inline-block tw-bg-white/70 tw-text-primary tw-px-4 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium tw-mb-4">
              Complete Solutions
            </div>
            <h2 className="tw-mb-4 tw-font-display">Your Complete Medical Billing & Revenue Cycle Partner</h2>
            <p>
              We offer end-to-end billing solutions that optimize your entire revenue cycle, regardless of your size—whether you're a large healthcare organization or an independent provider. Our professionals take care of everything, from insurance verification and claims processing to credentialing and denial management, so you can concentrate on patient care.
            </p>
          </div>
          
          <p className="tw-text-center tw-mb-8 tw-relative tw-z-10">
            Take advantage of the freedom to use our in-house system, which offers real-time reporting, automated workflows, and smooth claim tracking, or integrate with your preferred EHR.
          </p>
          
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 tw-mb-8 tw-relative tw-z-10">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="tw-flex tw-items-start tw-gap-3 tw-bg-white/50 tw-p-5 tw-rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1 * index + 0.6, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <span className="tw-text-primary tw-text-xl tw-flex-shrink-0">🔹</span>
                <p className="tw-text-muted-foreground">{benefit}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="tw-text-center tw-relative tw-z-10">
            <h4 className="tw-text-xl tw-font-medium tw-mb-4 tw-font-display">Let&apos;s optimize your revenue cycle today!</h4>
            <a href="#contact" className="tw-btn-primary">Get a Free Consultation</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtyServices;
