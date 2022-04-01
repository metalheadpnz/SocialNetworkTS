import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

import {changeTextAreaValue, state, subscribe} from "./redux/state";
import {addPost} from "./redux/state";


// addPost('hello from App')

const rerenderEntireTree = () => {
    ReactDOM.render(
        <HashRouter>
            {/*<React.StrictMode>*/}
            <App changeTextAreaValue={changeTextAreaValue}
                 addPost={addPost}
                 state={state}/>
            {/*</React.StrictMode>*/}
        </HashRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()


subscribe(rerenderEntireTree)


