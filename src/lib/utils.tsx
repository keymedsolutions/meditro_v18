/* eslint-disable @typescript-eslint/no-explicit-any */

import { AppConstant } from "@/constant/constatnt";
import { SiteMetaData } from "@/data/meta-data";
import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { twMerge } from "tailwind-merge"
import { favIcons } from "./icon";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const updateMetaTag = (name: any, content: any) => {
  let metaTag = document.querySelector(`meta[name="${name}"]`);

  if (metaTag) {
    // Update existing meta tag
    metaTag.setAttribute("content", content);
  } else {
    // Create new meta tag if not found
    metaTag = document.createElement("meta");
    metaTag.setAttribute("name", name);
    metaTag.setAttribute("content", content);
    document.head.appendChild(metaTag);
  }
};

export function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}



export const GeratePageMetaData = (pathName: string, url: string = ""): Metadata => {
  const metaDetails = SiteMetaData[pathName as string]


  const ogData: OpenGraph = {
    url: AppConstant.SITE_URL,
    locale: "en_US",
    title: AppConstant.SITE_TITLE,
    type: "website",
    siteName: AppConstant.SITE_TITLE,
  }

  const twitterData: Twitter = {
    card: "summary",
    creator: AppConstant.SITE_TITLE,
    title: AppConstant.SITE_TITLE,
    description: AppConstant.SITE_DESCRIPTION,
    images: [AppConstant.SITE_URL],
  }

  const data: Metadata = {
    title: AppConstant.SITE_TITLE,
    keywords: AppConstant.SITE_KEYWORD,
    description: AppConstant.SITE_DESCRIPTION,
    authors: [{ url: AppConstant.SITE_URL, name: AppConstant.SITE_TITLE }],
    openGraph: ogData,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    twitter: twitterData,
    robots: {
      follow: true,
      index: true,
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    themeColor: "#000000",
    verification: {
      google: AppConstant.GOOGLE_VARIFICATION
    },
    icons: favIcons
  }

  if (url) {
    data.alternates = {
      canonical: url
    }
  }

  return { ...data, ...metaDetails }
}