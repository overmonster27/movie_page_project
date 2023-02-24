import {Rating} from "react-simple-star-rating";

import css from './Movie.module.css';

const MovieInfo = ({info}) => {

    let {
        title,
        poster_path,
        original_title,
        overview,
        budget,
        runtime,
        genres,
        production_countries,
        tagline,
        homepage,
        release_date,
        status,
        vote_average,
        vote_count,
        revenue,
    } = info;

    const innerGenres = genres.map((genre, index) => <h5 key={index}
                                                         className="badge text-bg-primary">{genre.name}</h5>)
    const innerProductionCountries = production_countries.map(country => country.name)

    return (<div className={css.Container}>

        <div className={css.Badge}>
            <h1 style={{marginRight: '30px'}}>{title}</h1>
            <span>{innerGenres}</span>
        </div>

        <div className={css.Context}>
            <img className={css.Img} src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title}/>

            <ul>
                <li><b>Production_countries: </b>{innerProductionCountries}</li>
                <li><b>Tagline: </b>{tagline}</li>
                <li><b>Budget: </b>{budget}</li>
                <li><b>Runtime: </b>{runtime}</li>
                <li><b>Homepage: </b>{homepage}</li>
                <li><b>Release date: </b>{release_date}</li>
                <li><b>Status: </b>{status}</li>
                <li><b>Original title: </b>{original_title}</li>
                <li><b>Vote average: </b>{vote_average}</li>
                <li><b>Vote count: </b>{vote_count}</li>
                <li><b>Revenue: </b>{revenue}</li>

                <li><b>Rating:</b>{<span><Rating
                    size={24}
                    initialValue={vote_average / 2}
                    allowFraction={true}
                    iconsCount={5}
                    showTooltip={true}
                /></span>}</li>

                <li><b>Overview:</b>{overview}</li>
            </ul>
        </div>
    </div>);
};

export {MovieInfo};
