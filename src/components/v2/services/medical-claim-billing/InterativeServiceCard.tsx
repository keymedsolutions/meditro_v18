// import React, { useEffect, useRef } from 'react'
// import { Card, CardContent } from '@/ui/card';

// interface InterativeServiceCardProps {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   color: string;
//   delay?: number;
// }

// const InterativeServiceCard: React.FC<InterativeServiceCardProps> = ({ title, description, icon, color, delay = 0 }) => {
//   const cardRef = useRef<HTMLDivElement>(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           if (cardRef.current) {
//             cardRef.current.style.opacity = "1";
//             cardRef.current.style.transform = "translateY(0)";
//           }
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }
    
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className="tw-relative tw-group tw-transition-all tw-duration-700 tw-overflow-hidden"
//       style={{ 
//         opacity: 0, 
//         transform: 'translateY(20px)',
//         transitionDelay: `${delay}ms`,
//       }}
//     >
//       <Card className="tw-h-full tw-overflow-hidden border tw-shadow-lg group-hover:tw-shadow-2xl tw-transition-transform tw-duration-500 group-hover:-tw-translate-y-2 tw-rounded-2xl">
//         <div 
//           className="tw-rounded-tl-2xl tw-rounded-tr-2xl tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-2 group-hover:tw-h-3 tw-transition-all tw-duration-300"
//           style={{ backgroundColor: color }}
//         ></div>
        
//         <div 
//           className="tw-absolute tw-top-0 tw-right-0 tw-w-40 tw-h-40 tw-rounded-full tw-opacity-10 -tw-translate-x-20 -tw-translate-y-20"
//           style={{ backgroundColor: color }}
//         ></div>
        
//         <CardContent className="tw-p-6 tw-relative tw-z-10 tw-pb-10 tw-mt-2">
//           <div className="tw-flex tw-items-start tw-gap-4 tw-mb-4 tw-mt-5">
//             <div 
//               className="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-rounded-lg tw-p-4 tw-shadow-lg tw-transition-all tw-duration-300 group-hover:tw-rotate-6 group-hover:tw-scale-110"
//               style={{ backgroundColor: color, color: 'white' }}
//             >
//               {icon}
//             </div>
//             <h3 
//               className="tw-font-semibold tw-text-xl tw-mt-1 tw-transition-transform tw-duration-300 group-hover:tw-translate-x-1"
//               style={{ color }}
//             >
//               {title}
//             </h3>
//           </div>
          
//           <p className="tw-text-foreground/70 tw-text-left tw-relative tw-z-10 tw-ml-16">
//             {description}
//           </p>
          
//           <div 
//             className="tw-absolute tw-bottom-0 tw-right-0 tw-w-20 tw-h-20 tw-opacity-5 tw-translate-x-5 tw-translate-y-5 tw-rounded-full"
//             style={{ backgroundColor: color }}
//           ></div>

//           {/* Optional hover icon or action */}
//           <div className="tw-absolute tw-bottom-6 tw-right-6 tw-transform tw-opacity-0 group-hover:tw-opacity-100 tw-transition-all tw-duration-300 group-hover:tw-translate-x-1">
//             {/* Example icon or button (optional) */}
//             {/* <ArrowRight size={18} style={{ color }} /> */}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default InterativeServiceCard


"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/ui/card"
import React from "react"

interface InterativeServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  delay?: number
}

const InterativeServiceCard: React.FC<InterativeServiceCardProps> = ({
  title,
  description,
  icon,
  color,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay / 1000 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="tw-relative tw-group tw-transition-all tw-duration-500 tw-overflow-hidden"
    >
      <Card className="tw-h-full tw-overflow-hidden border tw-shadow-lg group-hover:tw-shadow-2xl tw-transition-transform tw-duration-500 tw-rounded-2xl tw-bg-card">
        {/* Top Accent Bar */}
        <motion.div
          layoutId={`bar-${title}`}
          className="tw-rounded-tl-2xl tw-rounded-tr-2xl tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-2 group-hover:tw-h-3 tw-transition-all tw-duration-300"
          style={{ backgroundColor: color }}
        ></motion.div>

        {/* Top-right background circle */}
        <div
          className="tw-absolute tw-top-0 tw-right-0 tw-w-40 tw-h-40 tw-rounded-full tw-opacity-10 -tw-translate-x-20 -tw-translate-y-20"
          style={{ backgroundColor: color }}
        ></div>

        <CardContent className="tw-p-6 tw-relative tw-z-10 tw-pb-10 tw-mt-2">
          <div className="tw-flex tw-items-start tw-gap-4 tw-mb-4 tw-mt-5">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 8, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-rounded-lg tw-p-4 tw-shadow-lg"
              style={{ backgroundColor: color, color: "white" }}
            >
              {icon}
            </motion.div>

            {/* Title */}
            <motion.h3
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="tw-font-semibold tw-text-xl tw-mt-1"
              style={{ color }}
            >
              {title}
            </motion.h3>
          </div>

          {/* Description */}
          <p className="tw-text-foreground/70 tw-text-left tw-relative tw-z-10 tw-ml-16 tw-font-serif">
            {description}
          </p>

          {/* Bottom-right faint circle */}
          <div
            className="tw-absolute tw-bottom-0 tw-right-0 tw-w-20 tw-h-20 tw-opacity-5 tw-translate-x-5 tw-translate-y-5 tw-rounded-full"
            style={{ backgroundColor: color }}
          ></div>

          {/* Hover Action (Optional button or icon) */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileHover={{ opacity: 1, x: 4 }}
            transition={{ duration: 0.3 }}
            className="tw-absolute tw-bottom-6 tw-right-6"
          >
            {/* Example: <ArrowRight size={18} style={{ color }} /> */}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default InterativeServiceCard
