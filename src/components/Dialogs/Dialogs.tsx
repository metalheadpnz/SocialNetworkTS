import React from 'react';
import s from './Dialogs.module.css'

const Dialogs: React.FC = () => {
    return (
        <div className={s.dialogsPageWrap}>
            <div className={s.dialogsItems}>
                <div className={s.dialogs}>Mark</div>
                <div className={s.dialogs}>Elon</div>
                <div className={s.dialogs}>Linus</div>
                <div className={s.dialogs}>Dymich</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>ZX-Spectrum is cool!</div>
                <div className={s.message}>ATMega328 is better then ATiny13</div>
            </div>


        </div>
    );
};

export default Dialogs;