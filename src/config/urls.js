const baseURL = 'https://api.themoviedb.org/3';

const apiKey = process.env.REACT_APP_MDB_API_KEY;

const urls = {
    movies: `/discover/movie?apiKey=${apiKey}&page=`,
    movie: (id) => `/movie/${id}?apiKey=${apiKey}&language=en-US`,
    search: (page, query) => `/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`,
    getVideoById:(id)=> `/movie/${id}/videos`,
    searchByGenres: (page, genreIds)=> `/discover/movie?apiKey=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreIds.join(',')}`,
    genres: '/genre/movie/list'
}

export {baseURL, urls};
