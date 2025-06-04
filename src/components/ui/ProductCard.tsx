import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { Product } from '../../types';
import { useModal } from '../../context/ModalContext';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  // Dynamically get the icon from Lucide
  const IconComponent = LucideIcons[product.icon as keyof typeof LucideIcons] || LucideIcons.Package;
  const { openContactModal } = useModal();
  
  return (
    <div className={`card group ${featured ? 'h-full' : ''}`}>
      <div className="flex flex-col h-full items-center">
        {product.image ? (
          <div className={`mb-4 overflow-hidden ${featured ? 'w-48 h-48 rounded-full' : 'w-24 h-24 rounded-full'} mx-auto flex-shrink-0`}>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className={`mb-4 ${featured ? 'p-4 bg-amber-100 rounded-full inline-block aspect-square' : ''}`}>
            <IconComponent size={featured ? 32 : 24} className="text-amber-700" />
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-2 text-center">{product.name}</h3>
        <p className="text-neutral-600 mb-4 flex-grow text-center">{product.description}</p>
        
        {!featured && (
          <div className="space-y-2 mb-4 w-full">
            {product.price && (
              <div className="flex justify-between">
                <span className="text-sm text-neutral-600">Price:</span>
                <span className="text-sm font-medium">{product.price}</span>
              </div>
            )}
            
            {product.minOrder && (
              <div className="flex justify-between">
                <span className="text-sm text-neutral-600">Min. Order:</span>
                <span className="text-sm font-medium">{product.minOrder}</span>
              </div>
            )}
            
            {product.deliveryTime && (
              <div className="flex justify-between">
                <span className="text-sm text-neutral-600">Delivery:</span>
                <span className="text-sm font-medium">{product.deliveryTime}</span>
              </div>
            )}
          </div>
        )}
        
        <button
          onClick={openContactModal}
          className={`text-amber-700 font-medium flex items-center ${featured ? 'mt-auto' : ''} group-hover:text-amber-800`}
        >
          Request a Quote
          <LucideIcons.ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;