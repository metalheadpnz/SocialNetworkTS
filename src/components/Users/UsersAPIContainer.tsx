import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/store";
import {
    followAC,
    initialStateType,
    setCurrentPageAC, setFetchingAC,
    setTotalUsersCountAC,
    setUserAC,
    unFollowAC,
    userType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader";


type mapStateToPropsType = initialStateType

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setFetching: (isFetching: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIContainer extends React.Component <UsersPropsType> {

    componentDidMount(): void {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }


    onChangePageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                    this.props.setFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    render() {

        return (<>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users {...this.props} onChangePageHandler={this.onChangePageHandler}/>}

            </>
        );
    }
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setFetching: (isFetching: boolean) => {
            dispatch(setFetchingAC(isFetching))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)
