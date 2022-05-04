import {setFetching} from "./users-reducer";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";

export type addPostActionType = ReturnType<typeof addPostAC>
export type changeTextAreaValueActionType = ReturnType<typeof changeTextAreaValueAC>
export type setUserProfileActionType = ReturnType<typeof setUserProfileAC>
export type setStatusProfileActionType = ReturnType<typeof setStatusProfileAC>

type actionsTypes = addPostActionType
    | changeTextAreaValueActionType
    | setUserProfileActionType
    | setStatusProfileActionType

export type profilePageType = {
    postsData: postType[]
    textAreaValue: string
    profile: profileType
    status: string
}

export type postType = { id: string, message: string, likeCounter: number }

export type profileType = {
    "aboutMe": string | null,
    "contacts": {
        "facebook": string | null,
        "website": null | string,
        "vk": string | null,
        "twitter": string | null,
        "instagram": string | null,
        "youtube": string | null,
        "github": string | null,
        "mainLink": string | null,
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string | null,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string | null,
        "large": string | null,
    }
} | null

const initialState: profilePageType = {
    postsData: [
        {id: '1', message: 'Чики брики', likeCounter: 5},
        {id: '2', message: 'Тоси боси', likeCounter: 100500},
        {id: '3', message: 'подержи мое пиво', likeCounter: 99},
    ],
    textAreaValue: '',
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: actionsTypes): profilePageType => {

    switch (action.type) {

        case 'ADD-POST' :
            return {
                ...state,
                textAreaValue: '',
                postsData: [...state.postsData, {
                    id: Date.now().toString(),
                    message: state.textAreaValue,
                    likeCounter: 0
                }]
            }

        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}

        case 'CHANGE-TEXT-AREA-VALUE':
            return {...state, textAreaValue: action.payload.value}

        case "SET_STATUS_PROFILE":
            return {...state, status: action.status}
    }
    return state
}

export const addPostAC = () => (
    {type: 'ADD-POST'} as const
)

export const changeTextAreaValueAC = (value: string) => {
    console.log('AC')
    return {
        type: 'CHANGE-TEXT-AREA-VALUE',
        payload: {value: value}
    } as const
}

export const setUserProfileAC = (profile: profileType) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    } as const
}

export const setStatusProfileAC = (status: string) => {
    return {
        type: 'SET_STATUS_PROFILE',
        status
    } as const
}

///THUNK

export const getProfile = (params: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFetching(true))
        profileAPI.getProfile(params)
            .then(data => {
                dispatch(setUserProfileAC(data))
                dispatch(setFetching(false))
            })
    }
}

export const getStatusProfile = (userID: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userID)
            .then(data => {
                dispatch(setStatusProfileAC(data))
            })
    }
}

export const updateStatusProfile = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.setStatus(status)
            .then(resp => {
                console.log(resp)
                dispatch(setStatusProfileAC(status))
            })
    }
}