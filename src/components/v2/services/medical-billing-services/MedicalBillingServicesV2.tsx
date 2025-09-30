"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import WhyChooseOurMedicalBilling from "@/components/services/common/WhyChooseOurMedicalBilling";
import WhoWeServe from "@/components/services/common/WhoWeServe";
import SolutionsWeOffer from "@/components/services/common/SolutionsWeOffer";
import HeroContent from "./HeroContent";
import MedicalBillingAdvantages from "./MedicalBillingAdvantages";
import { ComprehensiveServices } from "./ComprehensiveServices";
import AdvancedMedicalBillingSoftware from "./AdvancedMedicalBillingSoftware";
import { SpecializedMedicalBillingExpertise } from "./SpecializedMedicalBillingExpertise";
import KeyMedSolutionsPartner from "./KeyMedSolutionsPartner";
import { ReadyToTransformYourRevenueCycle } from "./ReadyToTransformYourRevenueCycle";

const MedicalBillingServicesV2 = () => {
  const services = [
    "End-to-End Medical Billing and Coding Services",
    "Charge Capture and Claims Submission",
    "Payment Posting & Reconciliation",
    "Denial Management and Appeals",
    "AR Recovery & Follow-Up",
    "Credentialing and Provider Enrolment Support",
    "Customized Reporting & Real-Time Analytics",
    "HIPAA-Compliant Data Handling",
    "Payer Contract Review & Fee Schedule Analysis",
    "Integration with Major EHR & PM Systems",
  ];

  const title =
    "Reliable, Affordable, and HIPAA-Compliant Medical Billing Services for Healthcare Providers";
  const path = "/medical-billing-company";

  const mid = Math.ceil(services.length / 2);
  const firstHalf = services.slice(0, mid);
  const secondHalf = services.slice(mid);

  // Array of feature objects with Tailwind bg classes
  const WhyChooses = [
    {
      icon: "🏆",
      label: "Decades of Expertise in Medical Billing and Coding",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: "🔒",
      label: "HIPAA-Compliant, Secure Billing Infrastructure",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: "💼",
      label: "Scalable Services for Small Clinics to Large Enterprises",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    {
      icon: "⏱️",
      label: "Real-Time Claims Tracking & Transparent Reporting",
      className:
        "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300",
    },
    {
      icon: "🔄",
      label: "Seamless EHR/EMR Integration",
      className:
        "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300",
    },
    {
      icon: "👨‍💼",
      label: "Dedicated Account Managers & 24/7 Support",
      className:
        "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300",
    },
    {
      icon: "🏥",
      label: "Specialized in Managed Billing for Medical Practices",
      className:
        "!tw-border-2 !tw-border-secondary-400 tw-bg-secondary-200 after:!tw-bg-secondary-400",
    },
    {
      icon: "✅",
      label: "100% US-Based Medical Billing Company",
      className:
        "!tw-border-2 !tw-border-pink-300 tw-bg-pink-100 after:!tw-bg-pink-300",
    },
    {
      icon: "📈",
      label: "Proven Track Record of Revenue Growth & Faster Reimbursements",
      className:
        "!tw-border-2 !tw-border-purple-300 tw-bg-purple-100 after:!tw-bg-purple-300",
    },
  ];

  const clientTypes = [
    { icon: "👨‍⚕️", text: "Individual Physicians and Solo Practices" },
    { icon: "🏥", text: "Multispecialty Clinics and Medical Groups" },
    { icon: "🔬", text: "Diagnostic & Imaging Centers" },
    { icon: "❤️", text: "Radiology, Cardiology, Internal Medicine Providers" },
    { icon: "👨‍⚕️", text: "Surgical Centers & Ambulatory Practices" },
    { icon: "🏥", text: "Hospital-Owned Physician Networks" },
    { icon: "📱", text: "Telehealth and Virtual Care Providers" },
    { icon: "🏢", text: "Healthcare Startups and RCM Firms" },
  ];
  const faqs = [
    {
      question: "What does a medical billing company do?",
      answer:
        "A medical billing company takes care of tasks like submitting claims, posting payments, and resolving denials. This ensures providers receive timely reimbursements while reducing administrative overhead.",
    },
    {
      question: "Why should I outsource medical billing services?",
      answer:
        "Outsourcing saves time, reduces errors, and streamlines revenue collection. It enables healthcare providers to concentrate on patient care while professionals handle the complexities of billing and compliance.",
    },
    {
      question: "How does Key MedSolutions ensure secure data handling?",
      answer:
        "Key MedSolutions adheres to strict HIPAA guidelines, ensuring the secure handling of sensitive patient information and maintaining compliance with all applicable healthcare regulations.",
    },
    {
      question: "Can Key MedSolutions work with my existing EHR system?",
      answer:
        "Yes, Key MedSolutions seamlessly integrates with major EHR systems, offering transparent reporting and streamlined workflows without disrupting your current technology infrastructure.",
    },
    {
      question: "How do medical billing services help reduce claim denials?",
      answer:
        "Experienced billers use advanced systems to identify and resolve issues before claims submission. This improves first-pass approval rates, minimising denials and ensuring faster reimbursements for providers.",
    },
  ];

  return (
    <>
      <div className="tw-overflow-hidden">
        <HeroContent />
        <MedicalBillingAdvantages />
        <ComprehensiveServices />
        <AdvancedMedicalBillingSoftware />
        <SpecializedMedicalBillingExpertise />
        <KeyMedSolutionsPartner />
        <ReadyToTransformYourRevenueCycle />
      </div>

      {/* <SolutionsWeOffer
        firstHalf={firstHalf}
        secondHalf={secondHalf}
        title="Comprehensive Medical Billing Services We Offer"
      />

      <WhoWeServe title="Who We Serve" data={clientTypes} />

      <WhyChooseOurMedicalBilling
        title="Why Choose Our Medical Billing Services?"
        data={WhyChooses}
      /> */}

      <div className="container tw-pb-16">
        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">
              Frequently Asked Question (FAQs)
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

export default MedicalBillingServicesV2;
