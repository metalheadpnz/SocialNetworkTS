import React from 'react';
// import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postType} from "../../redux/state";


type propsType = {
    profilePage: { postsData: postType[] }
    addPost: (newPostTitle: string) => void
}

const Profile: React.FC<propsType> = ({profilePage, addPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={addPost}
                     postsData={profilePage.postsData}/>
        </div>
    );
};

export default Profile;