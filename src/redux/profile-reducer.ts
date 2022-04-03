import {actionsTypes, profilePageType} from "./store";

export type addPostActionType = ReturnType<typeof addPostAC>
export type changeTextAreaValueActionType = ReturnType<typeof changeTextAreaValueAC>

export const profileReducer = (state: profilePageType, action: actionsTypes) => {
    switch (action.type) {
        case 'ADD-POST' :
            state.postsData.push({
                id: Date.now().toString(),
                message: state.textAreaValue,
                likeCounter: 0
            })
            state.textAreaValue = ''
            break;

        case 'CHANGE-TEXT-AREA-VALUE':
            state.textAreaValue = action.payload.value
            break;
    }
    return state
}

export const addPostAC = () => (
    {type: 'ADD-POST'} as const
)

export const changeTextAreaValueAC = (value: string) => {
    return {
        type: 'CHANGE-TEXT-AREA-VALUE',
        payload: {value: value}
    } as const
}