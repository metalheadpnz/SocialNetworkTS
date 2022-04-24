export type followActionType = ReturnType<typeof follow>
export type unFollowActionType = ReturnType<typeof unFollow>
export type setUsersActionType = ReturnType<typeof setUsers>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setFetchingActionType = ReturnType<typeof setFetching>

type actionsTypes =
    followActionType
    | unFollowActionType
    | setUsersActionType
    | setTotalUsersCountActionType
    | setCurrentPageActionType
    | setFetchingActionType


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
    isFetching: boolean
}

const initialState: initialStateType = {
    users: [],
    pageSize: 30,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false
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