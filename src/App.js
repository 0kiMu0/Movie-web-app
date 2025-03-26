import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "./store/searchSlice";
import './App.css';
import NavBar from './Components/NavBar.js';
import Movies from './Pages/Movies.js';
import TVShows from "./Pages/TVShows.js";

function App() {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TVShows />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;





    /*const [movies, setMovies] = useState([]);
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
    };*/