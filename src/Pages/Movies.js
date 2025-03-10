import React from "react";
import '../CSS/MoviesAndShows.css';

const Movies = ({ movies, movieSearchTerm, handleMovieSearch }) => {

  return (
    <div className="grid-container">
      <h1>Top Rated Movies</h1>

      <input
        className="search-bar"
        type="text"
        placeholder="Search movies..."
        value={movieSearchTerm}
        onChange={handleMovieSearch}  
      />

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
