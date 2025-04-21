import {
  UserCheck,
  Calendar,
  FileCheck,
  Users,
  Send,
  DollarSign,
  AlertTriangle,
  PieChart,
  FileText,
  BarChart,
  InfoIcon as Transparency,
  Zap,
  MessageCircle,
  Briefcase,
  BarChart3,
  BookText,
  ChartNetwork,
  CircleCheckBig,
  ShieldCheck,
  BriefcaseMedical,
  FileSearch,
  Workflow,
} from "lucide-react";

export const statsData = [
  { number: "500+", label: "Clinics Launched" },
  { number: "98%", label: "Success Rate" },
  { number: "24/7", label: "Support" },
];

export const services = [
  {
    icon: UserCheck,
    title: "Credentialing & Revalidation",
    description:
      "Get your practice credentialed with insurers quickly and efficiently.",
    link: "/credentialing-revalidation",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Seamless scheduling solutions to keep your calendar full.",
  },
  {
    icon: FileCheck,
    title: "Pre-Certification & Insurance Eligibility Verification",
    description: "Ensure accurate coverage for every patient.",
  },
  {
    icon: Users,
    title: "Patient Demographic Entry & Charge Entry Services",
    description: "CPT & ICD-10 coding to streamline claims submission.",
  },
  {
    icon: Send,
    title: "Claims Submission",
    description: "Faster, error-free claim processing for steady cash flow.",
  },
  {
    icon: DollarSign,
    title: "Payment Posting Services",
    description: "Accurate posting and reconciliation of payments.",
  },
  {
    icon: AlertTriangle,
    title: "Rejection Analysis & Denial Management",
    description:
      "Identify, analyze, and resolve claims rejections efficiently.",
  },
  {
    icon: PieChart,
    title: "Accounts Receivable Follow-Up",
    description: "Proactive insurance follow-up to maximize reimbursements.",
  },
  {
    icon: FileText,
    title: "Patient Statement Support & Collections",
    description:
      "Optional patient collection services tailored to your practice.",
  },
  {
    icon: BarChart,
    title: "Practice Reporting & Analysis",
    description:
      "Custom reports to help track performance and identify growth opportunities.",
  },
];

export const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "3-4% of collections with no upfront fees.",
  },
  {
    icon: Transparency,
    title: "Transparent Pricing",
    description: "No monthly minimums or hidden charges.",
  },
  {
    icon: Zap,
    title: "Pay After Revenue",
    description: "Pay only after revenue generation.",
  },
];

export const steps = [
  {
    title: "Initial consultation",
    description: "Understand your needs",
    icon: MessageCircle,
  },
  {
    title: "Credentialing",
    description: "Insurance verification",
    icon: FileCheck,
  },
  {
    title: "Full RCM support",
    description: "Billing, claims, denial management",
    icon: Briefcase,
  },
  {
    title: "Practice reporting",
    description: "Financial analysis for growth",
    icon: BarChart3,
  },
];

export const features = [
  {
    title: "100% Free & No Commitment",
    description: "Get real insights without any risk.",
    icon: ShieldCheck, // Represents security and trust
  },
  {
    title: "Expert RCM Analysis",
    description: "Industry professionals analyze your practice.",
    icon: BriefcaseMedical, // Represents medical expertise
  },
  {
    title: "Uncover Lost Revenue",
    description: "Identify billing issues and missed claims.",
    icon: FileSearch, // Represents searching for financial gaps
  },
  {
    title: "Improve Operational Efficiency",
    description: "Streamline workflow and patient management.",
    icon: Workflow, // Represents process optimization
  },
  {
    title: "Data-Driven Insights",
    description: "Actionable recommendations to increase profitability.",
    icon: BarChart3, // Represents analytics and insights
  },
];

export const faqs = [
  {
    question: "How long does the evaluation take?",
    answer: "You'll receive your report within 48 hours.",
  },
  {
    question: "Is this really free?",
    answer: "Yes! There are no hidden fees or commitments.",
  },
  {
    question: "What do I need to provide?",
    answer: "Just basic practice details. No sensitive patient data required.",
  },
  {
    question: "How will I receive my evaluation?",
    answer: "You'll get a detailed report via email or a scheduled call.",
  },
];

