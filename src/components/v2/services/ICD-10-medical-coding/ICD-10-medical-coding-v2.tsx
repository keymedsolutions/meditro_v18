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
import { ComprehensiveServices } from "./ComprehensiveServices";
import { WhyChooseUs } from "./WhyChooseUs";
import WhoBenefits from "./WhoBenefits";
import { KeyBenefits } from "./KeyBenefits";
import { GetStartedToday } from "./GetStartedToday";

const ICD10MedicalCodingV2 = () => {
  const services = [
    "ICD-10-CM & ICD-10-PCS Coding",
    "CPT & HCPCS Coding Integration",
    "Claim Preparation & Submission Support",
    "Coding Audits & Documentation Review",
    "Specialty-Specific Medical Coding Expertise",
    "Compliance with HIPAA & Payer-Specific Guidelines",
    "Denial Analysis & Coding Corrections",
    "Faster Claim Turnaround & Fewer Rejections",
    "Outsourced ICD-10 Medical Coding Services",
    "Coding for Multispecialty Practices & Clinics",
  ];

  const title =
    "Accurate ICD-10 Medical Coding Services for Healthcare Providers";
  const path = "/revenue-cycle-management-company";

  const faqs = [
    {
      question:
        "What is ICD-10 medical coding, and why is it important for healthcare providers?",
      answer:
        "ICD-10 medical coding services use a standardized code system for diagnoses and procedures, ensuring accurate billing, compliance, reduced claim denials, and faster reimbursements to improve financial outcomes for healthcare providers.",
    },
    {
      question:
        "How does outsourcing ICD-10 coding services benefit healthcare providers?",
      answer:
        "By choosing to outsource ICD-10 coding services, you receive certified expertise, improved accuracy and compliance, scalable solutions, and reduced in-house training costs from a professional ICD-10 Coding Company.",
    },
    {
      question:
        "How do ICD-10 coding services improve revenue cycle management?",
      answer:
        "Professional ICD-10 Coding Services help optimise revenue cycle management by ensuring accuracy in claims, reducing errors and denials, and accelerating reimbursements, which strengthens your practice’s financial performance.",
    },
    {
      question: "What qualifications do ICD-10 Coding Specialists have?",
      answer:
        "A certified ICD-10 Coding Specialist holds credentials from organisations like AAPC or AHIMA, possessing advanced knowledge in ICD-10 medical coding Services and payer-specific requirements for accuracy and compliance.",
    },
    {
      question: "Why should I choose an ICD-10 coding company in the USA?",
      answer:
        "An ICD-10 coding company in USA understands US-specific healthcare regulations, HIPAA requirements, and payer rules, delivering localised expertise and solutions from a Top ICD-10 Coding Company.",
    },
    {
      question:
        "Can ICD-10 medical coding be customised for specific healthcare specialities?",
      answer:
        "A specialised ICD-10 Medical Coding company tailors coding for practices like orthopaedics or cardiology, ensuring improved accuracy and maximum reimbursement across diverse medical specialties.",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content bg-white aboutus">
        <HeroSection />
        <HealthcareProviders />
        <ComprehensiveServices />
        <WhyChooseUs />
        <WhoBenefits />
        <KeyBenefits />
        <GetStartedToday />
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

export default ICD10MedicalCodingV2;
