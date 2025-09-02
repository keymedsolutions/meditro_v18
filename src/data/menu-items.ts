/* eslint-disable @typescript-eslint/no-explicit-any */
export const MenuItems: any = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  {
    label: "Services",
    path: "/our-services",
    subMenu: [
      {
        label: "Physician Billing Services",
        path: "/physician-medical-billing-services",
        subMenu: [
          { label: "Medical Claim Billing", path: "/medical-claim-billing-company" },
          {
            label: "Internal Medicine & Nephrology Billing Services",
            path: "/internal-medicine-medical-billing",
          },
          {
            label: "Nephrology Billing Services",
            path: "/nephrology-medical-billing",
          },
          {
            label: "Radiology Billing Services",
            path: "/radiology-billing-services",
          },
          {
            label: "Cardiology Medical Billing",
            path: "/cardiology-medical-billing",
          },
        ],
      },
      {
        label:
          "Improving Your Financial Health with Profit Enhancement Services",
        path: "/profit-enhancement-services",
      },
      {
        label: "Medical Billing & Coding Services",
        path: "/medical-coding-services",
        subMenu: [
          { label: "ICD-10 Medical Coding", path: "/icd-10-medical-coding-services" },
        ],
      },
      {
        label:
          "Maximize Your Reimbursement Rate with Our Medical Billing and Collection Services",
        path: "/medical-debt-collection-services",
      },
      {
        label: "Streamlining Medical AR Recovery",
        path: "/accounts-receivable-recovery-solutions",
      },
      { label: "Practice Management", path: "/physician-practice-management" },
      {
        label: "Verification of Healthcare Insurance Eligibility",
        path: "/medical-insurance-eligibility-verification",
      },
      {
        label: "Revenue Cycle Management Company (RCM)",
        path: "/revenue-cycle-management-services",
      },
      {
        label: "Denial Management Services",
        path: "/denial-management-service",
      },
      { label: "Physician Credentialing", path: "/medical-credentialing-services" },
      { label: "Medical Billing Services", path: "/medical-billing-company" },
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
        path: "/rcm-plan",
      },
      {
        label:"Training and Placement",
        path:"/pricing"
      }
    ],
  },
  // {
  //   label: "Book an Appointment",
  //   path: "https://calendly.com/key_medsolutions_inc/30min",
  //   external: true,
  // },
];
