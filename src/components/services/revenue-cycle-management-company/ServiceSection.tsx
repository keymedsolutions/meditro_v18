"use client"

import { RCMServices } from "@/data/revenue-cycle-management-company"
import { motion } from "framer-motion"
import Link from "next/link"




export default function ServiceSection() {

    return (
        <section className="tw-w-full tw-py-24 tw-bg-gradient-to-b tw-from-blue-50 tw-to-white tw-relative tw-overflow-hidden">
            {/* Background image with overlay */}
            <div className="tw-absolute tw-inset-0 tw-z-0">
                <img
                    src="/images/gallery/compliant-coding.png"
                    alt="Abstract medical background"
                    className="tw-w-full tw-h-full tw-object-cover tw-opacity-10"
                />
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-blue-50 tw-to-white"></div>
            </div>

            {/* Decorative elements */}
            <div className="tw-absolute tw-inset-0 tw-pointer-events-none tw-overflow-hidden tw-z-0">
                <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-20 tw-bg-gradient-to-b tw-from-white tw-to-transparent"></div>
                <div className="tw-absolute -tw-top-40 -tw-right-40 tw-w-80 tw-h-80 tw-border-2 tw-border-teal-100 tw-rounded-full tw-opacity-60"></div>
                <div className="tw-absolute tw-top-60 -tw-left-20 tw-w-40 tw-h-40 tw-border-2 tw-border-blue-100 tw-rounded-full tw-opacity-60"></div>
                <div className="tw-absolute tw-bottom-20 tw-right-40 tw-w-60 tw-h-60 tw-border-2 tw-border-indigo-100 tw-rounded-full tw-opacity-60"></div>

                <div className="tw-absolute tw-top-40 tw-left-1/3 tw-w-6 tw-h-6 tw-bg-teal-400 tw-rounded-full tw-opacity-20"></div>
                <div className="tw-absolute tw-top-60 tw-right-1/4 tw-w-4 tw-h-4 tw-bg-blue-400 tw-rounded-full tw-opacity-20"></div>
                <div className="tw-absolute tw-bottom-40 tw-left-1/4 tw-w-8 tw-h-8 tw-bg-indigo-400 tw-rounded-full tw-opacity-20"></div>
                <div className="tw-absolute tw-bottom-60 tw-right-1/3 tw-w-5 tw-h-5 tw-bg-emerald-400 tw-rounded-full tw-opacity-20"></div>
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
                        Comprehensive RCM Services for Healthcare Providers
                    </h2>
                    <p className="tw-text-lg tw-text-slate-600">
                        Our knowledgeable staff has years of experience and provides customized solutions to maximize your revenue
                        cycle operations.
                    </p>
                </motion.div>

                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-6">

                    {
                        RCMServices.map((service, index) => {
                            return <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="tw-group"
                            >
                                <div className="tw-relative tw-h-full">
                                    <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-200/30 tw-to-purple-200/30 tw-rounded-[20px] tw-blur-lg tw-transform group-hover:tw-scale-105 tw-transition-transform tw-duration-500" />

                                    <div className="tw-relative tw-flex tw-gap-10 tw-flex-col tw-justify-between tw-items-center tw-h-full tw-bg-white/90 tw-backdrop-blur-sm tw-rounded-[20px] tw-p-6 tw-border tw-border-blue-100 tw-shadow-lg group-hover:tw-border-blue-300 tw-transition-colors tw-duration-300 tw-overflow-hidden">
                                        {/* <div className="tw-w-full tw-h-40 tw-rounded-xl tw-overflow-hidden tw-mb-6">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                width={200}
                                                height={200}
                                                className="tw-object-contain tw-scale-125 tw-w-full tw-h-full"
                                            />
                                        </div> */}



                                        <div>


                                            <div className={`tw-w-12 tw-h-12 tw-rounded-2xl ${service.color} tw-flex tw-items-center tw-justify-center tw-mb-4 group-hover:tw-from-blue-200 group-hover:tw-to-purple-200 tw-transition-colors tw-duration-300`}>

                                                <service.icon className="tw-h-6 tw-w-6" />
                                                {/* <CheckCircle className="tw-h-6 tw-w-6 tw-text-blue-600" /> */}
                                            </div>
                                            <h4 className="tw-text-lg hover:tw-text-primary-600 tw-font-bold tw-text-gray-800 tw-mb-3 group-hover:tw-text-primary-600 tw-transition-colors tw-duration-300">
                                                {service.title}
                                            </h4>
                                            <p className="tw-text-gray-600 tw-text-sm">{service.description.slice(0,150).concat("...")}</p>
                                        </div>

                                        <Link href={service.link} className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>

                                    </div>
                                </div>
                            </motion.div>
                        })
                    }
                
                </div>
            </div>
        </section>
    )
}
