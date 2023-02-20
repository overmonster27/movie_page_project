import axios from "axios";
import {baseURL} from "../config";

let axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGMxYjlkYjFhZmQzZTc4ZGNkY2Q2NWI1NjE1MWFkOCIsInN1YiI6IjYzZWU5MjgxMWQzMTQzMDA4MWNkOTI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uLnuz6rBFoVVpw-P47UB4ibSErIwxPKU4iW7U4NGnqI'
    return config
})

export {axiosService}