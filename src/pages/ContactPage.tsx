import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';
import ContactForm from '../components/ui/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-neutral-800 aspect-mobile md:aspect-desktop">
        <div className="absolute inset-0 bg-charcoal-900 bg-opacity-80"></div>
        <div className="container-custom relative z-10 text-white flex items-center h-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-xl text-neutral-200">
              Have questions or ready to order? Get in touch with us and we'll respond promptly.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form to request a quote or ask any questions about our products and services. We'll get back to you as soon as possible.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Phone size={24} className="text-amber-700 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-neutral-600">+63 912 345 6789</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail size={24} className="text-amber-700 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-neutral-600">info@martinaquerubin.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin size={24} className="text-amber-700 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-neutral-600">Lucena City, Quezon Province</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock size={24} className="text-amber-700 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-neutral-600">Monday-Saturday: 7AM-5PM</p>
                      <p className="text-neutral-600">Sunday: Closed</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Facebook size={24} className="text-amber-700 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Social Media</p>
                      <a 
                        href="https://www.facebook.com/noone.gomez" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:text-amber-800 transition-colors"
                      >
                        Facebook Page
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Delivery Areas</h3>
                <p className="text-neutral-600 mb-4">
                  We deliver to the following areas in Quezon Province:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-neutral-100 rounded p-2 text-center">Lucena City</div>
                  <div className="bg-neutral-100 rounded p-2 text-center">Tayabas</div>
                  <div className="bg-neutral-100 rounded p-2 text-center">Pagbilao</div>
                  <div className="bg-neutral-100 rounded p-2 text-center">Sariaya</div>
                  <div className="bg-neutral-100 rounded p-2 text-center">Candelaria</div>
                  <div className="bg-neutral-100 rounded p-2 text-center">Atimonan</div>
                </div>
                <p className="text-neutral-600 mt-4">
                  For other areas, please contact us for availability and delivery rates.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Find answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">How do I place an order?</h3>
              <p className="text-neutral-600">
                You can place an order by filling out our contact form, calling us directly, or sending us a message on Facebook. We'll respond with a quote and delivery details.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">What are your payment methods?</h3>
              <p className="text-neutral-600">
                We accept cash on delivery, bank transfers, GCash, and can arrange credit terms for regular customers and large projects.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">How fast can you deliver?</h3>
              <p className="text-neutral-600">
                We offer same-day delivery for orders placed before 10 AM within Lucena City. For other areas and larger orders, delivery is typically within 24-48 hours.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Do you offer discounts for bulk orders?</h3>
              <p className="text-neutral-600">
                Yes, we provide special pricing for bulk orders. Please contact us with your requirements for a customized quote.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Can I pick up my order instead of having it delivered?</h3>
              <p className="text-neutral-600">
                Yes, you can arrange to pick up your order from our depot in Lucena City. Please contact us in advance to ensure your materials are ready.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">What if I need materials not listed on your website?</h3>
              <p className="text-neutral-600">
                We can source many specialized construction materials not listed on our website. Please contact us with your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;