import React from 'react'
import Hero from './Hero'
import { ChallengesSection } from './ChallengesSection'
import { SolutionSection } from './SolutionSection'
import { FeaturesSection } from './FeaturesSection'
import { BenefitsSection } from './BenefitsSection'
import { CTASection } from './CTASection'
import FAQ from './FAQ'

const InternalMedicineAndNephrologyBillingService = () => {
  return (
    <React.Fragment>
        <Hero/>
        <ChallengesSection/>
        <SolutionSection/>
        <FeaturesSection/>
        <BenefitsSection/>
        <CTASection/>
        <FAQ/>
    </React.Fragment>
  )
}

export default InternalMedicineAndNephrologyBillingService
