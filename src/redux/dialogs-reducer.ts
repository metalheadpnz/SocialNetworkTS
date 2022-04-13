export type messageType = { messageID: string, title: string }
export type dialogType = { id: string, name: string }
export type dialogsPageTypes = {
    dialogsData: dialogType[],
    messagesData: { [userID: string]: messageType[] }
    textAreaValue: string
}

export type changeNewMessageTextActionType = ReturnType<typeof changeNewMessageTextAC>
export type addMessageActionType = ReturnType<typeof addMessageAC>
type actionsTypes = changeNewMessageTextActionType | addMessageActionType

const initialState: dialogsPageTypes = {
    dialogsData: [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Linus'},
        {id: '3', name: 'Elon'},
        {id: '4', name: 'Mark'}
    ],

    messagesData: {
        '1': [
            {messageID: '1', title: 'Hi!'},
            {messageID: '2', title: 'ZX-Spectrum is cool!'},
            {messageID: '3', title: 'ATMega328 is better then ATiny13'}
        ],
        '2': [
            {messageID: '1', title: 'sdsd'},

        ],
        '3': [
            {messageID: '1', title: '333!'},
            {messageID: '2', title: '3333blabla'},],
        '4': []
    },

    textAreaValue: '',
}

export const dialogsReducer = (state = initialState, action: actionsTypes) => {
    switch (action.type) {
        case "CHANGE-NEW-MESSAGE-TEXT":
         return {...state, textAreaValue: action.payload.text}

        case "ADD-MESSAGE":
            return {
                ...state,
                textAreaValue: '',
                messagesData: {
                    ...state.messagesData,
                    [action.payload.currentUser]:
                        [...state.messagesData[action.payload.currentUser],
                            {
                                messageID: Date.now().toString(),
                                title: state.textAreaValue
                            }
                        ]
                }
            }
    }
    return state
}

export const changeNewMessageTextAC = (value: string) => {
    return {type: "CHANGE-NEW-MESSAGE-TEXT", payload: {text: value}} as const
}

export const addMessageAC = (currentUser: string) => {
    return {type: 'ADD-MESSAGE', payload: {currentUser: currentUser}} as const
}