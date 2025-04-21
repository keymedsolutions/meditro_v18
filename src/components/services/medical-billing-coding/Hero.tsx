/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from '@/ui/button';
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="benefits-section-home1 tw-relative tw-py-16 md:tw-py-24 tw-overflow-hidden">
      {/* Animated background shapes */}
      <div className="tw-absolute tw-inset-0 tw-pointer-events-none tw-overflow-hidden">
        <div className="tw-absolute tw-top-0 tw-right-0 tw-w-96 tw-h-96 tw-bg-primary-100 tw-rounded-full tw-opacity-20 tw-blur-3xl tw-animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-80 tw-h-80 tw-bg-secondary-100 tw-rounded-full tw-opacity-20 tw-blur-3xl tw-animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="tw-absolute tw-top-1/2 tw-left-1/4 tw-w-64 tw-h-64 tw-bg-primary-200 tw-rounded-full tw-opacity-10 tw-blur-2xl tw-animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Decorative grid pattern */}
        <div className="tw-absolute tw-inset-0 tw-bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptMiAyaDF2NGgtMXYtNHptLTIgMmgxdjJoLTF2LTJ6Ii8+PGNpcmNsZSBjeD0iNTUiIGN5PSI1NSIgcj0iNSIvPjwvZz48L2c+PC9zdmc+')] tw-opacity-50"></div>
      </div>
      
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-12">
          <div className="lg:tw-w-1/2 tw-relative tw-z-10">
            <div className="tw-inline-flex tw-items-center tw-px-3 tw-py-1 tw-bg-primary-50 tw-text-primary-700 tw-rounded-full tw-mb-6 tw-animate-fade-in">
              <CheckCircle size={16} className="tw-mr-2" />
              <span className="tw-text-sm tw-font-medium">Trusted by 500+ Healthcare Providers</span>
            </div>
            
            <h1 className="tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-mb-6 tw-leading-tight tw-animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text">Expert Medical Billing & Coding Services</span> to Maximize Your Revenue
            </h1>
            
            <p className="tw-text-lg tw-text-gray-700 tw-mb-8 tw-animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Based in North Carolina, Key MedSolutions is a well-known medical billing business that offers comprehensive medical billing and coding services all over the United States. For physician groups, we offer customized solutions that guarantee proper claim submissions, fewer denials, and maximized reimbursements.
            </p>
            
            <p className="tw-text-lg tw-text-gray-700 tw-mb-8 tw-animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Our team of highly qualified billing and coding specialists ensures complete compliance with industry regulations by staying current with HIPAA, ICD-10, and EHR meaningful use standards. We have established a solid reputation as a reliable partner in medical claims billing thanks to our dedication to quality and openness.
            </p>
            
            <p className="tw-text-lg tw-text-gray-700 tw-mb-8 tw-animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Allow Key MedSolutions to optimize your billing procedure and increase revenue. Get in touch with us now to find out more!
            </p>
            
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button className="tw-bg-primary-600 hover:tw-bg-primary-700 tw-text-white tw-font-semibold tw-px-8 tw-py-6 tw-rounded-xl tw-flex tw-items-center tw-gap-2 tw-group tw-shadow-lg hover:tw-shadow-xl tw-transition-all">
                <Calendar size={20} className="tw-mr-2" />
                Schedule a Free Consultation Today!
                <ArrowRight size={18} className="tw-ml-2 group-hover:tw-translate-x-1 tw-transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="lg:tw-w-1/2 tw-relative tw-animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {/* Decorative elements */}
            <div className="tw-absolute tw-top-0 tw-right-0 tw-w-20 tw-h-20 tw-border-4 tw-border-primary-200 tw-rounded-full tw-opacity-50 tw-animate-pulse-gentle"></div>
            <div className="tw-absolute tw-bottom-12 tw-left-0 tw-w-16 tw-h-16 tw-border-4 tw-border-secondary-200 tw-rounded-full tw-opacity-50 tw-animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
            
            {/* Main image with card overlay */}
            <div className="tw-relative tw-bg-white tw-rounded-2xl tw-shadow-2xl tw-overflow-hidden tw-p-4 tw-transform hover:tw-scale-[1.02] tw-transition-transform tw-duration-500">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Medical Billing and Coding Services" 
                className="tw-rounded-xl tw-w-full tw-h-auto tw-object-cover"
                style={{ maxHeight: "400px" }}
              />
              
              {/* Stats overlay */}
              <div className="tw-absolute tw-bottom-8 tw-left-8 tw-right-8 tw-bg-white/90 tw-backdrop-blur-sm tw-rounded-xl tw-p-4 tw-shadow-lg">
                <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-text-center">
                  <div>
                    <p className="tw-text-2xl md:tw-text-3xl tw-font-bold gradient-text">98%</p>
                    <p className="tw-text-sm tw-text-gray-600">Clean Claim Rate</p>
                  </div>
                  <div>
                    <p className="tw-text-2xl md:tw-text-3xl tw-font-bold gradient-text">30%</p>
                    <p className="tw-text-sm tw-text-gray-600">Revenue Increase</p>
                  </div>
                  <div>
                    <p className="tw-text-2xl md:tw-text-3xl tw-font-bold gradient-text">24hr</p>
                    <p className="tw-text-sm tw-text-gray-600">Claim Processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
