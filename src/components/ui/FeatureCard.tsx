import React from 'react';
import { Truck, Coins, Award, CreditCard } from 'lucide-react';

interface FeatureCardProps {
  icon: 'truck' | 'coins' | 'award' | 'credit-card';
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'truck':
        return <Truck size={36} className="text-amber-700" />;
      case 'coins':
        return <Coins size={36} className="text-amber-700" />;
      case 'award':
        return <Award size={36} className="text-amber-700" />;
      case 'credit-card':
        return <CreditCard size={36} className="text-amber-700" />;
      default:
        return null;
    }
  };

  return (
    <div className="card hover:translate-y-[-5px]">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-amber-100 rounded-full">
          {renderIcon()}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;