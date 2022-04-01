import React from 'react';
// import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postType} from "../../redux/state";


type propsType = {
    profilePage: {
        postsData: postType[],
        textAreaValue: string
    }
    dispatch: (action: { type: string, payload?: any }) => void,
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