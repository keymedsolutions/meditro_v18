/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react'
import { RadiologyBenefitCard } from './radiology-benefit-card'
import { Shield, FileText, MessageCircle, BadgePercent } from 'lucide-react'
import { GradientText } from './gradient-text'
import { useInView, motion } from 'framer-motion'

const DenialsSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
  <>
     {/* Denials Section */}
     <section ref={ref} className="   tw-py-16 tw-bg-gradient-to-r tw-from-primary-100 tw-to-secondary-100 tw-text-white tw-relative">
        <div className="tw-absolute tw-inset-0 tw-opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <rect width="100%" height="100%" fill="none" />
                <path d="M 0,0 L 0,40" stroke="white" strokeWidth="0.5" />
                <path d="M 40,0 L 40,40" stroke="white" strokeWidth="0.5" />
                <path d="M 0,0 L 40,0" stroke="white" strokeWidth="0.5" />
                <path d="M 0,40 L 40,40" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="tw-text-center tw-mb-16"
        >
          <div className="tw-inline-block tw-mb-4">
            <div className="tw-relative">
              <div className="tw-absolute tw-inset-0 tw-bg-blue-100 tw-rounded-lg tw-transform tw-rotate-3"></div>
              <div className="tw-relative tw-bg-blue-50 tw-rounded-lg tw-px-4 tw-py-1 tw-transform -tw-rotate-3">
                <span className="tw-text-blue-600 tw-font-semibold">Medical Necessities</span>
              </div>
            </div>
          </div>

          <h2 className="tw-text-4xl md:tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-6">
          Overcoming Radiology's Denials of  <GradientText>Medical Necessities</GradientText>
          </h2>
     
        </motion.div>

          
          <div className="tw-max-w-4xl tw-mx-auto tw-mb-12">
            <p className="tw-text-lg tw-mb-6">
              In radiology billing, medical necessity denials are a frequent problem that frequently results in lost or
              postponed reimbursements. If payors feel that imaging studies are not sufficiently justified, they may
              reject claims. Particularly for specialties like pathology, thoracic surgery, gastroenterology, and
              urology, we at Key MedSolutions make sure that radiologists present the required paperwork to demonstrate
              medical necessity.
            </p>
          </div>

          <h4 className="tw-text-xl tw-font-semibold tw-text-center tw-mb-8 tw-font-display">
            How You Can Benefit from Our Radiology Billing Services:
          </h4>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-max-w-4xl tw-mx-auto">
            <RadiologyBenefitCard
              icon={<Shield className="tw-h-14 tw-w-14 tw-text-blue-300" />}
              title="Expert Insurance Policy Knowledge"
              description="We keep abreast of payer regulations, such as those pertaining to prior authorization."
            />
            <RadiologyBenefitCard
              icon={<FileText className="tw-h-14 tw-w-14 tw-text-blue-300" />}
              title="Thorough Clinical Documentation"
              description="To support claims, we gather vital patient information, including imaging indications, medical history, and relevant diagnostic codes."
            />
            <RadiologyBenefitCard
              icon={<MessageCircle className="tw-h-14 tw-w-14 tw-text-blue-300" />}
              title="Proactive Payer Communication"
              description="To address inconsistencies and clarify medical necessity requirements, our staff communicates directly with insurance companies."
            />
            <RadiologyBenefitCard
              icon={<BadgePercent className="tw-h-14 tw-w-14 tw-text-blue-300" />}
              title="Appeals Management"
              description="In order to reverse denials and recoup lost revenue, we draft well-supported appeal letters and offer supporting documentation for rejected claims."
            />
          </div>
        </div>
      </section>
  </>
  )
}

export default DenialsSection