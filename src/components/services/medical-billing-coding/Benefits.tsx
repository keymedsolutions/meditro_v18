import React from 'react';
import { Card, CardContent } from '@/ui/card';
import { TrendingUp, ShieldCheck, FileCheck, BarChart3, Settings, DollarSign } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingUp size={32} className="tw-text-primary-600" />,
      title: "Higher Reimbursements & Faster Payments",
      description: "Your revenue flow is improved by our precise coding, effective claim submissions, and decreased rejections and delays."
    },
    {
      icon: <ShieldCheck size={32} className="tw-text-secondary-600" />,
      title: "Reduced Denials & Improved Accuracy",
      description: "We carefully examine claims to avoid mistakes, guarantee adherence to payer policies, and drastically reduce denial rates for steady income."
    },
    {
      icon: <FileCheck size={32} className="tw-text-primary-600" />,
      title: "Regulatory Compliance & Risk Mitigation",
      description: "By keeping abreast of HIPAA, ICD-10, and CPT regulations, we make sure your billing stays compliant, lowering the risk of an audit and associated fines."
    },
    {
      icon: <Settings size={32} className="tw-text-secondary-600" />,
      title: "Comprehensive Revenue Cycle Management",
      description: "We manage all billing procedures, from patient registration to the last payment, which simplifies operations and increases revenue for your practice."
    },
    {
      icon: <BarChart3 size={32} className="tw-text-primary-600" />,
      title: "Customized Reporting & Performance Insights",
      description: "You can track claims, spot trends, and make data-driven decisions to increase profitability with the aid of our real-time analytics, which offer transparent financial insights."
    },
    {
      icon: <DollarSign size={32} className="tw-text-secondary-600" />,
      title: "Cost-Effective & Scalable Solutions",
      description: "By outsourcing to us, you can lower internal expenses while receiving adaptable, scalable services that are tailored to the requirements of both small and large practices."
    }
  ];

  return (
    <section className="tw-py-20 tw-relative tw-overflow-hidden">
      {/* Background decoration */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-gray-50 tw-to-white tw-pointer-events-none"></div>
      <div className="tw-absolute tw-right-0 tw-top-0 tw-h-full tw-w-1/3 tw-bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjZjBmOWZmIiBkPSJNMCAwaDEwMHYxMDBIMHoiLz48cGF0aCBmaWxsPSIjZjBmOWZmIiBkPSJNMTAwIDEwMGgxMDB2MTAwSDEwMHoiLz48cGF0aCBmaWxsPSIjZjBmOWZmIiBkPSJNMTAwIDBoMTAwdjEwMEgxMDB6Ii8+PHBhdGggZmlsbD0iI2YwZjlmZiIgZD0iTTAgMTAwaDEwMHYxMDBIMHoiLz48L2c+PC9zdmc+')] tw-opacity-20"></div>
      
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-max-w-3xl tw-mx-auto tw-text-center tw-mb-16">
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-mb-6">
            Benefits of Key MedSolutions <span className="gradient-text">Medical Billing & Coding Services</span>
          </h2>
          <div className="tw-w-24 tw-h-1 tw-bg-gradient-to-r tw-from-primary-500 tw-to-secondary-500 tw-mx-auto tw-mb-6 tw-rounded-full"></div>
          <p className="tw-text-lg tw-text-gray-700">
            Our comprehensive billing and coding services are designed to maximize your revenue while minimizing your administrative burden.
          </p>
        </div>
        
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="tw-group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="tw-h-full tw-border tw-border-gray-100 tw-bg-white tw-rounded-xl tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-overflow-hidden tw-relative">
                {/* Decorative top border */}
                <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-h-1 tw-bg-gradient-to-r tw-from-primary-500 tw-to-secondary-500 tw-transform tw-scale-x-0 group-hover:tw-scale-x-100 tw-transition-transform tw-duration-500 tw-origin-left"></div>
                
                <CardContent className="tw-p-8">
                  <div className="tw-bg-gray-50 tw-p-4 tw-rounded-xl tw-inline-flex tw-items-center tw-justify-center tw-mb-6 group-hover:tw-bg-primary-50 tw-transition-colors tw-duration-300">
                    {benefit.icon}
                  </div>
                  
                  <h3 className="tw-text-xl tw-font-semibold tw-mb-3 tw-text-gray-900 group-hover:tw-text-primary-700 tw-transition-colors tw-duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="tw-text-gray-600">
                    {benefit.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="tw-absolute tw-bottom-4 tw-right-4 tw-w-12 tw-h-12 tw-rounded-full tw-border-2 tw-border-gray-100 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
