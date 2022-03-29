import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css";


type propsTypes = {
    name: string
    id: string
}

const DialogItem: React.FC<propsTypes> = ({name, id}) => {

    const navLinkClassName = (p: { isActive: boolean }) => p.isActive ? `${s.activeLink} ${s.link}` : s.link
    return (
        <NavLink to={`/dialogs/${id}`} className={navLinkClassName}>
            <div className={s.dialogs}>{name}</div>
        </NavLink>
    );
};

export default DialogItem;