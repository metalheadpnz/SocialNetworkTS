import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar: React.FC = () => {
    const NavLinksClassName = (p: { isActive: boolean }) => p.isActive ? `${s.item} ${s.active}` : s.item
    return (
        <nav className={s.nav}>
            <div className={s.navLinkWrap}>
                <NavLink to="/profile" className={NavLinksClassName}>Profile</NavLink>
            </div>
            <div className={s.navLinkWrap}>
                <NavLink to="/dialogs" className={NavLinksClassName}>Dialogs</NavLink>
            </div>
            <div className={s.navLinkWrap}>
                <NavLink to="/news" className={NavLinksClassName}>News</NavLink>
            </div>
            <div className={s.navLinkWrap}>
                <NavLink to="/music" className={NavLinksClassName}>Music</NavLink>
            </div>
            <div className={s.navLinkWrap}>
                <NavLink to="/settings" className={NavLinksClassName}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;