import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/store";
import {
    follow,
    initialStateType,
    setCurrentPage, setFetching,
    setTotalUsersCount,
    setUsers,
    unFollow,
    userType
} from "../../redux/users-reducer";
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
    return {...state.usersPage}
}

const mapDispatchToProps = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)
