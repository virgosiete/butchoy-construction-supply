import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/ui/animated-hero';
import FeatureCard from '../components/ui/FeatureCard';
import ProductCard from '../components/ui/ProductCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';

const HomePage: React.FC = () => {
  // Get the first 3 products for featured section
  const featuredProducts = products.slice(0, 3);
  
  return (
    <>
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle mx-auto">
              We pride ourselves on reliable service, quality materials, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard
              icon="truck"
              title="Fast Delivery"
              description="Same-day or next-day delivery for most orders in Lucena and nearby areas."
            />
            <FeatureCard
              icon="coins"
              title="Affordable Pricing"
              description="Competitive prices for both small projects and bulk orders with transparent quotes."
            />
            <FeatureCard
              icon="award"
              title="Quality Materials"
              description="All our construction supplies meet industry standards for durability and performance."
            />
            <FeatureCard
              icon="credit-card"
              title="Flexible Payment"
              description="Multiple payment options including cash, bank transfer, and credit terms for regular customers."
            />
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle mx-auto">
              We offer a wide range of quality construction materials for all your building needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} featured={true} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Service Area Section */}
      <section className="section bg-amber-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Service Areas</h2>
            <p className="text-xl mb-6">
              We deliver across Southern Luzon. Contact us for delivery estimates to your location.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-800 bg-opacity-50 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3 text-center">CALABARZON (Region IV-A)</h3>
                <div className="mt-2">
                  <ul className="list-disc pl-8 text-left space-y-1">
                    <li>Cavite</li>
                    <li>Laguna</li>
                    <li>Batangas</li>
                    <li>Rizal</li>
                    <li>Quezon</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-amber-800 bg-opacity-50 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3 text-center">MIMAROPA (Region IV-B)</h3>
                <div className="mt-2">
                  <ul className="list-disc pl-8 text-left space-y-1">
                    <li>Occidental Mindoro</li>
                    <li>Oriental Mindoro</li>
                    <li>Marinduque</li>
                    <li>Romblon</li>
                    <li>Palawan</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-amber-800 bg-opacity-50 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3 text-center">Bicol Region (Region V)</h3>
                <div className="mt-2">
                  <ul className="list-disc pl-8 text-left space-y-1">
                    <li>Albay</li>
                    <li>Camarines Norte</li>
                    <li>Camarines Sur</li>
                    <li>Catanduanes</li>
                    <li>Masbate</li>
                    <li>Sorsogon</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-amber-100 text-sm italic">
              This is an informational display of our service areas. For delivery inquiries, please contact us.
            </div>
            
            <p className="text-lg mt-4">
              Additional areas may be served upon request. Contact us for delivery options to your specific location.
            </p>
            
            <div className="mt-8">
              <Link to="/contact" className="btn bg-white text-amber-700 hover:bg-neutral-100">
                Inquire About Delivery
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              Don't just take our word for it - hear from contractors and builders who have worked with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 max-w-5xl mx-auto">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-charcoal-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build?</h2>
            <p className="text-xl mb-8">
              Get a quote for your construction materials or contact us with any questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact#contact-form" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/products" className="btn bg-white text-charcoal-800 hover:bg-neutral-200">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;