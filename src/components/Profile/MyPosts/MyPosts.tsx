import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={'postForm'}>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div>
                my posts
                <div>
                    <Post message={'Чики брики'} likeCounter={5}/>
                    <Post message={'Тоси боси'} likeCounter={100500}/>
                    <Post message={'Hello world'} likeCounter={99}/>
                </div>
            </div>

        </div>
    );
};

export default MyPosts;