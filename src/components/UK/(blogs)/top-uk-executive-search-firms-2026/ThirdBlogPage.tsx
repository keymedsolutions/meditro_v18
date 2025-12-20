import React from "react";
import ExecutiveSearchBlogHero from "./ExecutiveSearchBlogHero";
import { WhatIsExecutiveSearchSection } from "./WhatIsExecutiveSearchSection";
import { ExecutiveSearchVsRPOSection } from "./ExecutiveSearchVsRPOSection";
import { WhyChooseExecutiveSearchSection } from "./WhyChooseExecutiveSearchSection";
import ExecutiveSearchProcessSection from "./ExecutiveSearchProcessSection";
import { WhatMakesBestExecutiveSearchFirms } from "./WhatMakesBestExecutiveSearchFirms";
import WhyKeyMedsolutionsUKExecutiveSearch from "./WhyKeyMedsolutionsUKExecutiveSearch";
import { TopExecutiveSearchFirms2026 } from "./TopExecutiveSearchFirms2026";
import { HowToChooseExecutiveSearchPartner } from "./HowToChooseExecutiveSearchPartner";
import FAQ from "./FAQ";

const ThirdBlogPage = () => {
  return (
    <main className="tw-overflow-hidden">
      <ExecutiveSearchBlogHero />
      <WhatIsExecutiveSearchSection />
      <ExecutiveSearchProcessSection />
      <ExecutiveSearchVsRPOSection />
      <WhyChooseExecutiveSearchSection />
      <WhatMakesBestExecutiveSearchFirms />
      <TopExecutiveSearchFirms2026 />
      <HowToChooseExecutiveSearchPartner />
      <WhyKeyMedsolutionsUKExecutiveSearch />
      <FAQ />
    </main>
  );
};

export default ThirdBlogPage;
