import React, {ChangeEvent, LegacyRef} from 'react';
import Post from "./Post/Post";
import {postType} from "../../../redux/state";


type propsType = {
    // profilePage: postType[]
    profilePage: {
        postsData: postType[],
        textAreaValue: string
    }
    dispatch: (action: { type: string, payload?: any }) => void
}

// const MyPosts: React.FC<propsType> = ( {postsData, addPost, ...restProps} ) => {
const MyPosts: React.FC<propsType> = (props) => {
    const postsData = props.profilePage.postsData

    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef()

    const addPostButtonHandler = () => {
        props.dispatch({type: 'ADD-POST'})
        //   addPost()
    }

    const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // changeTextAreaValue(e.currentTarget.value)
        props.dispatch({type: 'CHANGE-TEXT-AREA-VALUE', payload: {value: e.currentTarget.value}})
    }

    return (
        <div className={'p10'}>
            <div className={'postForm'}>
                <textarea ref={newPostElement} value={props.profilePage.textAreaValue}
                          onChange={onTextAreaChangeHandler}/>
                <div>
                    <button onClick={addPostButtonHandler}>add post</button>
                </div>

            </div>
            <div className={'pt20'}>
                <h3>my posts</h3>
                <div>
                    {postsData.map(el => <Post {...el} key={el.id}/>)}
                </div>
            </div>

        </div>
    );
};

export default MyPosts;