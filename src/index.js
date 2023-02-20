import React from 'react';
import ReactDOM from 'react-dom/client';


import {App} from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {setStore} from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setStore()

root.render(<div>

        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>

    </div>
);
