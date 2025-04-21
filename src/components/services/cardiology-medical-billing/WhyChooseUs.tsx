import React from 'react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="tw-mb-32 tw-relative"
      >
        <div className="tw-text-center tw-mb-16 tw-relative tw-z-10">
          <div className="tw-inline-block tw-mb-4 tw-px-4 tw-py-1 tw-bg-gradient-to-r tw-from-blue-100 tw-to-purple-100 tw-rounded-full tw-text-blue-600 tw-text-sm tw-font-medium">
            Our Advantages
          </div>

          <h3 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-gray-800 tw-mb-6">
            <span className="tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600">
            Why Choose Key MedSolutions for Cardiology Billing and Coding?
            </span>
          </h3>

          <p className="tw-text-lg tw-text-gray-600 tw-max-w-2xl tw-mx-auto">
            We specialize in cardiology billing and coding to help your practice thrive financially while you focus on
            providing exceptional patient care.
          </p>
        </div>

        <div className="tw-grid md:tw-grid-cols-2 tw-gap-8 tw-relative tw-z-10">
          {[
            {
              title: "Expertise in Specialized Cardiology",
              description:
                "Our staff guarantees accurate claim submissions and maximum reimbursements because they are knowledgeable about the intricacies of cardiology billing and coding.",
              icon: "🔬",
              image: "/images/gallery/human_heart.jpg",
            },
            {
              title: "Enhanced Revenue Development",
              description:
                "By reducing denials, getting rid of coding errors, and guaranteeing the best reimbursement rates, we help you increase revenue.",
              icon: "📈",
              image: "/placeholder.svg?height=200&width=200&text=Revenue",
            },
            {
              title: "Guarantee of Regulatory Compliance",
              description:
                "Keep up with constantly evolving regulations. Your practice remains in compliance with the most recent industry standards thanks to our billing solutions.",
              icon: "🛡️",
              image: "/placeholder.svg?height=200&width=200&text=Compliance",
            },
            {
              title: "Effective & Simplified Invoicing",
              description:
                "We maximize accuracy and efficiency at every stage of the cardiology revenue cycle, from charge capture to claims submission.",
              icon: "⚡",
              image: "/placeholder.svg?height=200&width=200&text=Invoicing",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="tw-group"
            >
              <div className="tw-relative tw-h-full">
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-200/30 tw-to-purple-200/30 tw-rounded-[30px] tw-blur-xl tw-transform group-hover:tw-scale-105 tw-transition-transform tw-duration-500" />

                <div className="tw-relative tw-h-full tw-bg-white/90 tw-backdrop-blur-sm tw-rounded-[30px] tw-p-8 tw-border tw-border-blue-100 tw-shadow-lg group-hover:tw-border-blue-300 tw-transition-colors tw-duration-300 tw-overflow-hidden">
                  <div className="tw-flex tw-items-center tw-gap-4 tw-mb-4">
                    <div className="tw-text-4xl">{item.icon}</div>
                   
                  </div>

                  <h4 className="tw-text-xl tw-font-bold tw-text-gray-800 tw-mb-4 group-hover:tw-text-blue-600 tw-transition-colors tw-duration-300">
                    {item.title}
                  </h4>
                  <p className="tw-text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default WhyChooseUs
