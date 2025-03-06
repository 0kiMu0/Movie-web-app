import React, { useEffect, useState } from "react";
import { fetchTopRatedMovies, searchMovies } from "../Services/Api.js";
import '../CSS/MoviesAndShows.css';

const Movies = () =>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const data = await fetchTopRatedMovies();
            console.log(data);
            setMovies(data);
        };
        getMovies();
    }, []);


    useEffect(() => {
        if(searchTerm.length > 3){
            const fetchSearchResults = async () => {
                const results = await searchMovies(searchTerm);
                setSearchResult(results);
            };
            fetchSearchResults();
        }
            else{
                setSearchResult([]);
            }
    }, [searchTerm]);

    return (

        <div className="grid-container">
            <h1>Top Rated Movies</h1>

            <input className="search-bar"
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="grid">
                {(searchTerm.length > 3 ? searchResult : movies).map(movie => (
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