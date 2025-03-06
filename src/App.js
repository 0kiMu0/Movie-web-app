import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar.js';
import Movies from './Pages/Movies.js';
import TVShows from './Pages/TVShows.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-shows" element={<TVShows />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
