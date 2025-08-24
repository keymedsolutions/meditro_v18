"use client"

import AuthorizationSection from "@/components/services/radiology-billing/AuthorizationSection";
import { CTASection } from "@/components/services/radiology-billing/CTASection";
import DenialsSection from "@/components/services/radiology-billing/DenialsSection";
import FAQs from "@/components/services/radiology-billing/FAQ";
import Providers from "@/components/services/radiology-billing/Providers";
import RadiologyHero from "@/components/services/radiology-billing/RadiologyHero";
import ResultsSection from "@/components/services/radiology-billing/ResultsSection";
import ServicesSection from "@/components/services/radiology-billing/ServicesSection";
import { WhyPartnerwithOurRadiologyBillingExperts } from "@/components/services/radiology-billing/WhyPartnerwithOurRadiologyBillingExperts";


const RadiologyBillingServicesV2 = () => {
  return (
    <main className="tw-overflow-hidden">
      <RadiologyHero />
      <Providers />
      <ResultsSection />
      <ServicesSection />
      <AuthorizationSection />
      <DenialsSection />
      <WhyPartnerwithOurRadiologyBillingExperts />
      <CTASection />
      <FAQs />
    </main>
  );
};

export default RadiologyBillingServicesV2;
