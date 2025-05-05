
// import ContactForm from "@/components/elements/ContactForm";
import ConatctDetsilsForm1 from "@/components/elements/ConatctDetsilsForm1";
import Breadcrumb from "@/components/ui/breadcrumb";
import { ContactInfo, SocialAccountLinks } from "@/constant/constatnt";
import { sanitizePhoneNumber } from "@/lib/utils";

const pic1 = "/images/about/pic-1.jpg";
const icon1 = "/images/icon/icon1.png";
const icon2 = "/images/icon/icon2.png";
const icon3 = "/images/icon/icon3.png";


const ContactUsPage = () => {
	const title = "Contact Us for Expert Healthcare Billing and RCM Solutions";

	return (
		<div className="page-content bg-white aboutus">
			<Breadcrumb title={title} breadcrumb={[{ label: title, href: "/contact-us" }]} />


			<section>

			</section>
			<section className="!tw-mt-[100px]">
				<div className="container">
					<div className="contact-wraper">
						<div className="row">
							<div className="col-lg-6 mb-30">
								{/* <ContactForm /> */}
								<ConatctDetsilsForm1
								/>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="contact-info ovpr-dark" style={{ backgroundImage: "url(" + pic1 + ")" }}>
									<div className="info-inner">
										<h4 className="title mb-30">Contact Us For Any Informations</h4>
										<div className="icon-box">
											<h6 className="title"><i className="ti-map-alt"></i>Location</h6>
											<p className="tw-text-white">{ContactInfo.location}</p>
										</div>
										<div className="icon-box">
											<h6 className="title"><i className="ti-id-badge"></i>Email &amp; Phone</h6>
											<a href={`mailto:${ContactInfo.email}`} className="tw-text-white">{ContactInfo.email}</a>
											<br />
											<a href={`tel:${sanitizePhoneNumber(ContactInfo.phone)}`} className="tw-text-white">{ContactInfo.phone}</a>
										</div>
										<div className="icon-box">
											<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
											<ul className="social-media">
												<li><a rel="noreferrer" target="_blank" href={SocialAccountLinks.TWITTER}><i className="fab fa-twitter"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href={SocialAccountLinks.INSTAGRAM}><i className="fab fa-linkedin"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href={SocialAccountLinks.INSTAGRAM}><i className="fab fa-instagram"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-area section-sp1">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 mb-30">
							<div className="feature-container feature-bx4 feature4">
								<div className="icon-md feature-icon">
									<img src={icon1} alt="" />
								</div>
								<div className="icon-content">
									<h5 className="ttr-title">Contact Number</h5><br />
									<a  href={`tel:${sanitizePhoneNumber(ContactInfo.phone)}`} className="tw-text-white">{ContactInfo.phone}</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-30">
							<div className="feature-container feature-bx4 feature3">
								<div className="icon-md feature-icon">
									<img src={icon3} alt="" />
								</div>
								<div className="icon-content">
									<h5 className="ttr-title">Email Address</h5>
									<p>{ContactInfo.email}</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-30">
							<div className="feature-container feature-bx4 feature2">
								<div className="icon-md feature-icon">
									<img src={icon2} alt="" />
								</div>
								<div className="icon-content">
									<h5 className="ttr-title">Address</h5>
									<p>{ContactInfo.location}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ContactUsPage
