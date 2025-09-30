import React from "react";
import HeroSection from "./HeroSection";
import { WhyChooseUs } from "./WhyChooseUs";
import ServicesSection from "./ServicesSection";
import HowWeWork from "./HowWeWork";
import BenefitsPartnering from "./BenefitsPartnering";
import { PracticeManagementSection } from "./PracticeManagementSection";
import FAQs from "./FAQs";

const PhysicianPracticeManagement = () => {
  return (
    <div className="tw-overflow-hidden">
      <HeroSection />
      <WhyChooseUs/>
      <ServicesSection/>
      <HowWeWork/>
      <BenefitsPartnering/>
      <PracticeManagementSection/>
      <FAQs/>
    </div>
  );
};

export default PhysicianPracticeManagement;
