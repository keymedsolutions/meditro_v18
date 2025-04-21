import React from 'react';
import { Button } from '@/ui/button';
import { motion } from 'framer-motion';
import BackgroundShapes from './BackgroundShapes';

const ConsultationCTA = () => {
  return (
    <section className="tw-section tw-relative tw-overflow-hidden">
      <BackgroundShapes variant="primary" className="tw-opacity-50" />
      
      <div className="tw-container-custom">
        <motion.div 
          className="tw-max-w-3xl tw-mx-auto tw-text-center tw-py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h3 
            className="tw-text-3xl tw-font-bold tw-mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to optimize your medical coding?
          </motion.h3>
          
          <motion.p 
            className="tw-mb-8 tw-text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Schedule a free consultation with our coding experts today and discover how Key MedSolutions can enhance your revenue cycle management.
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Button size="lg" className="tw-rounded-full tw-px-8 tw-py-6 tw-text-base tw-font-medium tw-shadow-lg">
              Schedule a Free Consultation Today!
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Animated Elements */}
      <motion.div 
        className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-bg-primary/5 tw-rounded-full tw-blur-3xl tw--z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      
      <motion.div 
        className="tw-absolute tw-bottom-1/4 tw-right-1/4 tw-w-80 tw-h-80 tw-bg-accent tw-rounded-full tw-blur-3xl tw--z-10"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
    </section>
  );
};

export default ConsultationCTA;
