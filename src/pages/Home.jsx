import React, { useEffect, useState } from 'react';
import api from "components/services/api";
import { Loader } from "components/Loader/Loader";

const Home = () => {
const [trendingMovies, setTrendingMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const response = await api.get('/trending/get-trending');
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
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};


export default Home;
