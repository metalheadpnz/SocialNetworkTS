import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {addPost, changeTextAreaValue, stateType} from "./redux/state";


export const rerenderEntireTree =
    (state: stateType) => {
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