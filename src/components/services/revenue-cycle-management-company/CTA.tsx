/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/ui/button'
import { Phone } from 'lucide-react'

const CTA = () => {
  return (
    <>  <section
    id="contact"
    className="relative w-full overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-24 text-white"
  >
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Animated circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-5"
          style={{
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>

    <div className="container relative mx-auto max-w-6xl px-4">
      <div className="mx-auto max-w-3xl text-center">
        <motion.span
          className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get Started
        </motion.span>
        <motion.h2
          className="mb-6 text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Ready to Optimize Your Revenue Cycle?
        </motion.h2>
        <motion.div
          className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="mb-8 text-lg text-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Schedule a free consultation with our RCM experts and discover how Key MedSolutions can help improve your
          practice's financial performance.
        </motion.p>

        <motion.div
          className="relative mx-auto max-w-md overflow-hidden rounded-2xl bg-white p-1 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-100" />

          {/* Content */}
          <div className="relative rounded-xl bg-white p-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">Schedule a Free Consultation</h3>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="mb-1 block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="mb-1 block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="practice" className="mb-1 block text-sm font-medium text-gray-700">
                  Practice Name
                </label>
                <input
                  type="text"
                  id="practice"
                  className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <Button className="group relative w-full overflow-hidden bg-blue-600 hover:bg-blue-700">
                <span className="relative z-10 flex items-center justify-center">
                  Submit Request
                  <Phone className="ml-2 h-4 w-4" />
                </span>
                <span className="absolute bottom-0 left-0 h-0 w-full bg-gradient-to-r from-blue-800 to-purple-800 transition-all duration-300 group-hover:h-full"></span>
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  </section></>
  )
}

export default CTA