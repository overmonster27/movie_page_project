import css from './Movie.module.css'
import {NavLink} from "react-router-dom";

const Movie = ({movie}) => {

    const {id , title, original_title, poster_path} = movie;

    return (
        <div className={css.Movie}>
            <div>
                <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title}/>
            </div>
            <div className={css.Title}><b>{title}</b></div>
            <NavLink to={`/movie/${id}`}>More</NavLink>
        </div>
    );
};

export {Movie};
