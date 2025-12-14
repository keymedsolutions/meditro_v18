import React from "react";
import WhyChooseUsHero from "./WhyChooseUsHero";
import WhatMakesKeyMedDifferentSection from "./WhatMakesKeyMedDifferentSection";
import Services from "./Services";
import PartnerWithRPOSection from "./PartnerWithRPOSection";
import FAQ from "./FAQ";

const WhyChooseUsPage = () => {
  return (
    <main className="tw-overflow-hidden">
      <WhyChooseUsHero />
      <WhatMakesKeyMedDifferentSection />
      <Services />
      <PartnerWithRPOSection />
      <FAQ />
    </main>
  );
};

export default WhyChooseUsPage;
