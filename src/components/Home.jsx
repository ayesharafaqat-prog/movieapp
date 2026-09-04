import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Asli chalne wale internet images ke sath movies data
    const dummyMovies = [
        { id: 1, title: "John Wick: Chapter 4", release_date: "2023", poster_path: "/vZj7m9h4ndrdzsgpX1w6nuDyt0x.jpg" },
        { id: 2, title: "Avatar: The Way of Water", release_date: "2022", poster_path: "/t6HI73ntRbnsjXYGO7Uao2DzAkW.jpg" },
        { id: 3, title: "The Dark Knight", release_date: "2008", poster_path: "/qJ2tWw751OebJVj7t144VvCY4lq.jpg" },
        { id: 4, title: "Interstellar", release_date: "2014", poster_path: "/gEU2QG0Lh8yG2ug8vjGj7jNgv6r.jpg" }
    ];

    useEffect(() => {
        setMovies(dummyMovies);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            setMovies(dummyMovies);
            return;
        }
        const filtered = dummyMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setMovies(filtered);
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}
