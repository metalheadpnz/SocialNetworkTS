import React from 'react';
import s from "./Users.module.css";
import defaultUserPic from "../../img/anonimus.jpg";
import {userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                {/*{userData.name}*/}
            </div>
            <div>
                {userData.status}
            </div>
            <div>
                {userData.id}
            </div>
            <div>
                {userData.followed
                    ? <button onClick={() => {
                        // unFollow(userData.id)

                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userData.id}`,
                            {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '79d0b5ff-d44c-4805-98f4-b6b4db11789b'
                                }
                            })
                            .then(response => {

                                if (response.data.resultCode === 0) {
                                    unFollow(userData.id)
                                }
                            })
                            .catch(err => {
                                console.log(err)
                            })


                    }}>Unfollow</button>
                    : <button onClick={() => {

                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userData.id}`, {},
                            {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '79d0b5ff-d44c-4805-98f4-b6b4db11789b'
                                }
                            })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    follow(userData.id)
                                }
                            })
                            .catch(err => {
                                console.log(err)
                            })


                        // follow(userData.id)
                    }
                    }>Follow</button>
                }
            </div>

        </div>
    );
};

export default UserItem;