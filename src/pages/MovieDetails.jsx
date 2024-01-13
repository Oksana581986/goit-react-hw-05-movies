import React, { useState, useEffect, useRef, Suspense } from "react";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import { useParams,  NavLink, Routes, Route, useLocation, Link } from "react-router-dom";
import api from "components/services/api";
import  css from "components/App.module.css";
import { Loader } from "components/Loader/Loader";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/movie");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        const response = await api.get(`/movies/get-movie-details/${movieId}`);
        setMovieDetails(response.data);
      } catch (error) {
        setError('Error fetching images. Please try again.');
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
   <div>
   MovieDetails for MovieId: {movieId} 
  <h2>{movieDetails.title}</h2>
  <Link to={backLinkRef.current}>Go back</Link>
  <p>Body: {movieDetails.body} </p>
  <img src={`https://api.themoviedb.org/3/movie/${movieId}/images`} alt="" />
  <NavLink className={({ isActive }) =>`${css.navLink} ${isActive ? css.active : ''}`} to="cast">Cast</NavLink>
  <NavLink className={({ isActive }) =>`${css.navLink} ${isActive ? css.active : ''}`} to="reviews">Reviews</NavLink>
  <div>
    <Suspense fallback={<Loader className={css.loader} />}>
    <Routes>
    <Route path="Cast" element={<Cast />}/>
    <Route path="Reviews" element={<Reviews />}/>
    </Routes>
    </Suspense>
    
    {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
</div>

    );
};

export default MovieDetails;