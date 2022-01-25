import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>

            <div><a href="" className={`${styles.item} ${styles.active}`}>profile</a></div>
            <div><a href="" className={styles.item}>messages</a></div>
            <div><a href="" className={styles.item}>news</a></div>
            <div><a href="" className={styles.item}>music</a></div>
            <div><a href="" className={styles.item}>settings</a></div>
        </nav>
    );
};

export default Navbar;