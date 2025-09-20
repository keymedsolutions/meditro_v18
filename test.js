const fs = require("fs");
const MenuItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  {
    label: "Services",
    path: "/our-services",
    subMenu: [
      {
        label: "Physician Billing Services",
        path: "/physician-medical-billing-company",
        subMenu: [
          { label: "Medical Claim Billing", path: "/medical-claim-billing-company" },
          {
            label: "Internal Medicine & Nephrology Billing Services",
            path: "/internal-medicine-medical-billing",
          },
          {
            label: "Radiology Billing Services",
            path: "/radiology-billing-services",
          },
          {
            label: "Cardiology Medical Billing",
            path: "/cardiology-billing-services",
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
      { label: "Physician Credentialing", path: "/Physician-credentialing-services" },
      { label: "Medical Billing Services", path: "/medical-billing-company" },
    ],
  },
  { label: "Our Specialties", path: "/our-specialities" },
  { label: "Blogs", path: "/blogs" },
  {
    label: "Book an Appointment",
    path: "https://calendly.com/key_medsolutions_inc/30min",
    external: true,
  },
];

// Key mapping for clarity and small related keys
const customKeyMap= {
  "Home": "home",
  "About Us": "about",
  "Services": "services",
  "Physician Billing Services": "physicianBilling",
  "Medical Claim Billing": "claimBilling",
  "Internal Medicine & Nephrology Billing Services": "internalMedicine",
  "Radiology Billing Services": "radiologyBilling",
  "Cardiology Medical Billing": "cardiologyBilling",
  "Improving Your Financial Health with Profit Enhancement Services": "profitEnhancement",
  "Medical Billing & Coding Services": "codingServices",
  "ICD-10 Medical Coding": "icd10Coding",
  "Maximize Your Reimbursement Rate with Our Medical Billing and Collection Services": "reimbursementRate",
  "Streamlining Medical AR Recovery": "arRecovery",
  "Practice Management": "practiceMgmt",
  "Verification of Healthcare Insurance Eligibility": "insuranceVerification",
  "Revenue Cycle Management Company (RCM)": "rcmCompany",
  "Denial Management Services": "denialMgmt",
  "Physician Credentialing": "credentialing",
  "Medical Billing Services": "billingServices",
  "Our Specialties": "specialties",
  "Blogs": "blogs",
  "Book an Appointment": "appointment",
};

function buildNestedMap(items) {
  const result = {};

  for (const item of items) {
    const key = customKeyMap[item.label] || camelize(item.label);

    const entry = { path: item.path };
    if (item.external) entry.external = true;

    if (item.subMenu) {
      entry.children = buildNestedMap(item.subMenu);
    }

    result[key] = entry;
  }

  return result;
}

function camelize(label) {
  return label
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .map((w, i) =>
      i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    )
    .join("");
}

const PATH_APP = buildNestedMap(MenuItems);

console.log(PATH_APP);


fs.writeFile("PATH_APP.ts", JSON.stringify(PATH_APP), (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File has been saved!");
  }
});