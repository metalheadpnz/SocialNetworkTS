import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/store";
import {followAC, setUserAC, unFollowAC, userType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import axios from 'axios';


type mapStateToPropsType = {
    users: userType[]
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userType[]) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class Users extends React.Component <UsersPropsType> {
componentDidMount(): void {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            this.props.setUsers(response.data.items)
        })
}

    getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>getUsers</button>
                {this.props.users.map(u =>
                    <div key={u.id} style={{border: '1px solid black'}}>
                        <div>

                        </div>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                        <span>{u.followed ? 'подписан' : 'не подписан'}</span>
                        {u.followed
                            ? <button onClick={() => this.props.unFollow(u.id)}>unfollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>follow</button>
                        }
                    </div>
                )}
            </div>
        );
    }
}

export default Users;

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {users: state.usersPage.users}
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
