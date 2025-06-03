import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="card h-full flex flex-col items-center">
      <div className="testimonial-img-container">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="aspect-square"
        />
      </div>
      
      <div className="flex items-center mb-4 justify-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-neutral-300'}
          />
        ))}
      </div>
      
      <p className="text-neutral-600 mb-6 flex-grow italic text-center">"{testimonial.content}"</p>
      
      <div className="mt-auto text-center w-full">
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-neutral-500">{testimonial.role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;