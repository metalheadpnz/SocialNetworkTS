import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/store";
import {
    follow,
    initialStateType,
    setCurrentPage, setFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unFollow,
    userType
} from "../../redux/users-reducer";
import Users from './Users';
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api";


type mapStateToPropsType = initialStateType

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, ID: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIContainer extends React.Component <UsersPropsType> {

    componentDidMount(): void {
        this.props.setFetching(true)
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.setFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }


    onChangePageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setFetching(true)
        usersAPI.getUsers(this.props.pageSize, pageNumber)
            .then(data => {
                    this.props.setFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setTotalUsersCount(data.totalCount)
                }
            )
    }

    render() {

        return (<>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users {...this.props}
                             onChangePageHandler={this.onChangePageHandler}
                             toggleFollowingProgress={this.props.toggleFollowingProgress}
                    />}

            </>
        );
    }
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {...state.usersPage}
}

const mapDispatchToProps = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching,
    toggleFollowingProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)
