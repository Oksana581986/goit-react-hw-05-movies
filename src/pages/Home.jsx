import React, { useEffect, useState } from 'react';
import api from "components/services/api";
import { Loader } from "components/Loader/Loader";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
const [trendingMovies, setTrendingMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const location = useLocation();

useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const response = await api.get('/trending/all/day');
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();
  }, []);


return (
  <main>
    <div>
      <h2>Trending today</h2>
      <ul>
        {isLoading && <Loader />}
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </main>
);
};


export default Home;
