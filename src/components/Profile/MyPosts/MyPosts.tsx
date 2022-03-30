import React, {LegacyRef} from 'react';
import Post from "./Post/Post";
import {postType} from "../../../redux/state";


type propsType = {
    postsData: postType[]
}

const MyPosts: React.FC<propsType> = ({postsData}) => {

    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        const text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={'p10'}>
            <div className={'postForm'}>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>add post</button>
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