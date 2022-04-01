import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

import {store} from "./redux/state";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <HashRouter>
            {/*<React.StrictMode>*/}
            <App store={store}/>
            {/*</React.StrictMode>*/}
        </HashRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()


store.subscribe(rerenderEntireTree)


