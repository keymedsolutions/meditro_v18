import React from 'react';
import { Button } from '@/ui/button';
import { Calendar, PhoneCall, Heart, Award } from 'lucide-react';

const CTA = () => {
  return (
    <section className="tw-py-16 tw-overflow-hidden tw-relative">
      <div className="tw-container tw-mx-auto tw-px-4">
        {/* Animated background elements */}
        <div className="tw-absolute tw-inset-0 tw-overflow-hidden">
          <div className="tw-absolute tw--top-20 tw--right-20 tw-w-64 tw-h-64 tw-bg-cardio-200 tw-rounded-full tw-opacity-20 tw-animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="tw-absolute tw-top-40 tw--left-32 tw-w-96 tw-h-96 tw-bg-mint-200 tw-rounded-full tw-opacity-30 tw-animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="tw-absolute tw-bottom-10 tw-right-10 tw-w-48 tw-h-48 tw-bg-cardio-300 tw-rounded-full tw-opacity-20 tw-animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="tw-bg-gradient-to-r tw-from-blue-400 tw-to-secondary-400 tw-rounded-3xl tw-overflow-hidden tw-shadow-2xl tw-relative">
          {/* Background pattern overlay */}
          <div className="tw-absolute tw-inset-0 tw-bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBhNiA2IDAgMSAxLTEyIDAgNiA2IDAgMCAxIDEyIDB6TTAgMGgxMnY2SDZ2NkgwVjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] tw-opacity-15"></div>
          
          {/* Image background with overlay */}
          <div className="tw-absolute tw-inset-0 tw-opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
              alt="Doctor with Patient" 
              className="tw-w-full tw-h-full tw-object-cover"
            />
          </div>
          
          <div className="tw-px-6 tw-py-12 md:tw-p-12 tw-relative tw-z-10">
            {/* Animated accent elements */}
            <div className="tw-absolute tw-top-0 tw-right-0 tw-w-64 tw-h-64 tw-bg-white tw-opacity-5 tw-rounded-full tw--translate-y-1/2 tw-translate-x-1/3 tw-animate-pulse-gentle"></div>
            <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-48 tw-h-48 tw-bg-white tw-opacity-5 tw-rounded-full tw-translate-y-1/3 tw--translate-x-1/4 tw-animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
            
            <div className="tw-relative tw-z-10 tw-max-w-4xl tw-mx-auto">
              <div className="tw-text-center tw-mb-10">
                <div className="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-bg-white/10 tw-backdrop-blur-sm tw-rounded-xl tw-mb-4 tw-animate-fade-in">
                  <Heart className="tw-text-red-300 tw-mr-2 tw-animate-pulse-gentle" size={20} />
                  <span className="tw-text-primary-600 tw-font-medium">Specialized for Cardiology Practices</span>
                </div>
                
                <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-mb-4 tw-text-white">
                  <span className="tw-relative tw-inline-block">
                    Reliable Cardiology Billing Solutions
                    <span className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-mint-400 tw-to-mint-300 tw-rounded-full tw-transform tw-scale-x-0 tw-animate-scale-up tw-origin-left" style={{ animationDelay: '0.5s', animationDuration: '0.8s', animationFillMode: 'forwards' }}></span>
                  </span>
                </h2>
                
                <p className="tw-text-lg tw-mb-8 tw-text-white/90 tw-max-w-2xl tw-mx-auto">
                  Use the professional billing services from Key MedSolutions to improve your cardiology practice. Our expertise lies in precise coding, timely claim submissions, and maximized reimbursements.
                </p>
              </div>
              
              <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-center tw-gap-4">
                <Button className=" tw-text-cardio-700 hover:tw-bg-gray-100 tw-transition-colors tw-group tw-flex tw-items-center tw-gap-2 tw-text-base tw-py-6 tw-px-8 tw-rounded-xl tw-w-full sm:tw-w-auto tw-scale-on-hover tw-animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <Calendar size={18} className="group-hover:tw-animate-pulse-gentle" />
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" className="tw-bg-secondary-500 tw-text-white hover:tw-bg-white/10 tw-transition-colors tw-flex tw-items-center tw-gap-2 tw-text-base tw-py-6 tw-px-8 tw-rounded-xl tw-w-full sm:tw-w-auto tw-scale-on-hover tw-animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <PhoneCall size={18} />
                  Call Us Now
                </Button>
              </div>
              
              {/* Added feature badges */}
              <div className="tw-mt-10 tw-flex tw-flex-wrap tw-justify-center tw-gap-4 tw-animate-fade-in" style={{ animationDelay: '1s' }}>
                {['20-35% Increase in Collections', 'Specialized Cardiology Expertise', 'Regulatory Compliance'].map((feature, index) => (
                  <div key={index} className="tw-flex tw-items-center tw-bg-white/10 tw-backdrop-blur-sm tw-px-4 tw-py-2 tw-rounded-lg">
                    <Award size={16} className="tw-text-mint-300 tw-mr-2" />
                    <span className="tw-text-white/90 tw-text-sm tw-font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
