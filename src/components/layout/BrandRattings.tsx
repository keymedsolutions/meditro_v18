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
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 lg:tw-grid-cols-6 tw-gap-4 tw-p-4">
      {/* BusinessFirms */}
      <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-4 tw-flex tw-flex-col tw-items-center tw-gap-2">
        <a href="https://businessfirms.co/company/key-medsolutions" target="_blank" rel="noopener noreferrer">
          <img height="220" width="200" alt="BusinessFirms Badge" src="https://businessfirms.co/images/bfirms-certified.png" />
        </a>
        <span className="tw-text-center tw-text-sm tw-font-medium">BusinessFirms Badge</span>
      </div>

      {/* Trustpilot */}
      <div className="tw-bg-white tw-rounded-xl tw-shadow-md">
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="67dd01024e5a60fbbd3ce1c6"
          data-style-height="150px"
          data-style-width=""
          data-theme="light"
        >
          <a href="https://www.trustpilot.com/review/keymedsolution.com" target="_blank" rel="noopener noreferrer">Trustpilot</a>
        </div>
      </div>

      {/* DesignRush */}
      <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-4">
        <div data-designrush-widget data-agency-id="88980" data-style="dark" />
        <noscript>
          <a href="https://www.designrush.com/agency/profile/key-medsolutions#reviews" target="_blank">REVIEW US ON DESIGNRUSH</a>
        </noscript>
      </div>

      {/* ProvenExpert */}
      <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-4">
        <div id="proSealWidget"></div>
      </div>

      {/* TrueFirms */}
      <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-4">
        <div
          className="truefirm-widget"
          data-widget-type="w1"
          data-width="100"
          data-height="146"
          data-company-id="3265"
        ></div>
      </div>

      {/* GoodFirms */}
      <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-4">
        <div
          className="goodfirm-widget"
          data-widget-type="goodfirms-widget-t1"
          data-company-id="173317"
        ></div>
      </div>
    </div>
  );
};

export default BrandRatings;
