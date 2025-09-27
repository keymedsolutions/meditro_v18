"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import WhyChooseOurMedicalBilling from "@/components/services/common/WhyChooseOurMedicalBilling";
import WhoWeServe from "@/components/services/common/WhoWeServe";
import SolutionsWeOffer from "@/components/services/common/SolutionsWeOffer";
import { HeaderMedicalClaimBilling } from "./HeaderMedicalClaimBilling";
import { InteractiveServices } from "./InteractiveServices";
import { BenefitsSection } from "./BenefitsSection";
import { CTASection } from "./CTASection";
import { HeroSection } from "./HeroSection";
import { WhyChooseSection } from "./WhyChooseSection";
import { motion } from "framer-motion";
import { APP_PATH } from "@/data/PATH_APP";

const MedicalClaimBillingV2 = () => {
  const services = [
    "Claims Submission and Coding",
    "Insurance Eligibility Verification",
    "Denial Management and Appeals",
    "Payment Posting & AR Follow-Up",
    "Patient Billing Support",
    "Reporting and Analytics",
  ];

  const title =
    "Professional Medical Claims Service and Management Solutions Provider for Faster Reimbursements";
  const path = "/";

  const mid = Math.ceil(services.length / 2);
  const firstHalf = services.slice(0, mid);
  const secondHalf = services.slice(mid);

  // Array of feature objects with Tailwind bg classes
  const WhyChooses = [
    {
      icon: "👨‍💼",
      label: "Expert Billing Specialists",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: "💰",
      label: "Cost-Effective Solutions",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: "✅",
      label: "Fewer Denials",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    {
      icon: "🖥️",
      label: "Advanced Technology",
      className:
        "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300",
    },
    {
      icon: "🔒",
      label: "Security & Compliance",
      className:
        "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300",
    },
    {
      icon: "🇺🇸",
      label: "U.S.-Based Outsourcing",
      className:
        "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300",
    },
  ];

  const clientTypes = [
    { icon: "🦷", text: "Dental Practices" },
    { icon: "❤️", text: "Cardiology Clinics" },
    { icon: "🏥", text: "Multi-Specialty and Primary Care" },
    { icon: "🏨", text: "Surgical and Outpatient Centers" },
    { icon: "🔬", text: "Diagnostic and Imaging Centers" },
  ];

  const faqs = [
    {
      question: "What services does Key MedSolutions offer?",
      answer:
        "Key MedSolutions provides comprehensive medical billing services, including claims submission and coding, insurance eligibility verification, denial management and appeals, payment posting and AR follow-up, patient billing support, and reporting and analytics.",
    },
    {
      question: "How does outsourcing medical billing benefit my practice?",
      answer:
        "Outsourcing to Key MedSolutions lowers operational costs, enhances cash flow, and speeds up reimbursements. It also allows your team to focus more on patient care by eliminating the burden of administrative tasks.",
    },
    {
      question: "Is Key MedSolutions HIPAA-compliant?",
      answer:
        "Yes, we adhere to strict HIPAA standards to ensure the privacy and security of your patients' data.",
    },
    {
      question:
        "What types of healthcare providers can benefit from your services?",
      answer:
        "We serve a wide range of providers, including dental practices, cardiology clinics, primary care and multi-specialty providers, surgical and outpatient centers, and diagnostic and imaging labs.",
    },
    {
      question: "How does Key MedSolutions ensure faster reimbursements?",
      answer:
        "Our advanced technology and expert team ensure clean claim submissions with error-free coding, automated insurance eligibility checks, and robust denial management, minimizing delays and maximizing efficiency.",
    },
    {
      question: "Can your services scale with the growth of my practice?",
      answer:
        "Absolutely! Our solutions are designed to be scalable, catering to the needs of small clinics as well as large healthcare networks.",
    },
  ];

  return (
    <>
      <div className="page-content bg-white aboutus tw-overflow-hidden">
        {/* <Breadcrumb title={title} breadcrumb={[{ label: title, href: path }]} /> */}
        <div className="tw-min-h-screen tw-bg-background">
          <main>
            <HeroSection />
            <section id="why-choose" className="!tw-pt-0">
              <WhyChooseSection />
            </section>
            <section id="services">
              <InteractiveServices />
            </section>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              }}
              className="container tw-bg-gradient-to-r tw-from-blue-50 tw-to-blue-100 tw-border-l-4 tw-border-blue-500 tw-rounded-xl tw-p-5 tw-shadow-md"
            >
              <p className="tw-text-gray-800 tw-text-base tw-m-0">
                Looking for more? Discover our extensive&nbsp;<Link href={APP_PATH.services.billingServices.path} className="tw-font-semibold tw-text-inherit">Medical Billing
                Services</Link>, See the difference Key MedSolutions can make in
                transforming your practice.
              </p>
            </motion.div>

            <WhoWeServe
              title="Who Can Benefit From Our Services?"
              data={clientTypes}
              description="Key MedSolutions helps healthcare organizations of all sizes and types run their businesses better and make more money. We proudly serve:"
            />
            <div className="tw-text-center tw-text-xl tw-max-w-3xl tw-mx-auto">
              <p>
                Whatever your specialty, we’ve got the right tools and expertise
                to back you up, so you can move forward with confidence and
                focus on what you do best. Find out why so many client outsource
                medical claim processing services to Key MedSolutions.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              }}
              className="container tw-bg-gradient-to-r tw-from-blue-50 tw-to-blue-100 tw-border-l-4 tw-border-blue-500 tw-rounded-xl tw-p-5 tw-shadow-md"
            >
              <p className="tw-text-gray-800 tw-text-base tw-m-0">
                Learn about our&nbsp;
                <Link href={APP_PATH.services.insuranceVerification.path} className="tw-font-semibold tw-text-inherit">
                  Healthcare Insurance Verification Services
                </Link>&nbsp;
                to optimise your claims process from step one.
              </p>
            </motion.div>

            <section id="benefits">
              <BenefitsSection />
            </section>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              }}
              className="container tw-bg-gradient-to-r tw-from-blue-50 tw-to-blue-100 tw-border-l-4 tw-border-blue-500 tw-rounded-xl tw-p-5 tw-shadow-md"
            >
              <p className="tw-text-gray-800 tw-text-base tw-m-0">
                Outsourcing with us means smoother operations and a healthier
                bottom line.
              </p>
            </motion.div>

            <section id="process">
              <CTASection />
            </section>
          </main>
        </div>
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
    </>
  );
};

export default MedicalClaimBillingV2;
