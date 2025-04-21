import { IRCMServices, IRCMWhyChooseUs } from "@/types/app.types";
import {
  ClipboardCheck,
  FileText,
  AlertCircle,
  Users,
  BarChart,
  ShieldCheck,
  Zap,
  Settings,
  Award,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react";

export const RCMSERVICES_KEYS = {
  insuranceVerification: "InsuranceVerification",
  claimSubmissionManagement: "ClaimSubmissionManagement",
  denialManagementAppeals: "DenialManagementAppeals",
  patientBillingCollections: "PatientBillingCollections",
  revenueCycleReportingAnalytics: "RevenueCycleReportingAnalytics",
  complianceRegulatoryManagement: "ComplianceRegulatoryManagement",
  technologyIntegrationAutomation: "TechnologyIntegrationAutomation",
};
export const RCMServices: IRCMServices[] = [
  {
    key: RCMSERVICES_KEYS.insuranceVerification,
    id: 1,
    title: "Insurance Verification",
    description:
      "Before services are rendered, our staff confirms the patient's insurance eligibility and coverage information. This reduces the possibility of claims being rejected and guarantees that patients understand their financial obligations and benefits. We assist you in avoiding problems associated with denied insurance claims by verifying eligibility at the point of service, guaranteeing seamless billing and quicker payments.",
    icon: ClipboardCheck,
    image: "/images/gallery/compliant-coding.png",
    color: "tw-bg-blue-50 tw-text-blue-600",
    link: "/revenue-cycle-management-company/insurance-verification",
    benefits: [
      "Prevents insurance-related claim denials",
      "Accurate verification of patient benefits",
      "Reduces administrative burden on your practice",
    ],
  },
  {
    key: RCMSERVICES_KEYS.claimSubmissionManagement,
    id: 2,
    title: "Claim Submission & Management",
    description:
      "We manage the complete claim submission process, ensuring all claims are correctly coded to prevent delays.",
    icon: FileText,
    image: "/images/gallery/compliant-coding.png",
    color: "tw-bg-teal-50 tw-text-teal-600",
    link: "/revenue-cycle-management-company/claim-submission-management",
    benefits: [
      "Accurate coding and documentation",
      "Faster claim submission",
      "Enhanced claim tracking for real-time updates",
    ],
  },
  {
    key: RCMSERVICES_KEYS.denialManagementAppeals,
    id: 3,
    title: "Denial Management & Appeals",
    description:
      "Our team specializes in reviewing denied claims, determining rejection reasons, and drafting comprehensive appeals.",
    icon: AlertCircle,
    image: "/images/gallery/compliant-coding.png",
    color: "tw-bg-indigo-50 tw-text-indigo-600",
    link: "/revenue-cycle-management-company/denial-management-appeals",
    benefits: [
      "Increased claim approval rate",
      "Reduced risk of revenue loss",
      "Faster resolution of denials",
    ],
  },
  {
    key: RCMSERVICES_KEYS.patientBillingCollections,
    id: 4,
    title: "Patient Billing & Collections",
    description:
      "We offer clear and transparent billing to your patients while ensuring adherence to all regulations.",
    icon: Users,
    image: "/images/gallery/compliant-coding.png",
    color: "tw-bg-emerald-50 tw-text-emerald-600",
    link: "/revenue-cycle-management-company/patient-billing-collections",
    benefits: [
      "Improved patient satisfaction with clear, understandable bills",
      "Reduced accounts receivable (AR) days",
      "Effective management of patient collections",
    ],
  },
  {
    key: RCMSERVICES_KEYS.revenueCycleReportingAnalytics,
    id: 5,
    title: "Revenue Cycle Reporting & Analytics",
    description:
      "We provide comprehensive reporting so you can see the financial health of your practice clearly.",
    icon: BarChart,
    image: "/images/gallery/compliant-coding.png",
    color: "tw-bg-purple-50 tw-text-purple-600",
    link: "/revenue-cycle-management-company/revenue-cycle-reporting-analytics",
    benefits: [
      "Real-time financial performance tracking",
      "Informed decision-making",
      "Customizable reports for your practice's specific needs",
    ],
  },
  {
    key: RCMSERVICES_KEYS.complianceRegulatoryManagement,
    id: 6,
    title: "Compliance  & Regulatory Management",
    description:
      "Our RCM services fully comply with all healthcare regulations, such as HIPAA, ICD-10, and Medicare guidelines.",
    icon: ShieldCheck,
    image: "/images/gallery/compliant-coding.png",
    color: "tw-bg-amber-50 tw-text-amber-600",
    link: "/revenue-cycle-management-company/compliance-regulatory-management",
    benefits: [
      "Full compliance with industry regulations",
      "Reduced audit risks",
      "Protection from legal liabilities",
    ],
  },
  {
    key: RCMSERVICES_KEYS.technologyIntegrationAutomation,
    id: 7,
    title: "Technology Integration & Automation",
    description:
      "We incorporate automation and state-of-the-art technology into the revenue cycle management procedure.",
    icon: Zap,
    image: "/images/gallery/compliant-coding.png",
    color: "tw-bg-cyan-50 tw-text-cyan-600",
    link: "/revenue-cycle-management-company/technology-integration-automation",
    benefits: [
      "Increased efficiency and accuracy",
      "Automated workflows to reduce errors",
      "Seamless integration with your existing systems",
    ],
  },
  {
    key: RCMSERVICES_KEYS.technologyIntegrationAutomation,
    id: 8,
    title: "Customized RCM Solutions for Your Practice",
    description:
      "We provide tailored RCM solutions that address the specific issues of your practice, regardless of size.",
    icon: Settings,
    image: "/images/gallery/compliant-coding.png",
    color: "tw-bg-rose-50 tw-text-rose-600",
    link: "/revenue-cycle-management-company/customized-rcm-solutions-for-your-practice",
    benefits: [
      "Tailored services to fit your practice's needs",
      "Scalable solutions for practices of any size",
      "Dedicated support from RCM experts",
    ],
  },
];

export const RCMWhyChooseUs:IRCMWhyChooseUs[] = [
  {
    title: "Experienced Professionals",
    description:
      "Our staff has extensive knowledge of healthcare billing and coding with years of experience.",
    icon: Award,
    color: "blue",
  },
  {
    title: "End-to-End Services",
    description:
      "We oversee your complete revenue cycle from patient collections to insurance verification.",
    icon: CheckCircle,
    color: "purple",
  },
  {
    title: "Improved Cash Flow",
    description:
      "Our services help your practice's cash flow by decreasing claim denials and expediting reimbursements.",
    icon: DollarSign,
    color: "green",
  },
  {
    title: "Compliance & Accuracy",
    description:
      "We guarantee that your practice complies with all laws and codes, lowering the risk of audits.",
    icon: Clock,
    color: "pink",
  },
];
