'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Clock, Phone, Star, Zap } from 'lucide-react'
import { Button } from '@/ui/button'
import Image from 'next/image'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const heroImageY = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  const heroTextY = useTransform(scrollYProgress, [0, 0.5], [0, -50])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="tw-relative tw-flex tw-min-h-screen tw-w-full tw-items-center tw-justify-center tw-overflow-hidden tw-bg-gradient-to-br tw-from-slate-900 tw-via-blue-900 tw-to-indigo-900 tw-px-4 tw-py-32 tw-text-white"
    >
      {/* Background elements */}
      <div className="tw-absolute tw-inset-0 tw-overflow-hidden">
        <div className="tw-absolute tw-inset-0 tw-opacity-10">
          <div className="tw-h-full tw-w-full tw-bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] tw-bg-[size:40px_40px]" />
        </div>

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="tw-absolute tw-rounded-full tw-bg-white tw-opacity-5"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        <motion.div
          className="tw-pointer-events-none tw-absolute tw-h-[600px] tw-w-[600px] tw-rounded-full tw-bg-gradient-to-r tw-from-blue-500/20 tw-to-purple-500/20 tw-blur-3xl"
          animate={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        />
      </div>

      <div className="tw-container tw-relative tw-mx-auto ">
        <div className="tw-grid tw-gap-8 md:tw-grid-cols-2 md:tw-gap-12">
          <motion.div
            className="tw-flex tw-flex-col tw-justify-center"
            style={{ y: heroTextY, opacity: heroOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="tw-mb-4 tw-inline-flex tw-items-center tw-rounded-full tw-border tw-border-white/20 tw-bg-white/10 tw-px-4 tw-py-1.5 tw-text-sm tw-backdrop-blur-sm"
            >
              <Zap className="tw-mr-2 tw-h-4 tw-w-4 tw-text-yellow-400" />
              Transforming Healthcare Revenue Cycles
            </motion.div>

            <motion.h1
              className="tw-mb-6 tw-text-4xl tw-font-bold tw-leading-tight tw-tracking-tight md:tw-text-5xl lg:tw-text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="tw-block tw-text-secondary">Comprehensive Revenue Cycle Management (RCM)</span>
              <span className="tw-bg-gradient-to-r tw-from-blue-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent">
              Services for Healthcare Providers
              </span>
            </motion.h1>

            {/* <motion.p
              className="tw-mb-8 tw-max-w-lg tw-text-lg tw-text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             Based in North Carolina, Key MedSolutions is a reputable Healthcare Revenue Cycle Management (RCM) business that offers comprehensive solutions to healthcare providers all over the United States. Our knowledgeable staff has years of experience, is aware of the particular difficulties faced by the healthcare sector and provides customized solutions to maximize your revenue cycle operations. Our RCM solutions guarantee prompt reimbursements and enhanced cash flow from insurance eligibility verification through claims submission and denial management. To increase your income and reduce financial risk, we apply industry best practices and the newest technology. For thorough and trustworthy Healthcare Revenue Cycle Management Solutions that will improve your bottom line, rely on Key MedSolutions.
            </motion.p> */}

            <motion.div
              className="tw-flex tw-flex-col tw-gap-4 sm:tw-flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="tw-group tw-relative tw-overflow-hidden tw-bg-white tw-text-blue-900 hover:tw-bg-white/90"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <span className="tw-relative tw-z-10 tw-flex tw-items-center">
                  Schedule a Free Consultation
                  <Phone className="tw-ml-2 tw-h-4 tw-w-4 tw-transition-transform group-hover:tw-rotate-12" />
                </span>
                <span className="tw-absolute tw-bottom-0 tw-left-0 tw-h-0 tw-w-full tw-bg-gradient-to-r tw-from-blue-400 tw-to-purple-400 tw-transition-all tw-duration-300 group-hover:tw-h-full" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="tw-relative tw-flex tw-items-center tw-justify-center"
            style={{ y: heroImageY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="tw-relative tw-h-[500px] tw-w-full">
              <motion.div
                className="tw-absolute tw-left-4 tw-top-4 tw-h-full tw-w-full tw-overflow-hidden tw-rounded-2xl tw-bg-gradient-to-br tw-from-blue-400/20 tw-to-purple-400/20 tw-backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="tw-absolute tw-left-2 tw-top-2 tw-h-full tw-w-full tw-overflow-hidden tw-rounded-2xl tw-bg-gradient-to-br tw-from-blue-500/30 tw-to-purple-500/30 tw-backdrop-blur-sm"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="tw-relative tw-h-full tw-w-full tw-overflow-hidden tw-rounded-2xl tw-shadow-2xl"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Healthcare professionals"
                  fill
                  className="tw-object-cover"
                  priority
                />
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-blue-900/60 tw-to-transparent" />
              </motion.div>
            </div>

            <motion.div
              className="tw-absolute -tw-bottom-6 -tw-left-6 tw-rounded-xl tw-border tw-border-white/20 tw-bg-white/10 tw-p-4 tw-backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="tw-flex tw-items-center tw-gap-3">
                <div className="tw-rounded-full tw-bg-blue-500/20 tw-p-2">
                  <Clock className="tw-h-5 tw-w-5 tw-text-blue-300" />
                </div>
                <div>
                  <div className="tw-text-xs tw-text-blue-200">Average Improvement</div>
                  <div className="tw-text-xl tw-font-bold">45% Faster Reimbursements</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="tw-absolute -tw-right-6 tw-top-10 tw-rounded-xl tw-border tw-border-white/20 tw-bg-white/10 tw-p-4 tw-backdrop-blur-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="tw-flex tw-items-center tw-gap-3">
                <div className="tw-rounded-full tw-bg-yellow-500/20 tw-p-2">
                  <Star className="tw-h-5 tw-w-5 tw-text-yellow-300" />
                </div>
                <div>
                  <div className="tw-text-xs tw-text-blue-200">Client Satisfaction</div>
                  <div className="tw-text-xl tw-font-bold">98% Success Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="tw-absolute tw-bottom-8 tw-left-1/2 -tw-translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="tw-h-8 tw-w-8 tw-text-white/50" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
