import React from 'react';
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
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class Users extends React.Component <UsersPropsType> {

    componentDidMount(): void {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {

                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }


    pageHandler = (pageNumber: number) => {
        console.log(pageNumber)
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {

                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
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
                                  this.pageHandler(p)
                              }}
                              className={this.props.currentPage === p ? 'boldText' : ''}>
                        {p} </span>))}
                </div>
                <div className={s.usersContainer}>
                    {this.props.users.map(u =>
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
                                    ? <button onClick={() => this.props.unFollow(u.id)}>unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>follow</button>
                                }
                            </div>

                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Users;

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

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
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
