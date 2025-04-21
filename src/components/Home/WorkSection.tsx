// const Images
const bg1 = '/images/background/line-bg1.png';
const ptImg1 = '/images/shap/circle-orange.png';
const ptImg2 = '/images/shap/plus-orange.png';
const ptImg3 = '/images/shap/circle-dots.png';
const chiroTouch = '/images/chirotouch.png';
const kareo = '/images/kareo.png';
const AdvancedMd = '/images/AdvancedMD.png';
const athena = '/images/athena.png';
const drchrono = '/images/drchrono.png'
const eClinicWorks = '/images/eclinicalworks.svg'
const epic = '/images/epic.png'
const officeAlly = '/images/officeAlly.png'
const practiceSuite = '/images/practicesuite.png'


const WorkSection = () => {
    return (
        <>

            <section className="section-area section-sp5 work-area" style={{ backgroundImage: "url(" + bg1 + ")", backgroundRepeat: " no-repeat", backgroundPosition: "center", backgroundSize: "100%" }}>
                <div className="container-xl">
                    <div className="heading-bx text-center">
                        <h6 className="title-ext text-secondary">Platforms of Technology</h6>
                        <h2 className="title">Work smoothly with any in- House software you have</h2>
                    </div>
                    <div className="row justify-content-center btn-group">
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                {/* <div className="work-num-bx">01</div> */}
                                <div className="work-content">
                                    {/* <h5 className="title text-secondary mb-10">Chiro Touch</h5> */}
                                    <img src={chiroTouch} alt="house-software-chirotouch" />
                                    {/* <p>It is a long established fact that a reader will be distracted by the readable content of.</p> */}
                                </div>
                                {/* <Link to="/booking" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                {/* <div className="work-num-bx">02</div> */}
                                <div className="work-content">
                                    {/* <h5 className="title text-secondary mb-10">Take Treatment</h5> */}
                                    <img src={kareo} alt="house-software-kareo" />
                                    {/* <p>It is a long established fact that a reader will be distracted by the readable content of.</p> */}
                                </div>
                                {/* <Link to="/services" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <img src={eClinicWorks} alt="house-software-eclinicalworks" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <img src={practiceSuite} alt="house-software-practicesuites" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <img src={officeAlly} alt=" house-software-officeally" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <img src={athena} alt="house-software-athenahealth" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <img src={AdvancedMd} alt="house-software-advancedmd" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <img src={epic} alt="house-software-media" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <img src={drchrono} alt="house-software-dr-chrono" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="pt-img1 animate1" src={ptImg1} alt="" />
                <img className="pt-img2 animate2" src={ptImg2} alt="" />
                <img className="pt-img3 animate3" src={ptImg3} alt="" />
            </section>

        </>
    )
}

export default WorkSection