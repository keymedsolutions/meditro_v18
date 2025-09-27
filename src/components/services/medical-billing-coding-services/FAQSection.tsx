/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import SectionHeading from "@/components/ui/section-heading";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";

const FAQ = () => {
  const faqs = [
    {
      question: "What are medical coding services?",
      answer: (
        <>
          Medical coding services involve the process of translating a patient’s
          diagnoses, treatments, and procedures into standardized codes like
          &nbsp;
          <Link
            href={APP_PATH.services.codingServices.icd10Coding.path}
            className="tw-font-semibold tw-text-inherit"
          >
            ICD-10
          </Link>
          , CPT, and HCPCS. These codes are essential for accurate billing,
          insurance claims, and maintaining compliance.
        </>
      ),
    },
    {
      question: "Why should I outsource medical coding services?",
      answer: (
        <>
          Outsourcing medical coding services helps healthcare providers save
          time, reduce administrative burdens, and improve claim accuracy. It
          also ensures access to certified experts who follow compliance
          standards, helping to reduce claim denials and optimize the revenue
          cycle.
        </>
      ),
    },
    {
      question: "Is Key MedSolutions compliant with industry regulations?",
      answer: (
        <>
          Absolutely. At Key MedSolutions, we adhere to stringent industry
          guidelines, including HIPAA, ICD-10, and payer-specific rules, to
          deliver fully compliant medical coding services and protect sensitive
          patient data.
        </>
      ),
    },
    {
      question:
        "How does outsourcing medical coding services benefit my practice?",
      answer: (
        <>
          By outsourcing, you can focus more on patient care while reducing
          overhead costs associated with in-house teams. Additionally,
          outsourcing to specialists like Key MedSolutions ensures timely,
          accurate coding, which results in faster reimbursements and fewer
          denied claims.
        </>
      ),
    },
    {
      question:
        "Can medical coding services be customised for different specialties?",
      answer: (
        <>
          Yes, medical coding services can be tailored to fit the specific needs
          of different medical specialties, such as radiology,&nbsp;
          <Link
            href={APP_PATH.services.physicianBilling.cardiologyBilling.path}
            className="tw-font-semibold tw-text-inherit"
          >
            cardiology
          </Link>
          , and oncology. Our team at Key MedSolutions has the expertise to
          provide specialty-specific coding for precise and efficient billing.
        </>
      ),
    },
    {
      question:
        "How do medical coding services improve revenue cycle management?",
      answer: (
        <>
          Precise coding reduces mistakes and denials, helping ensure quicker
          claim approvals and a more consistent cash flow. By partnering with a
          professional service provider like Key MedSolutions, you gain access
          to data-driven processes that enhance overall revenue cycle
          management.
        </>
      ),
    },
  ];

  const mid = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, mid);
  const secondHalf = faqs.slice(mid);

  return (
    <section className="tw-py-20 tw-relative tw-overflow-hidden benefits-section-home1">
      {/* Background decoration */}
      <div className="tw-absolute tw-inset-0  tw-pointer-events-none"></div>

      {/* Animated background elements */}
      <div className="tw-absolute tw-inset-0 tw-pointer-events-none tw-overflow-hidden">
        <div
          className="tw-absolute tw--bottom-20 tw--left-20 tw-w-64 tw-h-64 tw-rounded-full tw-bg-primary-100 tw-opacity-50 tw-blur-3xl tw-animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="tw-absolute tw-top-20 tw--right-20 tw-w-80 tw-h-80 tw-rounded-full tw-bg-secondary-100 tw-opacity-50 tw-blur-3xl tw-animate-float"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      <div className="tw-container tw-mx-auto tw-px-4">
        <SectionHeading title="Frequently Asked Questions" subtitle="FAQ" />

        {/* Responsive Grid */}
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6 tw-mt-10">
          <div>
            <Accordion className="accordion ttr-accordion1">
              {firstHalf.map((faq, index) => (
                <Accordion.Item eventKey={String(index)} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <div>
            <Accordion className="accordion1 ttr-accordion1">
              {secondHalf.map((faq, index) => (
                <Accordion.Item eventKey={String(index)} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="tw-relative tw-mt-12 tw-max-w-3xl tw-mx-auto">
          <div className="tw-absolute tw-top-1/2 tw-left-0 tw-transform -tw-translate-y-1/2 -tw-translate-x-1/2 tw-w-16 tw-h-16 tw-rounded-full tw-border-4 tw-border-primary-200 tw-opacity-50"></div>
          <div className="tw-absolute tw-top-1/2 tw-right-0 tw-transform -tw-translate-y-1/2 tw-translate-x-1/2 tw-w-16 tw-h-16 tw-rounded-full tw-border-4 tw-border-secondary-200 tw-opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
