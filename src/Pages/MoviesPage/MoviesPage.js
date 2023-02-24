import {FilterBar, Header, Movies} from "../../components";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {genresActions, moviesActions} from "../../redux";

const MoviesPage = () => {

    const dispatch = useDispatch()

    let {genres} = useSelector(state => state.genres);

    const {movies} = useSelector(state => state.movies);
    const [filteredMovies, setFilteredMovies] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [options, setOptions] = useState([]);

    let [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(genresActions.getGenres({}))
        dispatch(moviesActions.getMovies({page: query.get('page')}))
    }, [dispatch, query]);

    useEffect(() => {
        if (genres) {
            const newOptions = genres.genres.map(genre => ({value: genre.id, label: genre.name}))
            setOptions([{value: null, label: ''}, ...newOptions])
        }
    }, [genres, dispatch])

    useEffect(() => {
        if (selectedGenre) {
            if (!selectedGenre.value) {
                setFilteredMovies(null)
            } else {
                const newMovies = movies.filter(({genre_ids}) => genre_ids.includes(selectedGenre.value));
                setFilteredMovies(newMovies)
            }
        }
    }, [selectedGenre, dispatch, movies]);

    return (
        <div>
            <Header withSearch/>
            <FilterBar handleChange={setSelectedGenre}
                       options={options}
                       selected={selectedGenre}/>
            <Movies filteredMovies={filteredMovies} setPage={setQuery}/>
        </div>
    );
};

export {MoviesPage};