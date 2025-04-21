/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Accordion } from 'react-bootstrap';
import SectionHeading from '@/components/ui/section-heading';

const FAQ = () => {
  const faqs = [
    {
      question: "How can Key MedSolutions help improve my revenue cycle?",
      answer: "Our knowledgeable staff guarantees correct coding, prompt claim filing, and effective denial handling, which accelerates reimbursements and reduces claim denials, thus improving your revenue cycle."
    },
    {
      question: "What types of medical practices do you serve?",
      answer: "We guarantee accurate billing for all kinds of healthcare providers by offering medical billing and coding services for a range of specialties, including primary care, cardiology, orthopaedics, dermatology, mental health, and more."
    },
    {
      question: "How do you handle claim denials?",
      answer: "To improve the chances of successful reimbursement, our staff looks into rejected claims, determines the grounds for denial, and drafts thorough appeals with supporting documentation."
    },
    {
      question: "Is your billing and coding service HIPAA-compliant?",
      answer: "Yes, we strictly follow HIPAA guidelines to ensure all patient data is treated securely and confidentially and that we are in compliance with industry standards."
    },
    {
      question: "How do I track the status of my claims?",
      answer: "We offer you real-time reporting and open visibility into your billing performance so that you can monitor claims, payments, and trends so that you are up-to-date about your financial position."
    }
  ];


  const mid = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, mid);
  const secondHalf = faqs.slice(mid);

  return (
    <section className="tw-py-20 tw-relative tw-overflow-hidden benefits-section-home1">
      {/* Background decoration */}
      <div className="tw-absolute tw-inset-0  tw-pointer-events-none"></div>
      
      {/* Animated background elements */}
      <div className="tw-absolute tw-inset-0 tw-pointer-events-none tw-overflow-hidden">
        <div className="tw-absolute tw--bottom-20 tw--left-20 tw-w-64 tw-h-64 tw-rounded-full tw-bg-primary-100 tw-opacity-50 tw-blur-3xl tw-animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="tw-absolute tw-top-20 tw--right-20 tw-w-80 tw-h-80 tw-rounded-full tw-bg-secondary-100 tw-opacity-50 tw-blur-3xl tw-animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="tw-container tw-mx-auto tw-px-4">
        <SectionHeading title="Frequently Asked Questions" subtitle="FAQ" />

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
        
    
        {/* Decorative elements */}
        <div className="tw-relative tw-mt-12 tw-max-w-3xl tw-mx-auto">
          <div className="tw-absolute tw-top-1/2 tw-left-0 tw-transform -tw-translate-y-1/2 -tw-translate-x-1/2 tw-w-16 tw-h-16 tw-rounded-full tw-border-4 tw-border-primary-200 tw-opacity-50"></div>
          <div className="tw-absolute tw-top-1/2 tw-right-0 tw-transform -tw-translate-y-1/2 tw-translate-x-1/2 tw-w-16 tw-h-16 tw-rounded-full tw-border-4 tw-border-secondary-200 tw-opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
