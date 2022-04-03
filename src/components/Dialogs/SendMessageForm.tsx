import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'



type propsType = {
    textAreaValue: string
    sendMessage: () => void
    updateTextArea: (text: string) => void
}
const SendMessageForm: React.FC<propsType> = (
    {
        textAreaValue,
        sendMessage,
        updateTextArea
    }
) => {

    const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateTextArea(e.currentTarget.value)
    }

    return (
        <div className={s.sendMessageForm}>
            <textarea onChange={onTextAreaChangeHandler}
                      value={textAreaValue}/>
            <div>
                <button onClick={sendMessage}>send message</button>
            </div>

        </div>
    );
};

export default SendMessageForm;