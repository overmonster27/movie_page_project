import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Header, MovieInfo} from "../../components";
import {moviesActions} from "../../redux";
import {Videos} from "../../components/Videos/Videos";

const MoviePage = () => {

    const {id} = useParams();

    let {currentInfo} = useSelector(state => state.info);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMovieInfo({id}))
    }, [dispatch, id]);

    return (
        <div>
            <Header/>
            {currentInfo && <MovieInfo info={currentInfo}/>}
            <Videos id={id}/>
        </div>
    );
};

export {MoviePage};