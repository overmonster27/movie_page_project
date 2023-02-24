import Select from 'react-select';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {genresActions, moviesActions} from "../../redux";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";

const FilterBar = () => {

    const dispatch = useDispatch();

    const [selectedGenres, setSelectedGenres] = useState([]);

    const [options, setOptions] = useState([]);

    let {genres} = useSelector(state => state.genres);

    let [query] = useSearchParams({page: '1'});


    useEffect(() => {

        if (genres) {
            const newOptions = genres.genres.map(genre => ({value: genre.id, label: genre.name}))
            setOptions(newOptions)
        }

    }, [genres, dispatch])

    useEffect(() => {

        if (!selectedGenres.length) {
            dispatch(moviesActions.getMovies({page: query.get('page')}))
        } else {
            dispatch(moviesActions.searchMoviesByGenres({
                page: query.get('page'),
                genreIds: selectedGenres.map(genre => genre.value)
            }))
        }

    }, [selectedGenres, dispatch, query]);

    return (
        <div>
            <Select
                defaultValue={selectedGenres}
                onChange={setSelectedGenres}
                options={options}
                isMulti={true}
            />
        </div>
    );
};

export {FilterBar};