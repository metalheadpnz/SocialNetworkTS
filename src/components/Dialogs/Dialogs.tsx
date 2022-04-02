import React from 'react';
import s from './Dialogs.module.css'
import {useParams} from "react-router-dom";
import Messages from "./Messages";
import DialogItem from "./DialogItem";
import {dialogPageActionTypes, dialogsPageTypes, dialogType, messageDataType} from "../../redux/store";
import SendMessageForm from "./SendMessageForm";


type propsType = {
    dialogsPage: dialogsPageTypes
    dispatch: (newMessageText: dialogPageActionTypes) => void
}

const Dialogs: React.FC<propsType> = (props) => {
    const dialogsData = props.dialogsPage.dialogsData
    const messagesData = props.dialogsPage.messagesData
    const userIDFromURL: string | undefined = useParams<"*">()["*"]

    console.log()
    return (
        <div>
            <div className={s.dialogsWrap}>
                <div className={s.dialogsItems}>
                    {dialogsData.map(el => <DialogItem {...el} key={el.id}/>)}
                </div>
                <div className={s.messages}>
                    {userIDFromURL
                        ? (messagesData[userIDFromURL].length !== 0)
                            ? <Messages messages={messagesData[userIDFromURL]}/>
                            : <div>no messages</div>
                        : <div>Please, select the Dialog</div>}
                </div>
            </div>
            <SendMessageForm currentUser={userIDFromURL}
                             newMessageText={props.dialogsPage.textAreaValue}
                             dispatch={props.dispatch}/>
        </div>
    );
};

export default Dialogs;
