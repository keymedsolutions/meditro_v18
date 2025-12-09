import React from 'react'
import ServicesHero from './Hero'
import WhyWorkWithKeyMedsolutionsUK from './WhyWorkWithKeyMedsolutionsUK'
import RecruitmentProcessOutsourcing from './RecruitmentProcessOutsourcing'
import WorkforceTogether from './WorkforceTogether'

const ServicePage = () => {
  return (
    <main className='tw-overflow-hidden'>
      <ServicesHero />
      <WhyWorkWithKeyMedsolutionsUK />
      <RecruitmentProcessOutsourcing/>
      <WorkforceTogether/>
    </main>
  )
}

export default ServicePage
