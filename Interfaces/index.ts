export interface Property {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  location: string;
  bedrooms?: number; 
  bathrooms?: number; 
  area?: number; 
  features?: string[]; 
}

export interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
}

export interface Review {
  id: string;
  comment: string;
  rating: number;
  user: {
    name: string;
    avatar?: string; 
  };
  date: string;
}