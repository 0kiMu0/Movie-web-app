import React, { useEffect, useState, useContext } from "react";
import '../CSS/MoviesAndShows.css';
import { fetchTopRatedMovies, searchMovies } from "../Services/Api";
import { SearchContext } from "../context/SearchContext"; // Import konteksta

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isValidSearch, setIsValidSearch] = useState(false);
    const { searchTerm } = useContext(SearchContext); // Dobijamo searchTerm iz konteksta

    useEffect(() => {
        const getMovies = async () => {
            const data = await fetchTopRatedMovies();
            setMovies(data);
        };
        getMovies();
    }, []);

    useEffect(() => {
        if (searchTerm.length >= 3) {
            setIsValidSearch(true);
            const searchMoviesAsync = async () => {
                const results = await searchMovies(searchTerm);
                setMovies(results);
            };
            searchMoviesAsync();
        } else if (isValidSearch) {
            const getMovies = async () => {
                const data = await fetchTopRatedMovies();
                setMovies(data);
                setIsValidSearch(false);
            };
            getMovies();
        }
    }, [searchTerm, isValidSearch]);

    return (
        <div className="grid-container">
            <h1>Top Rated Movies</h1>
            <div className="grid">
                {movies.map(movie => (
                    <div key={movie.id} className="card">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>Rating: {movie.vote_average} / 10</p>
                        <p>Release Date: {movie.release_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;
