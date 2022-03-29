import React from 'react';
import s from "./Dialogs.module.css";

type propsType = {
    id: string
    title: string
}

const Message: React.FC<propsType> = ({title}) => {
    return (
        <div className={s.message}>{title}</div>
    );
};

export default Message;