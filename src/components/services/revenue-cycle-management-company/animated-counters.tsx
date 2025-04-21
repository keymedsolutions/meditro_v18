import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, Shield, Phone } from 'lucide-react'

const colorClasses = {
  blue: {
    bgLight: 'tw-bg-blue-500/10',
    text: 'tw-text-blue-500',
  },
  purple: {
    bgLight: 'tw-bg-purple-500/10',
    text: 'tw-text-purple-500',
  },
  green: {
    bgLight: 'tw-bg-green-500/10',
    text: 'tw-text-green-500',
  },
  pink: {
    bgLight: 'tw-bg-pink-500/10',
    text: 'tw-text-pink-500',
  },
}

const AnimatedCounters = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-white tw-py-20">
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent),radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.05),transparent)]" />
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4">
        <div className="tw-mb-16 tw-text-center">
          <motion.h2
            className="tw-mb-4 tw-text-3xl tw-font-bold tw-text-gray-900 md:tw-text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Transforming Healthcare Finance
          </motion.h2>
          <motion.div
            className="tw-mx-auto tw-mb-6 tw-h-1 tw-w-20 tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-500"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="tw-mx-auto tw-max-w-2xl tw-text-lg tw-text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our innovative approach delivers measurable results for healthcare providers of all sizes.
          </motion.p>
        </div>

        <div className="tw-grid tw-grid-cols-2 tw-gap-6 md:tw-grid-cols-4">
          {[
            { value: "98%", label: "Claim Approval Rate", icon: CheckCircle, color: "blue" },
            { value: "45%", label: "Reduced AR Days", icon: Clock, color: "purple" },
            { value: "100%", label: "HIPAA Compliant", icon: Shield, color: "green" },
            { value: "24/7", label: "Support Available", icon: Phone, color: "pink" },
          ].map((stat, index) => {
            const colorClass = colorClasses[stat.color as keyof typeof colorClasses]
            return (
              <motion.div
                key={index}
                className="tw-group tw-relative tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-p-8 tw-shadow-lg tw-transition-all hover:tw--translate-y-2 hover:tw-shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`tw-absolute tw--right-10 tw--top-10 tw-h-40 tw-w-40 tw-rounded-full ${colorClass.bgLight} tw-transition-all group-hover:tw-scale-110`} />
                <div className="tw-relative">
                  <div className={`tw-mb-4 tw-inline-flex tw-rounded-xl ${colorClass.bgLight} tw-p-3`}>
                    <stat.icon className={`tw-h-6 tw-w-6 ${colorClass.text}`} />
                  </div>
                  <h3 className="tw-mb-2 tw-text-3xl tw-font-bold tw-text-gray-900">{stat.value}</h3>
                  <p className="tw-text-sm tw-text-gray-600">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AnimatedCounters
