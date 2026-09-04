const MOVIE_APP_KEY = "d3ff62c66ff46af924db6f05c24f6b30";
const FRESH_URL = "https://themoviedb.org";

export const getPopularMovies = async () => {
    const response = await fetch(`${FRESH_URL}/movie/popular?api_key=${MOVIE_APP_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${FRESH_URL}/search/movie?api_key=${MOVIE_APP_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};
