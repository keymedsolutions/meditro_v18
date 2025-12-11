import React from "react";
import Hero from "./Hero";
import MarketMappingTimeline from "./MarketMappingTimeline";
import MarketMappingWhy from "./MarketMappingWhy";
import MarketMappingServices from "./MarketMappingServices";
import IndustriesWeServe from "./IndustriesWeServe";
import WhyChooseUs from "./WhyChooseUs";
import HowProcess from "./HowProcess";
import MarketMappingCTA from "./MarketMappingCTA";
import FAQ from "./FAQ";

const MarketMappingRecruitmentServices = () => {
  return (
    <main className="tw-overflow-hidden">
      <Hero />
      <MarketMappingTimeline />
      <MarketMappingWhy />
      <MarketMappingServices />
      <IndustriesWeServe />
      <WhyChooseUs />
      <HowProcess />
      <MarketMappingCTA />
      <FAQ />
    </main>
  );
};

export default MarketMappingRecruitmentServices;
