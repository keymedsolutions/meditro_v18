import {
  Activity,
  BadgeCheck,
  Briefcase,
  CheckCircle,
  Code,
  CreditCard,
  DollarSign,
  Droplet,
  FileCode,
  FileText,
  Heart,
  Monitor,
  RefreshCw,
  Stethoscope,
  TrendingUp,
  XCircle,
  GraduationCap,
  BarChart3,
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
        label: " Physician Medical Billing",
        path: "/physician-medical-billing-services",
        icon: Activity,
        subMenu: [
          {
            label: "Medical Claim Billing",
            path: "/medical-claim-billing-company",
            icon: FileText,
          },
          {
            label: "Internal Medicine Billing",
            path: "/internal-medicine-medical-billing",
            icon: Stethoscope,
          },
          {
            label: "Nephrology Billing",
            path: "/nephrology-medical-billing",
            icon: Droplet,
          },
          {
            label: "Radiology Billing",
            path: "/radiology-billing-services",
            icon: Monitor,
          },
          {
            label: "Cardiology Billing",
            path: "/cardiology-billing-services",
            icon: Heart,
          },
        ],
      },
        {
        label: "Recruitment Process Outsourcing",
        path: "/recruitment-process-outsourcing-services",
        icon: TrendingUp,
      },
      {
        label: "Candidate Sourcing & Screening",
        path: "/candidate-sourcing-and-screening-services",
        icon: TrendingUp,
      },
      {
        label: "Back Office & Administrative",
        path: "/back-office-and-administrative-services",
        icon: TrendingUp,
      },
      {
        label: "Profit Enhancement",
        path: "/profit-enhancement-services",
        icon: TrendingUp,
      },
      {
        label: "Medical Coding",
        path: "/medical-coding-services",
        icon: Code,
        subMenu: [
          {
            label: "ICD-10 Medical Coding",
            path: "/icd-10-medical-coding-services",
            icon: FileCode,
          },
        ],
      },
      {
        label: "Medical Debt Collection",
        path: "/medical-debt-collection-services",
        icon: DollarSign,
      },
      {
        label: "Accounts Receivable ",
        path: "/accounts-receivable-recovery-solutions",
        icon: RefreshCw,
      },
      {
        label: "Physician Practice Management",
        path: "/physician-practice-management",
        icon: Briefcase,
      },
      {
        label: "Insurance Eligibility Verification",
        path: "/medical-insurance-eligibility-verification",
        icon: CheckCircle,
      },
      {
        label: "Revenue Cycle Management",
        path: "/revenue-cycle-management-services",
        icon: XCircle,
      },
      {
        label: "Denial Management",
        path: "/denial-management-service",
        icon: XCircle,
      },
      {
        label: "Physician Credentialing",
        path: "/Physician-credentialing-services",
        icon: BadgeCheck,
      },
      {
        label: "Medical Billing Services",
        path: "/medical-billing-company",
        icon: CreditCard,
      },
    ],
  },
  { label: "Our Specialties", path: "/our-specialities" },
  { label: "Blogs", path: "/blogs" },
  {
    label: "Pricing",
    path: "",
    subMenu: [
      {
        label: "RCM Plan",
        path: "/rcm-plans",
        icon: BarChart3,
      },
      {
        label: "Training and Placement",
        path: "/pricing",
        icon: GraduationCap,
      },
    ],
  },
  // {
  //   label: "Book an Appointment",
  //   path: "https://calendly.com/key_medsolutions_inc/30min",
  //   external: true,
  // },
];
