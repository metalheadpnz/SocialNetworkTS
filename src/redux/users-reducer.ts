import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type followActionType = ReturnType<typeof follow>
export type unFollowActionType = ReturnType<typeof unFollow>
export type setUsersActionType = ReturnType<typeof setUsers>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setFetchingActionType = ReturnType<typeof setFetching>
export type toggleFollowingActionType = ReturnType<typeof toggleFollowingProgress>

type actionsTypes =
    followActionType
    | unFollowActionType
    | setUsersActionType
    | setTotalUsersCountActionType
    | setCurrentPageActionType
    | setFetchingActionType
    | toggleFollowingActionType


export type userType = {
    "name": string,
    "id": number,
    "uniqueUrlName": null | string,
    "photos": {
        "small": null | string,
        "large": null | string
    },
    "status": null | string,
    "followed": boolean
}


export type initialStateType = {
    users: userType[],
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}

const initialState: initialStateType = {
    users: [],
    pageSize: 30,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: actionsTypes): initialStateType => {

    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}


        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case "SET_USERS":
            return {...state, users: [...action.users]}

        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}

        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}

        case "SET_FETCHING":
            return {...state, isFetching: action.isFetch}

        case "TOGGLE_FOLLOWING_PROGRESS":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.ID]
                    : state.followingInProgress.filter(id => id !== action.ID)
            }

        default:
            return state
    }
}

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId
    } as const
}

export const unFollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}

export const setUsers = (users: userType[]) => {
    return {
        type: 'SET_USERS',
        users: users
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}

export const setFetching = (isFetch: boolean) => {
    return {
        type: 'SET_FETCHING',
        isFetch
    } as const
}

export const toggleFollowingProgress = (isFetching: boolean, ID: number) => {
    return {
        type: 'TOGGLE_FOLLOWING_PROGRESS',
        isFetching,
        ID
    } as const
}


export const getUsers = (pageSize: number, currentPage: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFetching(true))
        usersAPI.getUsers(pageSize, currentPage)
            .then(data => {
                dispatch(setFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}