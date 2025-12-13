import React from "react";
import TechnologyDigitalRecruitmentHero from "./TechnologyDigitalRecruitmentHero";
import SpecialisedTechRecruitmentSection from "./SpecialisedTechRecruitmentSection";
import WhatIsTechnologyDigitalRecruitmentSection from "./WhatIsTechnologyDigitalRecruitmentSection";
import WhyChooseKeyMedsolutionsUK from "./WhyChooseKeyMedsolutionsUK";
import TechnologyDigitalRecruitmentServices from "./TechnologyDigitalRecruitmentServices";
import TechnologyRecruitmentProcessSection from "./TechnologyRecruitmentProcessSection";
import IndustriesWeServe from "./IndustriesWeServe";
import WhyCompaniesTrustKeyMedsolutionsSection from "./WhyCompaniesTrustKeyMedsolutionsSection";
import CaseStudyAndSuccess from "./CaseStudyAndSuccess";
import FAQ from "./FAQ";

const TechnologyAndDigitalRecruitment = () => {
  return (
    <main className="tw-overflow-hidden">
      <TechnologyDigitalRecruitmentHero />
      <SpecialisedTechRecruitmentSection />
      <WhatIsTechnologyDigitalRecruitmentSection />
      <WhyChooseKeyMedsolutionsUK />
      <TechnologyDigitalRecruitmentServices />
      <TechnologyRecruitmentProcessSection />
      <IndustriesWeServe />
      <WhyCompaniesTrustKeyMedsolutionsSection />
      <CaseStudyAndSuccess />
      <FAQ />
    </main>
  );
};

export default TechnologyAndDigitalRecruitment;
