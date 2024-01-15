import React, { useEffect, useState } from "react";
import api from "components/services/api";
import { toast } from "react-toastify";
import { Loader } from "components/Loader/Loader";
import { useSearchParams, Link, useLocation } from "react-router-dom";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const query = searchParams.get('query');


  useEffect(() => {
    if (!query) return; 
    const searchMovies = async () => {  
      try {
        setIsLoading(true);
        const response = await api.get('/search/movie', {
          params: { query },
        });
        setSearchResults(response.data.results);
      } catch (error) {
        toast(`Error searching movies: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    searchMovies(); 
  }, [query]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: inputValue });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchInput"
          placeholder="Search movie"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
        {isLoading && <Loader />}
        {searchResults.map((movie) => (
    <li key={movie.id}>
    <Link state={{ from: location }} to={`/movies/${movie.id}`}>
      {movie.title}
    </Link>
    </li>
 ))}
      </form>

    </div>
  );
};

export default Movies;