import React from 'react';
import {connect, useSelector} from 'react-redux';
import Dialogs from "./Dialogs";
import {dialogsPageTypes, dialogType, messageType} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/store";
import {Navigate} from 'react-router-dom';


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

const DialogsRedirect = (props: DialogsPropsType) => {

    const isAuth = useSelector<AppStateType, null | number>(state => state.auth.resultCode) == 0

    return (
        <>
            {isAuth
                ? <Dialogs {...props}/>
                : <Navigate to={'/login'}/>}

        </>
    )
}

export const DialogsContainer = connect(mapStateToProps, {})(DialogsRedirect)
