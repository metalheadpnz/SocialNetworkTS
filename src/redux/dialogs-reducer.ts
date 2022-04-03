import {actionsTypes, dialogsPageTypes} from "./store";

export type changeNewMessageTextActionType = ReturnType<typeof changeNewMessageTextAC>
export type addMessageActionType = ReturnType<typeof addMessageAC>

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
            state.textAreaValue = action.payload.text
            break;

        case "ADD-MESSAGE":
            state.messagesData[action.payload.currentUser].push(
                {messageID: Date.now().toString(), title: state.textAreaValue})
    }
    return state
}

export const changeNewMessageTextAC = (value: string) => {
    return {type: "CHANGE-NEW-MESSAGE-TEXT", payload: {text: value}} as const
}

export const addMessageAC = (currentUser: string) => {
    return {type: 'ADD-MESSAGE', payload: {currentUser: currentUser}} as const
}