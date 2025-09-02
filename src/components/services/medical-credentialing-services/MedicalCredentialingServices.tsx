"use client";

import React from "react";
import HeroSection from "./HeroSection";
import CredentialingEssentials from "./CredentialingEssentials";
import HeroContent from "./HeroContent";
import CredentialingServices from "./CredentialingServices";
import WhyChooseKeyMedSolutions from "./WhyChooseKeyMedSolutions";
import { motion } from "framer-motion";
import BenefitsSection from "./BenefitsSection";
import ContactUs from "./ContactUs";
import { Accordion } from "react-bootstrap";

const MedicalCredentialingServices = () => {
  const faqs = [
    {
      question:
        "What are medical credentialing services, and why are they important?",
      answer:
        "Medical credentialing services involve verifying a healthcare provider’s qualifications, experience, and compliance with insurance and regulatory requirements. They are essential to ensure that providers are recognized by insurance companies and can bill for their services without delays.",
    },
    {
      question: "How long does the credentialing process take?",
      answer:
        "The timeline for credentialing can vary depending on the payer and the complexity of the application. On average, it can take 60-90 days. At Key MedSolutions, we work to expedite the process and minimize delays.",
    },
    {
      question: "Can you help with Medicare and Medicaid enrollment?",
      answer:
        "Yes, we specialize in Medicare and Medicaid enrollment as part of our credentialing services. We handle the complex paperwork and ensure compliance with all governmental requirements.",
    },
    {
      question: "Do you offer ongoing credentialing maintenance?",
      answer:
        "Absolutely! Credentialing is not a one-time process. We provide annual credentialing maintenance to ensure your practice remains compliant and can bill for all team members without interruptions.",
    },
    {
      question: "What types of healthcare providers do you credential?",
      answer:
        "We provide credentialing services for physicians, nurse practitioners, physician assistants, and other healthcare professionals. We aim to keep your entire team fully credentialed and compliant.",
    },
    {
      question: "Why should I outsource credentialing to Key MedSolutions?",
      answer:
        "Outsourcing to Key MedSolutions saves you time, reduces administrative burdens, and ensures accuracy. Our expertise and industry connections allow us to secure better rates and faster approvals, helping your practice maximize revenue.",
    },
    {
      question:
        "What makes Key MedSolutions different from other physician credentialing companies?",
      answer:
        "At Key MedSolutions, we combine years of expertise, strong industry connections, and a results-driven approach. Unlike other companies, we offer end-to-end solutions, including credentialing, payer contracting, and medical billing services, ensuring your practice operates smoothly and profitably.",
    },
  ];

  return (
    <React.Fragment>
      <div className="tw-overflow-hidden">
        <HeroSection />
        {/* <CredentialingEssentials/> */}
        <HeroContent />
        <CredentialingServices />
        <WhyChooseKeyMedSolutions />
        <BenefitsSection />
        <ContactUs />
      </div>
      <div className="container tw-pb-16">
        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">
              Frequently Asked Questions (FAQs)
            </h3>
          </div>

          <Accordion className="accordion ttr-accordion1">
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={String(index)} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MedicalCredentialingServices;
