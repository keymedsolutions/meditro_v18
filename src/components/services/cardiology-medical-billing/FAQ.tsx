"use client";
import React from "react";
import { Accordion } from "react-bootstrap";

const FAQ = () => {
  const faqs = [
    {
      question:
        "What are the benefits of outsourcing cardiology billing to a specialised company?",
      answer:
        "Outsourcing cardiology billing allows practices to focus on patient care while reducing administrative tasks. Specialised companies like Key MedSolutions ensure accurate coding, faster claim processing, and higher reimbursement rates.",
    },
    {
      question:
        "How does a cardiology medical billing company in the USA ensure compliance?",
      answer:
        "Professional companies strictly follow HIPAA regulations, Medicare guidelines, and payer-specific rules. They also provide ongoing training to stay updated with the latest changes in medical billing standards.",
    },
    {
      question:
        "Can your billing services integrate with our existing EMR or EHR systems?",
      answer:
        "Yes, we seamlessly integrate with your current EMR/EHR systems to streamline data transfer, eliminate redundancy, and reduce manual errors.",
    },
    {
      question:
        "How does outsourcing cardiology billing improve overall revenue cycle management?",
      answer:
        "Partnering with Key MedSolutions simplifies your entire revenue cycle. Our expert team manages everything from coding and claims submission to denial management, ensuring faster reimbursements, reduced revenue leakage, and a more predictable financial performance for your practice.",
    },
    {
      question:
        "What specific cardiology procedures do your billing services cover?",
      answer:
        "Our billing services cover a wide range of cardiology procedures, including echocardiograms, stress tests, catheterisations, interventional procedures, and advanced cardiac imaging.",
    },
  ];

  const mid = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, mid);
  const secondHalf = faqs.slice(mid);
  return (
    <section className="container tw-py-24">
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-text-center tw-mb-12">
          <h4 className="tw-gradient-text mb-4">
            Frequently Asked Questions (FAQs)
          </h4>
        </div>

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

export default FAQ;
