import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {updateStatusProfile} from "../../redux/profile-reducer";

type propsType = {
    updateStatusProfile: (status: string) => void
    status: string
}

const Profile: React.FC<propsType> = (props: propsType) => {
    return (
        <div>
            <ProfileInfo status={props.status}
                         updateStatusProfile={props.updateStatusProfile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;