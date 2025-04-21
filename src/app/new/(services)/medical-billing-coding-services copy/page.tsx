/* eslint-disable react/no-unescaped-entities */
import Breadcrumb from "@/components/ui/breadcrumb";

const MedicalBillingCodingServicesPage = () => {
    return (
        <div className="page-content bg-white aboutus">
            <Breadcrumb title="Medical Billing and Coding Services" breadcrumb={[{ label: "Medical Billing and Coding Services", href: "/medical-billing-coding-services" }]} />
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        {/* <div className="col"></div> */}
                        <div className="col-md-10">
                            <div className="heading-bx text-center">
                                <h3 className="title">Medical Billing & Coding Services</h3>
                            </div>
                            <p>
                                Key MedSolutions is a medical billing company based in North Carolina, that provides comprehensive medical insurance billing and coding services to physician groups across the United States. Our skilled and experienced billing and coding professionals provide personalized solutions tailored to the specific needs of each client. We stay current with the latest regulations and guidelines, ensuring that our services are always compliant with HIPAA, ICD-10, and EHR "meaningful use" standards. We pride ourselves on our commitment to excellence and our reputation as a trusted and dependable partner in medical claims billing. Let us help you maximize the revenue of your practice and streamline your medical billing process. Contact us today to learn more.
                                            
                            </p>
                        </div>
                        {/* <div className="col"></div> */}
                    </div>
                </div>
            </section>


            {/* <AboutSection /> 
					
					<FeatureSection3 />
					
					<TeamSection />
					
					<TestimonialSection />
					
					<LatestNewsSection /> */}
        </div>
    )
}
export default MedicalBillingCodingServicesPage;