import React from 'react';
import s from "./Dialogs.module.css";
import {messageType} from "../../redux/dialogs-reducer";


type propsType = {
    messages: messageType[]
}

const Messages: React.FC<propsType> = (props) => {

    return <div>
        {props.messages.map(el => <div className={s.message} key={el.messageID}>{el.title}</div>)}
    </div>
};

export default Messages;