import React, {ChangeEvent, LegacyRef} from 'react';
import Post from "./Post/Post";
import {postType} from "../../../redux/state";


type propsType = {
    // profilePage: postType[]
    profilePage: {
        postsData: postType[],
        textAreaValue: string
    }
    addPost: () => void,
    changeTextAreaValue: (value: string) => void
}

// const MyPosts: React.FC<propsType> = ( {postsData, addPost, ...restProps} ) => {
const MyPosts: React.FC<propsType> = (props) => {
    const addPost = props.addPost
    const postsData = props.profilePage.postsData
    const changeTextAreaValue = props.changeTextAreaValue


    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef()

    const addPostButtonHandler = () => {
        addPost()
    }

    const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeTextAreaValue(e.currentTarget.value)
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