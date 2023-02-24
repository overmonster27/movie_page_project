import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { moviesService } from "../../services/movieService";

const Videos=()=>{

const {movieId}=useParams()

    const {videos, setVideos}=useState([]);


    useEffect(()=>{
        moviesService.getVideoById(movieId).then(({data})=> setVideos(data.results))
    },[movieId])

    return(
        <div>
                {videos.map()}
        </div>
    )
}
export {Videos}