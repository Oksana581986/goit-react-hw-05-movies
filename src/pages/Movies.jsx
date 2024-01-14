import React, { useEffect, useState } from "react";
import api from "components/services/api";
import { toast } from "react-toastify";
import { Loader } from "components/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import { MovieList } from "components/MovieList/MovieList";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        {searchResults.map((movie) => (
        <MovieList key={movie.id} movie={movie} />
))}
      </form>
      {isLoading && <Loader />}
    </div>
  );
};

export default Movies;