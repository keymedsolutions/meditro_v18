/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
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
const practiceSuite = '/images/practicesuite1.png'



const WorkSection = () => {
    return (
        <>



            <section className="section-area section-sp5 work-area" style={{ backgroundImage: "url(" + bg1 + ")", backgroundRepeat: " no-repeat", backgroundPosition: "center", backgroundSize: "100%" }}>
                <div className="container-xl">
                    <div className="heading-bx text-center">
                        <p className="title-ext !tw-text-xl text-secondary">Platforms of Technology</p>
                        <h2 className="title">Work smoothly with any in- House software you have</h2>
                    </div>
                    <div className="row justify-content-center btn-group">
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                {/* <div className="work-num-bx">01</div> */}
                                <div className="work-content">
                                    {/* <h5 className="title text-secondary mb-10">Chiro Touch</h5> */}
                                    <Image src={chiroTouch} alt="ChiroTouch medical software platform" width={120} height={60} loading="lazy" />
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
                                    <Image src={kareo} alt="Kareo medical billing software" width={120} height={60} loading="lazy" />
                                    {/* <p>It is a long established fact that a reader will be distracted by the readable content of.</p> */}
                                </div>
                                {/* <Link to="/services" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <Image src={eClinicWorks} alt="eClinicalWorks EHR software" width={120} height={60} loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <Image src={practiceSuite} alt="PracticeSuite medical practice management" width={120} height={60} loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <Image src={officeAlly} alt="Office Ally practice management software" width={120} height={60} loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <Image src={athena} alt="Athenahealth cloud-based healthcare platform" width={120} height={60} loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <Image src={AdvancedMd} alt="AdvancedMD practice management software" width={120} height={60} loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <Image src={epic} alt="Epic electronic health records system" width={120} height={60} loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-content">
                                    <Image src={drchrono} alt="DrChrono cloud-based EHR platform" width={120} height={60} loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image className="pt-img1 animate1 tw-top-4" src={ptImg1} alt="" width={50} height={50} loading="lazy" aria-hidden="true" role="presentation" />
                <Image className="pt-img2  tw-bottom-5 tw-left-6" src={ptImg2} alt="" width={40} height={40} loading="lazy" aria-hidden="true" role="presentation" />
                <Image className="pt-img3 animate3 tw-right-2 tw-bottom-6" src={ptImg3} alt="" width={60} height={60} loading="lazy" aria-hidden="true" role="presentation" />
            </section>
        </>
    )
}

export default WorkSection