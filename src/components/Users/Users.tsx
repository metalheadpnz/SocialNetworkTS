import React from 'react';
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersAPIContainer";
import UserItem from "./UserItem";

type addType = { onChangePageHandler: (pageNumber: number) => void }

const Users: React.FC<UsersPropsType & addType> =
    ({
         totalUsersCount,
         pageSize,
         onChangePageHandler,
         currentPage,
         users,
         follow,
         unFollow,
         followingInProgress,
         toggleFollowingProgress

     }) => {

        const pagesCount = Math.ceil(totalUsersCount / pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => (
                        <span key={p}
                              onClick={() => {
                                  onChangePageHandler(p)
                              }}
                              className={currentPage === p ? 'boldText' : ''}>
                        {p} </span>))}
                </div>
                <div className={s.usersContainer}>
                    {users.map(u => <UserItem
                        toggleFollowingProgress={toggleFollowingProgress}
                        followingInProgress={followingInProgress}
                        userData={u}
                        follow={follow}
                        unFollow={unFollow}
                        key={u.id}/>)}
                </div>
            </div>
        );
    };

export default Users;