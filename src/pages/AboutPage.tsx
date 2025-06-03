import React from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon, UsersIcon, HandshakeIcon, ShieldCheckIcon } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-about-pattern bg-cover bg-center aspect-mobile md:aspect-desktop">
        <div className="absolute inset-0 bg-charcoal-900 bg-opacity-70"></div>
        <div className="container-custom relative z-10 text-white flex items-center justify-center h-full">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
            <p className="text-xl text-neutral-200">
              Learn about our journey in becoming one of the trusted construction material suppliers in Lucena City.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="section-title">Our Story</h2>
              <p className="mb-4 text-neutral-600">
                Butchoy Construction & Supply was established in 2010 with a simple mission: to provide quality construction materials at affordable prices with reliable delivery service.
              </p>
              <p className="mb-4 text-neutral-600">
                What started as a small family business with a single truck delivering sand and gravel has grown into a trusted supplier of various construction materials serving contractors, builders, and homeowners throughout Lucena City and nearby areas in Quezon Province.
              </p>
              <p className="mb-4 text-neutral-600">
                Our founder, Butchoy Gomez, built this business on the principles of honesty, reliability, and customer satisfaction. Today, we continue to uphold these values as we serve our growing number of clients.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="img-container aspect-square md:aspect-desktop rounded-lg overflow-hidden shadow-md max-w-md mx-auto w-full">
                <img 
                  src="https://e8ydux5zsn.ufs.sh/f/M32Ap1J2mMfXDup7EG6w2cZtiuMQxgLAeslWbDaXBj8NVKmv" 
                  alt="Construction materials yard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="section-subtitle mx-auto">
              We are guided by our commitment to quality, reliability, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card h-full flex flex-col items-center text-center p-6">
              <div className="mb-4 p-3 bg-amber-100 rounded-full aspect-square flex items-center justify-center">
                <TruckIcon size={36} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-neutral-600">
                We understand that construction projects run on schedules. Our commitment to on-time delivery helps keep your project on track.
              </p>
            </div>
            
            <div className="card h-full flex flex-col items-center text-center p-6">
              <div className="mb-4 p-3 bg-amber-100 rounded-full aspect-square flex items-center justify-center">
                <ShieldCheckIcon size={36} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-neutral-600">
                We source only the best materials to ensure your construction projects have a solid foundation and lasting durability.
              </p>
            </div>
            
            <div className="card h-full flex flex-col items-center text-center p-6">
              <div className="mb-4 p-3 bg-amber-100 rounded-full aspect-square flex items-center justify-center">
                <HandshakeIcon size={36} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-neutral-600">
                Honest pricing, transparent business practices, and doing what we say we'll do are the cornerstones of our operation.
              </p>
            </div>
            
            <div className="card h-full flex flex-col items-center text-center p-6">
              <div className="mb-4 p-3 bg-amber-100 rounded-full aspect-square flex items-center justify-center">
                <UsersIcon size={36} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-neutral-600">
                As a local business, we're committed to supporting the growth and development of our community in Lucena City.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle mx-auto">
              Meet the people behind Butchoy Construction & Supply.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card flex flex-col items-center text-center">
              <div className="team-photo-container aspect-square">
                <img
                  src="https://e8ydux5zsn.ufs.sh/f/M32Ap1J2mMfXc4wejtGFvpZuJCMtlH5T31AX04RGon2gcUjx"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Butchoy Gomez</h3>
              <p className="text-amber-700 mb-2">Founder & CEO</p>
              <p className="text-neutral-600">
                Butchoy has over 15 years of experience in the construction industry and founded the company with a vision to provide quality materials at fair prices.
              </p>
            </div>
            
            <div className="card flex flex-col items-center text-center">
              <div className="team-photo-container aspect-square">
                <img
                  src="https://e8ydux5zsn.ufs.sh/f/M32Ap1J2mMfXJnL8p7uRDg1WV2uy73aBmQXTMcoPN5jtli69"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Martina Querubin</h3>
              <p className="text-amber-700 mb-2">Operations Manager</p>
              <p className="text-neutral-600">
                Martina ensures that all deliveries are made on time and that our inventory is always well-stocked to meet customer demands.
              </p>
            </div>
            
            <div className="card flex flex-col items-center text-center">
              <div className="team-photo-container aspect-square">
                <img
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Elena Reyes</h3>
              <p className="text-amber-700 mb-2">Customer Relations</p>
              <p className="text-neutral-600">
                Elena is dedicated to ensuring all our clients receive excellent service and their needs are met promptly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-amber-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Work with Us?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss your construction material needs and get a quote.
            </p>
            <Link to="/contact" className="btn bg-white text-amber-700 hover:bg-neutral-100">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;