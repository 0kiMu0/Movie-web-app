import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar.js';
import Movies from './Pages/Movies.js';
import TVShows from "./Pages/TVShows.js";
import { useEffect, useState } from "react";
import { fetchTopRatedMovies, searchMovies } from "./Services/Api.js";
import { fetchTopRatedTVShows, searchTVShows } from "./Services/Api.js";

function App() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [movieSearchTerm, setMovieSearchTerm] = useState("");
  const [tvShowSearchTerm, setTvShowSearchTerm] = useState("");
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  const [tvShowSearchResults, setTvShowSearchResults] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTopRatedMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  useEffect(() => {
    const getTVShows = async () => {
      const data = await fetchTopRatedTVShows();
      setTvShows(data);
    };
    getTVShows();
  }, []);

  useEffect(() => {
    if (movieSearchTerm.length > 3) {
      const fetchMovieSearchResults = async () => {
        const results = await searchMovies(movieSearchTerm);
        setMovieSearchResults(results);
      };
      fetchMovieSearchResults();
    } else {
      setMovieSearchResults([]);
    }
  }, [movieSearchTerm]);

  useEffect(() => {
    if (tvShowSearchTerm.length > 3) {
      const fetchTVShowSearchResults = async () => {
        const results = await searchTVShows(tvShowSearchTerm);
        setTvShowSearchResults(results);
      };
      fetchTVShowSearchResults();
    } else {
      setTvShowSearchResults([]);
    }
  }, [tvShowSearchTerm]);

  const displayMovies = movieSearchResults.length ? movieSearchResults : movies;
  const displayTVShows = tvShowSearchResults.length ? tvShowSearchResults : tvShows;

  const handleMovieSearch = (event) => {
    setMovieSearchTerm(event.target.value);
  };

  const handleTVShowSearch = (event) => {
    setTvShowSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/movies" element={
              <Movies 
                movies={displayMovies} 
                movieSearchTerm={movieSearchTerm}
                handleMovieSearch={handleMovieSearch} 
              />
            } />
            <Route path="/tv-shows" element={
              <TVShows 
                tvShows={displayTVShows} 
                tvShowSearchTerm={tvShowSearchTerm}
                handleTVShowSearch={handleTVShowSearch}
              />
            } />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
