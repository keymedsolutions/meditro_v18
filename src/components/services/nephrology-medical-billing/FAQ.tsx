"use client";
import SectionHeading from "@/components/ui/section-heading";
import React from "react";
import { Accordion } from "react-bootstrap";

const faqs = [
  {
    question: "What services do you provide under Nephrology Medical Billing?",
    answer:
      "We offer comprehensive services including patient eligibility verification, precise medical coding, clean claims submission, denial management, payment posting, revenue cycle analytics, and customized reporting tailored to nephrology and internal medicine practices.",
  },
  {
    question: "Why should I outsource nephrology billing to Key MedSolutions?",
    answer:
      "Outsourcing to our expert team reduces administrative workload, minimizes errors, and ensures you stay updated with compliance and payer requirements. This improves cash flow and gives you more time to focus on patient care.",
  },
  {
    question: "How do you ensure compliance with the latest healthcare regulations?",
    answer:
      "Our processes strictly follow HIPAA guidelines and all current state and federal regulations. We continuously update our workflows and train our Nephrology Billing Experts on the latest industry standards to keep your practice secure and compliant.",
  },
  {
    question: "What makes Key MedSolutions different from other nephrology billing companies?",
    answer:
      "Our team specializes exclusively in nephrology and internal medicine billing. We leverage advanced technology, skilled coders, and tailored support to offer unmatched accuracy, transparency, and customer service.",
  },
  {
    question: "How do you handle claim denials and maximize reimbursements?",
    answer:
      "We proactively monitor, analyze, and appeal denied claims. Our experts identify the root causes of denials and adjust your billing strategies to reduce future issues, ensuring you receive the maximum reimbursement for every service.",
  },
  {
    question: "Can you integrate your billing solutions with my existing EHR or practice management software?",
    answer:
      "Yes, our Nephrology Billing Solutions are designed for seamless integration with a wide range of EHR and practice management systems, promoting efficiency and minimizing workflow disruption.",
  },
  {
    question: "How do I get started with Key MedSolutions' Nephrology Medical Billing services?",
    answer:
      "Starting is simple, just contact us to book your free consultation. Our team will assess your needs, tailor a solution, and guide you through a smooth onboarding process.",
  },
];


const FAQs = () => {
  const mid = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, mid);
  const secondHalf = faqs.slice(mid);

  return (
    <section
      className="tw-container tw-py-16 md:tw-py-24 tw-relative tw-overflow-hidden "
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
