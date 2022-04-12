import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

import {stateType, store} from "./redux/store";
import StoreContext from './StoreContext';


const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <HashRouter>
            <StoreContext.Provider value={store}>
                {/*<React.StrictMode>*/}
                <App/>
                {/*</React.StrictMode>*/}
            </StoreContext.Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    rerenderEntireTree(store.getState())
})


