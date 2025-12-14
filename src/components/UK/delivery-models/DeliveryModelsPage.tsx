import React from "react";
import DeliveryModelsHero from "./DeliveryModelsHero";
import RecruitmentDeliveryModelsIntroSection from "./RecruitmentDeliveryModelsIntroSection";
import RecruitmentDeliveryModelsSection from "./RecruitmentDeliveryModelsSection";
import WhyChoose from "./WhyChoose";
import FAQ from "./FAQ";

const DeliveryModelsPage = () => {
  return (
    <main className="tw-overflow-hidden">
      <DeliveryModelsHero />
      <RecruitmentDeliveryModelsIntroSection />
      <RecruitmentDeliveryModelsSection />
      <WhyChoose />
      <FAQ />
    </main>
  );
};

export default DeliveryModelsPage;
