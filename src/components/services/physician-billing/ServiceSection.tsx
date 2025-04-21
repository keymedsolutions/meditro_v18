/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';

const gradientMap: any = {
    blue: {
        from: 'tw-from-blue-100',
        to: 'tw-to-indigo-100',
        text: 'tw-text-blue-600',
        barFrom: 'tw-from-blue-500',
        barTo: 'tw-to-indigo-600',
        sideBar: 'tw-bg-gradient-to-b tw-from-blue-500 tw-to-indigo-600'
    },
    indigo: {
        from: 'tw-from-indigo-100',
        to: 'tw-to-purple-100',
        text: 'tw-text-indigo-600',
        barFrom: 'tw-from-indigo-500',
        barTo: 'tw-to-purple-600',
        sideBar: 'tw-bg-gradient-to-b tw-from-indigo-500 tw-to-purple-600'
    },
    purple: {
        from: 'tw-from-purple-100',
        to: 'tw-to-pink-100',
        text: 'tw-text-purple-600',
        barFrom: 'tw-from-purple-500',
        barTo: 'tw-to-pink-600',
        sideBar: 'tw-bg-gradient-to-b tw-from-purple-500 tw-to-pink-600'
    },
    pink: {
        from: 'tw-from-pink-100',
        to: 'tw-to-blue-100',
        text: 'tw-text-pink-600',
        barFrom: 'tw-from-pink-500',
        barTo: 'tw-to-blue-600',
        sideBar: 'tw-bg-gradient-to-b tw-from-pink-500 tw-to-blue-600'
    }
};

const features = [
    { title: "99% First Pass Rate", desc: "Reduce rejections and expedite payments", color: "blue" },
    { title: "98% Accuracy", desc: "Claims submission and coding driven by precision", color: "indigo" },
    { title: "25% Cost Reduction", desc: "Cut operational and overhead costs", color: "purple" },
    { title: "Completely HIPAA Compliant", desc: "Safe, legal services", color: "pink" },
    { title: "30% Revenue Growth", desc: "Maximize Collections and Increase Profitability", color: "blue" },
    { title: "100% Client Satisfaction", desc: "Physicians around the country trust us", color: "indigo" },
];

const ServiceSection = () => {
    return (
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
            {/* Decorative background blobs */}
            <div className="tw-absolute -tw-top-20 -tw-left-20 tw-w-80 tw-h-80 tw-bg-blue-100/30 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-70 tw-animate-pulse"></div>
            <div className="tw-absolute -tw-bottom-20 -tw-right-20 tw-w-80 tw-h-80 tw-bg-purple-100/30 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-70 tw-animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="tw-absolute tw-top-1/3 tw-right-1/4 tw-w-40 tw-h-40 tw-bg-cyan-100/20 tw-rounded-full tw-filter tw-blur-2xl tw-opacity-50 tw-animate-pulse" style={{ animationDuration: '12s' }}></div>

            <div className="tw-relative tw-bg-white/90 tw-backdrop-blur-sm tw-rounded-2xl tw-p-8 md:tw-p-12 tw-border tw-border-gray-100/80 tw-overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-primary-500/10 rounded-full"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-secondary-500/10 rounded-full"></div>


                {/* Decorative pattern */}
                <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-opacity-5 tw-pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>



                <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">


                    <SectionHeading
                        title="Result-Oriented Physician Billing Services in the USA"
                        subtitle="PROVEN PERFORMANCE"

                        description='For medical practices across the United States, KeyMed Solutions offers professional physician billing
                            services that optimize reimbursements and simplify revenue cycle management. Our committed staff
                            guarantees precise coding, effective claims handling, and complete adherence to industry standards.'/>

            

                    {/* Features Grid */}
                    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
                        {features.map((item, index) => {
                            const color = gradientMap[item.color];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                    className="tw-group"
                                >
                                    <div className="tw-relative tw-bg-white tw-rounded-3xl tw-shadow-xl tw-shadow-blue-500/5 tw-overflow-hidden tw-h-full">
                                        <div className={`tw-absolute tw-top-0 tw-left-0 tw-w-2 tw-h-full ${color.sideBar}`}></div>

                                        <div className="tw-p-8">
                                            <div className="tw-flex tw-items-start tw-mb-6">
                                                <div className={`tw-bg-gradient-to-r ${color.from} ${color.to} tw-p-3 tw-rounded-xl tw-mr-4`}>
                                                    <Check className={`tw-h-6  tw-w-6 ${color.text}`} />
                                                </div>
                                                <div>
                                                    <h3 className="tw-text-2xl tw-font-display tw-font-bold tw-text-slate-800 group-hover:tw-text-blue-600 tw-transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="tw-text-slate-600">{item.desc}</p>
                                                </div>
                                            </div>

                                            <motion.div
                                                className="tw-w-full tw-bg-slate-100 tw-rounded-full tw-h-2 tw-overflow-hidden"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                            >
                                                <motion.div
                                                    className={`tw-h-2 tw-bg-gradient-to-r ${color.barFrom} ${color.barTo}`}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: item.title.includes("%") ? item.title.split("%")[0] + "%" : "100%" }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* CTA Button */}


                    <div className="tw-mt-12 tw-text-center">
                    <button className='btn btn-primary  tw-bg-gradient-to-r  tw-from-primary-500 tw-to-secondary-400 tw-text-white tw-font-semibold tw-rounded-full tw-transition-all tw-duration-300 hover:tw-scale-105 hover:tw-shadow-xl focus:tw-ring-4 focus:tw-ring-orange-300 group'>
                    Request a Free Practice Analysis
                        <i className="btn-icon-bx fas fa-arrow-right"></i>
                    </button>
                </div>
                
                </div>
            </div>
        </motion.div>
    )
}

export default ServiceSection;
