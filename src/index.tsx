import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

export type dialogType = { id: string, name: string }
export type messageDataType = { [userID: string]: messageType[] }
export type messageType = { messageID: string, title: string };

const dialogsData: dialogType[] = [
    {id: '1', name: 'Dimych'},
    {id: '2', name: 'Linus'},
    {id: '3', name: 'Elon'},
    {id: '4', name: 'Mark'}
]

const messagesData: messageDataType = {
    '1': [
        {messageID: '1', title: 'Hi!'},
        {messageID: '2', title: 'ZX-Spectrum is cool!'},
        {messageID: '3', title: 'ATMega328 is better then ATiny13'}
    ],
    '2': [
        {messageID: '1', title: 'sdsd'},

    ],
    '3': [
        {messageID: '1', title: '333!'},
        {messageID: '2', title: '3333blabla'},]
}

ReactDOM.render(
    <HashRouter>
        {/*<React.StrictMode>*/}
        <App messagesData={messagesData}
             dialogsData={dialogsData}/>
        {/*</React.StrictMode>*/}
    </HashRouter>,
    document.getElementById('root')
);

