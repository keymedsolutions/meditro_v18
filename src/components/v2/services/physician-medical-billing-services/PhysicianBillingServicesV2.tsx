"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Accordion, Badge, Button } from "react-bootstrap";
import WhyChooseOurMedicalBilling from "@/components/services/common/WhyChooseOurMedicalBilling";
import WhoWeServe from "@/components/services/common/WhoWeServe";
import SolutionsWeOffer from "@/components/services/common/SolutionsWeOffer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle,
  DollarSign,
  FileCheck,
  FileCheck2,
  FileText,
  Headphones,
  Mail,
  Phone,
  PiggyBank,
  ReceiptText,
  RotateCcw,
  Settings,
  Shield,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/ui/card";
import ExperienceSeamlessBilling from "./ExperienceSeamlessBilling";
import WhyChooseOurPhysicianBillingSolution from "./WhyChooseOurPhysicianBillingSolution";
import Features from "./Features";
import ThePowerOfOutsourcedServices from "./ThePowerOfOutsourcedServices";
import OurProvenProcess from "./OurProvenProcess";
import LeadingPhysicianBillingCompany from "./LeadingPhysicianBillingCompany";
import ContactUsPhysicianBilling from "./ContactUsPhysicianBilling";
import Hero from "./Hero";
import HealthcareProviders from "./HealthcareProviders";

