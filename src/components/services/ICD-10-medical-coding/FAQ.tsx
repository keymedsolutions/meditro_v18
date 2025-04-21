import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion';
import { motion } from 'framer-motion';
import BackgroundShapes from './BackgroundShapes';

const faqs = [
  {
    question: "What is ICD-10 coding and why is it important?",
    answer: "For billing and insurance purposes, diagnoses, procedures, and medical services are categorized and documented using the ICD-10 coding system. Correct ICD-10 coding reduces the possibility of claim denials, guarantees appropriate reimbursement, and complies with regulations."
  },
  {
    question: "How does Key MedSolutions ensure accurate ICD-10 coding?",
    answer: "To guarantee accuracy and compliance, our team of knowledgeable coders carefully examines all patient documentation using the most recent coding guidelines. To maximize your reimbursement and minimize errors, we take advantage of official coding updates and industry trends."
  },
  {
    question: "Can Key MedSolutions handle both partial and full coding outsourcing?",
    answer: "Yes! Whether you require full outsourcing or just partial coding support, we provide adaptable solutions. We adapt to the particular requirements of your practice to guarantee a precise and effective coding procedure."
  },
  {
    question: "How do you handle coding audits?",
    answer: "To find mistakes, discrepancies, or lost opportunities in your medical billing, our staff performs comprehensive coding audits. This maximizes coding accuracy, guards against financial loss, and guarantees payer requirements are met."
  },
  {
    question: "What types of healthcare providers do you support with ICD-10 coding?",
    answer: "Key MedSolutions ensures accurate and compliant ICD-10 coding for all kinds of healthcare organizations by supporting a broad range of providers, including physician practices, hospice, home health, palliative care, and inpatient rehabilitation facilities (IRFs)."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section bg-secondary/30 relative">
      <BackgroundShapes variant="secondary" className="opacity-60" />
      
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary">
            Questions & Answers
          </span>
          
          <h2 className="mb-6">Frequently Asked Questions</h2>
          
          <p>
            Common questions about our ICD-10 coding services and how we can help your healthcare practice.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-border/50">
                  <AccordionTrigger className="text-left font-medium text-lg py-6 hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
