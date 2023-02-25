import {useEffect, useState} from "react";

import {moviesService} from "../../services";

import {Video} from "../Video/Video";
import {useParams} from "react-router-dom";

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
        <div>
            {filteredVideos.map(video => <Video key={video.id} video={video}/>)}
        </div>
    );
}

export {Videos};

