"use client";

import React from "react";
import HeroSection from "./HeroSection";
import HeroContent from "./HeroContent";
import DenialManagement from "./DenialManagement";
import EnterpriseTools from "./EnterpriseTools";
import DenialManagementHealthcare from "./DenialManagementHealthcare";
import EmpoweringYourPractice from "./EmpoweringYourPractice";
import BenefitsOutsourcing from "./BenefitsOutsourcing";
import { PersonalizedDashboards } from "./PersonalizedDashboards";
import WhyKeyMedSolutions from "./WhyKeyMedSolutions";
import PartnerWithKeyMedSolutionsToday from "./PartnerWithKeyMedSolutionsToday";
import { Accordion } from "react-bootstrap";

const DenialManagementService = () => {
  const faqs = [
    {
      question: "How do Denial Management Services help my practice?",
      answer:
        "They streamline the process of resolving denied claims, helping you recover lost revenue faster. This lightens administrative tasks, boosts cash flow, and enables your team to dedicate more time to patient care.",
    },
    {
      question: "Can these services prevent future denials?",
      answer:
        "Yes, we examine denial trends to uncover root causes like coding mistakes or incomplete information. By addressing these issues, we help reduce the chances of similar denials happening again in the future.",
    },
    {
      question: "How fast can denied claims be resolved?",
      answer:
        "Resolution times depend on the complexity of the denial and the payer’s response. However, we act promptly, using proven strategies and tools to ensure faster resolutions and quicker reimbursements for your practice.",
    },
    {
      question: "What kind of reports will I get?",
      answer:
        "Access real-time dashboards offering insights into claim statuses, denial patterns, and overall financial performance. These reports are easy to customize, helping you track the metrics that matter most to your practice.",
    },
    {
      question: "How do I know if I need Denial Management Services?",
      answer:
        "If your practice faces frequent claim denials, delayed payments, or struggles with accounts receivable follow-ups, our services can help. We simplify the process, improve efficiency, and optimize your revenue cycle.",
    },
  ];

  return (
    <React.Fragment>
      <div className="tw-overflow-hidden">
        <HeroSection />
        <HeroContent />
        <DenialManagement />
        <EnterpriseTools />
        <DenialManagementHealthcare />
        <EmpoweringYourPractice />
        <BenefitsOutsourcing />
        <PersonalizedDashboards />
        <WhyKeyMedSolutions />
        <PartnerWithKeyMedSolutionsToday />
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

export default DenialManagementService;
