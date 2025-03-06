import React, {useEffect, useState} from 'react';
import { fetchTopRatedTVShows, searchTVShows } from '../Services/Api.js';
import '../CSS/MoviesAndShows.css';

const TVShows = () => {
    const [tvShows, setTvShows] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const getTvShows = async () => {
            const data = await fetchTopRatedTVShows();
            setTvShows(data);
        };
        getTvShows();
    }, []);

    useEffect (() =>{
        if(searchTerm.trim().length >= 1)
        {
            const fetchSearchResults = async () => {
                const results= await searchTVShows(searchTerm);
                setSearchResult(results);
            };
            fetchSearchResults();
        }
        else
        {
            setSearchResult([]);
        }
    }, [searchTerm]);

    return(
        <div className="grid-container">
            <h1>Top Rated TV Shows</h1>

            <input className='search-bar'
                type="text"
                placeholder='Search TV shows...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className='grid'>
                {(searchTerm.trim() !== "" ? searchResult : tvShows).map(show => (
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