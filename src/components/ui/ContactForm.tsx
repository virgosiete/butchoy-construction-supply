import React, { useState } from 'react';
import { supabase, type Inquiry } from '../../lib/supabase';

interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<Inquiry>({
    name: '',
    phone: '',
    location: '',
    product: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous states
    setError(null);
    setIsSubmitting(true);
    
    try {
      // Check if Supabase URL is configured
      if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
        throw new Error('Supabase not configured. Please set up your environment variables.');
      }
      
      // Submit the data to Supabase
      const { error: supabaseError, data } = await supabase
        .from('inquiries')
        .insert([formData]);
      
      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        throw new Error(supabaseError.message || 'Error submitting form to database');
      }
      
      // Also send the data to Make.com webhook
      const webhookUrl = 'https://hook.us1.make.com/oni5yts3e9zxxmxpqtgs9swfts4k98qd';
      
      const makeResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submitted_at: new Date().toISOString()
        }),
      });
      
      if (!makeResponse.ok) {
        console.error('Webhook error:', await makeResponse.text());
        throw new Error('Error sending data to webhook');
      }
      
      // Success
      setIsSubmitted(true);
      
      // Call onSuccess callback if provided
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 3000);
      }
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          location: '',
          product: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 5000);
      
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg p-0">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
            Thank you for your inquiry! We'll get back to you shortly.
          </div>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <>
          {error && (
            <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-1">
                Location (Barangay or City) *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your location"
              />
            </div>
            
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-1">
                Product Interested In *
              </label>
              <select
                id="product"
                name="product"
                required
                value={formData.product}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select a product</option>
                <option value="s1-washed-sand">S-1 Washed Sand</option>
                <option value="three-fourth">3/4</option>
                <option value="base-course">Base Course</option>
                <option value="premium-base-course">Premium Base Course</option>
                <option value="vibro">Vibro</option>
                <option value="double-screen-sand">Double Screen Sand</option>
                <option value="g1">G-1</option>
                <option value="hollow-blocks">Hollow Blocks</option>
                <option value="cement">Cement</option>
                <option value="boulders">Boulders</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                Additional Notes
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter any specific requirements or questions"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
            
            <p className="text-sm text-neutral-500 mt-2">
              * Required fields
            </p>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;