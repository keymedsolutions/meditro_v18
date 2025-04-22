import React from 'react'

const MainBannerSection = () => {
    return (
        <div className="main-banner" style={{ backgroundImage: "url('/images/main-banner/bg1.jpg')" }}>
            <div className="container-fluid inner-content">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12 mb-4 mb-lg-0 order-2 order-lg-12">
                        <h6 className="title-ext text-primary">Who we are</h6>
                        <h1 className='!tw-text-[18px] md:!tw-text-[22px] lg:!tw-text-3xl'>Trusted Medical Billing Services & <br /> Revenue Cycle Management Company for Healthcare</h1>
                        <p>We are a healthcare revenue cycle management and medical billing company that helps healthcare providers worldwide to optimize their revenue collection while reducing administrative overhead.Their comprehensive solutions encompass the entire medical billing cycle, and they offer specialized services such as contract management and revenue cycle consulting.Key MedSolutions is a reliable partner for healthcare practitioners and facilities seeking to improve their revenue cycle management and achieve financial success.</p>
                       
                       
                        <p>Our comprehensive services encompass RCM Billing Solutions, claims processing, denial resolution, and insurance confirmation. We specialize in delivering comprehensive Healthcare Revenue Cycle Management (RCM) Services designed to enhance cash flow and minimize claim denials. If you need expert help with billing or strategic guidance, we are here to help you.</p>
                        <p>Key MedSolutions is your reliable ally in efficient and precise Medical Billing Services, utilizing deep industry knowledge combined with advanced technology to enhance reimbursement. As a leading Medical Billing Company, we provide advanced Revenue Cycle Management Solutions and customized Medical Billing Solutions to suit practices of all sizes.</p>
                 {/* <Link to="/about-us" className="btn btn-secondary btn-lg shadow">Read More</Link> */}
                    </div>
                    <div className="col-lg-5 col-md-12 text-center order-1 order-lg-2">
                        <div className="banner-img">
                            <img src={"/images/main-banner/doctor.png"} alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <img className="pt-img1 animate1" src={"/images/shap/trangle-orange.png"} alt="" />
            <img className="pt-img2 animate2" src={"/images/shap/square-blue.png"} alt="" />
            <img className="pt-img3 animate3" src={"/images/shap/chicle-blue-2.png"} alt="" />
            <img className="pt-img4 animate4" src={"/images/shap/plus-orange.png"} alt="" />
            <img className="pt-img5 animate-wave" src={"/images/shap/wave-orange.png"} alt="" />
        </div>

    )
}

export default MainBannerSection
