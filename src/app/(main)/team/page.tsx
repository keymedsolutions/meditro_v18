/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Breadcrumb from "@/components/ui/breadcrumb";
import { TeamMember } from "@/data/team-member";






const trangleOrange = "../../images/shap/trangle-orange.png";
const squareDotsOrange = "../../images/shap/square-dots-orange.png";
const lineCircleBlue = "../../images/shap/line-circle-blue.png";
const waveBlue = "../../images/shap/wave-blue.png";
const plusBlue = "../../images/shap/circle-dots.png";
const TeamPage = () => {
    const title = "Meet Our Team of Healthcare Revenue Cycle Experts";
    const path = "/team"




    return (
        <>

            <div className="page-content bg-white aboutus">
                <Breadcrumb title={title}
                    breadcrumb={[{ label: title, href: path }]} />

                <section className="section-area section-sp1 team-wraper">
                    <div className="container">
                        <div className="row">
                            {TeamMember.map((item,index) => (
                                <div className="col-lg-4 col-sm-6" key={index}>
                                    <div className="team-member mb-30">
                                        <div className="team-media">
                                            <img src={item.thumb} alt={item.alt} />
                                        </div>
                                        <div className="team-info">
                                            <div className="team-info-comntent">
                                                <h4 className="title">{item.title}</h4>
                                                <span className="text-secondary">{item.subtitle}</span>
                                            </div>
                                            <ul className="social-media">
                                                <li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                                <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
                                                <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img className="pt-img1 animate1" src={trangleOrange} alt="" />
                    <img className="pt-img2 animate2" src={squareDotsOrange} alt="" />
                    <img className="pt-img3 animate-rotate" src={lineCircleBlue} alt="" />
                    <img className="pt-img4 animate-wave" src={waveBlue} alt="" />
                    <img className="pt-img5 animate-wave" src={plusBlue} alt="" />
                </section>

            </div >
        </>
    )
}

export default TeamPage