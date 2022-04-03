import {actionsTypes, dialogsPageTypes} from "./store";

export type changeNewMessageTextActionType = ReturnType<typeof changeNewMessageTextAC>
export type addMessageActionType = ReturnType<typeof addMessageAC>

export const dialogsReducer = (state: dialogsPageTypes, action: actionsTypes) => {
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