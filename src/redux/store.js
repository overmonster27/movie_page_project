import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieInfoReducer, moviesReducer, genresReducer} from "./slices/movieSlice";
import {themeReducer} from "./slices/themeSlice";


const rootReducer = combineReducers({
    movies: moviesReducer,
    info: movieInfoReducer,
    theme: themeReducer,
    genres: genresReducer
});

const setStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export {
    setStore
};