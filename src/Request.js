// Typically we would store in {process.env.API_KEY}

const API_KEY = "0a4ad3047462a6365d156537a578ed70";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  
  fetchMovie: `/api/v1/movies/`,
  fetchCrimeMovie: `/api/v1/genres/1/movies?`,
  fetchDramaMovie: `/api/v1/genres/2/movies?`,
  fetchActionMovies: `/api/v1/genres/3/movies?`,
  fetchBiographyMovie: `/api/v1/genres/4/movies?`,
  fetchHistoryMovie: `/api/v1/genres/5/movies?`,
  fetchComedyMovie: `/api/v1/genres/9/movies?`,
  fetchAnimationMovie: `/api/v1/genres/15/movies?`,
  fetchSportMovie: `/api/v1/genres/21/movies?`,
  fetchCrimeMovie: `/api/v1/genres/1/movies?`,
  fetchSearch: `/api/v1/movies/`
};

export default request;
