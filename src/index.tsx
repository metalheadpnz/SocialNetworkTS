import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

import {changeTextAreaValue, state} from "./redux/state";
import {addPost} from "./redux/state";
import {rerenderEntireTree} from "./render";

// addPost('hello from App')



rerenderEntireTree(state)



