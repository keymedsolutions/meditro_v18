"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle, Award, Clock, DollarSign, ShieldCheck } from "lucide-react"
import BenefitsCard from "./benefits-card"





export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const benefits = [
    {
      icon: <Award className="tw-h-10 tw-w-10 tw-text-teal-500" />,
      title: "Experienced Professionals",
      description:
        "With years of experience in the field, our staff has extensive knowledge of healthcare billing and coding.",
      image: "/images/gallery/pic1.jpg",
        color: "#3b6af7"
    },
    {
      icon: <CheckCircle className="tw-h-10 tw-w-10 tw-text-blue-500" />,
      title: "End-to-End Services",
      description:
        "From patient collections to insurance verification and all points in between, we oversee your complete revenue cycle.",
      image: "/images/gallery/pic1.jpg",
       color: "#e75a89"
    },
    {
      icon: <DollarSign className="tw-h-10 tw-w-10 tw-text-emerald-500" />,
      title: "Improved Cash Flow",
      description:
        "By decreasing claim denials and expediting reimbursements, our services help your practice's cash flow.",
      image: "/images/gallery/pic1.jpg",
        color: "#4ade80"
    },
    {
      icon: <Clock className="tw-h-10 tw-w-10 tw-text-indigo-500" />,
      title: "Proven Track Record",
      description: "We have a track record of enhancing the financial performance of practices all around the US.",
      image: "/images/gallery/pic1.jpg",
        color: "#f59e0b"
    },
    {
      icon: <ShieldCheck className="tw-h-10 tw-w-10 tw-text-purple-500" />,
      title: "Compliance & Accuracy",
      description:
        "We guarantee that your practice complies with all laws and codes, lowering the possibility of audits and fines.",
      image: "/images/gallery/pic1.jpg",
        color: "#7c3aed"
    },
  ]

  return (
    <section ref={containerRef} className="tw-py-24 tw-relative tw-overflow-hidden tw-bg-gradient-to-br tw-from-teal-50 tw-to-white">
      {/* Background image with overlay */}
      <div className="tw-absolute tw-inset-0 tw-z-0">
        <img
          src="/images/gallery/pic2.jpg"
          alt="Healthcare background"
          className="tw-w-full tw-h-full tw-object-cover tw-opacity-10"
        />
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-teal-50 tw-to-white"></div>
      </div>

      {/* Background decorative elements */}
      <div className="tw-absolute tw-inset-0 tw-pointer-events-none tw-z-0">
        <motion.div style={{ y: y1 }} className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-opacity-30">
          <div className="tw-absolute tw-top-10 tw-left-1/4 tw-w-64 tw-h-64 tw-rounded-full tw-bg-teal-500/20 tw-blur-3xl"></div>
          <div className="tw-absolute tw-bottom-40 tw-right-1/3 tw-w-80 tw-h-80 tw-rounded-full tw-bg-blue-500/20 tw-blur-3xl"></div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-opacity-30">
          <div className="tw-absolute tw-top-40 tw-right-1/4 tw-w-72 tw-h-72 tw-rounded-full tw-bg-indigo-500/20 tw-blur-3xl"></div>
          <div className="tw-absolute tw-bottom-20 tw-left-1/3 tw-w-60 tw-h-60 tw-rounded-full tw-bg-emerald-500/20 tw-blur-3xl"></div>
        </motion.div>
      </div>

      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-16"
        >
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-slate-800 tw-mb-4">
            Why Choose Key MedSolutions for RCM Services?
          </h2>
          <p className="tw-text-lg tw-text-slate-600">
            We provide comprehensive solutions that enhance your revenue cycle performance and improve your bottom line.
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">

            {
                benefits.map((benefit, index) => (
                    <BenefitsCard
                        key={index}
                        title={benefit.title}
                        description={benefit.description}
                        icon={benefit.icon}
                        color={benefit.color}
                        delay={index * 100}
                        image={benefit.image}
                        link={""}
                    />
                ))
            }
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="tw-bg-white tw-rounded-xl tw-p-6 tw-border tw-border-slate-200 tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-overflow-hidden group"
            >
              <div className="tw-relative tw-h-48 -tw-mx-6 -tw-mt-6 tw-mb-6 tw-overflow-hidden">
                <img
                  src={benefit.image || "/placeholder.svg"}
                  alt={benefit.title}
                  className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-scale-110"
                />
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-white tw-via-white/80 tw-to-transparent"></div>
              </div>

              <div className="tw-flex tw-items-center tw-mb-4">
                <div className="tw-bg-gradient-to-br tw-from-teal-50 tw-to-blue-50 tw-p-3 tw-rounded-lg tw-inline-block tw-mr-4">
                  {benefit.icon}
                </div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-slate-800">{benefit.title}</h3>
              </div>

              <p className="tw-text-slate-600">{benefit.description}</p>

              <div className="tw-mt-6 tw-pt-4 tw-border-t tw-border-slate-100">
                <button className="tw-text-teal-600 tw-font-medium tw-flex tw-items-center group-hover:tw-underline">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="tw-h-4 tw-w-4 tw-ml-1 tw-transition-transform group-hover:tw-translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        style={{ opacity }}
        className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-40 tw-bg-gradient-to-t tw-from-white tw-to-transparent tw-pointer-events-none"
      />
    </section>
  )
}
