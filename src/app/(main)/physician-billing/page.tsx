"use client"
import BenefitsSection from '@/components/services/physician-billing/BenefitsSection'
import FrequentlyAskedQuestions from '@/components/services/physician-billing/FrequentlyAskedQuestions'
import Hero from '@/components/services/physician-billing/Hero'
import PhysicianBilling from '@/components/services/physician-billing/PhysicianBilling'
import ServiceSection from '@/components/services/physician-billing/ServiceSection'
import WhatOurClientsSay from '@/components/services/physician-billing/WhatOurClientsSay'
import WhyUsSection from '@/components/services/physician-billing/WhyUsSection'
import React from 'react'

const PhysicianBillingPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-slate-50">
      <Hero />
      <ServiceSection />
      <BenefitsSection />
      <WhyUsSection />
      <PhysicianBilling />
      <WhatOurClientsSay />
      <FrequentlyAskedQuestions />
    </div>
  )
}

export default PhysicianBillingPage
