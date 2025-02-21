import React from "react";
import Image from "next/image";
import { Property } from "@/Interfaces/index"; 

interface PropertyDetailProps {
  property: Property; 
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div>
      <h1>{property.title}</h1>
      <Image src={property.image} alt={property.title} />
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <p>Location: {property.location}</p>
      {property.bedrooms && <p>Bedrooms: {property.bedrooms}</p>}
      {property.bathrooms && <p>Bathrooms: {property.bathrooms}</p>}
      {property.area && <p>Area: {property.area} sq. ft.</p>}
      {property.features && <p>Features: {property.features.join(", ")}</p>}
    </div>
  );
};

export default PropertyDetail;
