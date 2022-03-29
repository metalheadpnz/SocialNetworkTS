import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    const postsData = [
        {id: '1', message: 'Чики брики', likeCounter: 5},
        {id: '2', message: 'Тоси боси', likeCounter: 100500},
        {id: '3', message: 'glory to heroes', likeCounter: 99},
    ]

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
                    {postsData.map(el => <Post {...el} key={el.id}/>)}
                </div>
            </div>

        </div>
    );
};

export default MyPosts;