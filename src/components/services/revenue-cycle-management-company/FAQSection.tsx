/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Accordion } from 'react-bootstrap';
import SectionHeading from '@/components/ui/section-heading';

const FAQSection = () => {
  const faqs =[
    {
      question: "What is Revenue Cycle Management (RCM)?",
      answer:
        "RCM is the process of overseeing the financial facets of healthcare, from patient registration to final payment, guaranteeing prompt reimbursements and lowering claim denials.",
    },
    {
      question: "How does RCM improve cash flow?",
      answer:
        "RCM guarantees faster reimbursements and less outstanding debt by streamlining billing, decreasing denials, and optimizing claim submissions. This improves the cash flow of your practice.",
    },
    {
      question: "Does Key MedSolutions handle denied claims?",
      answer:
        "Yes! In order to increase your reimbursement rates and recover lost revenue, our team specializes in denial management and appeals.",
    },
    {
      question: "How will RCM impact my practice's efficiency?",
      answer:
        "By automating billing procedures, lowering administrative workloads, and offering timely financial insights to free up time for patient care, RCM increases efficiency.",
    },
    {
      question: "Is Key MedSolutions compliant with healthcare regulations?",
      answer:
        "Yes, we adhere to all healthcare regulations, such as HIPAA, ICD-10, and Medicare guidelines to keep your practice safe and current.",
    },
  ]
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const mid = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, mid);
  const secondHalf = faqs.slice(mid);

  return (
    <section className="tw-py-20 tw-relative tw-overflow-hidden">
      {/* Background decoration */}
      <div className="tw-absolute tw-inset-0tw-pointer-events-none"></div>
      
      {/* Animated background elements */}
      <div className="tw-absolute tw-inset-0 tw-pointer-events-none tw-overflow-hidden">
        <div className="tw-absolute tw--bottom-20 tw--left-20 tw-w-64 tw-h-64 tw-rounded-full tw-bg-primary-100 tw-opacity-50 tw-blur-3xl tw-animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="tw-absolute tw-top-20 tw--right-20 tw-w-80 tw-h-80 tw-rounded-full tw-bg-secondary-100 tw-opacity-50 tw-blur-3xl tw-animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="tw-container tw-mx-auto tw-px-4">

        <SectionHeading title="Frequently Asked Questions" subtitle='FAQs' />
 



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

export default FAQSection;
