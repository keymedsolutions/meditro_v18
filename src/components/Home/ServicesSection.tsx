import React from 'react';

const ServicesSection = () => {
  const specialties = [
    "Anesthesiology", "Cardiology", "Dermatology", "Endocrinology", "ENT",
    "Family Medicine", "Gastroenterology", "Hospitalists", "Internal Medicine",
    "Nephrology", "Neurology","Endocrinology", "OB/GYN", "Ophthalmology", "Optometry",
    "Pain Medicine", "Pediatric Cardiology", "Physiatrist", "Podiatry","Urology"
  ];

  return (
    <section className="section-sp1 service-wraper2">
      <div className="container">
        <div className="heading-bx text-center">
          <h6 className="title-ext text-secondary">Our Services</h6>
          <h2 className="title">
            Key MedSolutions offers medical billing services to the following specialties of physicians
          </h2>
        </div>
        <div className="row services">
          {specialties.map((title, index) => (
            <div key={index} className="col-md-3 col-sm-6 col-12 mb-30">
              <div className="feature-container feature-bx3">
                <h5 className="ttr-title">{title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
