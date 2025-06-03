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
            <p className="text-xl mb-8">
              We deliver across Southern Luzon. Contact us for delivery estimates to your location.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-800 bg-opacity-50 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3">CALABARZON (Region IV-A)</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Cavite</div>
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Laguna</div>
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Batangas</div>
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Rizal</div>
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2 col-span-2">Quezon</div>
                </div>
              </div>
              
              <div className="bg-amber-800 bg-opacity-50 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3">MIMAROPA (Region IV-B)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Occidental Mindoro</div>
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Oriental Mindoro</div>
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Marinduque</div>
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Romblon</div>
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2 col-span-1 sm:col-span-2">Palawan</div>
                </div>
              </div>
              
              <div className="bg-amber-800 bg-opacity-50 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3">Bicol Region (Region V)</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Albay</div>
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Camarines Norte</div>
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Camarines Sur</div>
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Catanduanes</div>
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Masbate</div>
                  <div className="bg-amber-700 bg-opacity-40 rounded p-2">Sorsogon</div>
                </div>
              </div>
            </div>
            
            <p className="text-lg mt-6">
              Additional areas may be served upon request. Contact us for delivery options to your specific location.
            </p>
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