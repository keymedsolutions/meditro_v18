"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart2, FileText, ArrowRightLeft, Cpu } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';

const Benefits = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="tw-w-8 tw-h-8 tw-text-medical-blue" />,
      title: "Strict Adherence to HIPAA",
      description: "We place a high priority on data security and confidentiality, making sure that all patient data is handled with the highest care and in accordance with federal laws."
    },
    {
      icon: <BarChart2 className="tw-w-8 tw-h-8 tw-text-medical-blue" />,
      title: "Complete Quality Control",
      description: "Our multi-level accuracy checks minimize errors, guaranteeing flawless claims submission and maximum reimbursements."
    },
    {
      icon: <FileText className="tw-w-8 tw-h-8 tw-text-medical-blue" />,
      title: "Comprehensive KPI Reporting",
      description: "Detailed analytics and performance reports give you complete visibility into your practice's financial health and billing performance."
    },
    {
      icon: <ArrowRightLeft className="tw-w-8 tw-h-8 tw-text-medical-blue" />,
      title: "Flexible Service Contracts",
      description: "No rigid contracts—our adaptable billing solutions grow with your practice, allowing scalability and seamless transitions as your needs evolve."
    },
    {
      icon: <Cpu className="tw-w-8 tw-h-8 tw-text-medical-blue" />,
      title: "Advanced Automation Driven by AI",
      description: "We expedite claim processing, lessen administrative workloads, and guarantee quicker reimbursements with fewer errors by utilizing state-of-the-art AI technology."
    }
  ];

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

  return (
    <section className="inmbp-section tw-bg-white">
      <div className="tw-container tw-mx-auto">
        <SectionHeading
        title="How We Improve Your Billing Services for Internal Medicine"
        subtitle="Our Advantage"
        showUnderline={false}
        description="Our comprehensive approach to medical billing ensures that your practice operates at peak efficiency while maximizing revenue."
        />
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="tw-text-center tw-mb-16"
        >
          <span className="tw-inline-block tw-px-4 tw-py-1 tw-rounded-full tw-bg-medical-lightTeal tw-text-medical-teal tw-text-sm tw-font-medium tw-mb-4">
            Our Advantage
          </span>
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-medical-navy tw-mb-6">
            How We Improve Your Billing Services for Internal Medicine
          </h2>
          <p className="tw-max-w-2xl tw-mx-auto tw-text-medical-darkGray">
            Our comprehensive approach to medical billing ensures that your practice operates at peak efficiency while maximizing revenue.
          </p>
        </motion.div> */}

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card tw-p-6 tw-h-full inmbp-card-hover"
            >
              <div className="tw-mb-4">
                <div className="tw-w-16 tw-h-16 tw-rounded-lg tw-bg-medical-lightTeal tw-flex tw-items-center tw-justify-center">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="tw-text-xl tw-font-bold tw-text-medical-navy tw-mb-3">
                ✅ {benefit.title}
              </h3>
              <p className="tw-text-medical-darkGray">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
