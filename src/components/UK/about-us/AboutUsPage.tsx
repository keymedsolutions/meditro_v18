import React from 'react'
import Hero from './Hero'
import MissionVision from './MissionVision'
import Features from './Features'
import PartnerWithUs from './PartnerWithUs'

const AboutUsPage = () => {
  return (
    <main className='tw-overflow-hidden'>
      <Hero/>
      <MissionVision/>
      <Features/>
      <PartnerWithUs/>
    </main>
  )
}

export default AboutUsPage
