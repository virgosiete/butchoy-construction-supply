import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openContactModal } = useModal();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const handleQuoteButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    openContactModal();
  };
  
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Products', path: '/products' },
    { title: 'Contact', path: '/contact' },
  ];
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <img 
            src="/construction-logo.svg" 
            alt="Butchoy Construction & Supply Logo" 
            className="h-10 w-auto"
          />
          <span className={`font-bold text-lg md:text-xl ${
            isScrolled ? 'text-neutral-900' : 'text-white'
          }`}>
            Butchoy Construction & Supply
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors duration-300 ${
                location.pathname === link.path 
                  ? 'text-amber-700' 
                  : (isScrolled ? 'text-neutral-800 hover:text-amber-700' : 'text-white hover:text-amber-200')
              }`}
            >
              {link.title}
            </Link>
          ))}
          <button 
            onClick={handleQuoteButtonClick}
            className="btn-primary"
          >
            Get a Quote
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} className={
            isScrolled ? 'text-neutral-800' : 'text-white'
          } />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 transition-all duration-300">
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`font-medium py-2 ${
                  location.pathname === link.path 
                    ? 'text-amber-700' 
                    : 'text-neutral-800 hover:text-amber-700'
                }`}
                onClick={closeMenu}
              >
                {link.title}
              </Link>
            ))}
            <button 
              onClick={handleQuoteButtonClick}
              className="btn-primary w-full"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;