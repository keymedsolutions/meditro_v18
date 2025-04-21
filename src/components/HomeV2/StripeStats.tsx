/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BadgeCheck, Mail, Phone, User, Calendar } from 'lucide-react';
import { Separator } from '@/ui/separator';
import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import ScrollReveal from './scroll-reveal';


import type { ReactNode } from "react"

interface StatCardProps {
  icon: ReactNode
  title: string
  description: string
}

function StatCard({ icon, title, description }: StatCardProps) {
  return (
    <div className="tw-flex tw-items-center tw-p-4 tw-rounded-xl tw-bg-white/10 tw-backdrop-blur-sm tw-transform tw-transition-all hover:tw-scale-105 hover:tw-bg-white/15 tw-border tw-border-white/10 tw-group">
      <div className="tw-mr-4 tw-text-white tw-bg-white/10 tw-p-3 tw-rounded-full group-hover:tw-scale-110 tw-transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="tw-text-white tw-font-display tw-font-semibold tw-text-lg">{title}</h4>
        {/* <p className="tw-text-gray-300 tw-text-sm">{description}</p> */}
      </div>
    </div>
  )
}

 
const StripeStats = () => {
 

  const floatingShapes = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseShapes = {
    initial: { scale: 1, opacity: 0.7 },
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data:any) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Thank you for your interest! We'll contact you soon.");
      reset();
    } catch (error:any) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
    
    <section className="tw-relative tw-bg-gradient-to-r tw-from-dark tw-to-primary tw-text-white tw-py-12 tw-overflow-hidden">
  <div className="tw-absolute tw-inset-0 tw-overflow-hidden">
    <div className="tw-absolute -tw-right-10 -tw-top-10 tw-w-40 tw-h-40 tw-bg-white tw-opacity-5 tw-rounded-full"></div>
    <div className="tw-absolute tw-left-10 tw-bottom-10 tw-w-20 tw-h-20 tw-bg-white tw-opacity-5 tw-rounded-full"></div>
    <div className="tw-absolute tw-right-1/4 tw-bottom-0 tw-w-32 tw-h-32 tw-bg-white tw-opacity-5 tw-rounded-full"></div>
  </div>
  <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6">
      <ScrollReveal delay={0.1}>
        <StatCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="tw-h-8 tw-w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          }
          title="1500+ Satisfied Providers"
          description="Trusted by healthcare professionals nationwide"
        />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <StatCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="tw-h-8 tw-w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          }
          title="Serving More Than 75 Specialties"
          description="Specialized billing for every medical field"
        />
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <StatCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="tw-h-8 tw-w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          }
          title="1200+ Billing and Coding Experts"
          description="Certified professionals dedicated to your success"
        />
      </ScrollReveal>
    </div>
  </div>
</section>
    </>
  );
};

export default StripeStats;
