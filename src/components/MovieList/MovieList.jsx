import React from "react";
import { Link, useLocation } from "react-router-dom";


export const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                    <h2>{movie.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};