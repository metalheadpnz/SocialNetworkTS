import React from 'react';
import SendMessageForm from "./SendMessageForm";
import {addMessageAC, changeNewMessageTextAC} from "../../redux/dialogs-reducer";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";


type mapDispatchToProps = {
    updateTextArea: (text: string) => void
    sendMessage: (currentUser: string) => void
}

export type SendMessageFormPropsType = mapDispatchToProps
    & {currentUser: string | undefined, textAreaValue: string}

let mapStateToProps = (state: AppStateType) => {
    return {textAreaValue: state.dialogsPage.textAreaValue}
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        updateTextArea: (text: string) => {
            dispatch(changeNewMessageTextAC(text))
        },
        sendMessage: (currentUser: string) => {
            dispatch(addMessageAC(currentUser))
        }
    }
}

export const SendMessageFormContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessageForm)

