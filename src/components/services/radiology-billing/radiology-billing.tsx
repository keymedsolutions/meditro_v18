/* eslint-disable react/jsx-no-undef */
"use client"
import AuthorizationSection from "./AuthorizationSection"
import RadiologyHero from "./RadiologyHero"
import ResultsSection from "./ResultsSection"
import ServicesSection from "./ServicesSection"
import DenialsSection from "./DenialsSection"
import Testimonials from "./Testimonials"
import FAQs from "./FAQ"


export default function RadiologyPage() {


  return (
    <main className="flex-1">
      <RadiologyHero  />


      <ResultsSection />
      <ServicesSection />
      <AuthorizationSection />
      <DenialsSection />
      <Testimonials />
      <FAQs />
    </main>

  )
}

