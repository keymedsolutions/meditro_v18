/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { RCMServices } from '@/data/revenue-cycle-management-company';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const RCMServiceDetailsPage = async () => {
    const headerList = headers();
    const pathname = headerList.get("x-current-path");
    const ServiceDetails = RCMServices.find((item) => item.link === pathname);
    if (!ServiceDetails) {
        return redirect("/404");
    }
    return (
        <>
            <div className="ttr-media mb-30">
                <img src={ServiceDetails.image} className="rounded" alt="" />
            </div>
            <div className="clearfix">
                <div className="head-text mb-30">
                    <h2 className="title mb-15">{ServiceDetails.title}</h2>
                    <p className="mb-0">{ServiceDetails.description}</p>
                </div>

                {
                    ServiceDetails.benefits && ServiceDetails.benefits.length > 0 && <div className="row align-items-center">

                        <div className="head-text mb-30">
                            <h4 className="title mb-10">Key Benefits:</h4>
                        </div>
                        <div className="col-md-12 mb-30">
                            <ul className="list-check-squer mb-0">

                                {
                                    ServiceDetails.benefits.map((item: any, index: number) => <li key={index}>{item}</li>)
                                }

                            </ul>
                        </div>

                    </div>}

            </div>
            {/* <div className="clearfix">
                <div className="head-text mb-30">
                    <h4 className="title mb-10">Popular Questions</h4>
                    <p className="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <div className="accordion ttr-accordion1" id="accordionRow1">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading1">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">How Doctor Can Ease Your Pain?</button>
                        </h2>
                        <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionRow1">
                            <div className="accordion-body">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">How do I withdraw from a subject?</button>
                        </h2>
                        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionRow1">
                            <div className="accordion-body">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Understand Doctor Before You Regret?</button>
                        </h2>
                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionRow1">
                            <div className="accordion-body">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">What types of systems do you support?</button>
                        </h2>
                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionRow1">
                            <div className="accordion-body">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading5">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">We Teach You How To Feel Better?</button>
                        </h2>
                        <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionRow1">
                            <div className="accordion-body">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading6">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">How Can I Contact You?</button>
                        </h2>
                        <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionRow1">
                            <div className="accordion-body">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default RCMServiceDetailsPage
