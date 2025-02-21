import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";

const ListingSection: React.FC = () => {
  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROPERTYLISTINGSAMPLE.map((property, index) => (
        <div key={index} className="border rounded-md shadow-sm p-4">
          <Image
            src={property.image}
            alt={property.name}
            className="w-full h-48 object-cover rounded-md"
            width={500}
            height={300}
          />
          <h2 className="mt-2 text-lg font-bold">{property.name}</h2>
          <p className="text-gray-600">
            {property.address.city}, {property.address.state}
          </p>
          <p className="text-gray-800 font-bold">${property.price}</p>
        </div>
      ))}
    </section>
  );
};

export default ListingSection;
