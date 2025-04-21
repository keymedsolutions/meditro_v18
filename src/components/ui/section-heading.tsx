"use client"
import React from 'react'
import { motion } from 'framer-motion';


const SectionHeading = ({ title, subtitle, description, showUnderline = true }: { title: string, subtitle: string, description?: string, showUnderline?: boolean }) => {
    return (
        <>
            {/* Title + Subtitle */}
            <div className="tw-text-center tw-mb-16">

                {

                    subtitle && <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="tw-mb-6"
                    >
                        <span className="tw-inline-block tw-px-4 tw-py-1.5 tw-rounded-md tw-bg-gradient-to-r tw-from-primary-500/10 tw-to-secondary-500/10 tw-text-primary-700 tw-text-sm tw-font-semibold tw-shadow-sm tw-border tw-border-primary-200/50 tw-backdrop-blur-sm">
                            {subtitle}
                        </span>
                    </motion.div>
                }


                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-bg-clip-text tw-bg-gradient-to-r tw-from-primary-700 tw-to-secondary-700 tw-font-serif tw-relative tw-inline-block"
                >
                    {title}
                    {showUnderline && (
                        <motion.div
                            className="tw-absolute -tw-bottom-3 tw-left-0 tw-w-full tw-h-1.5 tw-bg-gradient-to-r tw-from-primary-400 tw-to-secondary-400 tw-rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                        />
                    )}
                </motion.h2>
            </div>

            {
                description && <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="tw-max-w-4xl tw-mx-auto tw-text-center tw-mb-16"
                >
                    <p className="tw-text-lg tw-text-slate-600 tw-leading-relaxed">
                        {description}
                    </p>
                </motion.div>
            }


        </>
    )
}

export default SectionHeading;
