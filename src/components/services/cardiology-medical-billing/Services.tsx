import React from 'react';
import { Card, CardContent,CardTitle } from '@/ui/card';
import { CodeXml, RefreshCcw, ShieldCheck, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Accurate, Compliant Coding",
      description: "Certified coders ensure precise code assignment to boost reimbursement and reduce claim denials.",
      icon: <CodeXml size={32} className="tw-text-cardio-600 group-hover:tw-text-cardio-700 tw-transition-colors tw-duration-300" />
    },
    {
      title: "End-to-End RCM Management",
      description: "From patient intake to final payment, we manage your revenue cycle with transparency and accountability.",
      icon: <RefreshCcw size={32} className="tw-text-mint-600 group-hover:tw-text-mint-700 tw-transition-colors tw-duration-300" />
    },
    {
      title: "Proactive Denial Resolution",
      description: "Leverage proven strategies to minimize claim rejections and protect your revenue stream.",
      icon: <ShieldCheck size={32} className="tw-text-cardio-600 group-hover:tw-text-cardio-700 tw-transition-colors tw-duration-300" />
    },
    {
      title: "Custom Financial Insights",
      description: "Track financial trends with tailored, real-time reports that empower better business decisions.",
      icon: <BarChart3 size={32} className="tw-text-mint-600 group-hover:tw-text-mint-700 tw-transition-colors tw-duration-300" />
    }
  ];

  return (
    <section className="tw-relative tw-py-20 tw-bg-gradient-to-br tw-from-gray-50 tw-to-white tw-overflow-hidden">
      {/* Gradient decoration */}
      <div className="tw-absolute tw-top-[-100px] tw-left-[-100px] tw-w-[300px] tw-h-[300px] tw-bg-cardio-100 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-30"></div>
      <div className="tw-absolute tw-bottom-[-100px] tw-right-[-100px] tw-w-[300px] tw-h-[300px] tw-bg-mint-100 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-30"></div>

      <div className="tw-container tw-mx-auto tw-px-4">

      <div className="tw-text-center tw-mb-12">
          <h3 className="gradient-text tw-mb-4">Comprehensive Cardiology Billing Services</h3>
          <p className="tw-text-gray-600 tw-max-w-2xl tw-mx-auto tw-mb-8">
            Our specialized billing solutions ensure your practice receives maximum reimbursement while maintaining compliance with all regulations.
          </p>
          <div className="tw-relative tw-rounded-xl tw-overflow-hidden tw-shadow-xl tw-mb-12 tw-mx-auto tw-max-w-4xl">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
              alt="Cardiology Billing Services" 
              className="tw-w-full tw-h-auto"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-cardio-600/50 tw-to-mint-600/50 tw-mix-blend-multiply"></div>
            <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-p-6 tw-text-white tw-text-center">
              <p className="tw-text-2xl tw-font-bold tw-tracking-tight tw-drop-shadow-md tw-text-white">Expert Billing Solutions for Cardiologists</p>
            </div>
          </div>
        </div>


      
        {/* Services grid */}
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-2 tw-gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="tw-relative tw-bg-white tw-border tw-border-gray-100 tw-rounded-2xl tw-shadow-sm tw-group tw-hover:tw-shadow-lg tw-transition-all tw-duration-300 tw-p-6 tw-flex tw-gap-4 tw-items-start"
            >
              <div className="tw-p-3 tw-rounded-xl tw-bg-gray-50 tw-shadow-inner tw-transition-colors">
                {service.icon}
              </div>
              <div>
                <CardTitle className="tw-text-lg tw-font-bold tw-text-gray-800 tw-ml-5 tw-mb-2">{service.title}</CardTitle>
                <CardContent className="tw-p-0">
                  <p className="tw-text-gray-600 tw-text-sm">{service.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
