import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import {postType} from "../../../redux/store";


type propsType = {
    addPostButtonHandler: () => void
    textAreaValue: string
    onTextAreaChange: (text: string) => void
    postsData: postType[]
}

// const MyPosts: React.FC<propsType> = ( {postsData, addPost, ...restProps} ) => {
const MyPosts: React.FC<propsType> = (
    {
        textAreaValue,
        addPostButtonHandler,
        onTextAreaChange,
        postsData
    }) => {
    // const postsData = props.profilePage.postsData
    //
    // const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef()
    //
    // const addPostButtonHandler = () => {
    //     props.dispatch(addPostAC())
    //     //   addPost()
    // }

    const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // changeTextAreaValue(e.currentTarget.value)
        // props.dispatch({type: 'CHANGE-TEXT-AREA-VALUE', payload: {value: e.currentTarget.value}})
        // props.dispatch(changeTextAreaValueAC(e.currentTarget.value))
        onTextAreaChange(e.currentTarget.value)
    }

    return (
        <div className={'p10'}>
            <div className={'postForm'}>
                <textarea value={textAreaValue}
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