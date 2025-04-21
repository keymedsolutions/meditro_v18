"use client"

import React from 'react';
import { motion } from 'framer-motion';
import FloatingElements from './FloatingElements';
import SectionHeading from '@/components/ui/section-heading';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {

  const faqs = [
    {
      question: "How can Key MedSolutions help reduce claim denials for internal medicine and nephrology?",
      answer: "To reduce denials and increase reimbursements, we guarantee correct coding, appropriate documentation, and adherence to payer policies."
    },
    {
      question: "What are the biggest challenges in nephrology billing?",
      answer: "Complex dialysis billing, coding mistakes, non-compliance, and high claim denial rates are typical difficulties. These complexities are managed by our professionals to enhance your revenue cycle."
    },
    {
      question: "How soon can I expect to see improvements in collections?",
      answer: "Within the first few months of working with us, the majority of our clients report a 20–35% increase in collections."
    },
    {
      question: "Does Key MedSolutions handle prior authorizations?",
      answer: "Yes! Our group effectively handles prior authorizations, guaranteeing quicker approvals and lessening the administrative load."
    },
    {
      question: "Can I track my billing performance in real time?",
      answer: "Of course! You have total visibility into claims, payments, and financial performance thanks to our real-time reporting and analytics."
    }
  ];

  const mid = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, mid);
  const secondHalf = faqs.slice(mid);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };



  return (
    <section id="faqs" className="inmbp-section tw-bg-white tw-relative tw-overflow-hidden">
      <FloatingElements />
      <div className="tw-container tw-mx-auto tw-relative tw-z-10">
        <SectionHeading title="Frequently Asked Questions" showUnderline={false} subtitle="FAQs" description=' Get answers to common questions about our nephrology and internal medicine billing services.' />
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="tw-text-center mb-16"
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="tw-inline-block tw-px-4 tw-py-1 tw-rounded-full tw-bg-medical-lightTeal tw-text-medical-teal tw-text-sm tw-font-medium mb-4"
          >
            FAQs
          </motion.span>
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-medical-navy mb-6">
            Frequently Asked Questions
          </h2>
          <p className="tw-max-w-2xl tw-mx-auto tw-text-medical-darkGray">
            Get answers to common questions about our nephrology and internal medicine billing services.
          </p>
        </motion.div> */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="tw-w-full"
        >

           {/* Responsive Grid */}
           <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6 tw-mt-10">
                    <div>
                        <Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
                            {firstHalf.map((faq, index) => (
                                <Accordion.Item eventKey={String(index)} key={index}>
                                    <Accordion.Header>{faq.question}</Accordion.Header>
                                    <Accordion.Body>{faq.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                    <div>
                        <Accordion defaultActiveKey="1" className="accordion1 ttr-accordion1">
                            {secondHalf.map((faq, index) => (
                                <Accordion.Item eventKey={String(index)} key={index}>
                                    <Accordion.Header>{faq.question}</Accordion.Header>
                                    <Accordion.Body>{faq.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
