import React, { useRef, useEffect } from 'react';
import { LucideIcon, CheckCircle } from 'lucide-react';

interface StatBadgeProps {
  children: React.ReactNode;
  delay?: number;
  icon?: LucideIcon;
}

const StatBadge = ({ children, delay = 0, icon: Icon = CheckCircle }: StatBadgeProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            if (itemRef.current) {
              itemRef.current.classList.add(
                'tw-opacity-100',
                'tw-translate-y-0',
                'tw-scale-100'
              );
              itemRef.current.classList.remove(
                'tw-opacity-0',
                'tw-translate-y-4',
                'tw-scale-95'
              );
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
      className={`
        tw-flex tw-items-center tw-gap-4 tw-p-5 tw-rounded-xl 
        tw-bg-white tw-border tw-border-keymed-300 tw-shadow-sm 
        tw-opacity-0 tw-translate-y-4 tw-scale-95
        tw-transition-all tw-duration-500 tw-ease-[cubic-bezier(0.4,0,0.2,1)]
        hover:tw-scale-[1.03] hover:tw-border-keymed-500 hover:tw-shadow-md
      `}
      style={{
        transitionDelay: `${delay}ms`,
        transitionProperty: 'opacity, transform, background-color, box-shadow, border-color',
      }}
    >
      <div className="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-rounded-lg tw-bg-keymed-100 tw-text-keymed-700 tw-shadow-inner tw-ring-1 tw-ring-keymed-200">
        <Icon className="tw-w-6 tw-h-6" />
      </div>
      <div className="tw-text-sm md:tw-text-base tw-text-foreground/80 tw-leading-snug">
        {children}
      </div>
    </div>
  );
};

export default StatBadge;
