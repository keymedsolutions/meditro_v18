import React from 'react'

const MainBannerSection = () => {
    return (
        <div className="main-banner" style={{ backgroundImage: "url('/images/main-banner/bg1.jpg')" }}>
            <div className="container inner-content">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6 col-sm-7">
                        <h6 className="title-ext text-primary">Who we are</h6>
                        <h1 className='!tw-text-[36px]'>Trusted Medical Billing Services & <br /> Revenue Cycle Management Company for Healthcare</h1>
                        <p>We are a healthcare revenue cycle management and medical billing company that helps healthcare providers worldwide to optimize their revenue collection while reducing administrative overhead.Their comprehensive solutions encompass the entire medical billing cycle, and they offer specialized services such as contract management and revenue cycle consulting.Key MedSolutions is a reliable partner for healthcare practitioners and facilities seeking to improve their revenue cycle management and achieve financial success.</p>
                        {/* <Link to="/about-us" className="btn btn-secondary btn-lg shadow">Read More</Link> */}
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-5">
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
