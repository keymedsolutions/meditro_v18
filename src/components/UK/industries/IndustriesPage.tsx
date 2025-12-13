import React from 'react'
import IndustriesWeServeHero from './IndustriesWeServeHero'
import WhyIndustryExpertiseMattersSection from './WhyIndustryExpertiseMattersSection'
import IndustriesWeServeSection from './IndustriesWeServeSection'
import WhyKeyMedPreferredPartnerSection from './WhyKeyMedPreferredPartnerSection'
import SuccessMetricsSection from './SuccessMetricsSection'
import FinalIndustryCTASection from './FinalIndustryCTASection'
import FAQ from './FAQ'

const IndustriesPage = () => {
  return (
    <main className='tw-overflow-hidden'>
      <IndustriesWeServeHero/>
      <WhyIndustryExpertiseMattersSection/>
      <IndustriesWeServeSection/>
      <WhyKeyMedPreferredPartnerSection/>
      <SuccessMetricsSection/>
      <FinalIndustryCTASection/>
      <FAQ/>
    </main>
  )
}

export default IndustriesPage
