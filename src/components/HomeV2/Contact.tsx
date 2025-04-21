
import React, { useRef } from 'react';
import ContactForm from '@/ui/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(123) 456-7890',
      link: 'tel:+1234567890'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@keymedsolutions.com',
      link: 'mailto:info@keymedsolutions.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Healthcare Ave, Medical District, USA',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 8am - 6pm EST',
      link: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="tw-py-20 md:tw-py-24 tw-bg-gradient-to-b tw-from-secondary/40 tw-to-white" ref={sectionRef}>
      <div className="tw-container tw-mx-auto tw-px-6 md:tw-px-8">
        <motion.div 
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="tw-mb-4">Contact Us Today</h2>
          <p>
            Ready to transform your medical billing process? Get in touch with our experts for a personalized consultation and discover how we can help optimize your revenue cycle.
          </p>
        </motion.div>
        
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-10 tw-items-start">
          <motion.div 
            className="lg:tw-col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="tw-bg-white tw-rounded-xl tw-shadow-elevation-1 tw-p-8 tw-relative tw-overflow-hidden">
              {/* Decorative elements */}
              <div className="tw-absolute -tw-top-16 -tw-left-16 tw-w-32 tw-h-32 tw-bg-primary/5 tw-rounded-full"></div>
              <div className="tw-absolute -tw-bottom-16 -tw-right-16 tw-w-32 tw-h-32 tw-bg-primary/5 tw-rounded-full"></div>
              
              <h3 className="tw-text-2xl tw-font-medium tw-mb-6 tw-relative tw-z-10">Send Us a Message</h3>
              <div className="tw-relative tw-z-10">
                <ContactForm />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:tw-col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="tw-bg-white tw-rounded-xl tw-shadow-elevation-1 tw-p-8 tw-h-full">
              <h3 className="tw-text-2xl tw-font-medium tw-mb-6">Get In Touch</h3>
              
              <motion.div 
                className="tw-space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {contactInfo.map((item, index) => (
                  <motion.div key={index} className="tw-flex tw-gap-4" variants={itemVariants}>
                    <div className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-primary/10 tw-flex tw-items-center tw-justify-center tw-flex-shrink-0">
                      <item.icon className="tw-text-primary" size={20} />
                    </div>
                    
                    <div>
                      <h5 className="tw-font-medium">{item.title}</h5>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="tw-text-muted-foreground hover:tw-text-primary tw-transition-colors"
                          target={item.icon === MapPin ? "_blank" : undefined}
                          rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="tw-text-muted-foreground">{item.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="tw-mt-8 tw-pt-8 tw-border-t"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4 className="tw-font-medium tw-mb-4">Follow Us</h4>
                <div className="tw-flex tw-gap-4">
                  <a href="#" className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-primary/10 tw-flex tw-items-center tw-justify-center hover:tw-bg-primary/20 tw-transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-primary/10 tw-flex tw-items-center tw-justify-center hover:tw-bg-primary/20 tw-transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-primary/10 tw-flex tw-items-center tw-justify-center hover:tw-bg-primary/20 tw-transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-primary/10 tw-flex tw-items-center tw-justify-center hover:tw-bg-primary/20 tw-transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
