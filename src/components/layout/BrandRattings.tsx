'use client';

import { useEffect } from 'react';

const BrandRatings = () => {
  useEffect(() => {
    const loadScript = (src: string, onLoad?: () => void) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      if (onLoad) script.onload = onLoad;
      document.head.appendChild(script);
    };

    // Trustpilot
    loadScript('//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js');

    // DesignRush
    loadScript('https://www.designrush.com/topbest/js/widgets/agency-reviews.js');

    // ProvenExpert
    loadScript('https://s.provenexpert.net/seals/proseal-v2.js', () => {
      if (window?.provenExpert?.proSeal) {
        window.provenExpert.proSeal({
          widgetId: 'aed9db53-af7b-4f89-ab80-7d721439d003',
          language: 'en-US',
          usePageLanguage: false,
          bannerColor: '#0DB1CD',
          textColor: '#FFFFFF',
          showBackPage: false,
          showReviews: true,
          hideDate: true,
          hideName: false,
          googleStars: true,
          displayReviewerLastName: false,
          embeddedSelector: '#proSealWidget'
        });
      }
    });

    // TrueFirms
    loadScript('https://truefirms.co/public/truebadges/js/widget.js');

    // GoodFirms
    loadScript('https://assets.goodfirms.co/assets/js/widget.min.js');
  }, []);

  return (
<div class="tw-grid tw-grid-cols-3 md:tw-grid-cols-6 tw-gap-6 tw-p-6 tw-bg-white">
 
  <a href="https://www.goodfirms.co/company/key-medsolutions" target="_blank" class="tw-bg-white tw-border tw-border-purple-200 tw-rounded-xl tw-p-4 tw-flex tw-justify-center tw-items-center tw-shadow-sm tw-transition-transform hover:tw-scale-105">
    <img src="/images/logo/1.png" alt="GoodFirms" class="tw-w-16 tw-h-16 tw-object-contain">
  </a>

  
  <a href="https://www.crunchbase.com/organization/key-medsolutions" target="_blank" class="tw-bg-white tw-border tw-border-purple-200 tw-rounded-xl tw-p-4 tw-flex tw-justify-center tw-items-center tw-shadow-sm tw-transition-transform hover:tw-scale-105">
    <img src="/images/logo/2.png" alt="Crunchbase" class="tw-w-16 tw-h-16 tw-object-contain">
  </a>

  
  <a href="https://clutch.co/profile/key-medsolutions" target="_blank" class="tw-bg-white tw-border tw-border-purple-200 tw-rounded-xl tw-p-4 tw-flex tw-justify-center tw-items-center tw-shadow-sm tw-transition-transform hover:tw-scale-105">
    <img src="/images/logo/3.png" alt="Clutch" class="tw-w-16 tw-h-16 tw-object-contain">
  </a>

 
  <a href="https://www.truefirms.co/company/Key-MedSolutions/3265" target="_blank" class="tw-bg-white tw-border tw-border-purple-200 tw-rounded-xl tw-p-4 tw-flex tw-justify-center tw-items-center tw-shadow-sm tw-transition-transform hover:tw-scale-105">
    <img src="/images/logo/4.png" alt="TrueFirms" class="tw-w-16 tw-h-16 tw-object-contain">
  </a>

  
  <a href="https://businessfirms.co/company/key-medsolutions" target="_blank" class="tw-bg-white tw-border tw-border-purple-200 tw-rounded-xl tw-p-4 tw-flex tw-justify-center tw-items-center tw-shadow-sm tw-transition-transform hover:tw-scale-105">
    <img src="/images/logo/5.png" alt="BusinessFirms" class="tw-w-16 tw-h-16 tw-object-contain">
  </a>

 
  <a href="https://www.trustpilot.com/review/keymedsolution.com" target="_blank" class="tw-bg-white tw-border tw-border-purple-200 tw-rounded-xl tw-p-4 tw-flex tw-justify-center tw-items-center tw-shadow-sm tw-transition-transform hover:tw-scale-105">
    <img src="/images/logo/6.png" alt="Trustpilot" class="tw-w-16 tw-h-16 tw-object-contain">
  </a>
</div>

  );
};

export default BrandRatings;
