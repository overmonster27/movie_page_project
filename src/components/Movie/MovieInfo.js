import {Rating} from "react-simple-star-rating";

import css from './Movie.module.css';

import {Videos} from "../Videos/Videos";

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
                <li className={css.Text}><b>Production_countries: </b>{innerProductionCountries}</li>
                <li className={css.Text}><b>Tagline: </b>{tagline}</li>
                <li className={css.Text}><b>Budget: </b>{budget}</li>
                <li className={css.Text}><b>Runtime: </b>{runtime}</li>
                <li className={css.Text}><b>Homepage: </b>{homepage}</li>
                <li className={css.Text}><b>Release date: </b>{release_date}</li>
                <li className={css.Text}><b>Status: </b>{status}</li>
                <li className={css.Text}><b>Original title: </b>{original_title}</li>
                <li className={css.Text}><b>Vote average: </b>{vote_average}</li>
                <li className={css.Text}><b>Vote count: </b>{vote_count}</li>
                <li className={css.Text}><b>Revenue: </b>{revenue}</li>

                <li className={css.Text}><b>Rating:</b>{<span><Rating
                    size={24}
                    initialValue={vote_average / 2}
                    allowFraction={true}
                    iconsCount={5}
                    showTooltip={true}
                /></span>}</li>


            </ul>
        </div>
        <div className={css.Text + ' ' +css.Overview}><b>Overview : </b>{overview}</div>
        <Videos/>
    </div>);
};

export {MovieInfo};
