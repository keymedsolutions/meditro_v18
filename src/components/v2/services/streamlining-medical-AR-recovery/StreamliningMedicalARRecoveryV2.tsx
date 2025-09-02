"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import WhyChooseOurMedicalBilling from "@/components/services/common/WhyChooseOurMedicalBilling";
import WhoWeServe from "@/components/services/common/WhoWeServe";
import SolutionsWeOffer from "@/components/services/common/SolutionsWeOffer";
import { ArRecoveryHero } from "./HeroSection";
import WhyChoose from "./WhyChoose";
import { ArComprehensiveServices } from "./ArComprehensiveServices";
import { ServicesApart } from "./ServicesApart";
import { Benefits } from "./Benefits";
import RecoverySolutions from "./RecoverySolutions";
import PartnerWithAnAccounts from "./PartnerWithAnAccounts";
import { ArGetStarted } from "./ArGetStarted";

const StreamliningMedicalARRecoveryV2 = () => {
  const faqs = [
    {
      question: "What are Accounts Receivable Recovery Solutions?",
      answer:
        "Accounts Receivable Recovery Solutions focus on recovering unpaid claims and overdue balances for healthcare providers. These services streamline collections, reduce denials, and improve cash flow, allowing practices to focus on patient care.",
    },
    {
      question: "How does Key MedSolutions improve AR recovery rates?",
      answer:
        "Key MedSolutions employs a combination of advanced medical AR recovery services, denial management, and tailored workflows to maximize recovery rates. Our team ensures timely follow-ups and efficient claims processing to reduce aged accounts.",
    },
    {
      question:
        "Why should I choose Key MedSolutions for AR Recovery Services?",
      answer:
        "Key MedSolutions is a trusted leader in outstanding AR recovery services across the USA. We offer customized solutions, transparent reporting, and a proven track record of helping healthcare providers recover lost revenue efficiently.",
    },
    {
      question:
        "What types of healthcare providers can benefit from AR Recovery Services?",
      answer:
        "Our services are designed for independent physicians, specialty clinics, hospitals, telehealth providers, and multispecialty practices. We also specialize in AR recovery services for hospitals and large healthcare organizations.",
    },
    {
      question:
        "Are Key MedSolutions' services compliant with healthcare regulations?",
      answer:
        "Yes, all our services, including healthcare AR recovery services USA, adhere to HIPAA regulations and industry standards, ensuring the safety and confidentiality of patient data.",
    },
  ];

  return (
    <>
      <div className="page-content bg-white aboutus">
        <ArRecoveryHero />
        <WhyChoose />
        <ServicesApart />
        <ArComprehensiveServices />
        <Benefits />
        <RecoverySolutions />
        <PartnerWithAnAccounts />
        <ArGetStarted />
      </div>

      <div className="container tw-pb-16">
        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">
              FAQs - Accounts Receivable Recovery Services
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
    </>
  );
};

export default StreamliningMedicalARRecoveryV2;
