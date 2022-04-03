import React, {ChangeEvent, LegacyRef} from 'react';
import s from './Dialogs.module.css'
import {actionsTypes} from "../../redux/store";
import {addMessageAC, changeNewMessageTextAC} from "../../redux/dialogs-reducer";


type propsType = {
    dispatch: (newMessageText: actionsTypes) => void
    newMessageText: string
    currentUser: string | undefined
}
const SendMessageForm: React.FC<propsType> = (props) => {
    const newMessageText: LegacyRef<HTMLTextAreaElement> = React.createRef()
    const sendMessage = () => {
        props.currentUser ? props.dispatch(addMessageAC(props.currentUser)) : alert('select the dialog')
    }

    const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.sendMessageForm}>
            <textarea onChange={onTextAreaChangeHandler}
                      value={props.newMessageText}
                      ref={newMessageText}/>
            <div>
                <button onClick={sendMessage}>send message</button>
            </div>

        </div>
    );
};

export default SendMessageForm;