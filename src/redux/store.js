import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieInfoReducer, moviesReducer} from "./slices/movieSlice";

const rootReducer = combineReducers({
    movies: moviesReducer,
    info: movieInfoReducer
});

const setStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});


export {
    setStore
}