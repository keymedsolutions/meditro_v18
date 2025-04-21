
import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  // Create an array of elements with different properties
  const elements = [
    { size: 'tw-w-6 tw-h-6', color: 'tw-bg-medical-blue/20', delay: 0, duration: 8, distance: 10 },
    { size: 'tw-w-12 tw-h-12', color: 'tw-bg-medical-teal/15', delay: 1.2, duration: 10, distance: 15 },
    { size: 'tw-w-4 tw-h-4', color: 'tw-bg-medical-lightBlue/25', delay: 2.5, duration: 7, distance: 8 },
    { size: 'tw-w-8 tw-h-8', color: 'tw-bg-medical-lightTeal/20', delay: 0.8, duration: 9, distance: 12 },
    { size: 'tw-w-5 tw-h-5', color: 'tw-bg-medical-blue/10', delay: 4, duration: 11, distance: 14 },
    { size: 'tw-w-10 tw-h-10', color: 'tw-bg-medical-teal/10', delay: 3.2, duration: 9.5, distance: 10 },
  ];

  return (
    <div className="tw-absolute tw-inset-0 tw-overflow-hidden tw-pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`tw-absolute tw-rounded-full ${element.color} tw-backdrop-blur-sm tw-border tw-border-white/20`}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [element.distance * -1, element.distance, element.distance * -1],
            x: [element.distance, element.distance * -1, element.distance],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
