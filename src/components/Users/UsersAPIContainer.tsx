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
import Users from './Users';


type mapStateToPropsType = initialStateType

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIContainer extends React.Component <UsersPropsType> {

    componentDidMount(): void {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {

                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }


    onChangePageHandler = (pageNumber: number) => {
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

        return (
            <Users {...this.props} onChangePageHandler={this.onChangePageHandler}/>
        );
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)
