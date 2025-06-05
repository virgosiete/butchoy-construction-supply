import React from 'react';
import { Phone } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

const Hero: React.FC = () => {
  const { openContactModal } = useModal();
  
  return (
    <section className="hero-section bg-hero-pattern">
      <div className="absolute inset-0 bg-charcoal-900 bg-opacity-70"></div>
      
      <div className="container-custom relative z-10 text-white flex items-center justify-center h-full">
        <div className="max-w-3xl flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight text-center">
            Your Trusted Partner in Construction Supplies
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-6 text-neutral-200 text-center">
            We deliver quality aggregates — sand, gravel, cement, hollow blocks, and more.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto justify-center">
            <button 
              onClick={openContactModal}
              className="btn-primary text-base sm:text-lg"
            >
              Get a Quote
            </button>
            <a href="tel:+63 936 940 9945" className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-charcoal-900 flex items-center justify-center text-base sm:text-lg">
              <Phone size={18} className="mr-2" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;