import React from "react";
import '../CSS/MoviesAndShows.css';

const TVShows = ({ tvShows, tvShowSearchTerm, handleTVShowSearch }) => {

  return (
    <div className="grid-container">
      <h1>Top Rated TV Shows</h1>

      <input
        className="search-bar"
        type="text"
        placeholder="Search TV shows..."
        value={tvShowSearchTerm}
        onChange={handleTVShowSearch}  
      />

      <div className="grid">
        {tvShows.map(show => (
          <div key={show.id} className="card">
            <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
            <h3>{show.name}</h3>
            <p>Rating: {show.vote_average} / 10</p>
            <p>First Air Date: {show.first_air_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShows;
