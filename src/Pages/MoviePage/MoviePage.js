import {useDispatch, useSelector} from "react-redux";

import {Header, MovieInfo} from "../../components";
import {useEffect} from "react";
import {moviesActions} from "../../redux";
import {useParams} from "react-router-dom";

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
        </div>
    );
};

export {MoviePage};