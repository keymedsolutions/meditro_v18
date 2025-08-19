"use client";
import React from "react";
import { Accordion } from "react-bootstrap";

const FAQSection = () => {
  const faqs = [
    {
      question: "What services does Key MedSolutions provide?",
      answer:
        "We provide fully integrated solutions for medical billing and revenue cycle management. This includes patient eligibility verification, claims submission, payment posting, denial management, and more.",
    },
    {
      question: "Why should I outsource my medical billing?",
      answer:
        "Outsourcing takes the pressure off - freeing your time, cutting down errors, and boosting your cash flow. With experts handling your medical billing and RCM, you can focus on patient care while we ensure your claims are processed efficiently.",
    },
    {
      question: "Is my patient data secure with Key MedSolutions?",
      answer:
        "Yes, we prioritize data security. Our systems are fully compliant with HIPAA regulations, ensuring your patient information is protected at all times.",
    },
    {
      question: "Do you support multiple medical specialties?",
      answer:
        "Yes, we work with a wide range of specialties, including cardiology, orthopedics, dermatology, and more. Our team is experienced in handling the unique billing needs of various fields.",
    },
    {
      question: "Can you integrate with my existing EHR/EMR system?",
      answer:
        "Absolutely! We seamlessly integrate with most EHR/EMR systems to ensure smooth workflows and efficient data management.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy. Contact us to discuss your needs, and we’ll create a customized plan for your medical billing and RCM requirements. We’ll guide you through every step of the process!",
    },

    {
      question: "Do you offer support for denied claims?",
      answer:
        "Yes, we specialize in denial management. Our team reviews denied claims, identifies the issues, and works to resolve them quickly to ensure you get paid faster.",
    },
    {
      question:
        "What makes Key MedSolutions different from other RCM providers?",
      answer:
        "We focus on transparency, efficiency, and personalized service. Our per-ticket pricing model ensures you only pay for what you need, and our team is dedicated to helping you maximize revenue while minimizing stress.",
    },
  ];

  const mid = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, mid);
  const secondHalf = faqs.slice(mid);
  return (
    <>
      <section className="section-sp1 service-wraper2">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">FAQs</h6>
            <h2 className="title">Frequently Asked Questions (FAQs)</h2>
          </div>

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
        </div>
      </section>
    </>
  );
};

export default FAQSection;
