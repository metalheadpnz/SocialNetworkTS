import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, changeTextAreaValueAC, profilePageType} from "../../../redux/profile-reducer";
import {connect} from 'react-redux';
import News from "../../News";
import Profile from "../Profile";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";

type mapDispatchToPropsType = {
    addPostButtonHandler: () => void,
    onTextAreaChange: (newTextAreaValue: string) => void
}

export type MyPostsPropsType = mapDispatchToPropsType & profilePageType
// type propsType = {
//     store: storeType
// }

// const MyPostsContainerDel: React.FC = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState()
//                 const dispatch = store.dispatch.bind(store)
//
//                 const addPostButtonHandler = () => {
//                     dispatch(addPostAC())
//                 }
//
//                 const onTextAreaChange = (newtextAreaValue: string) => {
//                     // changeTextAreaValue(e.currentTarget.value)
//                     // props.dispatch({type: 'CHANGE-TEXT-AREA-VALUE', payload: {value: e.currentTarget.value}})
//                     dispatch(changeTextAreaValueAC(newtextAreaValue))
//                 }
//
//                 return (
//                     <MyPosts postsData={state.profilePage.postsData}
//                              textAreaValue={state.profilePage.textAreaValue}
//                              addPostButtonHandler={addPostButtonHandler}
//                              onTextAreaChange={onTextAreaChange}/>
//                 )
//             }
//             }
//
//         </StoreContext.Consumer>
//     )
// };


let mapStateToProps = (state: AppStateType): profilePageType => {
    return {
        postsData: state.profilePage.postsData,
        textAreaValue: state.profilePage.textAreaValue,
    }
}


let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPostButtonHandler: () => {
            dispatch(addPostAC())
        },
        onTextAreaChange: (newTextAreaValue: string) => {
            dispatch(changeTextAreaValueAC(newTextAreaValue))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;