import React from "react";

const ServicesSection = () => {
  const specialties = [
    "Anesthesiology",
    "Cardiology",
    "Dermatology",
    "Endocrinology",
    "ENT",
    "Family Medicine",
    "Gastroenterology",
    "Hospitalists",
    "Internal Medicine",
    "Nephrology",
    "Neurology",
    "OB/GYN",
    "Ophthalmology",
    "Optometry",
    "Pain Medicine",
    "Pediatric Cardiology",
    "Physiatrist",
    "Podiatry",
    "Urology",
  ];

  return (
    <section className="section-sp1 service-wraper2">
      <div className="container">
        <div className="heading-bx text-center">
          <p className="title-ext !tw-text-xl text-secondary">Our Services</p>
          <h2 className="title">
            Key MedSolutions Delivers Billing Solutions Tailored to Following
            Physician Specialties
          </h2>
          <p className="tw-max-w-4xl !tw-text-xl tw-mx-auto">
            Every physician’s specialty is unique, and so are their billing
            needs. At Key MedSolutions, we simplify the process, so you can
            dedicate your time to your patients.
          </p>
        </div>
        <div className="row services">
          {specialties.map((title, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 mb-30">
              <div className="feature-container feature-bx3">
                <h3 className="ttr-title !tw-text-xl">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
