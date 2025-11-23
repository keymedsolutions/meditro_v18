/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
// Fonts
import "../vendor/line-awesome/css/line-awesome.min.css";
import "../vendor/font-awesome/css/all.min.css";
import "../vendor/themify/themify-icons.css";
import "./globals.css";
import "../App.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { headers } from "next/headers";
import { GeratePageMetaData } from "@/lib/utils";
import { jsonLdSchema } from "@/data/jsonLd-schema";
import Script from "next/script";
import { SiteMetaData } from "@/data/meta-data";

import { GoogleTagManager } from '@next/third-parties/google'


export async function generateMetadata(
): Promise<Metadata> {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const url = headerList.get("x-full-path");

  if (Object.keys(SiteMetaData).includes(pathname as string)) {
    return GeratePageMetaData(pathname as string, url as string);
  } else {
    return GeratePageMetaData(pathname as string);
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const headerList = headers();
  const pathname = headerList.get("x-current-path");

  const jsonLd = jsonLdSchema[pathname as string]


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="msvalidate.01" content="8CE5D8A890E57610EC932A10D4132E53" />
        <GoogleTagManager gtmId="GTM-M6VK58DK" />





        <noscript><img height="1" width="1" style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=597584976163655&ev=PageView&noscript=1" /></noscript>
        {/* <!-- End Meta Pixel Code --> */}
      </head>
      <body>

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6VK58DK" height="0" width="0"
          style={{
            display: "none", visibility: "hidden"
          }}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <noscript>You need to enable JavaScript to run this app.</noscript>

        <noscript>
          <img height="1" width="1" style={{
            display: "none"
          }} alt="" src="https://px.ads.linkedin.com/collect/?pid=7084618&fmt=gif" />
        </noscript>
        {children}

        {
          jsonLd && jsonLd?.length > 0 &&
          jsonLd?.map((item: any, index: number) => {
            return (
              <Script key={index} type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
            )
          })

        }

        {/* <Script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></Script> <div className="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="2" data-height="0" data-nofollow="true" data-expandifr="true" data-scale="100" data-clutchcompany-id="2497282"></div> */}
        {/* <!-- TrustBox script --> */}
        {/* <Script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></Script> */}
        {/* <!-- End TrustBox script --> */}
      </body>
    </html>
  );
}
