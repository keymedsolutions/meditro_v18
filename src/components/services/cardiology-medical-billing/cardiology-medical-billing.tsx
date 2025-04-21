"use client"
import React, { useRef } from 'react'
import Hero from './Hero'
// import Services from './Services'
// import RCM from './RCM'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import { motion, useScroll, useTransform } from 'framer-motion'
import ReliableSolutions from './ReliableSolutions'
import RCMSection from './RCMSection'
import WhyChooseUs from './WhyChooseUs'
import ComprehensiveServices from './ComprehensiveServices'
import CTASections from './CTASections'

const CardiologyMedicalBilling = () => {

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })


    // Parallax and animation values
    const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
    const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 45])
  
  
  return (
    <div ref={containerRef} className="tw-relative tw-min-h-screen tw-overflow-hidden tw-bg-gradient-to-br tw-from-slate-50 tw-to-blue-50">
         {/* Animated background elements */}
      <div className="tw-fixed tw-inset-0 -z-10 tw-overflow-hidden">
        <motion.div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-opacity-30" style={{ y: backgroundY1 }}>
          <div className="tw-absolute tw-top-10 tw-left-10 tw-w-[40vw] tw-h-[40vw] tw-rounded-full tw-bg-gradient-to-r tw-from-cyan-200 tw-to-blue-200 blur-[100px]" />
          <div className="tw-absolute tw-bottom-20 tw-right-20 tw-w-[30vw] tw-h-[30vw] tw-rounded-full tw-bg-gradient-to-r tw-from-blue-200 tw-to-cyan-200 blur-[80px]" />
        </motion.div>

        <motion.div
          className="tw-absolute tw-top-1/4 tw-right-1/4 tw-w-[300px] tw-h-[300px] md:tw-w-[500px] md:tw-h-[500px] tw-border-[20px] md:tw-border-[40px] tw-border-blue-200/30 tw-rounded-full"
          style={{
            y: backgroundY2,
            rotate: backgroundRotate,
          }}
        />
      </div>


        {/* Floating shapes */}
        <div className="tw-fixed tw-inset-0 -tw-z-5 tw-overflow-hidden tw-pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="tw-absolute tw-rounded-full tw-bg-gradient-to-r tw-from-blue-100 tw-to-cyan-100"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <main className="tw-container tw-mx-auto tw-px-4  tw-relative tw-z-10">
        <Hero />
        <ReliableSolutions />
        <RCMSection />
        <WhyChooseUs />
        <ComprehensiveServices />
        {/* <Services />
        <RCM /> */}
        <Testimonials />
        <FAQ />
        <CTASections />
      </main>
    </div>
  )
}

export default CardiologyMedicalBilling