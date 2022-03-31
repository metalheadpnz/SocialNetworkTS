import {rerenderEntireTree} from "../render";

export type dialogType = { id: string, name: string }
export type messageDataType = { [userID: string]: messageType[] }
export type messageType = { messageID: string, title: string }
export type postType = { id: string, message: string, likeCounter: number }


export let state = {
    profilePage: {
        postsData: [
            {id: '1', message: 'Чики брики', likeCounter: 5},
            {id: '2', message: 'Тоси боси', likeCounter: 100500},
            {id: '3', message: 'подержи мое пиво', likeCounter: 99},
        ] as postType[]
    },
    dialogsPage: {
        dialogsData: [
            {id: '1', name: 'Dimych'},
            {id: '2', name: 'Linus'},
            {id: '3', name: 'Elon'},
            {id: '4', name: 'Mark'}
        ] as dialogType[],

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

export const addPost = (newPostTitle: string) => {
    state.profilePage.postsData.push({id: '4', message: newPostTitle, likeCounter: 0})

    rerenderEntireTree(state, addPost)
}