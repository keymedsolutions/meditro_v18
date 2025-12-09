import React from "react";
import Hero from "./Hero";
import WhatIsRPOSection from "./WhatIsRPOSection";
import FullCycleRPOSection from "./FullCycleRPOSection";
import WhyChooseKeyMedsolutionsSection from "./WhyChooseKeyMedsolutionsSection";
import RPOSpecialisationsSection from "./RPOSpecialisationsSection";
import CandidateScreeningTechnologySection from "./CandidateScreeningTechnologySection";
import ExecutiveLevelRPOSection from "./ExecutiveLevelRPOSection";
import GlobalRPOCapabilitySection from "./GlobalRPOCapabilitySection";
import RPOEngagementModelsSection from "./RPOEngagementModelsSection";
import ReadyToTransformHiringSection from "./ReadyToTransformHiringSection";
import FAQ from "./FAQ";

const RecruitmentProcessOutsourcingPage = () => {
  return (
    <main className="tw-overflow-hidden">
      <Hero />
      <WhatIsRPOSection />
      <FullCycleRPOSection/>
      <WhyChooseKeyMedsolutionsSection/>
      <RPOSpecialisationsSection/>
      <CandidateScreeningTechnologySection/>
      <ExecutiveLevelRPOSection/>
      <GlobalRPOCapabilitySection/>
      <RPOEngagementModelsSection/>
      <ReadyToTransformHiringSection/>
      <FAQ/>
    </main>
  );
};

export default RecruitmentProcessOutsourcingPage;
