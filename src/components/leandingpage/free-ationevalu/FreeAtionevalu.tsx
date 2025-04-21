/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react'
import Hero from './hero-1'
import BenefitsSection from './benefits-section';
import HowItWorksAndCTA from "./how-it-works";
import CallToAction from "./call-to-action";
import EvaluationFormModal from "@/components/Model/EvaluationFormModal";

import dynamic from 'next/dynamic'
 
const ServicesSection = dynamic(() => import('./services-section'), { ssr: false })

const FreeAtionevalu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (e: any) => {
        e.preventDefault();
        setShow(true);
    };


    return (

        <>
            <div className="tailwind-scope fold:tw-red-500 sm:tw-red-500">
                <Hero handleShow={handleShow} />
                <ServicesSection />
                <BenefitsSection />
                <HowItWorksAndCTA />
                <CallToAction handleShow={handleShow} />
            </div>
            <EvaluationFormModal show={show} handleClose={handleClose} />

        </>

    )
}

export default FreeAtionevalu