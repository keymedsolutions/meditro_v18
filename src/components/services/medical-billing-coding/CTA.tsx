/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from '@/ui/button';
import { Calendar, PhoneCall, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="tw-py-20 tw-relative tw-overflow-hidden">
      {/* Background decoration */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-primary-900 tw-to-secondary-900 tw-pointer-events-none"></div>
      
      {/* Background pattern */}
      <div className="tw-absolute tw-inset-0 tw-bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptMiAyaDF2NGgtMXYtNHptLTIgMmgxdjJoLTF2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] tw-opacity-30"></div>
      
      {/* Animated background elements */}
      <div className="tw-absolute tw-inset-0 tw-pointer-events-none tw-overflow-hidden">
        <div className="tw-absolute tw-top-0 tw-right-0 tw-w-96 tw-h-96 tw-rounded-full tw-bg-white tw-opacity-5 tw-blur-3xl tw-animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-80 tw-h-80 tw-rounded-full tw-bg-white tw-opacity-5 tw-blur-3xl tw-animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
        <div className="tw-max-w-4xl tw-mx-auto">
          <div className="tw-bg-white/10 tw-backdrop-blur-md tw-rounded-3xl tw-overflow-hidden tw-shadow-2xl">
            <div className="tw-relative">
              {/* Decorative elements */}
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-40 tw-h-40 tw-bg-primary-500/20 tw-rounded-full tw--translate-x-1/2 tw--translate-y-1/2 tw-blur-2xl"></div>
              <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-40 tw-h-40 tw-bg-secondary-500/20 tw-rounded-full tw-translate-x-1/2 tw-translate-y-1/2 tw-blur-2xl"></div>
              
              <div className="tw-p-8 md:tw-p-12 tw-text-center">
                <div className="tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-bg-white/20 tw-backdrop-blur-sm tw-rounded-full tw-mb-6 tw-animate-pulse-gentle">
                  <span className="tw-text-white tw-font-medium">Ready to optimize your medical billing?</span>
                </div>
                
                <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-mb-6 tw-text-white">
                  Schedule a Free Consultation Today!
                </h2>
                
                <p className="tw-text-xl tw-text-white/90 tw-mb-8 tw-max-w-2xl tw-mx-auto">
                  Allow Key MedSolutions to optimize your billing procedure and increase revenue. Get in touch with us now to find out more!
                </p>
                
                <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-center tw-gap-4">
                  <Button className="tw-bg-white tw-text-primary-700 hover:tw-bg-gray-100 tw-transition-all tw-duration-300 tw-group tw-flex tw-items-center tw-gap-2 tw-text-base tw-py-6 tw-px-8 tw-rounded-xl tw-w-full sm:tw-w-auto tw-shadow-lg hover:tw-shadow-xl tw-animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <Calendar size={20} className="group-hover:tw-animate-pulse-gentle" />
                    Schedule Free Consultation
                    <ArrowRight size={18} className="tw-ml-2 group-hover:tw-translate-x-1 tw-transition-transform" />
                  </Button>
                  
                  <Button variant="outline" className="tw-border-white tw-text-white hover:tw-bg-white/10 tw-transition-all tw-duration-300 tw-flex tw-items-center tw-gap-2 tw-text-base tw-py-6 tw-px-8 tw-rounded-xl tw-w-full sm:tw-w-auto tw-animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <PhoneCall size={20} />
                    Call Us Now
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="tw-mt-12 tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 tw-animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  {[
                    { value: "98%", label: "Client Retention" },
                    { value: "30%+", label: "Revenue Increase" },
                    { value: "24/7", label: "Support Available" }
                  ].map((stat, index) => (
                    <div key={index} className="tw-bg-white/10 tw-backdrop-blur-sm tw-rounded-xl tw-p-4 tw-text-center">
                      <p className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-white">{stat.value}</p>
                      <p className="tw-text-white/80">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="tw-absolute tw--bottom-8 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-w-32 tw-h-1 tw-bg-white/30 tw-rounded-full tw-blur-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
