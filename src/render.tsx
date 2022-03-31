import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";


export const rerenderEntireTree = (state: any, addPost: any) => {
    ReactDOM.render(
        <HashRouter>
            {/*<React.StrictMode>*/}
            <App addPost={addPost}
                 state={state}/>
            {/*</React.StrictMode>*/}
        </HashRouter>,
        document.getElementById('root')
    );
}