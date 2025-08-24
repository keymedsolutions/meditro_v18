"use client"

import React from 'react';
import { motion } from 'framer-motion';
import FloatingElements from './FloatingElements';
import SectionHeading from '@/components/ui/section-heading';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {

  const faqs =  [
  {
    question: "What makes your Internal Medicine Billing Services different from others?",
    answer:
      "Our services are specifically designed for internal medicine and nephrology practices. With expert billers and coders, we ensure accurate claims, faster reimbursements, and a streamlined revenue cycle tailored to your specialty.",
  },
  {
    question: "How do you stay updated with changing regulations?",
    answer:
      "We continuously monitor updates in healthcare regulations, payer policies, and coding standards. Our team undergoes regular training to ensure your practice remains compliant and avoids costly errors.",
  },
  {
    question: "Can I customize the services to fit my practice’s needs?",
    answer:
      "Yes! We offer flexible service models that can be tailored to your practice’s size, specialty, and specific requirements, ensuring you get the exact support you need.",
  },
  {
    question: "How does outsourcing billing benefit my practice?",
    answer:
      "By outsourcing, you lighten your team's administrative load, enabling them to devote more time to delivering exceptional patient care. It also improves claim accuracy, accelerates cash flow, and ensures compliance with industry standards.",
  },
  {
    question: "What kind of reporting and analytics do you provide?",
    answer:
      "We provide real-time reporting and actionable financial insights, giving you a clear view of your practice’s revenue cycle performance. This helps you make informed decisions to optimize your financial health.",
  },
  {
    question: "How do you handle denied or rejected claims?",
    answer:
      "Our team manages the entire claims process, including tracking, analyzing, and appealing denied claims. We work diligently to resolve issues and recover revenue efficiently.",
  },
  {
    question: "Can your services help reduce claim denials?",
    answer:
      "Yes, our expert team focuses on accurate coding and thorough claims management to minimize errors and reduce the likelihood of denials, ensuring a smoother revenue cycle.",
  },
]
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
        <SectionHeading title="Frequently Asked Questions" showUnderline={false} subtitle="FAQs"  />
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
                        <Accordion className="accordion ttr-accordion1">
                            {firstHalf.map((faq, index) => (
                                <Accordion.Item eventKey={String(index)} key={index}>
                                    <Accordion.Header>{faq.question}</Accordion.Header>
                                    <Accordion.Body>{faq.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                    <div>
                        <Accordion className="accordion1 ttr-accordion1">
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
