import React from 'react';
import StoreContext from '../../StoreContext';
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()
                const dialogsData = state.dialogsPage.dialogsData
                const messagesData = state.dialogsPage.messagesData

                return (
                    <Dialogs dialogsData={dialogsData}
                             messagesData={messagesData}
                             store={store}
                    />
                )
            }}

        </StoreContext.Consumer>
    );
};

export default DialogsContainer;