import React from "react";
import Hero from "./Hero";
import AdministrativeServices from "./AdministrativeServices";
import BackOfficeOfferings from "./BackOfficeOfferings";
import BackOfficeFullServices from "./BackOfficeFullServices";
import TechnologyToolsBackOffice from "./TechnologyToolsBackOffice";
import WhyChooseUs from "./WhyChooseUs";
import IndustriesWeSupport from "./IndustriesWeSupport";
import CaseStudyHighlights from "./CaseStudyHighlights";
import BackOfficeProcess from "./BackOfficeProcess";
import FAQ from "./FAQ";
import BackOfficeMiniCTA from "./BackOfficeMiniCTA";

const BackOfficeAndAdministrativeServices = () => {
  return (
    <main className="tw-overflow-hidden">
      <Hero />
      <AdministrativeServices />
      <BackOfficeOfferings />
      <BackOfficeFullServices />
      <TechnologyToolsBackOffice />
      <WhyChooseUs />
      <IndustriesWeSupport />
      <CaseStudyHighlights />
      <BackOfficeProcess />
      <FAQ />
      <BackOfficeMiniCTA/>
    </main>
  );
};

export default BackOfficeAndAdministrativeServices;
