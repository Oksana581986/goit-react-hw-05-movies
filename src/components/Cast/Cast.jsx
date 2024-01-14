import React, { useState, useEffect } from 'react';
import api from "components/services/api";


const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`/movies/${movieId}/credits/`);
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching cast:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {isLoading ? (
        <p>Loading cast...</p>
      ) : (
        <div>
          <h2>Cast</h2>
          {cast.length > 0 ? (
            <ul>
              {cast.map((actor) => (
                <li key={actor.id}>
                  <p>{actor.name}</p>
                  <p>Character: {actor.character}</p>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : defaultImg
                    }
                    width={250}
                    alt="actor poster"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No cast information available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export { Cast };