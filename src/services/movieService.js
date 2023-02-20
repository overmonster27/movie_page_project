import {axiosService} from "./axiosService";
import {urls} from "../config";


const moviesService = {
    getAll: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    getMovieById:(id)=> axiosService.get(urls.movie(id))
}

export {moviesService};