"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import WhyChooseOurMedicalBilling from "@/components/services/common/WhyChooseOurMedicalBilling";
import WhoWeServe from "@/components/services/common/WhoWeServe";
import SolutionsWeOffer from "@/components/services/common/SolutionsWeOffer";
import HeroSection from "./HeroSection";
import HealthcareProviders from "./HealthcareProviders";
import { OurCoreServices } from "./OurCoreServices";
import { WhatSetsUsApart } from "./WhatSetsUsApart";
import { BenefitsOfPartnering } from "./BenefitsOfPartnering";
import { WhoDoWeServe } from "./WhoDoWeServe";
import FinancialProfitEnhancementCritical from "./FinancialProfitEnhancementCritical";
import StartBoosting from "./StartBoosting";

const ProfitEnhancementServices = () => {
  const faqs = [
    {
      question: "What are Profit Enhancement Services?",
      answer:
        "Profit Enhancement Services are targeted strategies that help healthcare organizations maximize revenue, cut costs, and improve operational efficiency for greater financial health and sustained business growth.",
    },
    {
      question:
        "How can Profit Enhancement Services benefit my healthcare practice?",
      answer:
        "These services can reduce claim denials, speed up reimbursements, lower unnecessary expenses, and enable your team to devote more time to quality patient care instead of administrative and financial challenges.",
    },
    {
      question:
        "Are Profit Enhancement Services customizable to my practice’s needs?",
      answer:
        "Yes, Profit Enhancement Services are always tailored to your practice’s size, specialties, and workflow. Key MedSolutions creates personalized plans that address your unique financial goals and operational challenges.",
    },
    {
      question: "Do these services comply with healthcare regulations?",
      answer:
        "Absolutely. All services strictly follow HIPAA and other healthcare regulations to ensure your practice’s data remains secure and compliant at every stage of implementation.",
    },
    {
      question: "Will these services integrate with my existing systems?",
      answer:
        "Yes, integration is seamless and designed to work with most Practice Management or EHR systems. Key MedSolutions ensures minimal disruption so you can maintain business continuity.",
    },
    {
      question:
        "How do I know if my practice needs Profit Enhancement Services?",
      answer:
        "If you’re experiencing cash flow issues, rising operational costs, or frequent claim denials, these services can help. Schedule an assessment to see where your practice can improve and boost revenue.",
    },
  ];

  return (
    <>
      <div className="page-content bg-white aboutus tw-overflow-hidden">
        <HeroSection />
        <HealthcareProviders />
        <OurCoreServices />
        <WhatSetsUsApart />
        <BenefitsOfPartnering />
        <WhoDoWeServe />
        <FinancialProfitEnhancementCritical />
        <StartBoosting />
      </div>

      <div className="container tw-pb-16">
        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">
              Profit Enhancement Services FAQs
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

export default ProfitEnhancementServices;
