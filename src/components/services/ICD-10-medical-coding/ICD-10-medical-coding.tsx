
"use client"
import React from 'react'



import Hero from './Hero';
import Services from './Services';
import Advantages from './Advantages';
import FAQ from './FAQ';
import ConsultationCTA from './ConsultationCTA';


const ICD10MedicalCoding = () => {
  return (
    <div className="min-h-screen">
    <main>
      <Hero />
      <Services />
      <Advantages />
      <FAQ />
      <ConsultationCTA />
    </main>
  </div>
  )
}

export default ICD10MedicalCoding