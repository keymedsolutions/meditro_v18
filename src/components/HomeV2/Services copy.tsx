"use client"
import React, { useRef } from 'react';
import ServiceCard from '@/ui/ServiceCard';
import { FileCode, ClipboardCheck, AlertCircle, Stethoscope, RadioTower, Heart } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const services = [
    {
      title: 'Medical Billing & Coding Services',
      description: 'Our certified professionals do full billing and proper coding (ICD-10, CPT, HCPCS) to reduce claim processing time and increase reimbursements.',
      icon: FileCode,
      delay: 0.1
    },
    {
      title: 'Medical Claim Billing',
      description: 'We provide error-free claim submission, quicker insurance approvals, and fewer rejections to maintain a consistent revenue stream.',
      icon: ClipboardCheck,
      delay: 0.2
    },
    {
      title: 'Denial Management Services',
      description: 'Our experts review, monitor, and appeal denied claims, restoring lost revenue and increasing claim acceptance rates.',
      icon: AlertCircle,
      delay: 0.3
    },
    {
      title: 'Revenue Cycle Management',
      description: 'From patient registration to end payment reconciliation, we oversee the complete revenue cycle to maximize cash flow and reduce financial gaps.',
      icon: Stethoscope,
      delay: 0.4
    },
    {
      title: 'Radiology Billing Services',
      description: 'Specialized radiology billing solutions for diagnostic imaging centres, radiologists, and hospitals to ensure proper claim processing.',
      icon: RadioTower,
      delay: 0.5
    },
    {
      title: 'Cardiology Medical Billing',
      description: 'We are experts in cardiology coding and billing, with expertise in handling complicated procedures, modifiers, and payer-specific rules for smooth reimbursements.',
      icon: Heart,
      delay: 0.6
    }
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

  return (
    <section id="services" className="tw-py-20 md:tw-py-24 tw-overflow-hidden" ref={sectionRef}>
      <div className="tw-container tw-mx-auto tw-px-6 md:tw-px-8">
        <motion.div 
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="tw-mb-4">Key MedSolutions Provides Advanced Medical Billing & RCM Services</h2>
          <p>
            We streamline healthcare billing and revenue cycle management with intelligent, technology-based solutions, assisting providers in improving efficiency, optimizing reimbursement, and minimizing claim denials.
          </p>
        </motion.div>
        
        <motion.div 
          className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 md:tw-gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
              isInView={isInView}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="tw-mt-12 md:tw-mt-16 tw-text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <a href="#contact" className="tw-btn-primary">
            Explore Our Billing & RCM Solutions – Get a Free Consultation Today!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
