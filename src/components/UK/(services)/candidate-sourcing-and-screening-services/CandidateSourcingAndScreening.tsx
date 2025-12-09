import React from "react";
import Hero from "./Hero";
import WhatMakesSourcingDifferent from "./WhatMakesSourcingDifferent";
import WhyOutsourceCandidateSourcingSection from "./WhyOutsourceCandidateSourcingSection";
import WhatIsCandidateSourcingSection from "./WhatIsCandidateSourcingSection";
import HowToSourceCandidatesSection from "./HowToSourceCandidatesSection";
import WhyOutsourceCandidateSourcingSimpleSection from "./WhyOutsourceCandidateSourcingSimpleSection";
import CandidateServicesFlowSection from "./CandidateServicesFlowSection";
import BestSourcingPartnerSection from "./BestSourcingPartnerSection";
import WhoWeServe from "./WhoWeServe";
import ProcessStepsSection from "./ProcessStepsSection";
import ProofOfCredibilitySection from "./ProofOfCredibilitySection";
import FAQ from "./FAQ";

const CandidateSourcingAndScreening = () => {
  return (
    <main className="tw-overflow-hidden">
      <Hero />
      <WhatMakesSourcingDifferent />
      <WhyOutsourceCandidateSourcingSection/>
      <WhatIsCandidateSourcingSection/>
      <HowToSourceCandidatesSection/>
      <WhyOutsourceCandidateSourcingSimpleSection/>
      <CandidateServicesFlowSection/>
      <BestSourcingPartnerSection/>
      <WhoWeServe/>
      <ProcessStepsSection/>
      <ProofOfCredibilitySection/>
      <FAQ/>
    </main>
  );
};

export default CandidateSourcingAndScreening;
