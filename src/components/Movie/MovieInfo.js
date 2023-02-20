import css from './Movie.module.css'

const MovieInfo = ({info}) => {

    let {
        // adult,
        // backdrop_path,
        // belongs_to_collection,
        // budget,
        // genres,
        // homepage,
        // imdb_id,
        // original_language,
        original_title,
        overview,
        // popularity,
        poster_path,
        // production_companies,
        // production_countries,
        // release_date,
        // revenue,
        // runtime,
        // spoken_languages,
        // status,
        // tagline,
        title,
        // video,
        // vote_average,
        // vote_count,
    } = info;

    return (
        <div className={css.Movie}>
            {info ? <>
                <div>{title}</div>
                <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title}/>
                <div>overview:{overview}</div>
                {/*<div>budget:{budget}</div>*/}
                {/*<div>genres:{genres}</div>*/}
                {/*<div>homepage:{homepage}</div>*/}
                {/*<div>original_language:{original_language}</div>*/}
                {/*<div>original_title:{original_title}</div>*/}
                {/*<div>production_countries:{production_countries}</div>*/}
                {/*<div>production_companies:{production_companies}</div>*/}
                {/*<div>release_date:{release_date}</div>*/}
                {/*<div>revenue:{revenue}</div>*/}
                {/*<div>runtime:{runtime}</div>*/}
                {/*<div>status:{status}</div>*/}
                {/*<div>tagline:{tagline}</div>*/}
                {/*<div>vote_average:{vote_average}</div>*/}
                {/*<div>vote_count:{vote_count}</div>*/}
            </>: ''}
        </div>
    );
};

export {MovieInfo};
