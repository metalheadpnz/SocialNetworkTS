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
export type storeType = {
    _state: stateType,
    getState(): stateType,
    addPost(): void,
    changeTextAreaValue(value: string): void,
    _callTheSubscriber(): void,
    subscribe(observer: () => void): void
    dispatch(action: { type: string }): void
}


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
                    {messageID: '2', title: '3333blabla'},]
            }
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

    addPost() {
        this._state.profilePage.postsData.push({
            id: Date.now().toString(),
            message: this._state.profilePage.textAreaValue,
            likeCounter: 0
        })
        this._state.profilePage.textAreaValue = ''
        this._callTheSubscriber()
    },
    changeTextAreaValue(value) {
        this._state.profilePage.textAreaValue = value
        this._callTheSubscriber()
    },

    dispatch(action: { type: string, payload?: any }) {
        switch (action.type) {

            case ADD_POST :
                this._state.profilePage.postsData.push({
                    id: Date.now().toString(),
                    message: this._state.profilePage.textAreaValue,
                    likeCounter: 0
                })
                this._state.profilePage.textAreaValue = ''
                this._callTheSubscriber()
                break;

            case CHANGE_TEXT_AREA_VALUE:
                this._state.profilePage.textAreaValue = action.payload.value
                this._callTheSubscriber()
                break;
        }
    }
}

const ADD_POST = 'ADD-POST'
const CHANGE_TEXT_AREA_VALUE = 'CHANGE-TEXT-AREA-VALUE'

export const addPostAC = () => ({type: ADD_POST})

export const changeTextAreaValueAC = (value: string) => {
    return {
        type: CHANGE_TEXT_AREA_VALUE,
        payload: {value: value}
    }
}