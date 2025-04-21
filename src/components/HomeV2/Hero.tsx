/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import ConsultationForm from './ConsultationForm';
import { upDownAnimation } from '@/utils/animation';
const doctorImg = "/images/home/doctor-bg.png";

const Hero = () => {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const decorativeElements = [
    { top: '15%', left: '5%', size: 'tw-w-6 tw-h-6', color: 'tw-bg-primary/20', delay: 0.5 },
    { top: '80%', left: '10%', size: 'tw-w-4 tw-h-4', color: 'tw-bg-secondary/20', delay: 0.7 },
    { top: '20%', right: '8%', size: 'tw-w-5 tw-h-5', color: 'tw-bg-success/20', delay: 0.6 },
    { top: '70%', right: '12%', size: 'tw-w-7 tw-h-7', color: 'tw-bg-warning/20', delay: 0.8 },
  ];

  const floatingShapes = {
    initial: { scale: 1, rotate: 0 },
    animate: {
      scale: [1, 1.05, 1],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const blurVariants = {
    initial: { filter: 'blur(8px)', opacity: 0 },
    animate: { 
      filter: 'blur(0px)', 
      opacity: 1,
      transition: { duration: 1.2, delay: 0.3 }
    }
  };

  return (
    <section className="tw-pt-10 tw-pb-16 md:tw-pt-10 md:tw-pb-20 lg:tw-pt-10 lg:tw-pb-24 tw-bg-hero-pattern tw-relative tw-overflow-hidden">
      {/* Decorative elements */}
      {decorativeElements.map((el, index) => (
        <motion.div
          key={index}
          className={`tw-absolute tw-rounded-full ${el.size} ${el.color} tw-hidden md:tw-block`}
          style={{ top: el.top, left: el.left, right: el.right }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: el.delay, duration: 0.5 }}
        />
      ))}
      
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-b tw-from-blue-light/50 tw-to-transparent" />

      <div className="tw-container tw-mx-auto tw-px-6 md:tw-px-8 tw-relative tw-z-10">
        <motion.div 
          className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-10 lg:tw-gap-8 tw-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="lg:tw-col-span-7 tw-space-y-6 tw-max-w-3xl" variants={itemVariants}>
            <div className="tw-inline-block tw-bg-primary/10 tw-text-primary tw-px-4 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium tw-mb-4 tw-relative">
              <div className="tw-absolute -tw-bottom-0.5 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-w-2 tw-h-2 tw-rotate-45 tw-bg-primary/10"></div>
              <span>Trusted by 1,500+ Healthcare Providers</span>
            </div>
            
            <div className="tw-space-y-4">
              <h1 className="tw-font-display tw-leading-tight">
                Your <span className="tw-heading-gradient">Trusted</span> Medical Billing & Revenue Cycle Management Company
              </h1>
              <h2 className="tw-text-lg md:tw-text-xl tw-text-muted-foreground tw-text-primary">
                All-in-One Medical Billing & Revenue Cycle Management Services for Healthcare Providers
              </h2>
            </div>
            
            <div>
              <p className="tw-text-muted-foreground">
                Key MedSolution is a premier medical billing and RCM business, offering end-to-end billing solutions to healthcare professionals looking to streamline revenue cycles, minimize claim denials, and maximize reimbursements.
              </p>
              <p className="tw-text-muted-foreground tw-mt-3">
                Our certified billing professionals manage your claims with accuracy and in a timely fashion, allowing you to recover aged receivables and optimize revenue.
              </p>
            </div>
            
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-start md:tw-items-center tw-gap-4 tw-pt-3">
           
              
              <ConsultationForm />
              {/* <button className="btn btn-primary shadow">
              Book a Free Consultation
                <i className="btn-icon-bx fas fa-chevron-right"></i>
              </button> */}

            
            </div>
    
           
          </motion.div>
          
          <motion.div 
            className="lg:tw-col-span-5"
            variants={itemVariants}
          >
            <div className="tw-relative">
              {/* Abstract animated shapes */}
              {/* <motion.div 
                className="tw-absolute -tw-top-12 -tw-left-8 tw-w-40 tw-h-40 tw-bg-primary/20 tw-rounded-tr-[60px] tw-rounded-bl-[60px]"
                variants={floatingShapes}
                initial="initial"
                animate="animate"
              /> */}
              <motion.div 
                className="tw-absolute -tw-bottom-10 -tw-right-10 tw-w-36 tw-h-36 tw-bg-secondary/30 tw-rounded-full"
                animate={{
                  y: [0, -15, 0],
                  transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <motion.div 
                className="tw-absolute tw-top-1/3 -tw-right-6 tw-w-24 tw-h-24 tw-bg-info/15 tw-rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Hero image with masked shape */}
              {/* <motion.div 
                className="tw-relative tw-z-10 tw-rounded-[2.5rem] tw-overflow-hidden tw-shadow-elevation-2 tw-border-4 tw-border-white/30"
                variants={blurVariants}
                initial="initial"
                animate="animate"
              > */}
                <div className="tw-aspect-w-4 tw-aspect-h-3">
                <motion.img
                  src={doctorImg}
                  alt="Doctor"
                  className="tw-rounded-2xl lg:tw-w-11/12 md:tw-w-4/5 tw-w-full"
                  {...upDownAnimation} // Spread animation properties here
                />
                  {/* <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop" 
                    alt="Healthcare professionals in a medical facility" 
                    className="tw-object-cover tw-w-full tw-h-full"
                  /> */}
                  {/* <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-tr tw-from-primary/30 tw-to-transparent"></div> */}
                </div>
              {/* </motion.div> */}
              
              {/* Additional floating elements */}
              <motion.div 
                className="tw-absolute -tw-top-4 tw-right-20 tw-w-10 tw-h-10 tw-rounded-lg tw-bg-secondary/10 tw-backdrop-blur-lg tw-border tw-border-white/20"
                animate={{
                  rotate: [0, 45, 0],
                  transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <motion.div 
                className="tw-absolute tw-top-2/3 -tw-left-6 tw-w-12 tw-h-12 tw-rounded-full tw-bg-warning/10 tw-backdrop-blur-lg tw-border tw-border-white/10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
