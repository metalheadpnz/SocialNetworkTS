import React from 'react';
import {storeType} from "../../redux/store";
import SendMessageForm from "./SendMessageForm";
import {addMessageAC, changeNewMessageTextAC} from "../../redux/dialogs-reducer";

type propTypes = {
    store: storeType
    currentUser: string | undefined
}

const SendMessageFormContainer: React.FC<propTypes> = (props) => {
    const state = props.store.getState()
    const dispatch = props.store.dispatch.bind(props.store)

    const sendMessage = () => {
        props.currentUser ? dispatch(addMessageAC(props.currentUser)) : alert('select the dialog')
    }

    const updateTextArea = (text: string) => {
        dispatch(changeNewMessageTextAC(text))
    }

    return <SendMessageForm updateTextArea={updateTextArea}
                            sendMessage={sendMessage}
                            textAreaValue={state.dialogsPage.textAreaValue}/>
};

export default SendMessageFormContainer;