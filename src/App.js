import './App.css';
import {Route, Routes} from "react-router-dom";

import {MoviePage, MoviesPage, NotFoundPage} from "./Pages";
import {MainLayout} from "./layouts/MainLayout/MainLayout";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={'/movie/:id'} element={<MoviePage/>}/>
                </Route>
                <Route path={''} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
};

export {App};