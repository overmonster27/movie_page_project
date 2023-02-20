import {MovieInfo} from "../../components/Movie/MovieInfo";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/movieSlice";

const MoviePage = () => {

    const {id} = useParams()

    let {currentInfo} = useSelector(state => state.info);
    
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(moviesActions.getMovieInfo({id}))
    },[dispatch, id])

    return (
        <div>
            <MovieInfo info={currentInfo}/>
        </div>
    );
};

export {MoviePage};