import React from 'react'
import { Hero } from './hero'
import { Benefits } from './benefits'
import { HowItWorks } from './how-it-works'
import { Consultation } from './consultation'
import { ExpertMedicalBilling } from './ExpertMedicalBilling'
import KeyAspects from './KeyAspects'
import FAQ from './FAQSection'

const MedicalBillingCodingServices = () => {
  return (
        <main className="min-h-screen overflow-hidden">
          {/* <HeroSection /> */}
          <Hero />
          <ExpertMedicalBilling />
          <Benefits />
          <HowItWorks />
          <KeyAspects />
          <FAQ />
          <Consultation />
          
        </main>
  )
}

export default MedicalBillingCodingServices