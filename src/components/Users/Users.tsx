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

export const Users: React.FC<UsersPropsType> = ({users, follow, unFollow, setUsers}) => {

    if (!users.length) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                console.log(response.data.items)
                setUsers(response.data.items)
            })

        // setUsers([
        //     {
        //         id: 1,
        //         fullName: 'Andrey',
        //         status: "I'am a junior",
        //         location: {country: 'Russia', city: 'Penza'},
        //         followed: true
        //     },
        //     {
        //         id: 2,
        //         fullName: 'James',
        //         status: "Kill em all",
        //         location: {country: 'USA', city: 'San Francisco'},
        //         followed: true
        //     },
        //     {
        //         id: 3,
        //         fullName: 'Dimych',
        //         status: "show me the money",
        //         location: {country: 'Belarus', city: 'Minsk'},
        //         followed: false
        //     }
        // ])
    }

    return <div>
        {users.map(u =>
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
                    ? <button onClick={() => unFollow(u.id)}>unfollow</button>
                    : <button onClick={() => follow(u.id)}>follow</button>
                }
            </div>
        )}
    </div>
}


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
