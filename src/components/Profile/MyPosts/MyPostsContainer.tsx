import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, changeTextAreaValueAC, profilePageType, profileType} from "../../../redux/profile-reducer";
import {connect} from 'react-redux';
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";

type mapDispatchToPropsType = {
    addPostButtonHandler: () => void,
    onTextAreaChange: (newTextAreaValue: string) => void
}

export type MyPostsPropsType = mapDispatchToPropsType & Omit<profilePageType, 'profile'>


let mapStateToProps = (state: AppStateType): Omit<profilePageType, 'profile'> => {
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