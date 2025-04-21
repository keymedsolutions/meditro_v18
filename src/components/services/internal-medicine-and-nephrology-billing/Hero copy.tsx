/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Input } from '@/ui/input'
import { Button } from '@/ui/button'


const Hero = () => {
    const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})

    // Scroll progress for various effects
    const { scrollYProgress } = useScroll()
    const smoothScrollYProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

    const backgroundY = useTransform(smoothScrollYProgress, [0, 1], [0, -300])

    return (
        <div>
            {/* Background Shapes */}
            <div className="tw-fixed tw-inset-0 tw-z-0 tw-overflow-hidden tw-pointer-events-none">
                <div className="tw-absolute tw-top-0 tw-right-0 tw-w-1/3 tw-h-1/3 tw-bg-gradient-to-b tw-from-blue-500/20 tw-to-purple-500/20 tw-rounded-bl-full tw-blur-3xl"></div>
                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-1/2 tw-h-1/2 tw-bg-gradient-to-t tw-from-orange-500/10 tw-to-red-500/10 tw-rounded-tr-full tw-blur-3xl"></div>
                <div className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-bg-teal-500/10 tw-rounded-full tw-blur-3xl"></div>
            </div>



            {/* Background Elements */}
            <div className="tw-fixed tw-inset-0 tw-z-0 tw-overflow-hidden tw-pointer-events-none">
                <motion.div style={{ y: backgroundY }} className="tw-absolute tw-inset-0">
                    {/* Animated Background Shapes */}
                    <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">
                        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="tw-w-full tw-h-full tw-opacity-10">
                            <motion.path
                                d="M0,1000 C300,800 400,600 500,600 C600,600 700,800 1000,1000"
                                fill="none"
                                stroke="url(#gradient1)"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M0,800 C200,700 300,650 500,650 C700,650 800,700 1000,800"
                                fill="none"
                                stroke="url(#gradient2)"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M0,600 C200,500 300,450 500,450 C700,450 800,500 1000,600"
                                fill="none"
                                stroke="url(#gradient3)"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                            />
                            <defs>
                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3B82F6" />
                                    <stop offset="100%" stopColor="#8B5CF6" />
                                </linearGradient>
                                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#8B5CF6" />
                                    <stop offset="100%" stopColor="#EC4899" />
                                </linearGradient>
                                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#EC4899" />
                                    <stop offset="100%" stopColor="#3B82F6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-rounded-full tw-bg-gradient-to-r tw-from-blue-500/5 tw-to-purple-500/5 tw-blur-3xl"
                        animate={{
                            x: [0, 30, 0],
                            y: [0, -30, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 20,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="tw-absolute tw-bottom-1/4 tw-right-1/4 tw-w-96 tw-h-96 tw-rounded-full tw-bg-gradient-to-r tw-from-pink-500/5 tw-to-orange-500/5 tw-blur-3xl"
                        animate={{
                            x: [0, -40, 0],
                            y: [0, 40, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 25,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="tw-absolute tw-top-1/2 tw-right-1/3 tw-w-48 tw-h-48 tw-rounded-full tw-bg-gradient-to-r tw-from-teal-500/5 tw-to-green-500/5 tw-blur-3xl"
                        animate={{
                            x: [0, 20, 0],
                            y: [0, 20, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 15,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </div>


            {/* Hero Section */}
            <section
                ref={(el) => {
                    if (sectionsRef.current) {
                        sectionsRef.current.hero = el;
                    }
                }}
                className="tw-relative tw-py-16 md:tw-py-24 tw-overflow-hidden">
                <div className="tw-absolute tw-inset-0 tw-z-0">
                    <div className="tw-absolute tw-top-0 tw-right-0 tw-w-1/2 tw-h-full tw-bg-gradient-to-bl tw-from-blue-50 tw-to-transparent"></div>
                    <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-1/2 tw-h-1/2 tw-bg-gradient-to-tr tw-from-orange-50 tw-to-transparent"></div>

                    {/* Animated Shapes */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 1.5, ease: "easeOut" },
                        }}
                        className="tw-absolute tw-top-1/4 tw-right-1/4 tw-w-64 tw-h-64 tw-rounded-full tw-border tw-border-blue-200 tw-opacity-30"
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 1.5, delay: 0.2, ease: "easeOut" },
                        }}
                        className="tw-absolute tw-top-1/4 tw-right-1/4 tw-w-96 tw-h-96 tw-rounded-full tw-border tw-border-blue-200 tw-opacity-20"
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 1.5, delay: 0.4, ease: "easeOut" },
                        }}
                        className="tw-absolute tw-top-1/4 tw-right-1/4 tw-w-128 tw-h-128 tw-rounded-full tw-border tw-border-blue-200 tw-opacity-10"
                    ></motion.div>
                </div>

                <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
                    <div className="tw-grid md:tw-grid-cols-2 tw-gap-12 tw-items-center">





                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.8, ease: "easeOut" },
                            }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="tw-bg-primary-100 tw-text-primary-700 tw-text-sm tw-font-medium tw-px-4 tw-py-1.5 tw-rounded-md tw-inline-block tw-mb-6"
                            >
                                Expert Medical Billing Services
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="tw-text-3xl md:tw-text-4xl lg:tw-text-5xl  tw-mb-6 tw-font-display tw-leading-tight"
                            >
                                Comprehensive Physician Billing Services for Maximized Revenue & Efficiency
                            </motion.h1>

                            <h2 className="tw-text-3xl tw-text-slate-800 tw-mb-8 tw-leading-relaxed">
                                Maximized Revenue & Efficiency for healthcare providers across the United States.
                            </h2>

                            <div className="tw-space-y-4 tw-mb-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.5, delay: 0.2 },
                                    }}
                                    className="tw-flex tw-items-start"
                                >
                                    <p className="tw-text-slate-700 tw-text-justify">Simplifying physician billing for healthcare providers across the United States is our area of expertise at KeyMed Solutions. Our objective is to assist medical practices in lowering the number of claims that are denied, boosting income, and continuing to adhere to US healthcare laws. You can concentrate on delivering top-notch patient care while our committed billing specialists take care of the intricate details of insurance claims, coding, and revenue cycle management.</p>
                                </motion.div>


                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.8, ease: "easeOut" },
                            }}
                            className="tw-relative"
                        >
                            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-500/5 tw-to-indigo-500/5 tw-rounded-3xl tw-transform tw-rotate-3"></div>
                            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-500/5 tw-to-indigo-500/5 tw-rounded-3xl tw-transform tw-rotate-3"></div>

                            <div className="tw-relative tw-bg-white tw-rounded-3xl tw-shadow-2xl tw-shadow-blue-500/5 tw-overflow-hidden tw-border tw-border-slate-100">
                                <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-h-2 tw-bg-gradient-to-r tw-from-blue-500 tw-to-indigo-600"></div>
                                <div className="tw-p-8">
                                    <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-center tw-bg-gradient-to-r tw-from-blue-600 tw-to-indigo-700 tw-bg-clip-text tw-text-transparent">
                                        Request a Free Demo
                                    </h2>
                                    <form className="tw-space-y-5">
                                        <div>
                                            <Input
                                                type="text"
                                                placeholder="Full Name*"
                                                className="tw-bg-slate-50 tw-border-slate-200 focus:tw-border-blue-500 focus:tw-ring-blue-500/20 tw-rounded-xl tw-py-6"
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                type="email"
                                                placeholder="Email*"
                                                className="tw-bg-slate-50 tw-border-slate-200 focus:tw-border-blue-500 focus:tw-ring-blue-500/20 tw-rounded-xl tw-py-6"
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                type="tel"
                                                placeholder="Phone Number*"
                                                className="tw-bg-slate-50 tw-border-slate-200 focus:tw-border-blue-500 focus:tw-ring-blue-500/20 tw-rounded-xl tw-py-6"
                                            />
                                        </div>
                                        <div>
                                            <Input
                                            type='textarea'
                                                placeholder="Message"
                                                className="tw-bg-slate-50 tw-border-slate-200 focus:tw-border-blue-500 focus:tw-ring-blue-500/20 tw-rounded-xl tw-min-h-[120px]"
                                            />
                                        </div>
                                        <Button className="tw-w-full tw-bg-gradient-to-r tw-from-blue-600 tw-to-indigo-700 hover:tw-from-blue-700 hover:tw-to-indigo-800 tw-text-white tw-py-6 tw-rounded-xl tw-shadow-lg tw-shadow-blue-500/20 tw-transition-all hover:tw-shadow-blue-500/40">
                                            Schedule A Demo
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
