"use client"
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/ui/card';
import { 
  BadgePercent, 
  Heart, 
  Activity, 
  Building2, 
  FileSpreadsheet, 
  ShieldCheck 
} from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (cardRef.current) {
            cardRef.current.style.opacity = "1";
            cardRef.current.style.transform = "translateY(0)";
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="tw-relative tw-group tw-transition-all tw-duration-700 tw-overflow-hidden"
      style={{ 
        opacity: 0, 
        transform: 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <Card className="tw-h-full tw-overflow-hidden tw-border-none tw-shadow-lg group-hover:tw-shadow-2xl tw-transition-transform tw-duration-500 group-hover:-tw-translate-y-2 tw-rounded-2xl">
        <div 
          className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-2 group-hover:tw-h-3 tw-transition-all tw-duration-300"
          style={{ backgroundColor: color }}
        ></div>
        
        <div 
          className="tw-absolute tw-top-0 tw-right-0 tw-w-40 tw-h-40 tw-rounded-full tw-opacity-10 -tw-translate-x-20 -tw-translate-y-20"
          style={{ backgroundColor: color }}
        ></div>
        
        <CardContent className="tw-p-6 tw-relative tw-z-10 tw-pb-10 tw-mt-2">
          <div className="tw-flex tw-items-start tw-gap-4 tw-mb-4 tw-mt-5">
            <div 
              className="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-rounded-lg tw-p-4 tw-shadow-lg tw-transition-all tw-duration-300 group-hover:tw-rotate-6 group-hover:tw-scale-110"
              style={{ backgroundColor: color, color: 'white' }}
            >
              {icon}
            </div>
            <h3 
              className="tw-font-semibold tw-text-xl tw-mt-1 tw-transition-transform tw-duration-300 group-hover:tw-translate-x-1"
              style={{ color }}
            >
              {title}
            </h3>
          </div>
          
          <p className="tw-text-foreground/70 tw-text-left tw-relative tw-z-10 tw-ml-16">
            {description}
          </p>
          
          <div 
            className="tw-absolute tw-bottom-0 tw-right-0 tw-w-20 tw-h-20 tw-opacity-5 tw-translate-x-5 tw-translate-y-5 tw-rounded-full"
            style={{ backgroundColor: color }}
          ></div>

          {/* Optional hover icon or action */}
          <div className="tw-absolute tw-bottom-6 tw-right-6 tw-transform tw-opacity-0 group-hover:tw-opacity-100 tw-transition-all tw-duration-300 group-hover:tw-translate-x-1">
            {/* Example icon or button (optional) */}
            {/* <ArrowRight size={18} style={{ color }} /> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Radiology Billing Services",
      description: "Solutions for end-to-end radiology billing and coding that guarantee correct claim filing, prompt reimbursement, and adherence to intricate imaging protocols.",
      icon: <FileSpreadsheet size={24} />,
      color: "#3b6af7"
    },
    {
      title: "Cardiology Medical Billing",
      description: "Cardiology practices can benefit from specialized billing services that manage complicated procedural codes, insurance requirements, and revenue cycle optimization.",
      icon: <Heart size={24} />,
      color: "#e75a89"
    },
    {
      title: "Internal Medicine & Nephrology",
      description: "Customized billing systems for nephrology and internal medicine that guarantee the highest possible reimbursements and adherence to industry norms.",
      icon: <Activity size={24} />,
      color: "#4ade80"
    },
    {
      title: "Physician Medical Billing",
      description: "Physician billing services that are accurate and economical. In order to guarantee prompt reimbursements and few claim denials, we concentrate on effective revenue cycle management.",
      icon: <ShieldCheck size={24} />,
      color: "#f59e0b"
    },
    {
      title: "Hospital Medical Billing",
      description: "Complete hospital revenue cycle management (RCM) solutions that enhance cash flow by integrating EMRs, providing AR services, and managing patient accounts.",
      icon: <Building2 size={24} />,
      color: "#7c3aed"
    },
    {
      title: "Accounts Receivable Recovery",
      description: "Healthcare providers can recover aging claims and lower outstanding balances by up to 35% with the aid of proven AR recovery strategies.",
      icon: <BadgePercent size={24} />,
      color: "#06b6d4"
    }
  ];

  return (
    <section id="services" className="tw-py-10 tw-bg-white tw-relative">
      <div className="tw-absolute tw-top-0 tw-right-0 tw-w-full  tw-bg-keymed-50 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-30 -tw-translate-y-1/2 tw-translate-x-1/3"></div>
      <div className="tw-absolute tw-bottom-20 tw-left-0 tw-w-64 tw-h-64 tw-bg-keymed-100 tw-rounded-full tw-filter tw-blur-2xl tw-opacity-20 tw-translate-y-1/2 -tw-translate-x-1/4"></div>
      
      <div className="tw-container tw-relative">
        <SectionHeading title="Our Specialized Services" subtitle="" showUnderline={false} />
        
        <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 md:tw-gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;