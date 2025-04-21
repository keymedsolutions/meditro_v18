/* eslint-disable @next/next/no-img-element */
import AppointmentForm from './AppointmentForm'

const lineBg = '/images/appointment/line-bg.png';
const appMobile = '/images/appointment/mobile.png';
const appWomen = '/images/appointment/women.png';
const appMapPin = '/images/appointment/map-pin.png';
const appSetting = '/images/appointment/setting.png';
const appCheck = '/images/appointment/check.png';
const appChat = '/images/appointment/chat.png';
const ptImg1 = '/images/shap/trangle-orange.png';
const ptImg2 = '/images/shap/wave-orange.png';
const ptImg3 = '/images/shap/wave-blue.png';
const ptImg4 = '/images/shap/circle-orange.png';


const Appointment = () => {
    return (
        <>	<section className="section-area account-wraper1">
            <div className="container-fluid">
                <div className="appointment-inner section-sp2" style={{ backgroundImage: "url(" + lineBg + ")", backgroundRepeat: " no-repeat", backgroundPosition: "20px 140px" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-6 col-md-6">

                                <AppointmentForm />

                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-6">
                                <div className="appointment-thumb">
                                    <img src={appMobile} alt="" />
                                    <div className="images-group">
                                        <img className="img1" src={appWomen} alt="" />
                                        <img className="img2" src={appMapPin} alt="" />
                                        <img className="img3" src={appSetting} alt="" />
                                        <img className="img4" src={appCheck} alt="" />
                                        <img className="img5" src={appChat} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="pt-img1 animate1" src={ptImg1} alt="" />
                    <img className="pt-img2 animate-wave" src={ptImg2} alt="" />
                    <img className="pt-img3 animate-wave" src={ptImg3} alt="" />
                    <img className="pt-img4 animate2" src={ptImg4} alt="" />

                </div>

            </div>
        </section>
        </>
    )
}

export default Appointment