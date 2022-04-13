import React from 'react';
import {connect} from 'react-redux';
import Dialogs from "./Dialogs";
import {dialogsPageTypes, dialogType, messageType} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/store";


type mapStateToPropsType = {
    dialogsData: dialogType[]
    messagesData: {
        [userID: string]: messageType[]
    }
}

export type DialogsPropsType = Omit<dialogsPageTypes, 'textAreaValue'>

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}

export const DialogsContainer = connect(mapStateToProps, {})(Dialogs)
