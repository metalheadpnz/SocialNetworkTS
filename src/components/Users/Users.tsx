import React from 'react';
import s from "./Users.module.css";
import defaultUserPic from "../../img/anonimus.jpg";
import {UsersPropsType} from "./UsersAPIContainer";

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
                    {users.map(u =>
                        <div key={u.id} className={s.userItem}>
                            <div className={s.userPicContainer}>
                                <img src={u.photos.large ? u.photos.large : defaultUserPic} alt="UserPic"
                                     className={s.userPic}/>
                            </div>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                            <div>
                                {u.id}
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => unFollow(u.id)}>unfollow</button>
                                    : <button onClick={() => follow(u.id)}>follow</button>
                                }
                            </div>

                        </div>
                    )}
                </div>
            </div>
        );
    };

export default Users;