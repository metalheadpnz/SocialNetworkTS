import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className='nav'>

            <div><a href="" className={styles.test}>profile</a></div>
            <div><a href="">messages</a></div>
            <div><a href="">news</a></div>
            <div><a href="">music</a></div>
            <div><a href="">settings</a></div>
        </nav>
    );
};

export default Navbar;