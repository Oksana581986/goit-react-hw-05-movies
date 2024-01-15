import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import { Loader } from "components/Loader/Loader";
import { Layout } from "components/Layout/Layout";
import css from './App.module.css';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export default function App () {

  return (
   <Layout>
    <Suspense fallback={<Loader className={css.loader} />}>
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/movies" element={<Movies />} />
       <Route path="/movies/:movieId/*" element={<MovieDetails />} />
       <Route path="cast" element={<Cast />} />
       <Route path="reviews" element={<Reviews />} />
       <Route path="*" element={<Navigate to="/" />} />
     </Routes>
    </Suspense>
   </Layout>
  );
};
