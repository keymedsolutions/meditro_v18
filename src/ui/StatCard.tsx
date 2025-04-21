
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
  highlighted?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ 
  value, 
  label,
  delay = 0,
  highlighted = false,
}) => {
  return (
    <div 
      className={`tw-p-6 tw-rounded-xl ${highlighted ? 'tw-bg-primary tw-text-white' : 'tw-bg-white'} tw-shadow-elevation-1 tw-text-center tw-opacity-0 tw-animate-fade-in`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-mb-2">{value}</div>
      <p className={`tw-text-sm ${highlighted ? 'tw-text-white/90' : 'tw-text-muted-foreground'}`}>{label}</p>
    </div>
  );
};

export default StatCard;
