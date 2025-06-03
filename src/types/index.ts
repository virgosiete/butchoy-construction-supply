export interface Product {
  id: string;
  name: string;
  description: string;
  icon: string;
  price?: string;
  minOrder?: string;
  deliveryTime?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}