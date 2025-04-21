"use client"
import React from 'react'
import AnimatedCounters from './animated-counters'
import WhyChooseUs from './why-choose-us'
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import FAQSection from './FAQSection'
import BenefitsSection from './benefits-section'

const RevenueCycleManagementCompany = () => {
  return (
    <main className="tw-relative tw-flex tw-min-h-screen tw-flex-col tw-items-center tw-bg-neutral-50">
   

    {/* Hero Section with 3D parallax effect */}
    {/* <Hero /> */}
    <HeroSection />
  

    {/* Stats Section with animated counters */}
  <AnimatedCounters />

    {/* Services Section with 3D cards */}
 {/* <Services /> */}

<ServiceSection />
    {/* Why Choose Us Section with 3D effect */}
    <BenefitsSection />
  <WhyChooseUs />
    {/* FAQ Section with animated accordion */}
   <FAQSection />
   {/* <BenefitsHexLayout /> */}

    {/* CTA Section with 3D effect */}
  {/* <CTA /> */}

  </main>
  )
}

export default RevenueCycleManagementCompany
