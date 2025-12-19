import React from "react";
import RPOTrendsHero from "./RPOTrendsHero";
import { RPOPerspectiveSection } from "./RPOPerspectiveSection";
import { KeyRPOTrendsSection } from "./KeyRPOTrendsSection";
import { AIEnhancedRecruitmentSection } from "./AIEnhancedRecruitmentSection";
import { RPOFuturePillarsSection } from "./RPOFuturePillarsSection";
import { WhyKeyMedFutureReadySection } from "./WhyKeyMedFutureReadySection";
import FAQ from "./FAQ";

const SecondBlog = () => {
  return (
    <main className="tw-overflow-hidden">
      <RPOTrendsHero />
      <RPOPerspectiveSection />
      <KeyRPOTrendsSection />
      <AIEnhancedRecruitmentSection />
      <RPOFuturePillarsSection/>
      <WhyKeyMedFutureReadySection/> 
      <FAQ/>
    </main>
  );
};

export default SecondBlog;
