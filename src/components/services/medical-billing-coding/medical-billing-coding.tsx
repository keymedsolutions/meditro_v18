"use client"
import React, { useEffect } from 'react';
import Hero from './Hero';
import Benefits from './Benefits';
import Process from './Process';
import KeyAspects from './KeyAspects';
import FAQ from './FAQ';
import CTA from './CTA';

const MedicalBillingCoding = () => {
  // Scroll animation effect
  useEffect(() => {
    // Simple scroll animation for elements with data-aos attribute
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('[data-aos]');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('tw-animate-fade-in');
          (element as HTMLElement).style.opacity = '1';
        }
      });
      
      // Update scroll progress indicator
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = `${scrollPercentage}%`;
      }
    };
    
    // Initial check and scroll listener
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col tw-relative tw-overflow-hidden">
      {/* Global floating elements */}
      <div className="tw-fixed tw-inset-0 tw-pointer-events-none tw-z-0">
        {/* Animated gradient orbs */}
        <div className="tw-absolute tw-top-1/4 tw-left-0 tw-w-96 tw-h-96 tw-rounded-full tw-bg-primary-200/30 tw-blur-3xl tw-animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-96 tw-h-96 tw-rounded-full tw-bg-secondary-200/30 tw-blur-3xl tw-animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="tw-absolute tw-inset-0 tw-bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptMiAyaDF2NGgtMXYtNHptLTIgMmgxdjJoLTF2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] tw-opacity-50"></div>
      </div>
      
      {/* Scroll progress indicator */}
      <div className="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-h-1 tw-z-50">
        <div className="tw-h-full tw-bg-gradient-to-r tw-from-primary-500 tw-to-secondary-500 tw-w-0" id="scroll-progress"></div>
      </div>
      
      <main className="tw-flex-grow tw-relative tw-z-10">
        <Hero />
        
        {/* Decorative separator */}
        <div className="tw-relative tw-h-24 tw-overflow-hidden">
          <div className="tw-absolute tw-inset-0 tw-bg-white tw-transform tw--skew-y-2"></div>
        </div>
        
        <Benefits />
        
        {/* Decorative separator */}
        <div className="tw-relative tw-h-24 tw-overflow-hidden">
          <div className="tw-absolute tw-inset-0 tw-bg-gray-50 tw-transform tw-skew-y-2"></div>
        </div>
        
        <Process />
        
        {/* Decorative separator */}
        <div className="tw-relative tw-h-24 tw-overflow-hidden">
          <div className="tw-absolute tw-inset-0 tw-bg-white tw-transform tw--skew-y-2"></div>
        </div>
        
        <KeyAspects />
        
        {/* Decorative separator */}
        <div className="tw-relative tw-h-24 tw-overflow-hidden">
          <div className="tw-absolute tw-inset-0 tw-bg-gray-50 tw-transform tw-skew-y-2"></div>
        </div>
        
        <FAQ />
        <CTA />
      </main>
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="tw-fixed tw-bottom-8 tw-right-8 tw-bg-white tw-text-primary-600 tw-w-12 tw-h-12 tw-rounded-full tw-shadow-lg tw-flex tw-items-center tw-justify-center tw-z-50 hover:tw-shadow-xl tw-transition-all tw-duration-300 hover:tw-bg-primary-50"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default MedicalBillingCoding;
