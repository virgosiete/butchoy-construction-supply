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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Service Areas</h2>
            <p className="text-xl mb-8">
              We serve Lucena City and surrounding areas in Quezon Province. Let us know your location for a fast delivery estimate.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
              <div className="bg-amber-800 bg-opacity-50 rounded-lg py-3 px-4">Lucena City</div>
              <div className="bg-amber-800 bg-opacity-50 rounded-lg py-3 px-4">Tayabas</div>
              <div className="bg-amber-800 bg-opacity-50 rounded-lg py-3 px-4">Pagbilao</div>
              <div className="bg-amber-800 bg-opacity-50 rounded-lg py-3 px-4">Sariaya</div>
              <div className="bg-amber-800 bg-opacity-50 rounded-lg py-3 px-4">Candelaria</div>
              <div className="bg-amber-800 bg-opacity-50 rounded-lg py-3 px-4">Atimonan</div>
              <div className="bg-amber-800 bg-opacity-50 rounded-lg py-3 px-4">Mauban</div>
              <div className="bg-amber-800 bg-opacity-50 rounded-lg py-3 px-4">San Antonio</div>
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
          
          <div className="responsive-grid mt-12">
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
              <Link to="/contact" className="btn-primary">
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