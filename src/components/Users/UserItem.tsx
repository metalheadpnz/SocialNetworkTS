import React from 'react';
import s from "./Users.module.css";
import defaultUserPic from "../../img/anonimus.jpg";
import {userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type propsType = {
    userData: userType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

const UserItem: React.FC<propsType> = ({userData, follow, unFollow}) => {

    return (
        <div className={s.userItem}>
            <div className={s.userPicContainer}>
                <NavLink to={`/profile/${userData.id}`}>
                <img src={userData.photos.large ? userData.photos.large : defaultUserPic} alt="UserPic"
                     className={s.userPic}/>
                </NavLink>
            </div>
            <div>
                {userData.name}
            </div>
            <div>
                {userData.status}
            </div>
            <div>
                {userData.id}
            </div>
            <div>
                {userData.followed
                    ? <button onClick={() => unFollow(userData.id)}>unfollow</button>
                    : <button onClick={() => follow(userData.id)}>follow</button>
                }
            </div>

        </div>
    );
};

export default UserItem;