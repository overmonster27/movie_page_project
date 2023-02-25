import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Video} from "../Video/Video";
import {moviesService} from "../../services";
import css from './Video.module.css';

const Videos = () => {

    const {id} = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        moviesService.getVideoById(id).then(({data}) => {
            setVideos(data.results)
        })
    }, [id])

    const filteredVideos = videos.filter((video) => video.type === 'Trailer')

    return (
        <div className={css.MovieContainer}>
            {filteredVideos.map(video => <Video key={video.id} video={video}/>)}
        </div>
    );
}

export {Videos};

