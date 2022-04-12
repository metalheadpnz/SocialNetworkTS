import React from 'react';
import {connect} from 'react-redux';
import Dialogs from "./Dialogs";

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState()
//                 const dialogsData = state.dialogsPage.dialogsData
//                 const messagesData = state.dialogsPage.messagesData
//
//                 return (
//                     <Dialogs dialogsData={dialogsData}
//                              messagesData={messagesData}
//                              store={store}
//                     />
//                 )
//             }}
//
//         </StoreContext.Consumer>
//     );
// };

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;