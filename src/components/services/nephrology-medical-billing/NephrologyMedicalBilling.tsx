import React from "react";
import { HeroSection } from "./HeroSection";
import { WhyChooseSection } from "./WhyChooseSection";
import { ServicesSection } from "./ServicesSection";
import { AdvantageSection } from "./AdvantageSection";
import { CTASection } from "./CTASection";
import FAQs from "./FAQ";

const NephrologyMedicalBilling = () => {
  return (
    <div className="tw-min-h-screen tw-bg-background tw-overflow-hidden">
      <div className="tw-container tw-mx-auto">
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <AdvantageSection />
      </div>
      <CTASection />
      <FAQs/>
    </div>
  );
};

export default NephrologyMedicalBilling;
