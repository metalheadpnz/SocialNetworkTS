export type followActionType = ReturnType<typeof followAC>
export type unFollowActionType = ReturnType<typeof unFollowAC>
export type setUsersActionType = ReturnType<typeof setUserAC>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type actionsTypes =
    followActionType
    | unFollowActionType
    | setUsersActionType
    | setTotalUsersCountActionType
    | setCurrentPageActionType


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
    currentPage: number
}

const initialState: initialStateType = {
    users: [],
    pageSize: 45,
    totalUsersCount: 1,
    currentPage: 1
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

        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId
    } as const
}

export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}

export const setUserAC = (users: userType[]) => {
    return {
        type: 'SET_USERS',
        users: users
    } as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}