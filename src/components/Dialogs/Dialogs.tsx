import React from 'react';
import s from './Dialogs.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Messages from "./Messages";

const Dialogs: React.FC = () => {
    const PATH = '/dialogs/'
    const navLinkClassName = (p: { isActive: boolean }) => p.isActive ? `${s.activeLink} ${s.link}` : s.link
    return (
        <div className={s.dialogsPageWrap}>
            <div className={s.dialogsItems}>
                <NavLink to={PATH + '1'} className={navLinkClassName}>
                    <div className={s.dialogs}>Mark</div>
                </NavLink>

                <NavLink to={PATH + '2'} className={navLinkClassName}>
                    <div className={s.dialogs}>Elon</div>
                </NavLink>

                <NavLink to={PATH + '3'} className={navLinkClassName}>
                    <div className={s.dialogs}>Linus</div>
                </NavLink>

                <NavLink to={PATH + '4'} className={navLinkClassName}>
                    <div className={s.dialogs}>Dymich</div>
                </NavLink>

            </div>
            <div className={s.messages}>
                <Routes>
                    <Route path={'/'} element={<div>Please, select the Dialog</div>}/>
                    <Route path={'/1'} element={<Messages/>}/>
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