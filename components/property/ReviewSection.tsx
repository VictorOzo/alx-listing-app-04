// components/ReviewSection.tsx
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Review } from "@/Interfaces/index";

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get<Review[]>(
          `/api/properties/${propertyId}/reviews`,
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  if (reviews.length === 0) {
    return <p>No reviews available for this property.</p>;
  }
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="border p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            {review.user.avatar && (
              <Image
                src={review.user.avatar}
                alt={review.user.name}
                className="w-10 h-10 rounded-full"
              />
            )}
            <div>
              <p className="font-semibold">{review.user.name}</p>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          </div>
          <p className="mt-2">{review.comment}</p>
          <p className="text-yellow-500">Rating: {review.rating}/5</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
