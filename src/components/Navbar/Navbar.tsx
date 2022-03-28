import React from 'react';
import s from './Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={s.nav}>
            <div><a href="/profile" className={`${s.item} ${s.active}`}>profile</a></div>
            <div><a href="/dialogs" className={s.item}>messages</a></div>
            <div><a href="" className={s.item}>news</a></div>
            <div><a href="" className={s.item}>music</a></div>
            <div><a href="" className={s.item}>settings</a></div>
        </nav>
    );
};

export default Navbar;