"use client";

import Script from "next/script";
import React from "react";

const ScriptLoad = () => {
  return (
    <>
      {/* ✅ Facebook Pixel (lazy loaded, client only) */}
      <Script id="facebook-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;
            n=f.fbq=function(){n.callMethod ? n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s);
          }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '597584976163655');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* ✅ LinkedIn Insight Tag (safe and SSR-friendly) */}
      <Script id="linkedin-insight" strategy="lazyOnload">
        {`
          window._linkedin_partner_id = "7084618";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(window._linkedin_partner_id);
          (function(l) {
            if (!l){
              window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[];
            }
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
      </Script>

      {/* ✅ NoScript fallback for tracking pixels */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt="facebook tracking"
          src="https://www.facebook.com/tr?id=597584976163655&ev=PageView&noscript=1"
        />
      </noscript>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt="linkedin tracking"
          src="https://px.ads.linkedin.com/collect/?pid=7084618&fmt=gif"
        />
      </noscript>
    </>
  );
};

export default ScriptLoad;
