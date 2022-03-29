import React from 'react';
import s from "./Dialogs.module.css";

const Message: React.FC = () => {
    return (
        <>
            <div className={s.message}>Hi!</div>
            <div className={s.message}>ZX-Spectrum is cool!</div>
            <div className={s.message}>ATMega328 is better then ATiny13</div>
        </>
    );
};

export default Message;