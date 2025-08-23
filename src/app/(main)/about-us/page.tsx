"use client";
import { CompanyGoals } from "@/components/about/company-goals";
import { EmpoweringSection } from "@/components/about/empowering-section";
import { JourneySection } from "@/components/about/journey-section";
import { StatsSection } from "@/components/about/stats-section";
import { ValuesSection } from "@/components/about/values-section";
import BrandRattings from "@/components/layout/BrandRattings";
/* eslint-disable react/no-unescaped-entities */
import dynamic from "next/dynamic";

const Breadcrumb = dynamic(() => import("@/components/ui/breadcrumb"), {
  ssr: false,
});
import React from "react";

const AboutUsPage = () => {
  const title = "About Us - Key MedSolutions";
  return (
    <div className="tw-overflow-hidden">
      <div className="page-content bg-white aboutus">
        <Breadcrumb
          title={title}
          breadcrumb={[{ label: title, href: "/about-us" }]}
        />

        <section>
          <div className="container">
            <div className="row justify-content-center">
              {/* <div className="col"></div> */}
              <div className="col-md-12">
                <p>
                  <span className="tw-font-bold">
                    Revolutionizing Medical Billing and Revenue Cycle Management
                  </span>
                  &nbsp;Your Dedicated RCM Partner for Hospitals, Clinics and
                  Private Practices. We take care of the complexities, allowing
                  you to focus fully on delivering exceptional patient care.
                </p>
                <p className="tw-font-bold">
                  Contact us today for a Free Consultation!
                </p>
                <p>
                  Key MedSolutions serves as a dependable ally in medical
                  billing and revenue cycle management. Since 2023, we have been
                  working hard to simplify billing for healthcare professionals.
                  Our goal is to provide hospitals, clinics, and private
                  practices with solutions that are fast, dependable, and fully
                  compliant with their specific demands.
                </p>
                <p>
                  We are a leading&nbsp;
                  <span className="tw-font-bold">medical billing company</span>
                  &nbsp;that prioritizes reducing denials and enhancing revenue
                  cycles. Our certified professionals have extensive experience
                  and collaborate closely with clients to ensure accurate and
                  seamless billing.
                </p>
                <p>
                  In addition to&nbsp;
                  <span className="tw-font-bold">
                    revenue cycle management,
                  </span>
                  &nbsp;we also offer&nbsp;
                  <span className="tw-font-bold">
                    patient engagement services
                  </span>
                  &nbsp;to help providers communicate more effectively and
                  foster stronger relationships with their patients. We equip
                  healthcare providers with the resources to deliver exceptional
                  care and maximize earnings by combining financial and
                  patient-centered solutions. By employing state-of-the-art
                  technology and constantly learning new things to achieve
                  results, Key MedSolutions stays ahead of changes in the
                  industry. We are entirely dedicated to supporting you in
                  achieving your goals
                </p>
              </div>
              {/* <div className="col"></div> */}
            </div>
          </div>
        </section>
      </div>
      <JourneySection />
      <EmpoweringSection />
      <CompanyGoals />
      <ValuesSection />
      <StatsSection />
      <BrandRattings />
    </div>
  );
};

export default AboutUsPage;
