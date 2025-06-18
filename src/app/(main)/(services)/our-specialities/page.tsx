import PricingPlans from '@/components/pricing/PricingPlans';
import Breadcrumb from '@/components/ui/breadcrumb'
import React from 'react'


const BG1 = '/images/background/line-bg1.png';
const PTImg1 = '/images/shap/circle-orange.png';
const PTImg2 = '/images/shap/plus-orange.png';
const PTImg3 = '/images/shap/circle-dots.png';


const OurSpecialtiesList = [
    "Allergy and Immunology",
    "Ambulance Transportation",
    "Ambulatory Surgical Centers",
    "Anesthesiology",
    "Behavioral Health",
    "Cardiology",
    "Chiropractic",
    "Dental",
    "Dermatology",
    "Durable Medical Equipment",
    "Emergency Medicine Billing",
    "Family Practice",
    "Gastroenterology",
    "General Surgery",
    "Hospitalist Billing",
    "Internal Medicine",
    "Massage Therapy",
    "Mental Health",
    "Neurology",
    "OB Gyn",
    "Occupational Health",
    "Oncology",
    "Optometry",
    "Oral and Maxillofacial",
    "Orthopedic",
    "Otolaryngology",
    "Pain Management",
    "Pathology",
    "Pediatrics",
    "Pharmacy Billing",
    "Physical Therapy",
    "Plastic Surgery",
    "Podiatry",
    "Primary Care",
    "Pulmonology",
    "Radiation Oncology",
    "Radiology",
    "Rehab Billing",
    "Rheumatology",
    "Skilled Nursing Facility",
    "Sleep Disorder",
    "Sports Medicine",
    "Teleradiology",
    "Urology",
    "Wound Care",
    "Laboratory & Ultrasound Billing",
];
const OurSpecialties = () => {
    const title = "Our Specialties in Healthcare RCM Solutions & Medical Billing Services for Medical Practices"
    return (
        <div className="page-content bg-white aboutus">
            <Breadcrumb title={title} breadcrumb={[{ label: title, href: "/our-specialities" }]} />

            <section  className="section-area work-area" style={{ backgroundImage: "url(" + BG1 + ")", backgroundRepeat: "repeat", backgroundPosition: "center", backgroundSize: "100%" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        {/* <div className="col"></div> */}
                        <div className="col-md-12">
                            <div className="heading-bx text-center">
                                <h3 className="title">{title}</h3>
                            </div>
                                    <div className="row justify-content-center btn-group">
                                        {
                                            OurSpecialtiesList.map((item, index) => (
                                                <div className="col-lg-3 col-sm-12 mb-30" key={index}>
                                                    <div className="work-bx  sm:!tw-w-full">
                                                        <h6 className='mb-0 tw-text-center'>{item}</h6>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                </div>
                                <img className="pt-img1 animate1 tw-top-0" src={PTImg1} alt="" />
                                <img className="pt-img2 animate2 tw-top-0 tw-left-0" src={PTImg2} alt="" />
                                <img className="pt-img3 animate3 tw-bottom-10 tw-right-6" src={PTImg3} alt="" />

                        </div>
                        {/* <div className="col"></div> */}
                    </div>
                </div>
<PricingPlans />
            </section>


        </div>
    )
}

export default OurSpecialties
