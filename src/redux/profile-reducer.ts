export type addPostActionType = ReturnType<typeof addPostAC>
export type changeTextAreaValueActionType = ReturnType<typeof changeTextAreaValueAC>
type actionsTypes = addPostActionType | changeTextAreaValueActionType
export type profilePageType = {
    postsData: postType[]
    textAreaValue: string
}
export type postType = { id: string, message: string, likeCounter: number }

const initialState: profilePageType = {
    postsData: [
        {id: '1', message: 'Чики брики', likeCounter: 5},
        {id: '2', message: 'Тоси боси', likeCounter: 100500},
        {id: '3', message: 'подержи мое пиво', likeCounter: 99},
    ],
    textAreaValue: ''
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

        case 'CHANGE-TEXT-AREA-VALUE':
            // state.textAreaValue = action.payload.value
            return {...state, textAreaValue: action.payload.value}
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