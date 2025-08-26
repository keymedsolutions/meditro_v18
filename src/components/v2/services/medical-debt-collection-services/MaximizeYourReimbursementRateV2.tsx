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
import { WhyChoose } from "./WhyChoose";
import { Services } from "./Services";
import ContactUsToday from "./ContactUsToday";
import OptimizeRevenueSection from "./OptimizeRevenueSection";
import { PartnerWithUsSection } from "./PartnerWithUsSection";

const MaximizeYourReimbursementRateV2 = () => {
  const services = [
    "Patient Billing & Collections",
    "Insurance Accounts Receivable (A/R) Recovery",
    "Revenue Cycle Recovery & Optimization",
    "Co-Pay and Deductible Collections",
    "Full-Service Medical Billing and Collections",
    "Customized Debt Recovery Strategies",
    "Denial Follow-Up and Appeals",
    "HIPAA-Compliant Debt Collection Practices",
    "Reporting & Performance Analytics",
    "Professional and Compassionate Communication",
  ];

  const title =
    "Comprehensive Medical Billing and Collection Services for Efficient Cash Flow";
  const path = "/revenue-cycle-management-company";

  const mid = Math.ceil(services.length / 2);
  const firstHalf = services.slice(0, mid);
  const secondHalf = services.slice(mid);

  // Array of feature objects with Tailwind bg classes
  const WhyChooses = [
    {
      icon: "📞",
      label: "Patient-Friendly, Professional Communication",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: "💼",
      label: "Industry-Leading Medical Collections Expertise",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: "⚙️",
      label: "Seamless Integration with Your PM/EHR Systems",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    {
      icon: "🔐",
      label: "Fully Compliant with HIPAA and Collection Laws",
      className:
        "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300",
    },
    {
      icon: "📈",
      label: "Enhanced Collection Rates and Cash Flow",
      className:
        "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300",
    },
    {
      icon: "🧠",
      label: "Experienced Medical Billing and Coding Staff",
      className:
        "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300",
    },
    {
      icon: "💬",
      label: "Transparent Communication and Real-Time Updates",
      className:
        "!tw-border-2 !tw-border-secondary-400 tw-bg-secondary-200 after:!tw-bg-secondary-400",
    },
    {
      icon: "📊",
      label: "Data-Driven Decision Making and Reporting",
      className:
        "!tw-border-2 !tw-border-pink-300 tw-bg-pink-100 after:!tw-bg-pink-300",
    },
  ];

  const clientTypes = [
    { icon: "🏥", text: "Independent Medical Practices" },
    {
      icon: "🏨",
      text: "Specialty Clinics (Cardiology, Radiology, Internal Medicine, etc.)",
    },
    { icon: "🏨", text: "Hospitals and Multi-Specialty Health Systems" },
    { icon: "🖼️", text: "Diagnostic Labs and Imaging Centers" },
    { icon: "🗃️", text: "Billing Companies and RCM Providers" },
  ];

  const faqs = [
    {
      question: "What is a Medical Debt Collection Service?",
      answer:
        "A Medical Debt Collection Service helps healthcare providers recover unpaid medical bills efficiently, streamlining the billing process and improving cash flow through professional healthcare debt recovery services.",
    },
    {
      question:
        "Why should healthcare providers outsource healthcare debt collection services?",
      answer:
        "Outsourcing Healthcare Debt Collection Services lets providers focus on patient care while specialists ensure compliance, reduce accounts receivable, and increase collection rates for a healthier revenue cycle.",
    },
    {
      question:
        "Is Key MedSolutions a HIPAA-compliant medical debt collection company?",
      answer:
        "Yes, Key MedSolutions is fully HIPAA-compliant, ensuring secure, confidential handling of patient information in all Healthcare Debt Collection and Medical Billing Collections Solutions.",
    },
    {
      question:
        "How does outsourcing to a medical debt collection company in Australia improve cash flow?",
      answer:
        "Working with a Medical Debt Collection Company in Australia speeds up collections, minimizes claim denials, and ensures reliable cash flow using tailored Accounts Receivable Recovery Services.",
    },
    {
      question:
        "What additional services does Key MedSolutions provide beyond debt collection?",
      answer:
        "Key MedSolutions also offers Medical Claim Billing, Profit Enhancement Services, and Accounts Receivable Recovery Services to optimize revenue and support overall financial health for healthcare providers.",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content bg-white aboutus">
        <HeroSection />
        <WhyChoose />
        <Services />
        <OptimizeRevenueSection />
        <PartnerWithUsSection />
        <ContactUsToday />
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

export default MaximizeYourReimbursementRateV2;
