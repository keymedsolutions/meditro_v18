"use client"
/* eslint-disable react/no-unescaped-entities */
import PlanSelectModalFormModal from '@/components/Model/PlanSelectModalFormModal';
import Breadcrumb from '@/components/ui/breadcrumb';
import React, { useState } from 'react'

function PricingPage() {
    const title = "Smart Learning Starts with a Smart Plan";
    const path = "/pricing";
    const [open, setOpen] = useState(false);
    const [plan, setPlan] = useState("Basic");
    return (
        <>
            <div className="tw-page-content tw-bg-white">
                <Breadcrumb title={title}
                    breadcrumb={[{ label: title, href: path }]} />


                <section className="section-area section-sp5 work-area"
                    style={{
                        backgroundImage: `url(images/background/line-bg1.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: '100%',
                        marginTop: "8rem"
                    }}
                >
                    <div className="container plan-sections">
                        <div className="heading-bx text-center">
                            <h6 className="title-ext text-secondary">Pricing</h6>

                            <h2 className="tw-mb-4 tw-font-display tw-text-4xl tw-font-extrabold tw-tracking-tight sm:tw-text-5xl md:tw-text-6xl">
                                Smart Learning Starts with a Smart{" "}
                                <span className="tw-bg-gradient-to-r tw-from-purple-600 tw-to-pink-600 tw-bg-clip-text tw-text-transparent">Plan</span>
                            </h2>
                            <p>Get the resources you need to become an expert in medical billing and revenue cycle management by selecting a strategic learning plan from Key Medsolution.</p>

                            <p>
                                With professional direction, practical experience, and step-by-step assistance, you'll be well on your way to becoming a successful healthcare billing professional.</p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4    col-sm-12 col-12 mb-30">
                                <div className='tw-relative basic price-card'>
                                    <div className="ribbon1 basic tw-z-10">$999.00</div>
                                    <div className="work-bx  basic  tw-relative">
                                        <div>

                                            <div className="tw-absolute -tw-left-12 tw-top-4 tw-z-20 tw-rotate-[-45deg] tw-bg-gradient-to-r tw-from-purple-600 tw-to-pink-600 tw-px-16 tw-py-1 tw-text-center tw-text-[16px] tw-font-bold tw-uppercase tw-text-white tw-shadow-lg">
                                                Basic
                                            </div>
                                            {/* <div className="work-num-bx  tw-mt-5" style={{
                                                fontSize: "3rem"
                                            }}>$1000.00</div> */}
                                            <div className="work-content">

                                                <ul className="tw-grid tw-gap-2 list-check-squer">
                                                    {[
                                                        "Resume mapping full proof for AST",
                                                        "Interview preparation",
                                                        "Job hunt assistance",
                                                    ].map((feature) => (
                                                        <li key={feature} >

                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ribbon tw-z-10">

                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpen(true);
                                                setPlan("Basic");
                                            }}
                                            className="btn btn-primary light">Subscribe Now<i className="btn-icon-bx fas fa-chevron-right"></i></a>


                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 mb-30">

                                <div className='tw-relative pro price-card'>
                                    <div className="ribbon1 pro tw-z-10">$2999.00</div>
                                    <div className="work-bx pro active tw-relative">

                                        <div className="tw-absolute -tw-left-12 tw-top-4 tw-z-20 tw-rotate-[-45deg] tw-bg-gradient-to-r tw-from-purple-600 tw-to-pink-600 tw-px-16 tw-py-1 tw-text-center tw-text-[16px] tw-font-bold tw-uppercase tw-text-white tw-shadow-lg">
                                            Pro
                                        </div>
                                        {/* <div className="work-num-bx tw-mt-5" style={{
                                            fontSize: "3rem"
                                        }}>$3000.00</div> */}
                                        <div className="work-content">

                                            <ul className="tw-grid tw-gap-2 list-check-squer mb-0">
                                                {[
                                                    "Training for 2 months",
                                                    "16 hours includes software training, web portal",
                                                    "Basic training for HIPAA & RCM",
                                                    "Everything in Basic plan",
                                                ].map((feature) => (
                                                    <li
                                                        key={feature}
                                                    >
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="ribbon tw-z-10">

                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpen(true);
                                                setPlan("Pro");
                                            }}
                                            className="btn btn-primary light">Subscribe Now<i className="btn-icon-bx fas fa-chevron-right"></i></a>


                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-30">

                                <div className='tw-relative premium price-card'>
                                    <div className="ribbon1 pro tw-z-10 !tw-text-3xl">$3999.00</div>
                                    <div className="work-bx premium   tw-relative">
                                        <div className="tw-absolute -tw-left-12 tw-top-4 tw-z-20 tw-rotate-[-45deg] tw-bg-gradient-to-r tw-from-purple-600 tw-to-pink-600 tw-px-16 tw-py-1 tw-text-center tw-text-[16px] tw-font-bold tw-uppercase tw-text-white tw-shadow-lg">
                                            Premium
                                        </div>
                                        {/* <div className="work-num-bx  tw-mt-8" style={{
                                            fontSize: "3rem"
                                        }}>$4000.00</div> */}
                                        <div className="work-content">

                                            <ul className="tw-grid tw-gap-2  list-check-squer">
                                                {[
                                                    "Live claims experience",
                                                    "Live client relationships for 2 months (24 hours)",
                                                    "Current situations and denials from different insurances",
                                                    "Everything in Pro plan",
                                                ].map((feature) => (
                                                    <li key={feature} >
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="ribbon tw-z-10">

                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpen(true);
                                                setPlan("Premium");
                                            }}
                                            className="btn btn-primary light">Subscribe Now<i className="btn-icon-bx fas fa-chevron-right"></i></a>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <img className="pt-img1 animate1" src="images/shap/circle-orange.png" alt="" /> */}
                    {/* <img className="pt-img2 animate2" src="images/shap/plus-orange.png" alt="" /> */}
                    {/* <img className="pt-img3 animate3" src="images/shap/circle-dots.png" alt="" /> */}
                </section>

            </div>

            <PlanSelectModalFormModal show={open} handleClose={() => { setOpen(false) }} plan={plan} />
        </>
    )
}

export default PricingPage
