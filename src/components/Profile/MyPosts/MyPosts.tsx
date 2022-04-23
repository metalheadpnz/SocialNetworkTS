import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


const MyPosts: React.FC<MyPostsPropsType> = (
    {
        textAreaValue,
        addPostButtonHandler,
        onTextAreaChange,
        postsData
    }) => {

    const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

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