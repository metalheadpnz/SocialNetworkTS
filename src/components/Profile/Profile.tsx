import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div >
            <div>
                <img src="https://fs.tonkosti.ru/sized/c960x400/3q/3r/3q3r3fgg4544os4c440gkskgg.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;