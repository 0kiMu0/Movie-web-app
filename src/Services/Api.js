
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
console.log(API_KEY);
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTopRatedMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return data.results.slice(0, 10); 
};

export const fetchTopRatedTVShows = async () => {
    const response = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return data.results.slice(0, 10); 
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`);
    const data = await response.json();
    return data.results.slice(0,100);
};

export const searchTVShows = async (query) => {
    const response = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}&language=en-US`);
    const data = await response.json();
    return data.results.slice(0, 100);
};