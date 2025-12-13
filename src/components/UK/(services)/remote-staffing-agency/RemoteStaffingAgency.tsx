import React from "react";
import RemoteStaffingHero from "./RemoteStaffingHero";
import WhatIsRemoteStaffingSection from "./WhatIsRemoteStaffingSection";
import WhatIsVirtualAssistantSection from "./WhatIsVirtualAssistantSection";
import WhyChooseKeyMedRemoteStaffingSection from "./WhyChooseKeyMedRemoteStaffingSection";
import RemoteStaffingSolutionsSection from "./RemoteStaffingSolutionsSection";
import RemoteStaffingProcessSection from "./RemoteStaffingProcessSection";
import RemoteStaffingBenefitsSection from "./RemoteStaffingBenefitsSection";
import IndustriesWeSupport from "./IndustriesWeSupport";
import PlatformsAndToolsWeUse from "./PlatformsAndToolsWeUse";
import ProofOfSuccessSection from "./ProofOfSuccessSection";
import FAQ from "./FAQ";

const RemoteStaffingAgency = () => {
  return (
    <main className="tw-overflow-hidden">
      <RemoteStaffingHero />
      <WhatIsRemoteStaffingSection />
      <WhatIsVirtualAssistantSection />
      <WhyChooseKeyMedRemoteStaffingSection/>
      <RemoteStaffingSolutionsSection />
      <IndustriesWeSupport/>
      <RemoteStaffingProcessSection/>
      <RemoteStaffingBenefitsSection/>
      <PlatformsAndToolsWeUse/>
      <ProofOfSuccessSection/>
      <FAQ/>
    </main>
  );
};

export default RemoteStaffingAgency;
