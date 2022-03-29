import React from 'react';
import s from './Dialogs.module.css'
import {Route, Routes} from "react-router-dom";
import Message from "./Message";
import DialogItem from "./DialogItem";

const Dialogs: React.FC = () => {

    const dialogsData = [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Linus'},
        {id: '3', name: 'Elon'},
        {id: '4', name: 'Mark'}
    ]

    const messagesData = [
        {id: '1', title: 'Hi!'},
        {id: '2', title: 'ZX-Spectrum is cool!'},
        {id: '3', title: 'ATMega328 is better then ATiny13'}
    ]

    return (
        <div className={s.dialogsPageWrap}>
            <div className={s.dialogsItems}>
                {dialogsData.map(el => <DialogItem {...el} key={el.id}/>)}
            </div>
            <div className={s.messages}>
                <Routes>
                    <Route path={'/'} element={<div>Please, select the Dialog</div>}/>
                    <Route path={'/1'} element={<>
                        <Message {...messagesData[0]}/>
                        <Message {...messagesData[1]}/>
                        <Message {...messagesData[2]}/>
                    </>
                    }/>
                    <Route path={'/2'} element={<div>2222222222222222222222222222</div>}/>
                    <Route path={'/3'} element={<div>3333333333333333333333333333</div>}/>
                    <Route path={'/4'} element={<div>4444444444444444444444444444</div>}/>
                    <Route path={'/*'} element={<div>404 Dialog not found</div>}/>
                </Routes>
            </div>

        </div>
    );
};

export default Dialogs;