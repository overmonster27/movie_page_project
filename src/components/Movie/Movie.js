import {NavLink} from "react-router-dom";
import {Rating} from 'react-simple-star-rating';

import css from './Movie.module.css';

const Movie = ({movie}) => {

    const {id, title, original_title, poster_path,vote_average} = movie;

    return (
        <div className={css.Movie}>

                <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title}/>

            <div className={css.Title}><b>{title}</b></div>

            <Rating
                size={16}
                initialValue={vote_average/2}
                allowFraction={true}
                iconsCount={5}
                showTooltip={true}
            />

            <NavLink className={css.NavLink} to={`/movie/${id}`}>More</NavLink>
        </div>
    );
};

export {Movie};
