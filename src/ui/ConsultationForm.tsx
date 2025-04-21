
import React, { useState } from 'react';

interface ConsultationFormProps {
  className?: string;
  simplified?: boolean;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ className = '', simplified = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className={`${className} ${simplified ? 'tw-bg-white' : 'tw-bg-white tw-rounded-xl tw-shadow-elevation-1 tw-p-6'}`}>
      {!simplified && (
        <h3 className="tw-text-xl tw-font-medium tw-mb-4">Request a Free Consultation</h3>
      )}
      
      {isSuccess ? (
        <div className="tw-text-center tw-py-4 tw-rounded-lg tw-bg-green-50 tw-text-green-700 tw-mb-4 tw-animate-fade-in">
          <p className="tw-font-medium">Thank you for your request!</p>
          <p className="tw-text-sm tw-mt-1">Our team will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="tw-space-y-4">
          <div>
            <label htmlFor="name" className="tw-block tw-text-sm tw-font-medium tw-text-muted-foreground tw-mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-input tw-rounded-lg focus:tw-ring-2 focus:tw-ring-primary/20 focus:tw-border-primary tw-transition-all tw-duration-200 tw-outline-none"
              placeholder="Your name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="tw-block tw-text-sm tw-font-medium tw-text-muted-foreground tw-mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-input tw-rounded-lg focus:tw-ring-2 focus:tw-ring-primary/20 focus:tw-border-primary tw-transition-all tw-duration-200 tw-outline-none"
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="tw-block tw-text-sm tw-font-medium tw-text-muted-foreground tw-mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-input tw-rounded-lg focus:tw-ring-2 focus:tw-ring-primary/20 focus:tw-border-primary tw-transition-all tw-duration-200 tw-outline-none"
              placeholder="(123) 456-7890"
              required
            />
          </div>
          
          <button
            type="submit"
            className={`tw-btn-primary tw-w-full ${isSubmitting ? 'tw-opacity-70 tw-cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="tw-flex tw-items-center tw-justify-center">
                <svg className="tw-animate-spin -tw-ml-1 tw-mr-2 tw-h-4 tw-w-4 tw-text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="tw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Book a Free Consultation'
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ConsultationForm;
