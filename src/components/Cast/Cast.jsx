import React, { useState, useEffect } from "react";
import api from "components/services/api";
import css from "components/Cast/Cast.module.css";


const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`/movie/${movieId}/credits`);
        setCast(response.data.results);
      } catch (error) {
        console.error("Error fetching cast:", error);
        setError("Error fetching cast. Please try again.");
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
          <ul>
              {cast.map((actor) => (
                <li key={actor.id}>
                <img src={actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : defaultImg
                    }
                    width={250}
                    alt="actor poster"
                  />
                  <p>{actor.name}</p>
                  <p className={css.character}>Character: {actor.character}</p>
                  </li>
              ))}
            </ul>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      );
    };

export { Cast };