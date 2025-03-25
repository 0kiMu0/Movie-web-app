import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar.js';
import Movies from './Pages/Movies.js';
import TVShows from "./Pages/TVShows.js";
import { SearchProvider } from "./context/SearchContext"; 
import { useSearch } from "./context/useSearch";

function SearchBar() {
    const { searchTerm, handleSearch } = useSearch();
    
    return (
        <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
        />
    );
}

function App() {
    return (
        <SearchProvider>
            <div className="App">
                <Router>
                    <NavBar />
                    <SearchBar /> 
                    <Routes>
                        <Route path="/" element={<Navigate to="/movies" />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/tv-shows" element={<TVShows />} />
                    </Routes>
                </Router>
            </div>
        </SearchProvider>
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