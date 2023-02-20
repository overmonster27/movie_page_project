import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/movieService";


const moviesState = {
    movies: [],
    page: null,
    errors: null,
    loading: null,
}

const movieInfoState = {
    currentInfo: {},
    errors: null,
    loading: null,
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
)

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


const {reducer: moviesReducer} = moviesSlice;
const {reducer: movieInfoReducer} = movieInfoSlice;

const moviesActions = {
    getMovies,
    getMovieInfo
}


export {
    moviesReducer,
    moviesActions,
    movieInfoReducer
}