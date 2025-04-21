import React from 'react';
import { Card, CardContent } from '@/ui/card';
import { motion } from 'framer-motion';
import BackgroundShapes from './BackgroundShapes';

const services = [
  {
    title: "Inpatient Rehabilitation Facilities",
    description: "Specialized coding services tailored for IRFs, focusing on accurate procedure and diagnosis documentation.",
    icon: "🏥"
  },
  {
    title: "Hospice Care",
    description: "End-of-life coding expertise to ensure proper documentation and compliance with hospice-specific guidelines.",
    icon: "🤲"
  },
  {
    title: "Home Health",
    description: "Precise coding for home-based care services, ensuring appropriate reimbursement and documentation.",
    icon: "🏠"
  },
  {
    title: "Physician Practices",
    description: "Comprehensive coding solutions for medical practices of all sizes and specialties.",
    icon: "👨‍⚕️"
  },
  {
    title: "Palliative Care",
    description: "Specialized coding for symptom management and supportive care services.",
    icon: "💗"
  },
];

const Services = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerCards = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="tw-icd-10section tw-relative tw-overflow-hidden tw-bg-secondary/50">
      <BackgroundShapes variant="secondary" />

      <div className="tw-icd-10-container-custom">
        <motion.div
          className="tw-max-w-3xl tw-mx-auto tw-text-center tw-mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="tw-inline-block tw-px-4 tw-py-1.5 tw-mb-4 tw-text-xs tw-font-medium tw-rounded-full tw-bg-primary/10 tw-text-primary">
            Our Services
          </span>

          <h2 className="tw-mb-6">Services for Medical Coding for Various Providers</h2>

          <p className="tw-mb-0">
            Because of the intricacies of the system, accurate ICD-10 coding necessitates knowledge and experience. Even minor mistakes can result in substantial financial risks due to the increased scrutiny from Medicare and third-party payers.
          </p>
        </motion.div>

        <motion.div
          className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8"
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              transition={{ duration: 0.4 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="tw-overflow-hidden tw-border-none tw-shadow-md tw-bg-white/90 tw-backdrop-blur-sm hover:tw-shadow-lg tw-transition-all tw-h-full">
                <CardContent className="tw-p-6 tw-flex tw-flex-col tw-h-full">
                  <motion.div
                    className="tw-text-3xl tw-mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="tw-text-xl tw-font-semibold tw-mb-3">{service.title}</h3>
                  <p className="tw-text-muted-foreground tw-text-base">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="tw-mt-16 tw-text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="tw-mb-6">ICD-10 Medical Coding Industry Standard</h3>
          <p className="tw-max-w-3xl tw-mx-auto">
            In order to ensure that your ICD-10 coding is of the greatest caliber, complies with industry standards, and gives your teams the best tools to maintain accuracy, we at Key MedSolutions establish a reliable collaboration. You can reduce risk, expedite procedures, and maximize reimbursement with our experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
