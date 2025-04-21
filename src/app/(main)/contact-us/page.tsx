
import ContactForm from "@/components/elements/ContactForm";
import Breadcrumb from "@/components/ui/breadcrumb";


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
								<ContactForm />
							</div>
							<div className="col-lg-6 mb-30">
								<div className="contact-info ovpr-dark" style={{ backgroundImage: "url(" + pic1 + ")" }}>
									<div className="info-inner">
										<h4 className="title mb-30">Contact Us For Any Informations</h4>
										<div className="icon-box">
											<h6 className="title"><i className="ti-map-alt"></i>Location</h6>
											<p>Greensboro, North Carolina, USA</p>
										</div>
										<div className="icon-box">
											<h6 className="title"><i className="ti-id-badge"></i>Email &amp; Phone</h6>
											<a href="mailto:info@keymedsolution.com" className="text-white">info@keymedsolution.com</a>
											<br />
											<a href="tel:+13362906077" className="text-white">+1 (336) 290-6077</a>
										</div>
										<div className="icon-box">
											<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
											<ul className="social-media">
												<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
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
									<p><a href="tel:+13362906077">+1 (336) 290-6077</a></p>
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
									<p>info@keymedsolution.com</p>
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
									<p>Greensboro, North Carolina, USA</p>
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
