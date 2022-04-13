import React from 'react';
import s from './Dialogs.module.css'
import {useParams} from "react-router-dom";
import Messages from "./Messages";
import DialogItem from "./DialogItem";

import {SendMessageFormContainer} from "./SendMessageFormContainer";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs: React.FC<DialogsPropsType> = ({dialogsData, messagesData}) => {

    const userIDFromURL: string | undefined = useParams<"*">()["*"]

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
            <SendMessageFormContainer currentUser={userIDFromURL}/>
        </div>
    )
};

export default Dialogs;
