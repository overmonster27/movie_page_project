import {useDispatch, useSelector} from "react-redux";


import {Header, MovieInfo} from "../../components";


const MoviePage = () => {

    let {currentInfo} = useSelector(state => state.info);

    return (
        <div>
            <Header/>
            {currentInfo && <MovieInfo info={currentInfo}/>}
        </div>
    );
};

export {MoviePage};