import {useSelector} from "react-redux";

import {Movie} from "../Movie/Movie";

import css from './Movies.module.css'


const Movies = ({setPage, filteredMovies}) => {
    let {movies, page, errors, loading} = useSelector(state => state.movies);

    let theme = useSelector(state => state.theme);

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
                    <div className={css.Button} style={page === 1 ? {
                        color: theme === 'light' ? '#9f9e9c8c' : 'rgb(255 255 255 / 27%)',
                        pointerEvents: 'none'
                    } : {
                        color: '#ffffff',
                        pointerEvents: 'all'
                    }}
                         onClick={() => setPage(query => ({page: +query.get('page') - 1}))}><i
                        className="fa-solid fa-arrow-left"/></div>
                    <div>&nbsp;  {page}  &nbsp;</div>
                    <div className={css.Button} style={page === 500 ? {
                        color: theme === 'light' ? '#9f9e9c8c' : 'rgb(255 255 255 / 27%)',
                        pointerEvents: 'none'
                    } : {
                        color: '#ffffff',
                        pointerEvents: 'all'
                    }}
                         onClick={() => setPage(query => ({page: +query.get('page') + 1}))}><i
                        className="fa-solid fa-arrow-right"/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export {Movies};