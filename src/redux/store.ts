import {addPostActionType, changeTextAreaValueActionType, profileReducer} from "./profile-reducer";
import {addMessageActionType, changeNewMessageTextActionType, dialogsReducer} from "./dialogs-reducer";

export type dialogType = { id: string, name: string }
export type messageType = { messageID: string, title: string }
export type dialogsPageTypes = {
    dialogsData: dialogType[],
    messagesData: { [userID: string]: messageType[] }
    textAreaValue: string

}
export type postType = { id: string, message: string, likeCounter: number }
export type profilePageType = {
    postsData: postType[]
    textAreaValue: string
}
export type textAreaValue = string
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageTypes
}
export type storeType = {
    _state: stateType,
    getState(): stateType,
    _callTheSubscriber(): void,
    subscribe(observer: () => void): void
    dispatch(action: { type: string }): void
}
export type actionsTypes =
    changeNewMessageTextActionType
    | addMessageActionType
    | addPostActionType
    | changeTextAreaValueActionType


export const store: storeType = {
    _state: {
        profilePage: {
            postsData: [
                {id: '1', message: 'Чики брики', likeCounter: 5},
                {id: '2', message: 'Тоси боси', likeCounter: 100500},
                {id: '3', message: 'подержи мое пиво', likeCounter: 99},
            ],
            textAreaValue: ''
        },

        dialogsPage: {
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
        },
    },

    _callTheSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callTheSubscriber = observer
    },

    dispatch(action: actionsTypes) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callTheSubscriber()
    }
}