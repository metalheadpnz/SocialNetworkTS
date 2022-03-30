import React, {LegacyRef} from 'react';
import s from './Dialogs.module.css'

const SendMessageForm = () => {
    const newMessageText: LegacyRef<HTMLTextAreaElement> = React.createRef()
    const sendMessage = () => {
        alert(newMessageText.current?.value)
    }

    return (
        <div className={s.sendMessageForm}>
            <textarea ref={newMessageText}></textarea>
            <div>
                <button onClick={sendMessage}>send message</button>
            </div>

        </div>
    );
};

export default SendMessageForm;