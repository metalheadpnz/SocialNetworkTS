export  type followActionType = ReturnType<typeof followAC>
export  type unFollowActionType = ReturnType<typeof unFollowAC>
export  type setUsersActionType = ReturnType<typeof setUserAC>
type actionsTypes = followActionType | unFollowActionType | setUsersActionType

export type locationType = {
    country: string
    city: string
}

export type userType = {
    id: number
    fullName: string
    status: string
    location: locationType
    followed: boolean
}

export type initialStateType = {
    users: userType[]
}

const initialState: initialStateType = {
    users: [

    ]
}

export const usersReducer = (state = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}


        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}

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