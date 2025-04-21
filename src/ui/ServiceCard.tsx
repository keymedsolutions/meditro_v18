
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  isInView?: boolean;
}

const ServiceCard = ({ title, description, icon: Icon, delay = 0, isInView = true }: ServiceCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="tw-bg-white tw-rounded-xl tw-shadow-card hover:tw-shadow-hover-card tw-p-6 tw-transition-all tw-duration-300 tw-group tw-border tw-border-transparent hover:tw-border-primary/10"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -5 }}
    >
      <div className="tw-w-14 tw-h-14 tw-rounded-full tw-bg-primary/10 tw-flex tw-items-center tw-justify-center tw-mb-5 group-hover:tw-bg-primary/20 tw-transition-colors tw-duration-300">
        <Icon className="tw-text-primary" size={24} />
      </div>
      
      <h4 className="tw-text-xl tw-font-medium tw-mb-3 group-hover:tw-text-primary tw-transition-colors">{title}</h4>
      <p className="tw-text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
