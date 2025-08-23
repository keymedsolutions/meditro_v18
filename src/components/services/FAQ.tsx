"use client";
import SectionHeading from "@/components/ui/section-heading";
import React from "react";
import { Accordion } from "react-bootstrap";

const FaqData = [
  {
    question:
      "What is included in Key Med Solutions' Medical Billing Services?",
    answer:
      "Our Medical Billing Services cover the entire claims process, from accurate coding and claims submission to insurance follow-ups and payment posting. We ensure faster reimbursements, reduced errors, and a streamlined revenue cycle for your practice.",
  },
  {
    question: "How does Key Med Solutions handle claim denials?",
    answer:
      "We take a proactive approach to Denial Management by identifying the root causes of rejections, appealing incorrect denials, and implementing strategies to prevent future issues. Our goal is to recover lost revenue quickly and efficiently.",
  },
  {
    question: "Can Key Med Solutions support healthcare providers in the USA?",
    answer:
      "Absolutely! We specialize in addressing the unique challenges faced by healthcare providers in the USA, including navigating complex insurance systems, ensuring compliance with regulations, and managing high patient volumes. Our solutions are tailored to meet the needs of practices across the country.",
  },
  {
    question: "Why should I outsource my medical billing to Key Med Solutions?",
    answer:
      "Outsourcing your medical billing to us reduces administrative burdens, improves claim accuracy, and ensures compliance with the latest regulations. With our expert-driven solutions, you can focus on patient care while we handle the complexities of billing and revenue cycle management.",
  },
  {
    question: "How can I get started with Key Med Solutions?",
    answer:
      "Getting started is simple! Schedule a free consultation with our team to discuss your practice’s needs. We’ll conduct a comprehensive assessment and create a customized plan to optimize your revenue cycle. Call us at (123) 456-7890 or email info@keymedsolutions.com to begin.",
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
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle=""
          showUnderline={false}
        />

        {/* Responsive Grid */}
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6 tw-mt-10">
          <div>
            <Accordion
              defaultActiveKey="0"
              className="accordion ttr-accordion1"
            >
              {firstHalf.map((faq, index) => (
                <Accordion.Item eventKey={String(index)} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <div>
            <Accordion
              defaultActiveKey="1"
              className="accordion1 ttr-accordion1"
            >
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
