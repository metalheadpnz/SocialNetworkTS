import React from 'react';
import s from './Dialogs.module.css'
import {useParams} from "react-router-dom";
import Messages from "./Messages";
import DialogItem from "./DialogItem";
// import {dialogPageActionTypes, dialogsPageTypes, dialogType, messageDataType} from "../../redux/dialogs-reducer";
import {dialogType, messageType, storeType} from "../../redux/store";
import SendMessageFormContainer from "./SendMessageFormContainer";
import StoreContext from '../../StoreContext';


type propsType = {
    dialogsData: dialogType[]
    messagesData: { [userID: string]: messageType[] }
    store: storeType
}

const Dialogs: React.FC<propsType> = ({dialogsData, messagesData, store}) => {

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
            <SendMessageFormContainer currentUser={userIDFromURL}
                                      store={store}/>
        </div>
    )
};

export default Dialogs;
