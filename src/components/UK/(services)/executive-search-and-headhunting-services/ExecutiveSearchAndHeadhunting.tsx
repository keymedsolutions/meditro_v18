import React from "react";
import Hero from "./Hero";
import ExecutiveSearchFeatures from "./ExecutiveSearchFeatures";
import ExecutiveSearchExplainer from "./ExecutiveSearchExplainer";
import WhatIsHeadhunter from "./WhatIsHeadhunter";
import ExecutiveSearchHeadhuntingComparison from "./ExecutiveSearchHeadhuntingComparison";
import WhyChooseExecutiveSection from "./WhyChooseExecutiveSection";
import ExecutiveSearchStepper from "./ExecutiveSearchStepper";
import GlobalExecutiveCapabilitiesSection from "./GlobalExecutiveCapabilitiesSection";
import IndustriesWeSupport from "./IndustriesWeSupport";
import WhyWeAreBestExecutiveSearch from "./WhyWeAreBestExecutiveSearch";
import FAQ from "./FAQ";

const ExecutiveSearchAndHeadhunting = () => {
  return (
    <main className="tw-overflow-hidden">
      <Hero />
      <ExecutiveSearchFeatures />
      <ExecutiveSearchExplainer />
      <WhatIsHeadhunter />
      <ExecutiveSearchHeadhuntingComparison />
      <WhyChooseExecutiveSection />
      <ExecutiveSearchStepper />
      <IndustriesWeSupport />
      <GlobalExecutiveCapabilitiesSection />
      <WhyWeAreBestExecutiveSearch />
      <FAQ />
    </main>
  );
};

export default ExecutiveSearchAndHeadhunting;
