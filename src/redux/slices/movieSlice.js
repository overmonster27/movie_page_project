import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const moviesState = {
    movies: [],
    page: null,
    errors: null,
    loading: null,
};

const movieInfoState = {
    currentInfo: null,
    errors: null,
    loading: null,
};

const genresState = {
    genres: null,
    errors: null,
    loading: false
}

const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const searchMovies = createAsyncThunk(
    'moviesSlice/searchMovies',
    async ({page, query}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.searchMovie(page, query);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getMovieInfo = createAsyncThunk(
    'movieInfoSlice/getMovieInfo',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovieById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getGenres = createAsyncThunk(
    'genresSlice/getGenresList',
    async ({rejectWithValue}) => {
        try {
            const {data} = await moviesService.getGenres();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: moviesState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.loading = false
                const {page, results} = action.payload
                state.page = page
                state.movies = results
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getMovies.pending, (state) => {
                state.loading = true
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.loading = false
                const {page, results} = action.payload
                state.page = page
                state.movies = results
            })
            .addCase(searchMovies.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(searchMovies.pending, (state) => {
                state.loading = true
            })

});

const movieInfoSlice = createSlice({
    name: 'movieInfoSlice',
    initialState: movieInfoState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovieInfo.fulfilled, (state, action) => {
                state.loading = false
                state.currentInfo = action.payload
            })
            .addCase(getMovieInfo.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getMovieInfo.pending, (state) => {
                state.loading = true
            })

});

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState: genresState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.loading = false
                state.genres = action.payload
            })
            .addCase(getGenres.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getGenres.pending, (state) => {
                state.loading = true
            })

});

const {reducer: moviesReducer} = moviesSlice;
const {reducer: movieInfoReducer} = movieInfoSlice;
const {reducer: genresReducer} = genresSlice;

const moviesActions = {
    getMovies,
    getMovieInfo,
    searchMovies
};

const genresActions = {
    getGenres
}

export {
    moviesReducer,
    moviesActions,
    movieInfoReducer,
    genresActions,
    genresReducer
};