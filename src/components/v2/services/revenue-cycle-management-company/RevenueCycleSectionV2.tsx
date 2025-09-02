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
import RevenueCycleManagementServices from "./RevenueCycleManagementServices";
import OutsourceBenefits from "./OutsourceBenefits";
import RevenueCycleManagement from "./RevenueCycleManagement";
import BenefitsSection from "./BenefitsSection";
import WhyChooseUs from "./WhyChooseUs";
import StreamlineSection from "./StreamlineSection";

const RevenueCycleSectionV2 = () => {
  const services = [
    "End-to-End Medical Billing & Coding Services",
    "Claims Management – Submission, Follow-Up & Payment Posting",
    "Insurance Eligibility & Benefits Verification",
    "Denial Management & Resolution",
    "Patient Billing, Collections & Statement Management",
    "Accounts Receivable Recovery & Medical Debt Collection",
    "Specialty Billing Services (Radiology, Cardiology, etc.)",
    "Revenue Cycle KPIs Tracking & Performance Reporting",
    "Profitability Enhancement & Workflow Optimization",
    "HIPAA-Compliant and Secure Billing Solutions",
  ];

  const title =
    "Trusted Healthcare Revenue Cycle Management Solutions for Improved Financial Performance";
  const path = "/revenue-cycle-management-services";

  const mid = Math.ceil(services.length / 2);
  const firstHalf = services.slice(0, mid);
  const secondHalf = services.slice(mid);

  // Array of feature objects with Tailwind bg classes
  const WhyChooses = [
    {
      icon: "⚙️",
      label: "Complete Revenue Cycle Management from Start to Finish",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: "🔍",
      label: "Enhanced Claim Accuracy and Lower Denial Rates",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: "💼",
      label: "Scalable Solutions Tailored to Your Practice Needs",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    {
      icon: "📉",
      label: "Accelerated Reimbursements & Improved Cash Flow",
      className:
        "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300",
    },
    {
      icon: "🧠",
      label: "Experienced Team with In-depth Industry Knowledge",
      className:
        "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300",
    },
    {
      icon: "📊",
      label: "Real-Time KPI Reporting for Informed Decision-Making",
      className:
        "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300",
    },
    {
      icon: "🛡️",
      label: "Secure, Compliant, and Transparent Operations",
      className:
        "!tw-border-2 !tw-border-secondary-400 tw-bg-secondary-200 after:!tw-bg-secondary-400",
    },
    {
      icon: "🤝",
      label: "Personalized Support with Dedicated Account Managers",
      className:
        "!tw-border-2 !tw-border-pink-300 tw-bg-pink-100 after:!tw-bg-pink-300",
    },
  ];

  const clientTypes = [
    { icon: "👨‍⚕️", text: "Independent Physicians & Solo Medical Practices" },
    {
      icon: "🏨",
      text: "Multi-Specialty Clinics & Ambulatory Surgery Centers",
    },
    {
      icon: "👨‍⚕️",
      text: "Specialty Providers (Radiology, Cardiology, Behavioural Health, etc.)",
    },
    { icon: "🏥", text: "Hospitals & Integrated Health Systems" },
    {
      icon: "🌎",
      text: "Global Providers Needing U.S. Healthcare Billing Support",
    },
  ];

  const faqs = [
    {
      question: "What does Revenue Cycle Management (RCM) involve?",
      answer:
        "RCM encompasses the entire financial process in healthcare, from patient registration to final payment. It ensures accurate billing, claim submission, and reimbursement to maintain consistent cash flow and operational efficiency.",
    },
    {
      question: "Why should I outsource Revenue Cycle Management?",
      answer:
        "Outsourcing RCM allows healthcare providers to focus on patient care while experts handle billing accuracy, claims denial management, and cash flow efficiency, delivering cost-effective and results-driven financial performance improvements.",
    },
    {
      question: "How does Key MedSolutions optimize RCM processes?",
      answer:
        "Key MedSolutions leverages advanced tools and industry best practices to reduce errors, optimize claims submission, improve reimbursement rates, and provide customized solutions tailored to your practice’s unique financial and operational needs.",
    },
    {
      question: "What industries does Key MedSolutions serve?",
      answer:
        "We serve independent physicians, specialty clinics, hospitals, and global healthcare providers needing U.S. billing support. Our expertise spans across radiology, cardiology, behavioural health, and other specialties.",
    },
    {
      question: "How do RCM services improve denial rates?",
      answer:
        "Effective denial management reviews, resolves, and prevents issues through proactive verification, accurate coding, and advanced tracking, ultimately improving your practice’s first-pass resolution rate and reducing the financial impact of denials.",
    },
    {
      question: "Are RCM services compliant with healthcare regulations?",
      answer:
        "Yes, all RCM services offered are HIPAA-compliant and focus on safeguarding patient data while adhering to the latest healthcare industry standards to ensure secure and lawful operations.",
    },
  ];

  return (
    <React.Fragment>
      <div className="tw-overflow-hidden">
        <HeroSection />
        <RevenueCycleManagementServices />
        <OutsourceBenefits />
        <RevenueCycleManagement />
        <BenefitsSection />
        <WhyChooseUs />
        <StreamlineSection />
      </div>

      <div className="container tw-pb-16">
        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">
              FAQs – Revenue Cycle Management Solutions
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

export default RevenueCycleSectionV2;
