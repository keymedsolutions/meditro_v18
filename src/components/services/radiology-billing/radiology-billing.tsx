/* eslint-disable react/jsx-no-undef */
"use client";
import AuthorizationSection from "./AuthorizationSection";
import RadiologyHero from "./RadiologyHero";
import ResultsSection from "./ResultsSection";
import ServicesSection from "./ServicesSection";
import DenialsSection from "./DenialsSection";
import Testimonials from "./Testimonials";
import FAQs from "./FAQ";
import Providers from "./Providers";
import { WhyPartnerwithOurRadiologyBillingExperts } from "./WhyPartnerwithOurRadiologyBillingExperts";
import { CTASection } from "./CTASection";

export default function RadiologyPage() {
  return (
    <main className="tw-overflow-hidden">
      <RadiologyHero />
      <Providers />
      <ResultsSection />
      <ServicesSection />
      <AuthorizationSection />
      <DenialsSection />
      <WhyPartnerwithOurRadiologyBillingExperts/>
      <CTASection/>
      <FAQs />
    </main>
  );
}
