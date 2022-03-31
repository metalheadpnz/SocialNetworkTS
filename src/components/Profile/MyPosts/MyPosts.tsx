import React, {LegacyRef} from 'react';
import Post from "./Post/Post";
import {postType} from "../../../redux/state";


type propsType = {
    postsData: postType[]
    addPost: (newPostTitle: string) => void
}

const MyPosts: React.FC<propsType> = ({postsData, addPost}) => {

    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef()

    const addPostButtonHandler = () => {
        const text = newPostElement.current?.value
        text && addPost(text)
        console.log(postsData)
    }

    return (
        <div className={'p10'}>
            <div className={'postForm'}>
                <textarea ref={newPostElement}></textarea>
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