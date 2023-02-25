const baseURL = 'https://api.themoviedb.org/3';

// const apiKey = process.env.REACT_APP_MDB_API_KEY;

const urls = {
    movies: `/discover/movie?&page=`,
    movie: (id) => `/movie/${id}?&language=en-US`,
    search: (page, query) => `/search/movie?&language=en-US&query=${query}&page=${page}`,
    getVideoById:(id)=> `/movie/${id}/videos`,
    searchByGenres: (page, genreIds)=> `/discover/movie?&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreIds.join(',')}`,
    genres: '/genre/movie/list'
}

export {baseURL, urls};
