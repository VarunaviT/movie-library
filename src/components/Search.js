import React, { useState } from 'react';
import axios from 'axios';
//import card from './card';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=fb6b3228`);
    setMovies(response.data.Search);
  };
  const movies1 = [
    {
      title: 'Movie Title 1',
      year: '2024',
      url: 'https://via.placeholder.com/200x300', // Replace with actual URL
    },
    {
      title: 'Movie Title 2',
      year: '2024',
      url: 'https://via.placeholder.com/200x300', // Replace with actual URL
    },
    // Add more movie objects as needed
  ];

  return (
    <div>
     
      {/* <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      
      <button onClick={searchMovies}>Search</button>
      <ul>
        {movies.map((movie,index) => (
         <li key={index}>{movie.Title}</li>
         // <li key={movie.imdbID}>{movie.Title}{movie.year}</li>
        ))}
      </ul> */}
      <div style={styles.container}>
      <div style={styles.navbar}>
        <h1>Search Movie </h1>
      </div>
      <div style={styles.search}>
        <input type="text" placeholder="Search for a movie..." value={query} onChange={(e) => setQuery(e.target.value)}style={styles.searchInput} />
        <button onClick={searchMovies}>Search</button>
      <ul>
        {movies.map((movie,index) => (
         <li key={index}>{movie.Title}</li>
         // <li key={movie.imdbID}>{movie.Title}{movie.year}</li>
        ))}
      </ul>
      </div>
      
      
      </div>
    </div>
  
  );
};
const styles = {
  container: {
    background: '#090e2b',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  },
  navbar: {
    padding: '1rem',
    textAlign: 'center',
    background: '#1f2937',
  },
  search: {
    textAlign: 'center',
    margin: '1rem 0',
  },
  searchInput: {
    padding: '0.5rem',
    width: '80%',
    maxWidth: '600px',
    border: 'none',
    borderRadius: '5px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1rem',
    padding: '1rem',
  },
  movieCard: {
    background: '#1f2937',
    padding: '1rem',
    borderRadius: '10px',
    textAlign: 'center',
  },
  movieImage: {
    maxWidth: '100%',
    borderRadius: '10px',
  },
};

export default Search;
