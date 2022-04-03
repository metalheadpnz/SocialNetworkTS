import React from 'react';
import s from './Dialogs.module.css'
import {useParams} from "react-router-dom";
import Messages from "./Messages";
import DialogItem from "./DialogItem";
// import {dialogPageActionTypes, dialogsPageTypes, dialogType, messageDataType} from "../../redux/dialogs-reducer";
import {storeType} from "../../redux/store";
import SendMessageFormContainer from "./SendMessageFormContainer";


type propsType = {
    store: storeType
}

// type propsType = {
//     store: storeType
//     dialogsPage: dialogsPageTypes
//     dispatch: (newMessageText: actionsTypes) => void
// }

const Dialogs: React.FC<propsType> = (props) => {
    const state = props.store.getState()
    const dialogsData = state.dialogsPage.dialogsData
    const messagesData = state.dialogsPage.messagesData
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
            <SendMessageFormContainer currentUser={userIDFromURL}
                                      store={props.store}/>
            {/*<SendMessageForm currentUser={userIDFromURL}*/}
            {/*                 newMessageText={props.dialogsPage.textAreaValue}*/}
            {/*                 dispatch={props.dispatch}/>*/}
        </div>
    );
};

export default Dialogs;
