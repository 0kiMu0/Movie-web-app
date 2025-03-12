import React, { useEffect, useState } from "react";
import '../CSS/MoviesAndShows.css';
import { fetchTopRatedTVShows, searchTVShows } from "../Services/Api";

const TVShows = ({searchTerm}) => {

    const [tvShows, setTVShows] = useState([]);
    const [isValidSearch,setIsValidSearch] = useState(false);
 
    useEffect(()=>{
        const getTVShows = async()=>{
            const data = await fetchTopRatedTVShows();
            setTVShows(data);
        }
        getTVShows();
    }, []);

    useEffect(()=>{
        if(searchTerm.length >=3)
        {
            setIsValidSearch(true);
            const searchTVShowsAsync = async ()=>{
                const results= await searchTVShows(searchTerm);
                setTVShows(results);
            }
            searchTVShowsAsync();
        }
        else if (isValidSearch)
        {
            const getTVShows = async()=>{
                const data = await fetchTopRatedTVShows();
                setTVShows(data);
                setIsValidSearch(false);
            }
            getTVShows();
        }
        }, [searchTerm, isValidSearch]);
        
  return (
    <div className="grid-container">
      <h1>Top Rated TV Shows</h1>
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
