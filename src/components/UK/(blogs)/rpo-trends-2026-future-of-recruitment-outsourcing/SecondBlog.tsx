import React from "react";
import RPOTrendsHero from "./RPOTrendsHero";
import { RPOPerspectiveSection } from "./RPOPerspectiveSection";
import { KeyRPOTrendsSection } from "./KeyRPOTrendsSection";
import { AIEnhancedRecruitmentSection } from "./AIEnhancedRecruitmentSection";
import { RPOFuturePillarsSection } from "./RPOFuturePillarsSection";
import { WhyKeyMedFutureReadySection } from "./WhyKeyMedFutureReadySection";
import FAQ from "./FAQ";
import { SectorSpecialistRPOSection } from "./SectorSpecialistRPOSection";
import { GlobalRPOFutureSection } from "./GlobalRPOFutureSection";
import { RPOIndustryFutureSection } from "./RPOIndustryFutureSection";

const SecondBlog = () => {
  return (
    <main className="tw-overflow-hidden">
      <RPOTrendsHero />
      <RPOPerspectiveSection />
      <KeyRPOTrendsSection />
      <AIEnhancedRecruitmentSection />
      <RPOFuturePillarsSection/>
      <SectorSpecialistRPOSection/>
      <GlobalRPOFutureSection/>
      <RPOIndustryFutureSection/>
      <WhyKeyMedFutureReadySection/> 
      <FAQ/>
    </main>
  );
};

export default SecondBlog;
