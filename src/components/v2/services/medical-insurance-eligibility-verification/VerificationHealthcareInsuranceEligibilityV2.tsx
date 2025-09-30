"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { HeroSection } from "./HeroSection";
import OutsourceEligibility from "./OutsourceEligibility";
import { EligibilityServices } from "./EligibilityServices";
import WhoWeSupport from "./WhoWeSupport";
import { InsuranceSpecialistSection } from "./InsuranceSpecialistSection";
import { VerificationServices } from "./VerificationServices";
import InsuranceVerification from "./InsuranceVerification";
import PatientEligibilityService from "./PatientEligibilityService";
import EligibilityServiceExperience from "./EligibilityServiceExperience";
import WhyChooseUs from "./WhyChooseUs";
import MedicalInsuranceSection from "./MedicalInsuranceSection";

const VerificationHealthcareInsuranceEligibilityV2 = () => {
  const services = [
    "Real-Time Health Insurance Verification",
    "Patient Benefits and Coverage Validation",
    "Copay, Deductible & Coinsurance Verification",
    "Pre-Authorization & Referral Requirement Checks",
    "Primary, Secondary & Tertiary Insurance Verification",
    "Medicare, Medicaid & Commercial Plan Coverage Checks",
    "Front-Desk Eligibility Software Integration",
    "Revenue Cycle Optimization Tools",
    "HIPAA-Compliant Eligibility Verification Processes",
    "Dedicated Insurance Verification Support Team",
  ];

  const title =
    "Boost Efficiency with Fast and Accurate Healthcare Insurance Eligibility Verification";

  const path = "/revenue-cycle-management-services";

  const mid = Math.ceil(services.length / 2);
  const firstHalf = services.slice(0, mid);
  const secondHalf = services.slice(mid);

  // Array of feature objects with Tailwind bg classes
  const WhyChooses = [
    {
      icon: "✅",
      label: "Increase Point-of-Service Collections",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: "🔍",
      label: "Reduce Denials Due to Coverage Issues",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: "⚙️",
      label: "Seamless Integration with Your EHR/PM Systems",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    {
      icon: "📈",
      label: "Improved Revenue Cycle Outcomes",
      className:
        "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300",
    },
    {
      icon: "🧠",
      label: "Experienced Insurance Verification Experts",
      className:
        "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300",
    },
    {
      icon: "🔐",
      label: "HIPAA-Compliant, Secure Verification Process",
      className:
        "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300",
    },
    {
      icon: "📞",
      label: "24/7 Support & Real-Time Updates",
      className:
        "!tw-border-2 !tw-border-secondary-400 tw-bg-secondary-200 after:!tw-bg-secondary-400",
    },
    {
      icon: "🗃️",
      label: "Tailored Solutions for Any Practice Size",
      className:
        "!tw-border-2 !tw-border-pink-300 tw-bg-pink-100 after:!tw-bg-pink-300",
    },
  ];

  const clientTypes = [
    { icon: "🏥", text: "Independent Healthcare Providers" },
    { icon: "🏥", text: "Multi-Specialty Clinics & Diagnostic Labs" },
    {
      icon: "🏨",
      text: "Medical Practices (Cardiology, Radiology, Internal Medicine, etc.)",
    },
    { icon: "🏨", text: "Hospital Systems & Outpatient Facilities" },
    { icon: "📋", text: "Medical Billing & RCM Companies" },
    { icon: "🧑‍⚕️", text: "Telehealth & Virtual Care Providers" },
  ];

  const faqs = [
    {
      question: "What are Medical Insurance Eligibility Verification Services?",
      answer:
        "This ensures timely confirmation of a patient’s insurance status—covering benefits, limitations, deductibles, and required authorizations—before delivering care.",
    },
    {
      question:
        "How do Health Insurance Eligibility Verification Services benefit providers?",
      answer:
        "Accurate, real-time data speeds up claim submission, prevents revenue leakage, and elevates patient satisfaction.",
    },
    {
      question: "Do you support all payers and multiple plans?",
      answer:
        "Yes, our experts verify Medicare, Medicaid, all major commercial payers, and multi-plan coverage per patient.",
    },
    {
      question: "How does outsourcing help my practice?",
      answer:
        "With Outsource Insurance Verification Services, you let experts handle the details, freeing your staff to focus on patient needs and clinical outcomes.",
    },
    {
      question: "Can we trust compliance and data security?",
      answer:
        "Absolutely. As a top Insurance Verification Company USA, we strictly follow HIPAA and all relevant regulatory standards.",
    },
  ];

  return (
    <>
      <div className="tw-overflow-hidden">
        <HeroSection />
        <OutsourceEligibility />
        <EligibilityServices />
        <WhoWeSupport />
        <InsuranceSpecialistSection />
        <VerificationServices />
        <InsuranceVerification />
        {/* <PatientEligibilityService /> */}
        <EligibilityServiceExperience />
        <WhyChooseUs />
        <MedicalInsuranceSection />
      </div>

      <div className="container tw-pb-16">
        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">
              Frequently Asked Questions
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

export default VerificationHealthcareInsuranceEligibilityV2;
