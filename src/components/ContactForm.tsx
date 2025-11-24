import React, { useState } from 'react';
import { toast } from 'sonner@2.0.3';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you for your inquiry. We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label 
            htmlFor="name"
            className="block mb-2"
            style={{ 
              fontWeight: 500, 
              fontSize: '12px', 
              lineHeight: '1.4',
              color: '#000000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-black/10 bg-white transition-colors duration-200 focus:outline-none focus:border-[#B30000]"
            style={{ 
              fontWeight: 400, 
              fontSize: '14px', 
              lineHeight: '1.4',
              color: '#000000'
            }}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p 
              id="name-error"
              className="mt-2"
              style={{ 
                fontWeight: 400, 
                fontSize: '12px', 
                lineHeight: '1.4',
                color: '#B30000'
              }}
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label 
            htmlFor="email"
            className="block mb-2"
            style={{ 
              fontWeight: 500, 
              fontSize: '12px', 
              lineHeight: '1.4',
              color: '#000000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-black/10 bg-white transition-colors duration-200 focus:outline-none focus:border-[#B30000]"
            style={{ 
              fontWeight: 400, 
              fontSize: '14px', 
              lineHeight: '1.4',
              color: '#000000'
            }}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p 
              id="email-error"
              className="mt-2"
              style={{ 
                fontWeight: 400, 
                fontSize: '12px', 
                lineHeight: '1.4',
                color: '#B30000'
              }}
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label 
            htmlFor="phone"
            className="block mb-2"
            style={{ 
              fontWeight: 500, 
              fontSize: '12px', 
              lineHeight: '1.4',
              color: '#000000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-black/10 bg-white transition-colors duration-200 focus:outline-none focus:border-[#B30000]"
            style={{ 
              fontWeight: 400, 
              fontSize: '14px', 
              lineHeight: '1.4',
              color: '#000000'
            }}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p 
              id="phone-error"
              className="mt-2"
              style={{ 
                fontWeight: 400, 
                fontSize: '12px', 
                lineHeight: '1.4',
                color: '#B30000'
              }}
              role="alert"
            >
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label 
            htmlFor="subject"
            className="block mb-2"
            style={{ 
              fontWeight: 500, 
              fontSize: '12px', 
              lineHeight: '1.4',
              color: '#000000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
          >
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-black/10 bg-white transition-colors duration-200 focus:outline-none focus:border-[#B30000]"
            style={{ 
              fontWeight: 400, 
              fontSize: '14px', 
              lineHeight: '1.4',
              color: formData.subject ? '#000000' : '#5A5A5A'
            }}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          >
            <option value="">Select a practice area</option>
            <option value="Corporate Law">Corporate Law</option>
            <option value="Litigation">Litigation</option>
            <option value="Intellectual Property">Intellectual Property</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Employment Law">Employment Law</option>
            <option value="Tax Advisory">Tax Advisory</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && (
            <p 
              id="subject-error"
              className="mt-2"
              style={{ 
                fontWeight: 400, 
                fontSize: '12px', 
                lineHeight: '1.4',
                color: '#B30000'
              }}
              role="alert"
            >
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      <div>
        <label 
          htmlFor="message"
          className="block mb-2"
          style={{ 
            fontWeight: 500, 
            fontSize: '12px', 
            lineHeight: '1.4',
            color: '#000000',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 border border-black/10 bg-white transition-colors duration-200 focus:outline-none focus:border-[#B30000] resize-none"
          style={{ 
            fontWeight: 400, 
            fontSize: '14px', 
            lineHeight: '1.6',
            color: '#000000'
          }}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p 
            id="message-error"
            className="mt-2"
            style={{ 
              fontWeight: 400, 
              fontSize: '12px', 
              lineHeight: '1.4',
              color: '#B30000'
            }}
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-4 bg-[#B30000] text-white transition-all duration-200 hover:bg-[#8B0000] disabled:bg-[#5A5A5A] disabled:cursor-not-allowed"
          style={{ 
            fontWeight: 500, 
            fontSize: '14px', 
            lineHeight: '1.4',
            letterSpacing: '0.01em'
          }}
        >
          {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
      </div>

      <p 
        style={{ 
          fontWeight: 400, 
          fontSize: '12px', 
          lineHeight: '1.6',
          color: '#5A5A5A'
        }}
      >
        By submitting this form, you acknowledge that the information provided will be used to contact you about your inquiry. We are committed to protecting your privacy and will not share your information with third parties.
      </p>
    </form>
  );
};
