import React, { useState, useEffect } from "react";
import api from "components/services/api";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  const fetchReviews = async () => {
    try {
      setIsLoading(true);
       const response = await api.get(`/movie/${movieId}/reviews/`);
      setReviews(response.data.reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchReviews();
}, [movieId]);

return (
  <div>
    {isLoading ? (
      <p>Loading reviews...</p>
    ) : (
      <div>
        <h2>Reviews</h2>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    )}
  </div>
);
};


export { Reviews } ;
