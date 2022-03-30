import React from 'react';
import s from './Dialogs.module.css'
import {useParams} from "react-router-dom";
import Messages from "./Messages";
import DialogItem from "./DialogItem";
import {dialogType, messageDataType} from "../../redux/state";


type propsType = {
    dialogsPage: {
        dialogsData: dialogType[]
        messagesData: messageDataType
    }
}

const Dialogs: React.FC<propsType> = (props) => {
    const dialogsData = props.dialogsPage.dialogsData
    const messagesData = props.dialogsPage.messagesData
    const userIDFromURL: string | undefined = useParams<"*">()["*"]

    return (
        <div className={s.dialogsPageWrap}>
            <div className={s.dialogsItems}>
                {dialogsData.map(el => <DialogItem {...el} key={el.id}/>)}
            </div>
            <div className={s.messages}>
                {userIDFromURL
                    ? (userIDFromURL in messagesData)
                        ? <Messages messages={messagesData[userIDFromURL]}/>
                        : <div>no messages</div>
                    : <div>Please, select the Dialog</div>}
            </div>

        </div>
    );
};

export default Dialogs;
