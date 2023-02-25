import {useEffect,} from "react";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {genresActions, moviesActions} from "../../redux";
import {Header, Movies} from "../../components";

const MoviesPage = () => {

    const dispatch = useDispatch()

    let [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(genresActions.getGenres({}))
        dispatch(moviesActions.getMovies({page: query.get('page')}))
    }, [dispatch, query]);

    return (
        <div>
            <Header withSearch/>
            <Movies setPage={setQuery}/>
        </div>
    );
};

export {MoviesPage};