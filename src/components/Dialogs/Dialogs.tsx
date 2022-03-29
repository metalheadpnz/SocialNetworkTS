import React from 'react';
import s from './Dialogs.module.css'
import {useParams} from "react-router-dom";
import Messages from "./Messages";
import DialogItem from "./DialogItem";


const Dialogs: React.FC = () => {


    const dialogsData = [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Linus'},
        {id: '3', name: 'Elon'},
        {id: '4', name: 'Mark'}
    ]

    // const messagesData: messageType[] = [
    //     {id: '1', title: 'Hi!'},
    //     {id: '2', title: 'ZX-Spectrum is cool!'},
    //     {id: '3', title: 'ATMega328 is better then ATiny13'}
    // ]
    type messageDataType = {
        [userID: string]: messageType[]
    }

    const messagesData: messageDataType = {
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


                {/*{userIDFromURL && (userIDFromURL in messagesData)*/}
                {/*    ? <Messages messages={messagesData[userIDFromURL]}/>*/}
                {/*    : <div>Please, select the Dialog</div>}*/}

            </div>

        </div>
    );
};

export default Dialogs;
export type messageType = { messageID: string, title: string };