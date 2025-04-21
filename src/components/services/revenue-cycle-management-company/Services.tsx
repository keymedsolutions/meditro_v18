/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from 'react-bootstrap'
import Image from 'next/image'

const Services = () => {
  return (
    <>
         <section
        id="services"
        className="tw-relative tw-w-full tw-overflow-hidden tw-bg-gradient-to-br tw-from-slate-50 tw-to-blue-50 tw-py-24"
      >
        {/* Background decoration */}
        <div className="tw-absolute tw-inset-0">
          <svg
            className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="100%" height="100%" fill="none" />
                <path d="M 0,20 H 40" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="1" />
                <path d="M 20,0 V 40" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="tw-container tw-relative tw-mx-auto tw-max-w-6xl tw-px-4">
          <div className="tw-mb-16 tw-text-center">
            <motion.span
              className="tw-mb-2 tw-inline-block tw-rounded-full tw-bg-blue-100 tw-px-3 tw-py-1 tw-text-sm tw-font-medium tw-text-blue-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.span>
            <motion.h2
              className="tw-mb-4 tw-text-3xl tw-font-bold tw-text-gray-900 md:tw-text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Comprehensive RCM Solutions
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
              We offer end-to-end revenue cycle management solutions tailored to your practice's specific needs.
            </motion.p>
          </div>

          <Tabs defaultValue="verification" className="tw-w-full">
            <div className="tw-mb-8 tw-flex tw-justify-center">
              <TabsList className="tw-grid tw-w-full tw-max-w-2xl tw-grid-cols-2 md:tw-grid-cols-4">
                <TabsTrigger value="verification">Verification</TabsTrigger>
                <TabsTrigger value="claims">Claims</TabsTrigger>
                <TabsTrigger value="denials">Denials</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
              </TabsList>
            </div>
            <div className="tw-min-h-[400px]">
              <AnimatePresence mode="wait">
                <TabsContent value="verification" className="tw-mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="tw-grid tw-gap-8 md:tw-grid-cols-2"
                  >
                    <div className="tw-flex tw-flex-col tw-justify-center">
                      <h3 className="tw-mb-4 tw-text-2xl tw-font-bold tw-text-gray-900">Insurance Verification & Eligibility</h3>
                      <p className="tw-mb-6 tw-text-gray-600">
                        Before services are rendered, our staff confirms the patient's insurance eligibility and
                        coverage information. This reduces the possibility of claims being rejected and guarantees that
                        patients understand their financial obligations.
                      </p>
                      <ul className="tw-space-y-3">
                        {[
                          "Prevents insurance-related claim denials",
                          "Accurate verification of patient benefits",
                          "Reduces administrative burden on your practice",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            className="tw-flex tw-items-start tw-gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                          >
                            <CheckCircle className="mt-1 tw-h-5 tw-w-5 tw-text-blue-500" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="tw-mt-8">
                        <Button className="tw-bg-blue-600 hover:tw-bg-blue-700">
                          Learn More
                          <ArrowRight className="tw-ml-2 tw-h-4 tw-w-4 tw-transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                    <div className="tw-relative">
                      <div className="tw-relative tw-h-[400px] tw-overflow-hidden tw-rounded-2xl tw-shadow-xl">
                        <Image
                          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                          alt="Insurance Verification"
                          fill
                          className="tw-object-cover"
                        />
                        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-blue-900/60 tw-to-transparent" />
                        <div className="tw-absolute tw-bottom-6 tw-left-6">
                          <div className="tw-rounded-lg tw-bg-white/10 tw-p-4 tw-backdrop-blur-md">
                            <h4 className="tw-mb-1 tw-text-xl tw-font-bold tw-text-white">98%</h4>
                            <p className="tw-text-sm tw-text-blue-100">Verification Accuracy</p>
                          </div>
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="tw-absolute -tw-bottom-4 -tw-right-4 tw-h-24 tw-w-24 tw-rounded-full tw-bg-blue-200/50" />
                      <div className="tw-absolute -tw-left-4 -tw-top-4 tw-h-16 tw-w-16 tw-rounded-full tw-bg-purple-200/50" />
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="claims" className="tw-mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="tw-grid tw-gap-8 md:tw-grid-cols-2"
                  >
                    <div className="tw-flex tw-flex-col tw-justify-center">
                      <h3 className="tw-mb-4 tw-text-2xl tw-font-bold tw-text-gray-900">Claim Submission & Management</h3>
                      <p className="tw-mb-6 tw-text-gray-600">
                        From coding to the final submission to insurance companies, we manage the complete claim
                        submission process. Our team ensures all claims are correctly coded using ICD-10, CPT, and HCPCS
                        codes.
                      </p>
                      <ul className="tw-space-y-3">
                        {[
                          "Accurate coding and documentation",
                          "Faster claim submission",
                          "Enhanced claim tracking for real-time updates",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            className="tw-flex tw-items-start tw-gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                          >
                            <CheckCircle className="mt-1 tw-h-5 tw-w-5 tw-text-blue-500" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="tw-mt-8">
                        <Button className="tw-bg-blue-600 hover:tw-bg-blue-700">
                          Learn More
                          <ArrowRight className="tw-ml-2 tw-h-4 tw-w-4 tw-transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                    <div className="tw-relative">
                      <div className="tw-relative tw-h-[400px] tw-overflow-hidden tw-rounded-2xl tw-shadow-xl">
                        <Image
                          src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                          alt="Claim Management"
                          fill
                          className="tw-object-cover"
                        />
                        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-blue-900/60 tw-to-transparent" />
                        <div className="tw-absolute tw-bottom-6 tw-left-6">
                          <div className="tw-rounded-lg tw-bg-white/10 tw-p-4 tw-backdrop-blur-md">
                            <h4 className="tw-mb-1 tw-text-xl tw-font-bold tw-text-white">95%</h4>
                            <p className="tw-text-sm tw-text-blue-100">First-Pass Claim Rate</p>
                          </div>
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="tw-absolute -tw-bottom-4 -tw-right-4 tw-h-24 tw-w-24 tw-rounded-full tw-bg-green-200/50" />
                      <div className="tw-absolute -tw-left-4 -tw-top-4 tw-h-16 tw-w-16 tw-rounded-full tw-bg-yellow-200/50" />
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="denials" className="tw-mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="tw-grid tw-gap-8 md:tw-grid-cols-2"
                  >
                    <div className="tw-flex tw-flex-col tw-justify-center">
                      <h3 className="tw-mb-4 tw-text-2xl tw-font-bold tw-text-gray-900">Denial Management & Appeals</h3>
                      <p className="tw-mb-6 tw-text-gray-600">
                        In healthcare billing, claims denials are a major problem that can affect your revenue stream.
                        Our team specializes in reviewing denied claims, determining the underlying reasons for
                        rejections, and proactive denial management.
                      </p>
                      <ul className="tw-space-y-3">
                        {[
                          "Increased claim approval rate",
                          "Reduced risk of revenue loss",
                          "Faster resolution of denials",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            className="tw-flex tw-items-start tw-gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                          >
                            <CheckCircle className="tw-mt-1 tw-h-5 tw-w-5 tw-text-blue-500" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="tw-mt-8">
                        <Button className="tw-bg-blue-600 hover:tw-bg-blue-700">
                          Learn More
                          <ArrowRight className="tw-ml-2 tw-h-4 tw-w-4 tw-transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                    <div className="tw-relative">
                      <div className="tw-relative tw-h-[400px] tw-overflow-hidden tw-rounded-2xl tw-shadow-xl">
                        <Image
                          src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                          alt="Denial Management"
                          fill
                          className="tw-object-cover"
                        />
                        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-blue-900/60 tw-to-transparent" />
                        <div className="tw-absolute tw-bottom-6 tw-left-6">
                          <div className="tw-rounded-lg tw-bg-white/10 tw-p-4 tw-backdrop-blur-md">
                            <h4 className="tw-mb-1 tw-text-xl tw-font-bold tw-text-white">85%</h4>
                            <p className="text-sm text-blue-100">Denial Recovery Rate</p>
                          </div>
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="tw-absolute -tw-bottom-4 -tw-right-4 tw-h-24 tw-w-24 tw-rounded-full tw-bg-purple-200/50" />
                      <div className="tw-absolute -tw-left-4 -tw-top-4 tw-h-16 tw-w-16 tw-rounded-full tw-bg-red-200/50" />
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="billing" className="tw-mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="tw-grid tw-gap-8 md:tw-grid-cols-2"
                  >
                    <div className="tw-flex tw-flex-col tw-justify-center">
                      <h3 className="tw-mb-4 tw-text-2xl tw-font-bold tw-text-gray-900">Patient Billing & Collections</h3>
                      <p className="tw-mb-6 tw-text-gray-600">
                        We guarantee adherence to all regulations while offering your patients clear and transparent
                        billing. All aspects of billing are managed by our staff, including statement distribution,
                        payment processing, and collection management.
                      </p>
                      <ul className="tw-space-y-3">
                        {[
                          "Improved patient satisfaction with clear bills",
                          "Reduced accounts receivable (AR) days",
                          "Effective management of patient collections",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            className="tw-flex tw-items-start tw-gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                          >
                            <CheckCircle className="tw-mt-1 tw-h-5 tw-w-5 tw-text-blue-500" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="tw-mt-8">
                        <Button className="tw-bg-blue-600 hover:tw-bg-blue-700">
                          Learn More
                          <ArrowRight className="tw-ml-2 tw-h-4 tw-w-4 tw-transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                    <div className="tw-relative">
                      <div className="tw-relative tw-h-[400px] tw-overflow-hidden tw-rounded-2xl tw-shadow-xl">
                        <Image
                          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                          alt="Patient Billing"
                          fill
                          className="tw-object-cover"
                        />
                        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-blue-900/60 tw-to-transparent" />
                        <div className="tw-absolute tw-bottom-6 tw-left-6">
                          <div className="tw-rounded-lg tw-bg-white/10 tw-p-4 tw-backdrop-blur-md">
                            <h4 className="tw-mb-1 tw-text-xl tw-font-bold tw-text-white">40%</h4>
                            <p className="tw-text-sm tw-text-blue-100">Reduced Collection Time</p>
                          </div>
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="tw-absolute -tw-bottom-4 -tw-right-4 tw-h-24 tw-w-24 tw-rounded-full tw-bg-blue-200/50" />
                      <div className="tw-absolute -tw-left-4 -tw-top-4 tw-h-16 tw-w-16 tw-rounded-full tw-bg-indigo-200/50" />
                    </div>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </div>
          </Tabs>

          <div className="tw-mt-16 tw-text-center">
            <Button
              size="lg"
              className="tw-group tw-relative tw-overflow-hidden tw-bg-blue-600 hover:tw-bg-blue-700"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span className="tw-relative tw-z-10">View All Services</span>
              <span className="tw-absolute tw-bottom-0 tw-left-0 tw-h-0 tw-w-full tw-bg-gradient-to-r tw-from-blue-800 tw-to-indigo-800 tw-transition-all tw-duration-300 tw-group-hover:tw-h-full"></span>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
