"use client";
import PricingPlans from "@/components/pricing/PricingPlans";
import ProcessSteps from "@/components/services/ProcessSteps";
import ScrollReveal from "@/components/services/ScrollReveal";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Breadcrumb from "@/components/ui/breadcrumb";
import { services } from "@/data/services";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  Calendar,
  CheckCircle,
  Clock,
  Globe,
  Heart,
  Mail,
  Phone,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import ReclaimYourTime from "./ReclaimYourTime";
import ExpansiveServices from "./ExpansiveServices";
import ProcessSection from "./ProcessSection";
import BoostRevenue from "./BoostRevenue";
import AccelerateYourRevenue from "./AccelerateYourRevenue";
import { Accordion } from "react-bootstrap";

const Services = () => {
  const title =
    "End-to-end Medical Billing Services and RCM Solutions for Healthcare Providers";
  const path = "/our-services";

  const faqs = [
    {
      question:
        "What is included in Key Med Solutions' Medical Billing Services?",
      answer:
        "Our Medical Billing Services cover the entire claims process, from accurate coding and claims submission to insurance follow-ups and payment posting. We ensure faster reimbursements, reduced errors, and a streamlined revenue cycle for your practice.",
    },
    {
      question: "How does Key Med Solutions handle claim denials?",
      answer:
        "We take a proactive approach to Denial Management by identifying the root causes of rejections, appealing incorrect denials, and implementing strategies to prevent future issues. Our goal is to recover lost revenue quickly and efficiently.",
    },
    {
      question:
        "Can Key Med Solutions support healthcare providers in the USA?",
      answer:
        "Absolutely! We specialize in addressing the unique challenges faced by healthcare providers in the USA, including navigating complex insurance systems, ensuring compliance with regulations, and managing high patient volumes. Our solutions are tailored to meet the needs of practices across the country.",
    },
    {
      question:
        "Why should I outsource my medical billing to Key Med Solutions?",
      answer:
        "Outsourcing your medical billing to us reduces administrative burdens, improves claim accuracy, and ensures compliance with the latest regulations. With our expert-driven solutions, you can focus on patient care while we handle the complexities of billing and revenue cycle management.",
    },
    {
      question: "How can I get started with Key Med Solutions?",
      answer:
        "Getting started is simple! Schedule a free consultation with our team to discuss your practice’s needs. We’ll conduct a comprehensive assessment and create a customized plan to optimize your revenue cycle. Call us at (123) 456-7890 or email info@keymedsolutions.com to begin.",
    },
  ];

  return (
    <>
      <div className="page-content bg-white aboutus tw-overflow-hidden">
        {/* <Breadcrumb title={title} breadcrumb={[{ label: title, href: path }]} /> */}

        <section className="section-area section-sp1">
          <div className="tw-min-h-screen tw-bg-background tw-overflow-hidden tw-px-4">
            {/* Main Content Section */}
            <ReclaimYourTime />
            <ExpansiveServices />
            {/* Process Section */}
            <ProcessSection />
            <BoostRevenue />
            <AccelerateYourRevenue />
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
          {/* <PricingPlans /> */}
        </section>
      </div>
    </>
  );
};

export default Services;
