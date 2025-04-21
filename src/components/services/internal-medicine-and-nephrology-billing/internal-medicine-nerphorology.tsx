"use client"
import { motion } from 'framer-motion';
import { useScroll, useSpring } from 'framer-motion';

import React from 'react'

import Services from './Services';
import Challenges from './Challenges';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import StatsSection from './stats-section';
import Hero from './Hero';
import ScheduleSection from './schedule-section';

const InternalMedicineNephrology = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  return (
    <div className="tw-relative">
    {/* Progress Bar */}
    <motion.div 
      className="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-h-1 tw-bg-gradient-to-r tw-from-medical-teal tw-via-medical-blue tw-to-medical-navy tw-z-50 tw-origin-left"
      style={{ scaleX }}
    />

    <Hero />
    <StatsSection />
    <Services />
    <Challenges />
    <Benefits />
    <Testimonials />
    <FAQ />
    <ScheduleSection />
  </div>
  )
}

export default InternalMedicineNephrology