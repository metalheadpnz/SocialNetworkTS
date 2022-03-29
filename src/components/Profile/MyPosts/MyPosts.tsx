import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={'p10'}>
            <div className={'postForm'}>
                <textarea></textarea>
                <div>
                    <button>add post</button>
                </div>

            </div>
            <div className={'pt20'}>
                <h3>my posts</h3>
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