export const page2steps = [
  {
    title: "Fill out the quick form with basic practice details.",
    icon: BookText,
  },
  {
    title: "Our experts review your billing, workflow, and revenue cycle.",
    icon: ChartNetwork,
  },
  {
    title: "You receive a personalized evaluation report with key insights.",
    icon: CircleCheckBig,
  },
  {
    title: "Implement recommendations to boost revenue and efficiency.",
    icon: Zap,
  },
];

export const testimonials = [
  {
    quote:
      "This evaluation helped me identify billing issues that were costing my practice thousands. I highly recommend it!",
    author: "Dr. Shah",
    position: "Internal Medicine",
  },
  {
    quote:
      "I had no idea how much revenue I was losing until I got my free report. The insights were eye-opening!",
    author: "Dr. Patel",
    position: "Family Medicine",
  },
];

export const MetaData = [
  {
    PageURL: "/",
    MetaTitle:
      "Expert Medical Billing & Revenue Cycle Management Company | Key MedSolutions ",
    MetaDescription:
      "Key MedSolutions is a company offering medical billing, coding, and revenue cycle management services to healthcare providers. Maximize reimbursements today.",
  },
  {
    PageURL: "/medical-claim-billing",
    MetaTitle:
      "Medical Claim Billing Services and Solutions | Key Medsolutions",
    MetaDescription:
      "We are a medical billing services company offering medical claims billing solutions to healthcare providers in the USA. Book a free consultation today!",
  },
  {
    PageURL: "/internal-medicine-and-nephrology-billing-service",
    MetaTitle: "Internal Medicine and Nephrology Medical Billing Services",
    MetaDescription:
      "KeyMed’s nephrology medical billing services are customized to meet your practice's needs, ensuring accurate billing and boosting revenue cycle efficiency.",
  },
  {
    PageURL: "/physician-billing-services",
    MetaTitle: "Physician Billing Services | Physician Billing Company",
    MetaDescription:
      "Boost revenue and streamline your practice with Key MedSolutions' physician billing services. Tailored solutions and efficient RCM. Request a free demo today!",
  },
  {
    PageURL: "/ICD-10-medical-coding",
    MetaTitle: "ICD-10 Medical Coding Services for Healthcare Providers ",
    MetaDescription:
      "Ensure accurate, compliant ICD-10 medical coding with our expert services. Maximize reimbursements, reduce errors, and streamline your revenue cycle.",
  },
  {
    PageURL: "/radiology-billing-services",
    MetaTitle: "Specialized Radiology Medical Billing Services by KeyMed",
    MetaDescription:
      "Increase revenue with specialized radiology billing services, expert coding, accurate claim submissions, and enhanced collection processes. Book a demo today!",
  },
  {
    PageURL: "/cardiology-medical-billing",
    MetaTitle: "Expert Cardiology Medical Billing Services by KeyMed",
    MetaDescription:
      "Our cardiology medical billing services streamline revenue cycle management, boosting collections and financial outcomes for your practice. Book a demo today!",
  },
  {
    PageURL:
      "/improving-your-financial-health-with-profit-enhancement-services",
    MetaTitle: "Boost Profitability with Expert Profit Enhancement Services",
    MetaDescription:
      "Enhance financial health with tailored profit enhancement services. Reduce costs, maximize revenue, and improve business growth with expert financial strategies.",
  },
  {
    PageURL:
      "/maximize-your-reimbursement-rate-with-our-medical-billing-and-collection-services",
    MetaTitle: "Expert Medical Billing & Collection Services | Boost Revenue",
    MetaDescription:
      "Partner with our expert team for medical billing and collection services. Reduce claim denials, accelerate reimbursements, and enhance revenue cycle efficiency.",
  },
  {
    PageURL: "/streamlining-medical-AR-recovery",
    MetaTitle: "AR Recovery Services | Accounts Receivable Recovery Solutions",
    MetaDescription:
      "Maximize collections with accounts receivable recovery solutions. AR recovery services help improve cash flow and reduce outstanding balances effectively.",
  },
  {
    PageURL: "/practice-management",
    MetaTitle: "Physician Practice Management Services | Key MedSolutions ",
    MetaDescription:
      "Optimize your practice with expert physician practice management services. Enhance efficiency, compliance, and revenue with tailored solutions. Book a demo today!",
  },
  {
    PageURL: "/verification-of-healthcare-insurance-eligibility",
    MetaTitle: "Realtime Insurance Eligibility Verification Services",
    MetaDescription:
      "Ensure accurate insurance eligibility with real-time verification services. Improve patient intake and reduce claim issues. Book a demo today!",
  },
  {
    PageURL: "/revenue-cycle-management-company",
    MetaTitle: "Healthcare Revenue Cycle Management Solutions | RCM Services",
    MetaDescription:
      "Optimize revenue with our healthcare revenue cycle management solutions and services. Expert billing, coding, and claims management to increase reimbursements.",
  },
  {
    PageURL: "/denial-management-service",
    MetaTitle: "Denial Management And Resolution Services | Key Medsolution",
    MetaDescription:
      "KeyMed's denial management and resolution services help reduce claim denials, improve recovery rates, and streamline your revenue cycle with expert support.",
  },
  {
    PageURL: "/physician-credentialing",
    MetaTitle: "Medical Credentialing and Insurance Credentialing Services",
    MetaDescription:
      "Optimize your practice with medical and insurance credentialing services. Ensure timely approvals, reduce claim denials, and improve revenue cycle efficiency.",
  },
  {
    PageURL: "/our-specialities",
    MetaTitle: "KeyMed Revenue Support for Healthcare & Multiple Specialties",
    MetaDescription:
      "KeyMed offers expert revenue support for healthcare providers across specialties, optimizing revenue cycles and reducing claim denials with tailored solutions.",
  },
  {
    PageURL: "/blogs",
    MetaTitle: "KeyMed Solutions Blog: Healthcare Insights & Revenue Tips",
    MetaDescription:
      "Explore KeyMed's blog for expert insights on healthcare trends, revenue cycle management, and solutions to optimize your practice's financial performance.",
  },
  {
    PageURL: "/contact-us",
    MetaTitle: "Contact KeyMed for Expert Healthcare Revenue Solutions",
    MetaDescription:
      "Reach out to KeyMed for expert revenue cycle management and healthcare support. Our team is ready to help optimize your processes and reduce claim denials.",
  },
  {
    PageURL: "Blogs",
  },
  {
    PageURL: "/how-medical-coding-impacts-the-revenue-cycle",
    MetaTitle: "How Medical Coding Impacts Your Revenue Cycle Management?",
    MetaDescription:
      "Explore how precise medical coding enhances the revenue cycle by ensuring accurate claims, improving reimbursement, and reducing denials for healthcare providers.",
  },
  {
    PageURL:
      "/how-AI-is-improving-medical-coding-processes-accuracy-and-efficiency",
    MetaTitle: "How AI Improving Medical Coding Accuracy and Efficiency?",
    MetaDescription:
      "Discover how AI boosts accuracy and efficiency in medical coding, streamlining processes, reducing errors, and improving reimbursement cycles.",
  },
  {
    PageURL: "/boost-your-practice's-performance-with-revenue-cycle-kpis",
    MetaTitle: "Boost Practice Performance with Revenue Cycle KPIs",
    MetaDescription:
      "Improve your practice's revenue cycle with KeyMed's KPIs. Optimize financial performance, reduce inefficiencies, and enhance growth using targeted metrics.",
  },
  {
    PageURL:
      "/how-chiropractic-billing-services-work-for-medicare-beneficiaries",
    MetaTitle: "Chiropractic Billing Services for Medicare Beneficiaries",
    MetaDescription:
      "Learn how chiropractic billing services help Medicare beneficiaries. Ensure accurate claims processing and maximize reimbursement with professional billing support.",
  },
  {
    PageURL: "/optimize-healthcare-Finances-rcm-mastery-unleashed",
    MetaTitle: "Optimize Healthcare Finances: RCM Mastery Unleashed",
    MetaDescription:
      "Unlock the potential of your healthcare finances with RCM mastery. Improve efficiency, reduce errors, and boost revenue with expert management solutions.",
  },
];
