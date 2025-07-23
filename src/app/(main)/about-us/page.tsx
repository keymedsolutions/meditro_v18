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
  const title = "Built on Trust, Powered by Results – About Our Company";
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
                <div className="heading-bx text-center">
                  <h3 className="title">Welcome to Key MedSolutions !</h3>
                </div>
                <p>
                  Our company was founded with a passion for helping healthcare
                  providers optimize their medical billing processes through
                  outsourcing and Revenue Cycle Management (RCM) services. We
                  understand that medical billing can be complex and
                  time-consuming, which is why we've dedicated our services to
                  providing efficient, reliable, and accurate outsourced medical
                  billing and RCM solutions.
                </p>
                <p>
                  At Key MedSolutions, we don't just see our clients as business
                  partners, but as members of our extended family. We pride
                  ourselves on building strong relationships with our clients,
                  and we believe that trust, transparency, and communication are
                  the foundation of any successful outsourcing partnership.
                </p>
                <p>
                  Our team of experienced professionals is dedicated to
                  delivering exceptional outsourced medical billing and RCM
                  services that are tailored to meet the unique needs of our
                  clients. We take a collaborative approach, working closely
                  with our clients to identify their specific needs and goals,
                  and developing customized solutions that achieve results.
                </p>
                <p>
                  Our commitment to quality is reflected in everything we do.
                  Our team of certified coders and billing specialists are
                  highly skilled and knowledgeable in medical billing,
                  outsourced medical billing, and RCM services, and we are
                  constantly updating our skills and knowledge to stay abreast
                  of the latest developments in the industry. We understand that
                  the healthcare landscape is constantly evolving, which is why
                  we are committed to staying ahead of the curve and adapting to
                  changing industry standards and regulations.
                </p>
                <p>
                  We are proud of the impact we've had on our clients'
                  businesses, and we measure our success by their success.
                </p>
                <p>
                  Our mission and Vision is to help healthcare providers
                  optimize their medical billing processes through outsourcing
                  and RCM services, reduce costs, and maximize revenue. We
                  believe that our outsourced medical billing and RCM services
                  not only benefit our clients, but also help to improve patient
                  outcomes by allowing healthcare providers to focus on what
                  they do best - providing quality care.
                </p>
                <p>
                  Thank you for considering Key MedSolutions for your outsourced
                  medical billing and RCM needs. We look forward to building a
                  long-term outsourcing partnership with you and helping you
                  achieve your business goals. Please don't hesitate to contact
                  us if you have any questions or would like to learn more about
                  our medical billing, outsourced medical billing, and RCM
                  services.
                </p>
              </div>
              {/* <div className="col"></div> */}
            </div>

            <BrandRattings />
          </div>
        </section>
      </div>
      <JourneySection />
      <EmpoweringSection />
      <CompanyGoals/>
      <ValuesSection />
      <StatsSection />
    </div>
  );
};

export default AboutUsPage;
