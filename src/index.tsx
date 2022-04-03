import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

import {stateType, store} from "./redux/store";


const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <HashRouter>
            {/*<React.StrictMode>*/}
            <App  store={store}/>
            {/*</React.StrictMode>*/}
        </HashRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(()=>{
    rerenderEntireTree(store.getState())
})


