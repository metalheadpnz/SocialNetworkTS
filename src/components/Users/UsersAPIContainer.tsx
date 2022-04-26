import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/store";
import {
    follow, getUsers,
    initialStateType,
    setCurrentPage, setFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unFollow,
    userType
} from "../../redux/users-reducer";
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
    toggleFollowingProgress: (isFetching: boolean, ID: number) => void
    getUsers: (pageSize: number, currentPage: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIContainer extends React.Component <UsersPropsType> {

    componentDidMount(): void {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }


    onChangePageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(this.props.pageSize, pageNumber)
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
    toggleFollowingProgress,
    getUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)
