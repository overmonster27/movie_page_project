const baseURL = 'https://api.themoviedb.org/3';

const apiKey = process.env.REACT_APP_MDB_API_KEY;

const urls = {
    movies: `/discover/movie?apiKey=${apiKey}&page=`,
    movie: (id) => `/movie/${id}?apiKey=${apiKey}&language=en-US`,
    search: (page, query) => `/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`,
    genres: '/genre/movie/list'
}

export {baseURL, urls};