"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Clock, TrendingUp, CheckCircle, DollarSign, FileCheck } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"

export default function StatsSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <section ref={sectionRef} className="tw-py-16 tw-bg-gradient-to-r tw-from-gray-50 tw-to-blue-50">
            <div className="tw-container tw-mx-auto tw-px-4">


                <SectionHeading
                    title=" Advanced Nephrology Billing Solutions"
                    subtitle=""
                    description=""
                    showUnderline={false}
                />

    

                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-5 tw-gap-8">
                    <StatCard
                        icon={<Clock className="tw-h-10 tw-w-10 tw-text-teal-400" />}
                        value="30"
                        prefix="<"
                        label="Days in AR"
                        description="Quicker reimbursements through an accelerated accounts receivable cycle"
                        isVisible={isVisible}
                        delay={0}
                    />
                    <StatCard
                        icon={<TrendingUp className="tw-h-10 tw-w-10 tw-text-teal-400" />}
                        value="15"
                        prefix="10-"
                        suffix="%"
                        label="Revenue Increase"
                        description="Enhanced billing tactics to optimize your profits"
                        isVisible={isVisible}
                        delay={200}
                    />
                    <StatCard
                        icon={<CheckCircle className="tw-h-10 tw-w-10 tw-text-teal-400" />}
                        value="97"
                        suffix="%"
                        label="First Pass Ratio"
                        description="Reduce rejections by submitting accurate claims"
                        isVisible={isVisible}
                        delay={400}
                    />
                    <StatCard
                        icon={<DollarSign className="tw-h-10 tw-w-10 tw-text-teal-400" />}
                        value="96"
                        suffix="%"
                        label="Collection Ratios"
                        description="Increase practice income by following up proactively"
                        isVisible={isVisible}
                        delay={600}
                    />
                    <StatCard
                        icon={<FileCheck className="tw-h-10 tw-w-10 tw-text-teal-400" />}
                        value="98"
                        suffix="%"
                        label="Clean Claims Rate"
                        description="Precision-driven billing reduces delays and rejections"
                        isVisible={isVisible}
                        delay={800}
                    />
                </div>
            </div>
        </section>
    )
}

interface StatCardProps {
    icon: React.ReactNode
    value: string
    prefix?: string
    suffix?: string
    label: string
    description: string
    isVisible: boolean
    delay: number
}

function StatCard({ icon, value, prefix = "", suffix = "", label, description, isVisible, delay }: StatCardProps) {
    const [count, setCount] = useState(0)
    const duration = 2000
    const valueNum = Number.parseInt(value)

    useEffect(() => {
        if (!isVisible) return

        let startTime: number
        let animationFrame: number

        const countUp = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const percentage = Math.min(progress / duration, 1)

            setCount(Math.floor(percentage * valueNum))

            if (progress < duration) {
                animationFrame = requestAnimationFrame(countUp)
            } else {
                setCount(valueNum)
            }
        }

        const timeoutId = setTimeout(() => {
            animationFrame = requestAnimationFrame(countUp)
        }, delay)

        return () => {
            cancelAnimationFrame(animationFrame)
            clearTimeout(timeoutId)
        }
    }, [isVisible, valueNum, delay])

    return (
        <div
            className={`tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-lg tw-border tw-border-gray-100 tw-text-center tw-transform tw-transition-all tw-duration-500 hover:tw-shadow-xl hover:-tw-translate-y-1 ${isVisible ? "tw-opacity-100" : "tw-opacity-0 tw-translate-y-10"
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="tw-flex tw-justify-center tw-mb-4">{icon}</div>
            <div className="tw-text-4xl tw-font-bold tw-text-teal-400 tw-mb-2">
                {prefix}
                {isVisible ? count : 0}
                {suffix}
            </div>
            <h3 className="tw-text-lg  tw-text-primary-700  tw-font-bold tw-mb-2">{label}</h3>
            <p className="tw-text-sm tw-text-gray-600">{description}</p>
        </div>
    )
}
