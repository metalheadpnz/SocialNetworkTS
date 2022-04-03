import React from 'react';
import {storeType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {addPostAC, changeTextAreaValueAC} from "../../../redux/profile-reducer";

type propsType = {
    store: storeType
}

const MyPostsContainer: React.FC<propsType> = (props) => {
    const state = props.store.getState()
    const dispatch = props.store.dispatch.bind(props.store)

    const addPostButtonHandler = () => {
        dispatch(addPostAC())
    }

    const onTextAreaChange = (newtextAreaValue: string) => {
        // changeTextAreaValue(e.currentTarget.value)
        // props.dispatch({type: 'CHANGE-TEXT-AREA-VALUE', payload: {value: e.currentTarget.value}})
        dispatch(changeTextAreaValueAC(newtextAreaValue))
    }

    return <MyPosts postsData={state.profilePage.postsData}
                    textAreaValue={state.profilePage.textAreaValue}
                    addPostButtonHandler={addPostButtonHandler}
                    onTextAreaChange={onTextAreaChange}/>
};

export default MyPostsContainer;