import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/movieSlice";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'

const Movies = () => {

    let dispatch = useDispatch();

    let {movies, page, errors, loading} = useSelector(state => state.movies);

    let [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesActions.getMovies({page: query.get('page')}))
    }, [dispatch, query]);

    return (<div>
            {errors && JSON.stringify(errors)}
            {loading && <h3>Loading...</h3>}

            <div className={css.Movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>

            <div>
                <div className={css.Pages}>
                    <button disabled={page === 1}
                            onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev
                    </button>
                    <div>- {page} -</div>
                    <button disabled={page === 500}
                            onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next
                    </button>
                </div>
            </div>
        </div>
    );
};

export {Movies};