const PhysicianBillingServicesV2 = () => {
  const services = [
    "Accurate Claims Submission & Coding",
    "Denial Management & Appeals",
    "Payment Posting & Patient Billing",
    "Fee Schedule Analysis & Credentialing Support",
    "Revenue Cycle Management (RCM)",
    "Insurance Eligibility Verification",
    "KPI Monitoring & Performance Reporting",
    "HIPAA-Compliant Billing Processes",
    "Customized Solutions for Primary Care & Specialists",
  ];

  const title =
    "Physician Medical Billing Services: Achieve Your Practice’s Full Potential";
  const path = "/revenue-cycle-management-company";

  const mid = Math.ceil(services.length / 2);
  const firstHalf = services.slice(0, mid);
  const secondHalf = services.slice(mid);

  // Array of feature objects with Tailwind bg classes
  const WhyChooses = [
    {
      icon: "⚙️",
      label: "End-to-End, Scalable Billing Services",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: "📉",
      label: "Reduced Claim Denials & Faster Reimbursementss",
      // className: "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300"
      className:
        "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300",
    },
    {
      icon: "💼",
      label: "Tailored Solutions Aligned with Your Practice Needs",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    // {
    //     icon: "📉",
    //     label: "Accelerated Reimbursements & Improved Cash Flow",
    //     className: "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300"
    // },

    {
      icon: "📊",
      label: "Real-Time Reporting & Transparency",
      className:
        "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300",
    },
    {
      icon: "🤝",
      label: "Dedicated Support with Experienced Billing Experts",
      className:
        "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300",
    },
    {
      icon: "🛡️",
      label: "Strict Compliance with HIPAA and Industry Standards",
      className:
        "!tw-border-2 !tw-border-secondary-400 tw-bg-secondary-200 after:!tw-bg-secondary-400",
    },
    {
      icon: "💡",
      label: "Technology-Driven for Efficiency & Accuracy",
      className:
        "!tw-border-2 !tw-border-pink-300 tw-bg-pink-100 after:!tw-bg-pink-300",
    },
  ];

  const clientTypes = [
    { icon: "👨‍⚕️", text: "Independent Physicians & Solo Practices" },
    { icon: "🏥", text: "Physician Groups & Multi-Specialty Clinicss" },
    { icon: "👨‍⚕️", text: "Specialty Providers (Cardiology, Radiology, etc.)" },
    { icon: "🏨", text: "Large Healthcare Organizations & Networks" },
    {
      icon: "🌎",
      text: "U.S.-Based Healthcare Providers Seeking Reliable Billing Support",
    },
  ];

  const faqs = [
    {
      question: "What Are Physician Medical Billing Services?",
      answer:
        "These services handle the entire billing process for your practice—claims, coding, and patient statements—so physicians get paid quickly and accurately for every service provided.",
    },
    {
      question: "Why Should I Outsource Physician Medical Billing?",
      answer:
        "Outsourcing brings faster reimbursements, fewer errors, significant cost savings, and more time for you to focus on patient care instead of tedious billing tasks.",
    },
    {
      question: "Can Your Services Integrate with My Existing Systems?",
      answer:
        "Yes, our physician billing specialists make integration seamless with EMR or EHR software, so your workflow stays smooth and uninterrupted.",
    },
    {
      question: "What Types of Practices Do You Support?",
      answer:
        "We work with solo practitioners, physician groups, specialists, and multi-specialty clinics, providing customized billing solutions for every provider type.",
    },
    {
      question: "What Does Your Billing Service Include?",
      answer:
        "You receive end-to-end support, including claims processing, ICD-10 medical coding, revenue cycle management, eligibility verification, credentialing, and in-depth financial reporting.",
    },
    {
      question:
        "How Long Does It Take to Transition to Outsourced Physician Billing Services?",
      answer:
        "With Key MedSolutions (KMD), transitioning to outsourced physician billing services is straightforward and efficient, often completed within two to four weeks, based on your practice’s size and complexity. The KMD team manages data integration, staff training, and system setup, ensuring a seamless transition with minimal disruption to your daily operations.",
    },
  ];

  return (
    <>
      <div className="page-content bg-white  tw-overflow-hidden">
        {/* <Breadcrumb title={title} breadcrumb={[{ label: title, href: path }]} /> */}
        <div className="tw-min-h-screen tw-bg-background">
          {/* Hero Section */}
          <Hero />
          {/* <ExperienceSeamlessBilling /> */}
          <HealthcareProviders />
          {/* Key Benefits */}
          <WhyChooseOurPhysicianBillingSolution />

          {/* Services Section */}
          <Features />

          <ThePowerOfOutsourcedServices />

          {/* Process Section */}
          <OurProvenProcess />
          <LeadingPhysicianBillingCompany />

          {/* CTA Section */}
          <section className="tw-py-20 tw-bg-gradient-to-r tw-from-accent-400 tw-to-accentOrange-400 ">
            <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-white tw-mb-6 font-space-grotesk">
                  Take the First Step Toward Revenue Excellence
                </h2>
                <p className="tw-text-lg tw-text-white/90 tw-mb-8 tw-max-w-2xl tw-mx-auto font-dm-sans">
                  Let&nbsp;
                  <span className="tw-font-bold">Key MedSolutions</span>
                  &nbsp;handle your billing, so you can focus on patient care.
                  Discover why we’re the preferred&nbsp;
                  <span className="tw-font-bold">
                    Physician Billing Company in the USA
                  </span>
                  &nbsp;for practices seeking reliable results and service
                  excellence.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <ContactUsPhysicianBilling />
        </div>
        {/* <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="heading-bx text-center">
                  <h3 className="title">{title}</h3>
                </div>

                <p>
                  Are you feeling stressed with the process of medical billing
                  and coding for your practice? Key MedSolutions aligns
                  physician billing services so you don't have to, but we can
                  increase the revenue your practice earns! Finances for your
                  practice are hard work, but with the right partner it all can
                  be smooth sailing. Let our trusted physician billing solutions
                  support your profitability and improve your practice!
                </p>
                <p>
                  Operating a medical practice comes with wearing many hats. In
                  addition to excellent patient care, physicians are also
                  responsible for administrative tasks, such as{" "}
                  <Link
                    className="tw-font-bold tw-text-black"
                    href={"/medical-billing-services"}
                  >
                    medical billing
                  </Link>
                  , coding, and revenue cycle management (RCM). This typically
                  includes reviewing fee schedules and performing credentialing,
                  EMR (Electronic Medical Records) data migration, document
                  management systems, and mobile charge capture—time-consuming
                  tasks that take you away from patients. Our specialty
                  physician billing services can help you manage those
                  responsibilities.
                </p>
                <p>
                  With our company as a trusted physician billing company in the
                  United States we provide trustworthy and customizable billing
                  solutions for healthcare providers, from small solo practices
                  to large single groups. Key MedSolutions is experienced enough
                  to handle all aspects of the billing cycle - we handle new
                  patient registration, claims submission, payment posting,
                  denial management, and persistent follow up - keeping your
                  practice financially stable.
                </p>
                <p>
                  Efficiency, compliance and transparency are key drivers of
                  success at Key MedSolutions. Our physician billing solutions
                  are cost-effective and help reduce claim denials, increase the
                  speed of reimbursements, manage cashflow and reduce overhead
                  costs. Primary care physicians and specialists alike will
                  benefit from our scalable solutions which integrate seamlessly
                  into your clinical workflows and meet your business
                  objectives.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      {/* 
      <SolutionsWeOffer
        firstHalf={firstHalf}
        secondHalf={secondHalf}
        title="Comprehensive Physician Billing Solutions We Offer"
      /> */}

      {/* <WhoWeServe title="Who We Serve?" data={clientTypes} /> */}
      {/* 
      <WhyChooseOurMedicalBilling
        title="Why Choose Our Medical Billing and RCM Services?"
        data={WhyChooses}
      /> */}

      {/* <div className="container tw-pb-16">
        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">
              Let’s Optimize Your Practice Revenue!
            </h3>
          </div>
          <p>
            Partner with Key MedSolutions and let us tackle your back-office
            billing issues so you can concentrate on what really matters—your
            patients. Our well-tested, proven physician billing services offer
            intelligent, compliant, and scalable solutions to help support your
            practice in today's complex healthcare environment.
          </p>

          <p>
            <Link className="tw-font-bold tw-text-black" href={"/contact-us"}>
              {" "}
              Contact us
            </Link>{" "}
            today to explore ways to help streamline your billing and boost your
            practice's financial health.
          </p>
        </div>

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
      </div> */}

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

export default PhysicianBillingServicesV2;
