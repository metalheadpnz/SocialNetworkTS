import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {SendMessageFormPropsType} from "./SendMessageFormContainer";


type propsType = SendMessageFormPropsType
const SendMessageForm: React.FC<propsType> = (
    {
        textAreaValue,
        sendMessage,
        updateTextArea,
        currentUser,
    }
) => {

    const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateTextArea(e.currentTarget.value)
    }

    const sendMessageButtonHandler = () => {
        currentUser ? sendMessage(currentUser) : alert('select the dialog')
    }

    return (
        <div className={s.sendMessageForm}>
            <textarea onChange={onTextAreaChangeHandler}
                      value={textAreaValue}/>
            <div>
                <button onClick={sendMessageButtonHandler}>send message</button>
            </div>

        </div>
    );
};

export default SendMessageForm;