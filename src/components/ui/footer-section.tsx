"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Phone, Mail, MapPin, Clock, Send, Sun, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-charcoal-800 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/construction-logo.svg" 
                alt="Butchoy Construction & Supply Logo" 
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold text-white">Butchoy Construction & Supply</h3>
            </div>
            <p className="mb-6 text-neutral-300">
              Your trusted partner in construction supplies. Providing quality materials for builders and contractors since 2010.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email for updates"
                className="pr-12 backdrop-blur-sm bg-charcoal-700 text-white border-charcoal-600"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-amber-700 text-white transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-amber-700/10 blur-2xl" />
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block transition-colors text-neutral-300 hover:text-amber-500">
                Home
              </Link>
              <Link to="/about" className="block transition-colors text-neutral-300 hover:text-amber-500">
                About Us
              </Link>
              <Link to="/products" className="block transition-colors text-neutral-300 hover:text-amber-500">
                Products
              </Link>
              <Link to="/contact" className="block transition-colors text-neutral-300 hover:text-amber-500">
                Contact
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Products</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/products#s1-washed-sand" className="block transition-colors text-neutral-300 hover:text-amber-500">
                S-1 Washed Sand
              </Link>
              <Link to="/products#three-fourth" className="block transition-colors text-neutral-300 hover:text-amber-500">
                3/4
              </Link>
              <Link to="/products#cement" className="block transition-colors text-neutral-300 hover:text-amber-500">
                Cement
              </Link>
              <Link to="/products#hollow-blocks" className="block transition-colors text-neutral-300 hover:text-amber-500">
                Hollow Blocks
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <address className="space-y-3 text-sm not-italic">
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">+63 912 345 6789</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">info@martinaquerubin.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">Lucena City, Quezon Province</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">Mon-Sat: 7AM-5PM</span>
              </div>
            </address>
            
            <h3 className="mt-6 mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://www.facebook.com/noone.gomez" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-amber-500 transition-colors"
                    >
                      <Facebook size={20} />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        
        <hr className="border-neutral-700 my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Butchoy Construction & Supply. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm mt-4 sm:mt-0">
            <Link to="/privacy-policy" className="text-neutral-300 hover:text-amber-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-neutral-300 hover:text-amber-500 transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="btn-primary text-sm">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }