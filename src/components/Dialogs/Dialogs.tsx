import React from 'react';
import s from './Dialogs.module.css'
import {Route, Routes} from "react-router-dom";
import Message from "./Message";
import DialogItem from "./DialogItem";

const Dialogs: React.FC = () => {

    return (
        <div className={s.dialogsPageWrap}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Dymich111"} id={'1'}/>
                <DialogItem name={"Linus"} id={'2'}/>
                <DialogItem name={"Elon"} id={'3'}/>
                <DialogItem name={"Mark"} id={'4'}/>


            </div>
            <div className={s.messages}>
                <Routes>
                    <Route path={'/'} element={<div>Please, select the Dialog</div>}/>
                    <Route path={'/1'} element={<Message/>}/>
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