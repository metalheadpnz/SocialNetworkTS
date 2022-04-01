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
    addPost: () => void,
    changeTextAreaValue: (value: string) => void

}

// const Profile: React.FC<propsType> = ({profilePage, addPost}) => {
const Profile: React.FC<propsType> = (props) => {
    const addPost = props.addPost
    const profilePage = props.profilePage
    const changeTextAreaValue = props.changeTextAreaValue


    return (
        <div>
            <ProfileInfo/>
            <MyPosts changeTextAreaValue={changeTextAreaValue}
                     addPost={addPost}
                     profilePage={profilePage}/>
        </div>
    );
};

export default Profile;