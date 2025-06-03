import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://e8ydux5zsn.ufs.sh/f/M32Ap1J2mMfX3rvBpugw8fF0Tcu4JDYNRZk2LP6Slpi1eGsQ" 
                alt="Martina Querubin Logo" 
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold text-white">Butchoy Construction & Supply</h3>
            </div>
            <p className="text-neutral-300 mb-4">
              Your trusted partner in construction supplies. Providing quality materials for builders and contractors since 2010.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/noone.gomez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-amber-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products#s1-washed-sand" className="text-neutral-300 hover:text-amber-500 transition-colors">
                  S-1 Washed Sand
                </Link>
              </li>
              <li>
                <Link to="/products#three-fourth" className="text-neutral-300 hover:text-amber-500 transition-colors">
                  3/4
                </Link>
              </li>
              <li>
                <Link to="/products#cement" className="text-neutral-300 hover:text-amber-500 transition-colors">
                  Cement
                </Link>
              </li>
              <li>
                <Link to="/products#hollow-blocks" className="text-neutral-300 hover:text-amber-500 transition-colors">
                  Hollow Blocks
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">+63 912 345 6789</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">info@martinaquerubin.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">Lucena City, Quezon Province</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">Mon-Sat: 7AM-5PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-neutral-700 my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Butchoy Construction & Supply. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <Link to="/contact" className="btn-primary text-sm">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;