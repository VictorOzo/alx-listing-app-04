export interface Property {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  location: string;
  bedrooms?: number; // Optional field
  bathrooms?: number; // Optional field
  area?: number; // Optional field (e.g., square footage)
  features?: string[]; // Optional field (e.g., ["Pool", "Garden"])
}
