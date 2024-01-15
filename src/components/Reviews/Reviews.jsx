import React, { useState, useEffect } from "react";
import api from "components/services/api";
import css from "components/Reviews/Reviews.module.css";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchReviews = async () => {
    try {
      setIsLoading(true);
       const response = await api.get(`/movie/${movieId}/reviews`);
       setReviews(response.data.results);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Error fetching reviews. Please try again.");
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
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p className={css.authorTitle}>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export { Reviews } ;
