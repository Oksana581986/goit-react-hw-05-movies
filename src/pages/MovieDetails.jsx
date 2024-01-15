import React, { useState, useEffect, useRef, Suspense } from "react";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import { useParams, Routes, Route, useLocation, NavLink, Link, Outlet } from "react-router-dom";
import api from "components/services/api";
import  css from "components/App.module.css";
import { Loader } from "components/Loader/Loader";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/movie");
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        const response = await api.get(`/movie/${movieId}`);
        setMovieDetails(response.data);
      } catch (error) {
        setError('Error fetching images. Please try again.');
      }
    };

    fetchMovieDetails();
  }, [movieId]);

 
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await api.get(`/movie/${movieId}/images`);
        const firstImage = response.data.backdrops[0]; 
        setImage(firstImage);
      } catch (error) {
        setError('Error fetching images. Please try again.');
      }
    };

    fetchImages();
  }, [movieId]);


  return (
  <div>
  <Link to={backLinkRef.current}>Go back</Link>
   <h2>{movieDetails.title}</h2>
   <h3>Overview</h3>
   <p>{movieDetails.overview} </p>
    {image && (
        <img
          key={image.file_path}
          src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
          alt="" 
          width={400}
          height={300}
        />
      )} 
  <p>Additional information</p>      
  <NavLink className={({ isActive }) =>`${css.navLink} ${isActive ? css.active : ''}`} to={'сast'} >Cast</NavLink>
  <NavLink className={({ isActive }) =>`${css.navLink} ${isActive ? css.active : ''}`} to={'reviews'}>Reviews</NavLink>
  
   <div>
    <Suspense fallback={<Loader className={css.loader} />}>
    <Routes>
    <Route path="cast" element={<Cast movieId={movieId} />}/>
    <Route path="reviews" element={<Reviews movieId={movieId} />}/>
    </Routes>
    <Outlet/>
    </Suspense>
    
    {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
</div>
);
};

export default MovieDetails;