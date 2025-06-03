import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredProducts = filter 
    ? products.filter(product => product.id === filter)
    : products;
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-neutral-800 aspect-mobile md:aspect-desktop">
        <div className="absolute inset-0 bg-charcoal-900 bg-opacity-80"></div>
        <div className="container-custom relative z-10 text-white flex items-center h-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Products</h1>
            <p className="text-xl text-neutral-200">
              Quality construction materials for all your building needs. From sand and gravel to cement and hollow blocks.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row mb-12 gap-6">
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setFilter(null)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        filter === null 
                          ? 'bg-amber-100 text-amber-700 font-medium' 
                          : 'hover:bg-neutral-100'
                      }`}
                    >
                      All Products
                    </button>
                  </li>
                  {products.map(product => (
                    <li key={product.id}>
                      <button 
                        onClick={() => setFilter(product.id)}
                        className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                          filter === product.id 
                            ? 'bg-amber-100 text-amber-700 font-medium' 
                            : 'hover:bg-neutral-100'
                        }`}
                      >
                        {product.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  {filter ? `${products.find(p => p.id === filter)?.name}` : 'All Products'}
                </h2>
                <span className="text-neutral-500">{filteredProducts.length} items</span>
              </div>
              
              <div className="responsive-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Custom Order Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need Something Special?</h3>
              <p className="text-neutral-600 mb-6">
                We can source custom materials for your specific project needs. Contact us with your requirements and we'll provide a quote.
              </p>
              <Link to="/contact" className="btn-primary">
                Request Custom Order
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Delivery Information */}
      <section className="section bg-amber-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Delivery Information</h2>
              <p className="text-xl mb-6">
                We deliver throughout Lucena City and surrounding areas in Quezon Province.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Same-day delivery available for orders placed before 10 AM</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free delivery for orders above ₱10,000 within Lucena City</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Delivery fees vary based on location and order size</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We can accommodate rush deliveries for urgent projects</span>
                </li>
              </ul>
            </div>
            <div className="img-container aspect-mobile md:aspect-desktop rounded-lg overflow-hidden">
              <img 
                src="https://e8ydux5zsn.ufs.sh/f/M32Ap1J2mMfXudLtQFpEdsjQ95fFPgphuvW04ZnMwOSKUk8N" 
                alt="Delivery truck" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;