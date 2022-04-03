import React from 'react';
// import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {actionsTypes, postType} from "../../redux/store";


type propsType = {
    profilePage: {
        postsData: postType[],
        textAreaValue: string
    }
    dispatch: (action: actionsTypes) => void,
}

// const Profile: React.FC<propsType> = ({profilePage, addPost}) => {
const Profile: React.FC<propsType> = (props) => {
    const profilePage = props.profilePage


    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch}
                     profilePage={profilePage}/>
        </div>
    );
};

export default Profile;