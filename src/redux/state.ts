import {rerenderEntireTree} from "../render";

export type dialogType = { id: string, name: string }
export type messageDataType = { [userID: string]: messageType[] }
export type messageType = { messageID: string, title: string }
export type postType = { id: string, message: string, likeCounter: number }
export type profilePageType = { profilePage: postType[] }
export type textAreaValue = string

export type stateType = {
    profilePage: {
        postsData: postType[],
        textAreaValue: string
    },
    dialogsPage: {
        dialogsData: dialogType[],
        messagesData: { [userID: string]: messageType[] }
    }
}

export let state: stateType = {
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
                {messageID: '2', title: '3333blabla'},]
        } as messageDataType,
    },
}

export const addPost = () => {
    state.profilePage.postsData.push({
        id: '4',
        message: state.profilePage.textAreaValue,
        likeCounter: 0
    })

    state.profilePage.textAreaValue = ''

    rerenderEntireTree(state)


}

export const changeTextAreaValue = (value: string) => {
    state.profilePage.textAreaValue = value

    rerenderEntireTree(state)
}
// @ts-ignore
window.state = state
