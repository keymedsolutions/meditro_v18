import React from 'react';

const MainBannerSection1 = () => {
    return (
        <div className="main-banner d-flex align-items-center justify-content-center text-white text-md-start text-center" style={{ backgroundImage: "url('/images/main-banner/bg1.jpg')" }}>
            <div className="container-fluid px-4">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-7 col-sm-12 mb-4 mb-md-0">
                        <h6 className="title-ext text-primary">Who we are</h6>
                        <h1 className='fw-bold mb-4 !tw-text-[18px] md:!tw-text-[22px] lg:!tw-text-3xl'>
                            Trusted Medical Billing Services & <br />
                            Revenue Cycle Management Company for Healthcare
                        </h1>
                        <p className="mb-3">
                        We are a medical billing and revenue cycle management company that offers healthcare providers worldwide an enhanced method for revenue collection and reducing administrative duties. As a reputable Healthcare Medical Billing Services and RCM Company, we provide tailored solutions that help physicians, clinics, and hospitals improve operational efficiency and financial performance.                        </p>
                        <p className="mb-3">
                        Our comprehensive services encompass RCM Billing Solutions, claims processing, denial resolution, and insurance confirmation. We specialize in delivering comprehensive Healthcare Revenue Cycle Management (RCM) Services designed to enhance cash flow and minimize claim denials. If you need expert help with billing or strategic guidance, we are here to help you.                        </p>
                        <p className="mb-0">
                        Key MedSolutions is your reliable ally in efficient and precise Medical Billing Services, utilizing deep industry knowledge combined with advanced technology to enhance reimbursement. As a leading Medical Billing Company, we provide advanced Revenue Cycle Management Solutions and customized Medical Billing Solutions to suit practices of all sizes.
                        </p>
                        {/* <Link to="/about-us" className="btn btn-secondary btn-lg shadow mt-3">Read More</Link> */}
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                        <img src="/images/main-banner/doctor.png" alt="Doctor" className="img-fluid banner-img" />
                    </div>
                </div>
            </div>

            {/* Decorative Shapes */}
            <img className="pt-img1 animate1 d-none d-md-block" src="/images/shap/trangle-orange.png" alt="" />
            <img className="pt-img2 animate2 d-none d-md-block" src="/images/shap/square-blue.png" alt="" />
            <img className="pt-img3 animate3 d-none d-md-block" src="/images/shap/chicle-blue-2.png" alt="" />
            <img className="pt-img4 animate4 d-none d-md-block" src="/images/shap/plus-orange.png" alt="" />
            <img className="pt-img5 animate-wave d-none d-md-block" src="/images/shap/wave-orange.png" alt="" />
        </div>
    );
};

export default MainBannerSection1;
