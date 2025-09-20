/* eslint-disable @next/next/no-img-element */

const aboutThumb1 = "/images/about/pic-1.jpg";
const aboutThumb2 = "/images/about/pic-2.jpg";
const aboutThumb3 = "/images/about/pic-3.jpg";
const ptImg1 = "/images/shap/wave-orange.png";
const ptImg2 = "/images/shap/circle-small-blue.png";
const ptImg4 = "/images/shap/square-dots-orange.png";
const ptImg5 = "/images/shap/square-blue.png";

const AboutSection = () => {
  return (
    <>
      <section className="section-sp1 about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
              <div className="about-thumb-area">
                <ul>
                  <li>
                    <img
                      className="about-thumb1"
                      src={aboutThumb1}
                      alt="key-medsolutions-doctor-image-one"
                    />
                  </li>
                  <li>
                    <img
                      className="about-thumb2"
                      src={aboutThumb2}
                      alt="key-medsolutions-doctor-image-two"
                    />
                  </li>
                  <li>
                    <img
                      className="about-thumb3"
                      src={aboutThumb3}
                      alt="key-medsolutions-doctor-image-three"
                    />
                  </li>
                  <li>
                    <div className="exp-bx">
                      08<span>Years of Experience</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="heading-bx">
                <h6 className="title-ext text-secondary">Our Identity</h6>
                <h2 className="title !tw-text-[36px]">
                  What Makes Us Different :&nbsp;
                  <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                    Your Partner in Progress
                  </span>
                </h2>
                {/* <p>
                                    Key MedSolutions is a committed global <Link className="tw-font-[900] tw-text-inherit" href={"/revenue-cycle-management-company"}>Revenue Cycle Management Company</Link> and Medical Billing Company with expertise in customized medical billing solutions and Healthcare Revenue Cycle Management Solutions and RCM Services. Supported by talented and imaginative experts, we utilize modern, technology-based strategies to computerize charging forms and maximize income for healthcare suppliers universally. Our full-service solutions encompass claims management, <Link className="tw-font-[900] tw-text-inherit" href={"/physician-billing-services"}>Physician Billing Services</Link>, medical coding, and end-to-end revenue cycle services. We closely collaborate with physician groups and healthcare facilities to eliminate administrative hassles, promote compliance, and enhance financial performance. By providing customized solutions supported by industry experience, Key MedSolutions enables providers to concentrate on what is most important—quality patient care—while we address the intricacies of revenue management.
                                </p> */}
                <p>
                  What sets Key MedSolutions apart is our ability to combine
                  cutting-edge technology with a human touch. We understand that
                  every healthcare provider is unique, and so are their
                  challenges. That’s why we don’t use one-size-fits-all
                  solutions Instead, we take the time to understand your needs
                  and craft strategies that deliver measurable results.
                </p>
                <p>
                  Our expertise spans across Medical Billing Services, RCM
                  Consultancy, Medical Coding, and end to end revenue cycle
                  solutions.But it is not just about the services we provide. It
                  is about how we deliver them. We use advanced Medical Billing
                  Software and automation tools to streamline processes, reduce
                  errors, and maximize revenue. At the same time, our team of
                  skilled professionals ensures every detail is handled with
                  care and precision.
                </p>
                <p>
                  Collaboration is central to everything we do. We work closely
                  with physician groups, clinics, and hospitals to eliminate
                  administrative burdens, improve compliance, and enhance
                  financial performance. Our goal is not just to manage your
                  revenue cycle but to transform it into a seamless, efficient,
                  and profitable process.
                </p>
                <p>
                  At Key MedSolutions, we are not just a service provider. As
                  your strategic partner, we enable you to accomplish more
                  efficiently and with greater ease.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="pt-img1 animate-wave" src={ptImg1} alt="" />
        <img className="pt-img2 animate2" src={ptImg2} alt="" />
        <img className="pt-img3 animate-rotate" src={ptImg5} alt="" />
        <img className="pt-img4 animate-wave" src={ptImg4} alt="" />
        <img className="pt-img5 animate2" src={ptImg5} alt="" />
      </section>
    </>
  );
};

export default AboutSection;
