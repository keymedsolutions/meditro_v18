/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/ui/button'
import { Phone } from 'lucide-react'
import Image from 'next/image'

const CardilogyHero = () => {
    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="tw-py-12 md:tw-py-20 tw-overflow-hidden">

                <div className="tw-container tw-mx-auto tw-px-4">
                    <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center">

                        <div className="md:tw-w-1/2 tw-mb-8 md:tw-mb-0 md:tw-pr-8">
                        <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="tw-inline-block tw-mb-6 tw-px-4 tw-py-1.5 tw-bg-blue-50 tw-rounded-full tw-text-blue-600 tw-font-medium tw-text-sm"
                            >
                                Leading Cardiology Medical Billing Services
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="tw-text-4xl md:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-text-slate-900 tw-mb-6 tw-leading-tight"
                            >
                                <span className="tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-blue-600 tw-to-cyan-500">
                                    Enhance Your Practice's
                                </span>
                                <br />
                                Financial Stability
                            </motion.h1>
                                   

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="tw-text-lg tw-text-slate-600 tw-mb-8"
                            >
                                At Key MedSolutions, we understand the complexities of cardiology medical billing and the challenges
                                practices face with coding, compliance, and reimbursement. As a leading cardiology medical billing
                                services company in the USA, our specialized billing solutions ensure accurate claim submission,
                                reduced denials, and improved revenue cycle efficiency.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4"
                            >
                                <Button
                                    size="lg"
                                    className="btn btn-primary tw-bg-gradient-to-r tw-from-blue-600 tw-to-cyan-500 hover:tw-from-blue-700 hover:tw-to-cyan-600 tw-text-white tw-rounded-full tw-px-8 tw-py-6 tw-text-base tw-shadow-lg hover:tw-shadow-xl tw-transition-all group"
                                >
                                    <span className="tw-mr-2">Schedule a Free Consultation</span>
                                    <span className="group-hover:tw-translate-x-1 tw-transition-transform">
                                        <Phone className=" btn-icon-bx tw-h-5 tw-w-5" />
                                    </span>
                                </Button>

                          
                            </motion.div>
                        </div>


                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="md:tw-w-1/3 tw-relative"
                        >
                            {/* Hero image with abstract shape */}
                            <div className="tw-relative">
                                <div className="tw-absolute -tw-top-10 -tw-left-10 tw-w-full tw-h-full tw-rounded-[40px] tw-bg-gradient-to-r tw-from-blue-200 tw-to-cyan-200 tw-transform tw-rotate-3"></div>
                                <div className="tw-relative tw-rounded-3xl tw-overflow-hidden tw-shadow-2xl tw-border-2 tw-border-white">
                                    <div className="tw-aspect-square md:tw-aspect-[4/3]">
                                        <Image
                                            src="/images/gallery/pic4.jpg"
                                            alt="Cardiology billing services"
                                            fill
                                            className="tw-object-cover"
                                        />
                                    </div>
                                    <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-600/10 tw-to-cyan-500/10" />
                                </div>
                            </div>

                            {/* Floating stats card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="tw-absolute -tw-bottom-10 -tw-right-10 tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-4 tw-border tw-border-slate-100 tw-hidden md:tw-block"
                            >
                                <div className="tw-flex tw-items-center tw-gap-3">
                                    <div className="tw-w-12 tw-h-12 tw-rounded-full tw-bg-blue-50 tw-flex tw-items-center tw-justify-center">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="tw-text-blue-600"
                                        >
                                            <path
                                                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="tw-text-slate-500 tw-text-sm">Average Increase</p>
                                        <p className="tw-text-slate-900 tw-font-bold tw-text-xl">+35%</p>
                                        <p className="tw-text-slate-500 tw-text-xs">in collections</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default CardilogyHero
