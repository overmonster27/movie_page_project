import {useSelector} from "react-redux";

import {Movie} from "../Movie/Movie";

import css from './Movies.module.css'


const Movies = ({setPage, filteredMovies}) => {
    let {movies, page, errors, loading} = useSelector(state => state.movies);

    return (<div className={css.MoviesWrap}>
            {errors && JSON.stringify(errors)}
            {loading && <h3>Loading...</h3>}

            <div className={css.Movies}>
                {filteredMovies ? filteredMovies.map(movie => <Movie key={movie.id}
                                                                     movie={movie}/>) : movies.map(movie =>
                    <Movie key={movie.id} movie={movie}/>)}
            </div>

            <div>
                <div className={css.Pages}>
                    <button disabled={page === 1}
                            onClick={() => setPage(query => ({page: +query.get('page') - 1}))}>prev
                    </button>
                    <div>- {page} -</div>
                    <button disabled={page === 500}
                            onClick={() => setPage(query => ({page: +query.get('page') + 1}))}>next
                    </button>
                </div>
            </div>
        </div>
    );
};

export {Movies};