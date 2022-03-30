import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postType} from "../../redux/state";


type propsType = {
    profilePage: { postsData: postType[] }
}

const Profile: React.FC<propsType> = ({profilePage}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={profilePage.postsData}/>
        </div>
    );
};

export default Profile;