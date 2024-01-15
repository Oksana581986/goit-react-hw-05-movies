import React from "react";
import { Link, useLocation } from "react-router-dom";

export const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <div>
            <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                    <h2>{movie.title}</h2>
                    </Link>
                </li>
            ))}
            </ul>
          </div>
    );
};