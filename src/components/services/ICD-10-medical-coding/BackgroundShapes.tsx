import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundShapesProps {
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const BackgroundShapes = ({ variant = 'primary', className = '' }: BackgroundShapesProps) => {
  const baseColors = {
    primary: {
      shape1: 'tw-bg-primary/5',
      shape2: 'tw-bg-primary/10',
      shape3: 'tw-bg-blue-100'
    },
    secondary: {
      shape1: 'tw-bg-secondary/20',
      shape2: 'tw-bg-primary/5',
      shape3: 'tw-bg-accent/20'
    },
    accent: {
      shape1: 'tw-bg-accent/30',
      shape2: 'tw-bg-primary/10',
      shape3: 'tw-bg-blue-50'
    }
  };

  const colors = baseColors[variant];

  return (
    <div className={`tw-absolute tw-inset-0 tw-overflow-hidden tw--z-10 ${className}`}>
      <motion.div 
        className={`tw-absolute tw-top-0 tw-right-10 tw-w-72 tw-h-72 tw-rounded-full tw-blur-3xl ${colors.shape1}`}
        initial={{ opacity: 0.3 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: 'reverse' 
        }}
      />
      <motion.div 
        className={`tw-absolute tw-bottom-20 tw-left-10 tw-w-96 tw-h-96 tw-rounded-full tw-blur-3xl ${colors.shape2}`}
        initial={{ opacity: 0.3 }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          x: [0, -30, 0],
          y: [0, 20, 0] 
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1 
        }}
      />
      <motion.div 
        className={`tw-absolute tw-top-1/3 tw-left-1/3 tw-w-60 tw-h-60 tw-rounded-full tw-blur-3xl ${colors.shape3}`}
        initial={{ opacity: 0.2 }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 2 
        }}
      />
    </div>
  );
};

export default BackgroundShapes;
