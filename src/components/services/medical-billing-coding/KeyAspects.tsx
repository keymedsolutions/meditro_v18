/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Card, CardContent } from '@/ui/card';
import { Code, Clock, AlertTriangle, BarChart3 } from 'lucide-react';

const KeyAspects = () => {
  const aspects = [
    {
      icon: <Code size={40} className="tw-text-primary-600" />,
      title: "Accurate Medical Coding",
      description: "The cornerstone of accurate billing is medical coding. In order to minimize errors and lower the number of claims denied, our certified coders make sure that every diagnosis, procedure, and treatment is given the appropriate ICD-10, CPT, and HCPCS codes. Maximizing reimbursements and guaranteeing adherence to payer regulations depend on accurate coding.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Clock size={40} className="tw-text-secondary-600" />,
      title: "Timely Claims Submission",
      description: "In order to prevent reimbursement delays, we make sure that claims are filed accurately and on time. We assist your practice in maintaining a consistent cash flow and preventing expensive payment delays by optimizing the claims process, which keeps your revenue cycle operating efficiently.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <AlertTriangle size={40} className="tw-text-primary-600" />,
      title: "Denial Management & Appeals",
      description: "Medical billing frequently involves claim denials, but our staff is prepared to deal with them skillfully. In order to make sure you are compensated for the services you render, we determine the reason behind denials, contest the denied claims, and collaborate closely with insurance companies to recoup lost income.",
      image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <BarChart3 size={40} className="tw-text-secondary-600" />,
      title: "Comprehensive Reporting & Transparency",
      description: "Real-time reporting and transparency are features of our billing services that give you important information about your financial performance. You can make educated decisions and maximize your revenue cycle by using customized reports to monitor unresolved claims, payment status, and trends.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="tw-py-20 tw-relative tw-overflow-hidden">
      {/* Background decoration */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-gray-50 tw-to-white tw-pointer-events-none"></div>
      
      {/* Background pattern */}
      <div className="tw-absolute tw-inset-0 tw-bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptMiAyaDF2NGgtMXYtNHptLTIgMmgxdjJoLTF2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] tw-opacity-50"></div>
      
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-max-w-3xl tw-mx-auto tw-text-center tw-mb-16">
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-mb-6">
            Key Aspects of <span className="gradient-text">Medical Billing & Coding</span> with Key MedSolutions
          </h2>
          <div className="tw-w-24 tw-h-1 tw-bg-gradient-to-r tw-from-primary-500 tw-to-secondary-500 tw-mx-auto tw-mb-6 tw-rounded-full"></div>
          <p className="tw-text-lg tw-text-gray-700">
            Our comprehensive approach ensures your practice receives the maximum reimbursement possible.
          </p>
        </div>
        
        <div className="tw-space-y-16">
          {aspects.map((aspect, index) => (
            <div 
              key={index} 
              className={`tw-flex tw-flex-col ${index % 2 === 0 ? 'lg:tw-flex-row' : 'lg:tw-flex-row-reverse'} tw-items-center tw-gap-8 lg:tw-gap-16`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Image side */}
              <div className="lg:tw-w-2/5">
                <div className="tw-relative">
                  {/* Decorative elements */}
                  <div className={`tw-absolute tw-w-full tw-h-full tw-rounded-2xl tw-bg-gradient-to-r tw-from-primary-200 tw-to-secondary-200 tw-transform ${index % 2 === 0 ? 'tw-translate-x-4 tw-translate-y-4' : '-tw-translate-x-4 tw-translate-y-4'} -tw-z-10`}></div>
                  
                  <div className="tw-relative tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
                    <img 
                      src={aspect.image} 
                      alt={aspect.title} 
                      className="tw-w-full tw-h-auto tw-object-cover tw-transform hover:tw-scale-105 tw-transition-transform tw-duration-700"
                      style={{ minHeight: "300px" }}
                    />
                    <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-gray-900/70 tw-to-transparent"></div>
                    <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-p-6">
                      <div className="tw-inline-flex tw-items-center tw-justify-center tw-p-3 tw-bg-white/90 tw-backdrop-blur-sm tw-rounded-full">
                        {aspect.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content side */}
              <div className="lg:tw-w-3/5">
                <Card className="tw-border-0 tw-shadow-lg tw-rounded-xl tw-overflow-hidden hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-bg-white/80 tw-backdrop-blur-sm">
                  <CardContent className="tw-p-8">
                    <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-flex tw-items-center">
                      <span className="tw-mr-3">{aspect.icon}</span>
                      <span className="gradient-text">{aspect.title}</span>
                    </h3>
                    <p className="tw-text-lg tw-text-gray-700">
                      {aspect.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div className="tw-mt-6 tw-h-1 tw-w-16 tw-bg-gradient-to-r tw-from-primary-500 tw-to-secondary-500 tw-rounded-full"></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAspects;
