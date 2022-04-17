import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/store";
import {
    followAC,
    initialStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUserAC,
    unFollowAC,
    userType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import axios from 'axios';
import s from './Users.module.css'
import defaultUserPic from '../../img/anonimus.jpg'


type mapStateToPropsType = initialStateType

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userType[]) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (currentpage: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    follow,
                                                    unFollow,
                                                    setUsers,
                                                    totalUsersCount,
                                                    currentPage,
                                                    pageSize,
                                                    setTotalUsersCount,
                                                    setCurrentPage
                                                }) => {

    const getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items)
                setTotalUsersCount(response.data.totalCount)
            })
    }

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onPageClickHandler = (currentPage: number) => {
        setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items)
                setTotalUsersCount(response.data.totalCount)
            })
    }

    useEffect(getUsers, [])

    return <div>
        <div>
            {pages.map(p => (
                <span
                    key={p}
                    onClick={() => onPageClickHandler(p)}
                    className={currentPage === p ? 'boldRedText' : ""}
                >{p} </span>
            ))}
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
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({...state.usersPage})

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: userType[]) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (currentpage: number) => {
            dispatch(setCurrentPageAC(currentpage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
