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
  const services = [
    "Aging AR Follow-up (30, 60, 90, 120+ Days)",
    "Denial Management & Appeals",
    "Insurance Claims Reprocessing",
    "Patient Balance Recovery",
    "AR Workflow Optimization",
    "Revenue Cycle Audit & Strategy",
    "Claims Status Verification",
    "Insurance Eligibility Review for Denied Claims",
    "Reporting & Analytics on AR Trends",
    "HIPAA-Compliant Collections Process",
  ];

  const title =
    "Accelerate Collections with Comprehensive Accounts Receivable Recovery Solutions";

  const path = "/revenue-cycle-management-company";

  const mid = Math.ceil(services.length / 2);
  const firstHalf = services.slice(0, mid);
  const secondHalf = services.slice(mid);

  // Array of feature objects with Tailwind bg classes
  const WhyChooses = [
    {
      icon: "👨‍⚕️",
      label: "Independent Physicians & Specialty Clinics",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: "🏥",
      label: "Multispecialty Practices & Diagnostic Centers",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: "🏨",
      label: "Hospitals & Ambulatory Care Facilities",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    {
      icon: "💻⚕️",
      label: "Telehealth Providers & Urgent Care Centers",
      className:
        "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300",
    },
    {
      icon: "📊",
      label: "Healthcare Billing Companies & MSOs",
      className:
        "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300",
    },
  ];

  const clientTypes = [
    { icon: "👨‍⚕️", text: "Independent Physicians & Specialty Clinics" },
    { icon: "🏥", text: "Multispecialty Practices & Diagnostic Centers" },
    { icon: "🏨", text: "Hospitals & Ambulatory Care Facilities" },
    { icon: "📑", text: "Healthcare Billing Companies & MSOs" },
    { icon: "📲", text: "Telehealth Providers & Urgent Care Centers" },
  ];

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
      {/* 
      <SolutionsWeOffer
        firstHalf={firstHalf}
        secondHalf={secondHalf}
        title="Comprehensive Accounts Receivable Recovery Services We Offer"
      /> */}

      {/* <WhoWeServe title="Who We Serve" data={clientTypes} /> */}

      {/* <WhyChooseOurMedicalBilling
        title="Why Choose Our Accounts Receivable Recovery Services?"
        data={WhyChooses}
      /> */}

      <div className="container tw-pb-16">
        {/* <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">
              Let's Maximize Your Revenue from Aging Claims!
            </h3>
          </div>
          <p>
            Maximize the cash flow potential of your practice with Key
            MedSolutions! Our Accounts Receivable Recovery Services can recover
            unpaid revenue, decrease denials and streamline your billing cycles.
          </p>

          <p>
            <Link className="tw-font-bold tw-text-black" href={"/contact-us"}>
              {" "}
              Contact us
            </Link>{" "}
            today for a free consultation to find out how our AR recovery
            services will help you take better control of your revenue cycle.
          </p>
        </div> */}

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
