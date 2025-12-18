import React from "react";
import BlogHero from "./BlogHero";
import HiringMarketEvolution from "./HiringMarketEvolution";
import WhatIsRPOSection from "./WhatIsRPOSection";
import WhatToLookForInRecruitmentAgenciesSection from "./WhatToLookForInRecruitmentAgenciesSection";
import WhyIndustryExpertiseMattersSection from "./WhyIndustryExpertiseMattersSection";
import { TechnologyInHiringSection } from "./TechnologyInHiringSection";
import { HiringFlexibilitySection } from "./HiringFlexibilitySection";
import { WhyRPOSection } from "./WhyRPOSection";
import { SmartQuestionsSection } from "./SmartQuestionsSection";
import { RecruitmentAdvantageSection } from "./RecruitmentAdvantageSection";
import FAQ from "./FAQ";

const FirstBlog = () => {
  return (
    <main className="tw-overflow-hidden">
      <BlogHero />
      <HiringMarketEvolution />
      <WhatIsRPOSection />
      <WhatToLookForInRecruitmentAgenciesSection />
      <WhyIndustryExpertiseMattersSection />
      <TechnologyInHiringSection />
      <HiringFlexibilitySection />
      <WhyRPOSection />
      <SmartQuestionsSection />
      <RecruitmentAdvantageSection />
      <FAQ />
    </main>
  );
};

export default FirstBlog;
