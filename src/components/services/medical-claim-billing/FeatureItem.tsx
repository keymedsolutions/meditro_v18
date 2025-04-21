import React, { useRef, useEffect } from 'react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureItem = ({ icon, title, description, delay = 0 }: FeatureItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            if (itemRef.current) {
              itemRef.current.classList.add('tw-opacity-100', 'tw-translate-y-0');
              itemRef.current.classList.remove('tw-opacity-0', 'tw-translate-y-4');
            }
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={itemRef} 
      className="tw-flex tw-items-start tw-gap-4 tw-p-5 tw-rounded-xl tw-border tw-transition-all tw-duration-300 hover:-tw-translate-y-1 tw-opacity-0 tw-translate-y-4 tw-group tw-bg-gradient-to-br tw-from-white/90 tw-via-white/95 tw-to-keymed-50/50 tw-backdrop-blur-sm tw-border-keymed-100/30 tw-shadow-[0_10px_25px_-5px_rgba(59,106,247,0.05)] hover:tw-shadow-[0_15px_30px_-5px_rgba(59,106,247,0.15)]"
      style={{ transitionDelay: `${delay}ms`, transitionProperty: 'opacity, transform, box-shadow' }}
    >
      <div className="tw-p-2.5 tw-rounded-xl tw-bg-gradient-to-br tw-from-keymed-500 tw-to-keymed-600 tw-text-white tw-shadow-lg tw-shadow-keymed-400/10 group-hover:tw-shadow-keymed-400/30 tw-transition-all tw-duration-300 tw-relative tw-overflow-hidden">
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-white tw-opacity-0 group-hover:tw-opacity-20 tw-transition-opacity tw-duration-300"></div>
        {icon}
      </div>
      <div className="tw-flex-1">
        <h4 className="tw-text-lg tw-font-medium tw-text-keymed-800 tw-mb-1 group-hover:tw-text-keymed-600 tw-transition-colors">{title}</h4>
        <p className="tw-text-foreground/70 tw-text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;