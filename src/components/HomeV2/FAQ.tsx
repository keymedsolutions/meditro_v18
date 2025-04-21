"use client"
import SectionHeading from '@/components/ui/section-heading';
import React from 'react';
import { Accordion } from 'react-bootstrap';

const FaqData = [
    {
      question: "How does Key MedSolutions help reduce claim denials?",
      answer:
        "To increase claim approvals and expedite reimbursements, we employ sophisticated denial management techniques, claim scrubbing, and real-time analytics to find and fix mistakes prior to submission.",
    },
    {
      question: "Can Key MedSolutions integrate with my existing EHR and practice management system?",
      answer:
        "Indeed! Our solutions offer smooth integration without interfering with your workflow and are compatible with the majority of EHR and practice management systems.",
    },
    {
      question: "Is my patient data secure with Key MedSolutions?",
      answer:
        "Of course. To guarantee the privacy and security of patient data, we adhere to stringent HIPAA-compliant procedures and use encrypted systems and secure protocols.",
    },
    {
      question: "What are the pricing options for your services?",
      answer:
        "Depending on the size and requirements of your practice, we provide flexible pricing models, such as fixed-cost plans or percentage-based fees. For a personalized quote, get in touch with us.",
    },
    {
      question: "How do I get started with Key MedSolutions?",
      answer:
        "It is simple to get started! Just get in touch for a free consultation, and our staff will help you with integration, onboarding, and revenue cycle optimization.",
    },
  ];
  

const FAQs = () => {
    const mid = Math.ceil(FaqData.length / 2);
    const firstHalf = FaqData.slice(0, mid);
    const secondHalf = FaqData.slice(mid);

    return (
        <section
            className="tw-py-16 md:tw-py-24 tw-relative tw-overflow-hidden tw-bg-gradient-to-b tw-from-blue-50 tw-to-white"
            id="whyus"
        >
            {/* Decorative Circles */}
            <div className="tw-absolute tw-w-64 tw-h-64 tw-bg-orange-200 tw-opacity-20 tw-rounded-full tw-blur-3xl tw-top-0 tw-left-0"></div>
            <div className="tw-absolute tw-w-72 tw-h-72 tw-bg-blue-100 tw-opacity-20 tw-rounded-full tw-blur-2xl tw-bottom-0 tw-right-0"></div>

            <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
                <SectionHeading title="Frequently Asked Questions" subtitle="" showUnderline={false} />

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

             
            </div>
        </section>
    );
};

export default FAQs;
