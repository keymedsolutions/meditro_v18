/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInView, motion } from "framer-motion"
import { FileText, DollarSign, LineChart, ArrowRight } from "lucide-react"
import { useRef } from "react"
import { GradientText } from "./gradient-text"
import ServiceCard from "./ServiceCard"
import { ThreeDBackground } from "./three-d-background"

function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: "End-to-End Physician Billing",
      description: "Skilled billing management for imaging specialists and radiologists in various specialties.",
      icon: <FileText />,
      gradient: "bg-gradient-to-r from-blue-600 to-blue-800",
    },
    {
      title: "Institutional Billing Solutions",
      description:
        "Customized services that guarantee compliance with current industry standards for hospitals and imaging centers.",
      icon: <DollarSign />,
      gradient: "bg-gradient-to-r from-purple-600 to-purple-800",
    },
    {
      title: "Comprehensive Component Billing",
      description:
        "Seamless processing of technical (TC), professional (PC), and global billing for radiology-based services.",
      icon: <LineChart />,
      gradient: "tw-bg-gradient-to-r from-pink-600 to-pink-800",
    },
    {
      title: "Advanced Imaging Billing",
      description: "Effective claim handling for nuclear medicine procedures, MRIs, CT scans, ultrasounds, and X-rays.",
      icon: <FileText />,
      gradient: "bg-gradient-to-r from-blue-600 to-purple-600",
    },
    {
      title: "Clear & Transparent Charge Summaries",
      description: "Comprehensive reporting of billing charges, deductibles, co-pays, and allowable amounts.",
      icon: <DollarSign />,
      gradient: "bg-gradient-to-r from-purple-600 to-pink-600",
    },
    {
      title: "Claims Dispute & Denial Management",
      description:
        "Proactive EOB monitoring to identify unpaid claims and resolve disagreements for optimal reimbursement.",
      icon: <LineChart />,
      gradient: "bg-gradient-to-r from-pink-600 to-blue-600",
    },
  ]

  return (
    <section id="services" ref={ref} className="tw-py-24 tw-relative tw-overflow-hidden">
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-slate-50 tw-to-white"></div>
      <div className="tw-absolute tw-inset-0">
        <ThreeDBackground />
      </div>

      <div className="tw-container tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="tw-text-center tw-mb-16"
        >
          <div className="tw-inline-block tw-mb-4">
            <div className="tw-relative">
              <div className="tw-absolute tw-inset-0 tw-bg-purple-100 tw-rounded-lg tw-transform tw-rotate-3"></div>
              <div className="tw-relative tw-bg-purple-50 tw-rounded-lg tw-px-4 tw-py-1 tw-transform -tw-rotate-3">
                <span className="tw-text-purple-600 tw-font-semibold">Our Services</span>
              </div>
            </div>
          </div>

          <h2 className="tw-text-4xl md:tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-6">
            Radiology Billing Services for <GradientText>Maximized Reimbursements</GradientText>
          </h2>
          <p className="tw-text-xl tw-text-slate-600 tw-max-w-2xl tw-mx-auto">
            Key MedSolutions offers effective radiology billing solutions that minimize claim denials, speed up
            reimbursements, and ensure compliance with healthcare laws.
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index}
              gradient={service.gradient}
            />
          ))}
        </div>

        <div className="tw-mt-16 tw-text-center tw-w-full tw-flex tw-justify-center">

          <button className='btn btn-primary  tw-bg-gradient-to-r tw-from-blue-600 tw-via-purple-600 tw-to-pink-500 tw-text-white tw-font-semibold tw-rounded-full tw-transition-all tw-duration-300 hover:tw-scale-105 hover:tw-shadow-xl focus:tw-ring-4 focus:tw-ring-orange-300 group'>
            Get Started Today
            {/* <i className="btn-icon-bx fas fa-phone-alt"></i> */}
            <ArrowRight className=" btn-icon-bx  tw-ml-2 tw-h-3 tw-w-3 " />
          </button>

        </div>
      </div>
    </section>
  )
}

export default ServicesSection
