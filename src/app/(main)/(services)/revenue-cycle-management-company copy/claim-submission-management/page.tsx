/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import Breadcrumb from '@/components/ui/breadcrumb'
import Link from 'next/link'
import React from 'react'

const ClaimSubmissionManagement = () => {
  return (
    <div className="page-content bg-white aboutus">
            <Breadcrumb title="ICD-10 Medical Coding" breadcrumb={[{ label: "ICD-10 Medical Coding", href: "/icd-10-medical-coding" }]} />
       
            <section>
            <div className="container">
                <div className="row justify-content-center">
                    {/* <div className="col"></div> */}
                    <div className="col-md-10">
                        <div className="heading-bx text-center">
                            <h3 className="title">ICD-10 medical coding</h3>
                        </div>
                        <p>
                            ICD-10 medical coding is a standardized system used by healthcare providers to accurately document and code patient diagnoses and procedures for billing and insurance purposes. The system includes over 68,000 diagnosis codes and 87,000 procedure codes, allowing for greater specificity and accuracy in medical billing.At Key MedSolutions, we understand the importance of ICD-10 medical coding in the revenue cycle management process. Our team of expert coders is well-versed in the latest ICD-10 guidelines and offers comprehensive coding solutions that cater to the unique needs of healthcare providers.Our ICD-10 coding solutions are designed to minimize errors, expedite payments, and optimize revenue management. We work closely with healthcare providers to ensure compliance and reduce the risk of claim denials.
                        </p>
                        <h5>
                            If you're a healthcare provider looking to streamline your revenue cycle management process and achieve greater financial success.
                        </h5>
                        <div className="text-center">
                            <Link href="/contact-us" className="btn btn-primary shadow">CONTACT US <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
                        </div>

                    </div>
                    {/* <div className="col"></div> */}
                </div>
            </div>
        </section>
        </div >
  )
}

export default ClaimSubmissionManagement
