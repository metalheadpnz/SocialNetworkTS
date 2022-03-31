import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

import {state} from "./redux/state";
import {addPost} from "./redux/state";

// addPost('hello from App')

ReactDOM.render(
    <HashRouter>
        {/*<React.StrictMode>*/}
        <App addPost={addPost}
             state={state}/>
        {/*</React.StrictMode>*/}
    </HashRouter>,
    document.getElementById('root')
);

