import {
  Activity,
  DollarSign,
  Droplet,
  FileText,
  Heart,
  Monitor,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const MenuItems: any = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  {
    label: "Our Services",
    path: "/our-services",
    subMenu: [
      {
        label: "Recruitment Process Outsourcing",
        path: "/recruitment-process-outsourcing-services",
        icon: Activity,
      },
      {
        label: "Candidate Sourcing & Screening",
        path: "/candidate-sourcing-and-screening-services",
        icon: FileText,
      },
      {
        label: "Back Office & Administrative",
        path: "/back-office-and-administrative-services",
        icon: Stethoscope,
      },
      {
        label: "Payroll & Finance Outsourcing",
        path: "/payroll-and-finance-outsourcing-services",
        icon: Droplet,
      },
      {
        label: "Market Mapping",
        path: "/market-mapping-recruitment-services",
        icon: TrendingUp,
      },
      {
        label: "Executive Search & Headhunting",
        path: "/executive-search-and-headhunting-services",
        icon: Monitor,
      },
      {
        label: "Remote Staffing",
        path: "/remote-staffing-agency",
        icon: Heart,
      },
      {
        label: "Technology and Digital Recruitment",
        path: "/technology-and-digital-recruitment-services",
        icon: DollarSign,
      },
    ],
  },
  { label: "Industries We Serve", path: "/industries" },
  { label: "Delivery Models", path: "/delivery-models" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Blogs", path: "/blogs" },
  {
    label: "FAQs",
    path: "/faqs",
  },
];
