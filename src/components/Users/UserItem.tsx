import React from 'react';
import s from "./Users.module.css";
import defaultUserPic from "../../img/anonimus.jpg";
import {userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type propsType = {
    userData: userType
    followingInProgress: number[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, ID: number) => void

}

const UserItem: React.FC<propsType> = (
    {
        userData,
        follow,
        unFollow,
        toggleFollowingProgress,
        followingInProgress
    }) => {

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
                    ? <button disabled={followingInProgress.some(id => id === userData.id)}
                              className={'bgcRed'}
                              onClick={() => {
                                  toggleFollowingProgress(true, userData.id)
                                  usersAPI.unFollowAPI(userData.id)
                                      .then(data => {
                                          toggleFollowingProgress(false, userData.id)
                                          if (data.resultCode === 0) {
                                              unFollow(userData.id)
                                          }
                                      })

                              }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === userData.id)}
                              className={'bgcGreen'}
                              onClick={() => {
                                  toggleFollowingProgress(true, userData.id)
                                  usersAPI.followAPI(userData.id)
                                      .then(data => {
                                          toggleFollowingProgress(false, userData.id)
                                          if (data.resultCode === 0) {
                                              follow(userData.id)
                                          }
                                      })
                              }
                              }>Follow</button>
                }
            </div>

        </div>
    );
};

export default UserItem;