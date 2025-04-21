/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';

const PhysicianBilling = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <>
            {/* More About Physician Billing Section */}
            <section
                className="tw-py-16 tw-mt-20 md:tw-py-20 tw-bg-gradient-to-br tw-from-keymed-50 tw-to-teal-50 tw-relative tw-overflow-hidden"
            >
                <div className="tw-absolute tw-top-0 tw-right-0 tw-w-64 tw-h-64  tw-rounded-full tw-opacity-50 tw-transform tw-translate-x-1/2 -translate-y-1/2"></div>
                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-48 tw-h-48 tw-bg-keymed-100 tw-rounded-full tw-opacity-50 tw-transform tw-translate-x-1/2 translate-y-1/2"></div>


                <div className="tw-text-center tw-mb-20">
                    <SectionHeading title="More About Our Physician Billing" subtitle="About Us" />
                </div>

                <div className="tw-container tw-px-4 md:tw-px-6 tw-relative tw-z-10 "


                >
                    <div className=" tw-mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.8,
                                type: "spring",
                                stiffness: 100
                            }}
                            className="tw-relative"
                        >
                            {/* Enhanced background elements */}
                            <div className="tw-absolute -tw-top-20 -tw-left-20 tw-w-80 tw-h-80 tw-bg-blue-100/30 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-70 tw-animate-pulse"></div>
                            <div className="tw-absolute -tw-bottom-20 -tw-right-20 tw-w-80 tw-h-80 tw-bg-purple-100/30 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-70 tw-animate-pulse" style={{ animationDuration: '8s' }}></div>
                            <div className="tw-absolute tw-top-1/3 tw-right-1/4 tw-w-40 tw-h-40 tw-bg-cyan-100/20 tw-rounded-full tw-filter tw-blur-2xl tw-opacity-50 tw-animate-pulse" style={{ animationDuration: '12s' }}></div>

                            <div className="tw-relative tw-bg-white/90 tw-backdrop-blur-sm tw-rounded-2xl tw-p-8 md:tw-p-12  tw-border tw-border-gray-100/80 tw-overflow-hidden">
                                {/* Decorative elements */}
                                <div className="tw-absolute -tw-top-5 -tw-right-5 tw-w-20 tw-h-20 tw-bg-primary-500/10 tw-rounded-full"></div>
                                <div className="tw-absolute -tw-bottom-3 -tw-left-3 tw-w-12 tw-h-12 tw-bg-secondary-500/10 tw-rounded-full"></div>

                                {/* Decorative patterns */}
                                <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-opacity-5 tw-pointer-events-none">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                    </svg>
                                </div>


                                <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">


                                    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">
                                        <div className="tw-col-span-1 tw-flex tw-justify-center tw-items-center">
                                            <div className="tw-relative">
                                                <div className="tw-absolute tw-inset-0 tw-bg-keymed-100 tw-rounded-full tw-transform tw-rotate-45 tw-scale-110"></div>
                                                <img
                                                    src="/images/gallery/pic3.jpg"
                                                    alt="Medical billing professional"
                                                    className="tw-rounded-2xl tw-shadow-lg tw-relative tw-z-10 tw-h-full tw-w-full tw-object-cover"
                                                />
                                                <div className="tw-absolute -tw-bottom-3 -tw-right-3 tw-bg-primary-400 tw-text-white tw-p-3 tw-rounded-xl tw-z-20 tw-shadow-lg">
                                                    <BadgeCheck className="tw-h-6 tw-w-6" />
                                                </div>
                                            </div>
                                        </div>




                                        <div className="tw-col-span-2 tw-flex tw-flex-col tw-justify-center">

                                            <motion.div
                                                className="tw-order-1 md:tw-order-2"
                                                variants={containerVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            >




                                                <motion.p
                                                    variants={itemVariants}
                                                    className="tw-text-gray-700 tw-mb-6 tw-leading-relaxed"
                                                >
                                                    At KeyMed Solutions, we understand how important proper billing and effective revenue cycle management
                                                    are to private practices' bottom lines. To improve your financial well-being, our knowledgeable staff
                                                    guarantees accurate claims processing, prompt follow-ups, and careful account management.
                                                </motion.p>

                                                <motion.p
                                                    variants={itemVariants}
                                                    className="tw-text-gray-700 tw-mb-6 tw-leading-relaxed"
                                                >
                                                    We place a high priority on vigilance and compliance, keeping up with changing insurance and governmental
                                                    regulations. We assist healthcare providers in navigating intricate billing requirements while optimizing
                                                    revenue and reducing claim denials thanks to our state-of-the-art technology and industry knowledge.
                                                </motion.p>
                                            </motion.div>





                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default PhysicianBilling
