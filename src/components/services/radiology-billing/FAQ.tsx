"use client";
import React, { useRef } from "react";
import { Accordion } from "react-bootstrap";
import { ThreeDBackground } from "./three-d-background";
import { GradientText } from "./gradient-text";
import { motion, useInView } from "framer-motion";

const faqs = [
  {
    question:
      "What are the benefits of outsourcing radiology billing services?",
    answer:
      "Outsourcing lets you focus on patient care, reduces administrative burden, speeds up reimbursements, boosts accuracy, and cuts costs compared to in-house billing teams.",
  },
  {
    question:
      "Are your radiology billing services compliant with privacy and industry regulations?",
    answer:
      "Yes, radiology billing services are fully HIPAA-compliant and stay updated on all regulatory and payer-specific requirements to ensure patient data security.",
  },
  {
    question:
      "How do your services integrate with key medical solutions and enhance workflow efficiency?",
    answer:
      "We integrate seamlessly with leading medical software, including EHR, PACS, RIS, and Knowledge Management Systems to deliver efficient, unified workflows for your radiology practice.",
  },
  {
    question: "How will your service improve my radiology practice’s revenue?",
    answer:
      "We reduce denials, ensure accurate coding, and speed up reimbursements, leading to higher, more consistent revenue for your radiology practice.",
  },
  {
    question: "Do you offer real-time billing and financial reporting?",
    answer:
      "Yes, we provide real-time analytics and reports so you can monitor billing performance, denial rates, and overall revenue health at any time.",
  },
];

const FAQs = () => {
  const mid = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, mid);
  const secondHalf = faqs.slice(mid);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="tw-py-16 md:tw-py-24 tw-relative tw-overflow-hidden tw-bg-gradient-to-b tw-from-blue-50 tw-to-white"
    >
      <div className="tw-absolute tw-inset-0">
        <ThreeDBackground />
      </div>
      {/* Decorative Circles */}
      <div className="tw-absolute tw-w-64 tw-h-64 tw-bg-orange-200 tw-opacity-20 tw-rounded-full tw-blur-3xl tw-top-0 tw-left-0"></div>
      <div className="tw-absolute tw-w-72 tw-h-72 tw-bg-blue-100 tw-opacity-20 tw-rounded-full tw-blur-2xl tw-bottom-0 tw-right-0"></div>

      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="tw-text-center tw-mb-16"
        >
          <div className="tw-inline-block tw-mb-4">
            <div className="tw-relative">
              <div className="tw-absolute tw-inset-0 tw-bg-blue-100 tw-rounded-lg tw-transform tw-rotate-3"></div>
              <div className="tw-relative tw-bg-blue-50 tw-rounded-lg tw-px-4 tw-py-1 tw-transform -tw-rotate-3">
                <span className="tw-text-blue-600 tw-font-semibold">FAQs</span>
              </div>
            </div>
          </div>

          <h2 className="tw-text-4xl md:tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-6">
            Frequently Asked <GradientText>Questions</GradientText>
          </h2>
        </motion.div>

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
