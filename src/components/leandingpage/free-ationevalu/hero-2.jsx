import { useState } from 'react';

export default function Hero2() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/i.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          alert('Thank you! We will contact you soon.');
          setFormData({ name: '', email: '', phone: '' });
        } else {
          alert('Something went wrong. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
      }
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (

    
    <section className="tw-bg-gray-50 tw-py-12 tw-px-6 md:tw-px-12 lg:tw-px-20">
      <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-10 tw-items-center">
        {/* Left Side Content */}
        <div>
          <h1 className="tw-font-bold tw-text-gray-900 tw-text-3xl md:tw-text-3xl lg:tw-text-3xl tw-leading-tight">Your Trusted Medical Billing & Revenue Cycle Management Company</h1>
          <h2 className="tw-text-xl md:tw-text-2xl lg:tw-text-3xl tw-font-semibold tw-text-indigo-600 tw-mt-2 tw-leading-relaxed">
            All-in-One Medical Billing & Revenue Cycle Management Services for Healthcare Providers
          </h2>
          <p className="tw-text-gray-600 tw-mt-4">
            Key MedSolution is a premier medical billing and RCM business, offering end-to-end billing solutions to healthcare
            professionals looking to streamline revenue cycles, minimize claim denials, and maximize reimbursements.
          </p>
          <p className="tw-text-gray-600 tw-mt-2">
            Our certified billing professionals manage your claims with accuracy and in a timely fashion, allowing you to recover
            aged receivables and optimize revenue.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="tw-mt-4">
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-3">
              <div className="tw-flex-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`tw-p-3 tw-border tw-rounded-lg tw-w-full ${errors.name ? 'tw-border-red-500' : 'tw-border-gray-300'}`}
                />
                {errors.name && <p className="tw-text-red-500 tw-text-sm tw-mt-1">{errors.name}</p>}
              </div>
              <div className="tw-flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`tw-p-3 tw-border tw-rounded-lg tw-w-full ${errors.email ? 'tw-border-red-500' : 'tw-border-gray-300'}`}
                />
                {errors.email && <p className="tw-text-red-500 tw-text-sm tw-mt-1">{errors.email}</p>}
              </div>
              <div className="tw-flex-1">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`tw-p-3 tw-border tw-rounded-lg tw-w-full ${errors.phone ? 'tw-border-red-500' : 'tw-border-gray-300'}`}
                />
                {errors.phone && <p className="tw-text-red-500 tw-text-sm tw-mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Button and Google Rating Row */}
            <div className="tw-mt-4 tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-gap-4 sm:tw-justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`tw-px-6 tw-py-3 tw-bg-indigo-600 tw-text-white tw-font-semibold tw-rounded-lg tw-shadow hover:tw-bg-indigo-700 ${isSubmitting ? 'tw-opacity-50 tw-cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Book a Free Consultation'}
              </button>
              <div className="tw-flex tw-items-center tw-gap-2 tw-text-gray-700 tw-font-semibold">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="tw-w-6 tw-h-6" />
                <span className="tw-flex tw-items-center tw-gap-1">Google Rating: <span className="tw-text-yellow-500">⭐⭐⭐⭐⭐</span> 4.8</span>
              </div>
            </div>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="tw-relative tw-flex tw-justify-center">
          <div className="tw-relative tw-w-full tw-max-w-md">
            <div className="tw-absolute tw-inset-0 tw-bg-indigo-100 tw-rounded-full"></div>
            <img
              src="https://bellmedex.com/wp-content/uploads/2024/01/Doctor-1.webp"
              alt="Doctor"
              className="tw-relative tw-z-10 tw-w-full tw-rounded-lg"
            />
            <div className="tw-absolute tw-top-1/2 -tw-left-10 tw-transform -tw-translate-y-1/2 tw-text-indigo-600 tw-font-bold tw-rotate-90">
              SPECIALTY-SPECIFIC
            </div>
            <div className="tw-absolute tw-top-1/2 -tw-right-10 tw-transform -tw-translate-y-1/2 tw-text-indigo-600 tw-font-bold tw-rotate-90">
              99% CLEAN CLAIMS
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="tw-mt-12 tw-bg-indigo-600 tw-text-white tw-py-4 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center tw-gap-6">
        <div className="tw-flex tw-items-center tw-gap-2">
          <span className="tw-text-lg tw-font-semibold">✅ 1,500+ Satisfied Providers</span>
        </div>
        <div className="tw-flex tw-items-center tw-gap-2">
          <span className="tw-text-lg tw-font-semibold">✅ Serving 75+ Medical Specialties</span>
        </div>
        <div className="tw-flex tw-items-center tw-gap-2">
          <span className="tw-text-lg tw-font-semibold">✅ 1,200+ Billing & Coding Experts</span>
        </div>
      </div>
    </section>
  );
}
  