import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import _ from 'lodash';

import {Theme} from "../Theme/Theme";
import css from './Header.module.css';
import {FilterBar} from "../FilterBar/FilterBar";


const Header = ({withSearch}) => {

    let {page} = useSelector(state => state.movies);

    let dispatch = useDispatch();

    const searchReq = (e) => {
        const query = e.target.value
        if (query.trim().length) {
            dispatch(moviesActions.searchMovies({page, query}))
        }
    }

    const search = _.debounce(searchReq, 500, {'maxWait': 1000})

    return (
        <div className={css.Header} id='mainHeader'>

            <NavLink className={css.Home} to={`/`}>HOME</NavLink>

            <div>
                {withSearch && <input onChange={search} placeholder={'Search'} type={"text"}/>}
            </div>

            {withSearch && <FilterBar/>}

            <Theme/>

            <div className={css.User}>User</div>

        </div>
    );
};

export {Header};