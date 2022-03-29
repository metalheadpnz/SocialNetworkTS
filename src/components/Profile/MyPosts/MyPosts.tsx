import React from 'react';
import Post from "./Post/Post";
import {postType} from "../../../index";

type propsType = {
    postsData: postType[]
}

const MyPosts: React.FC<propsType>= ({postsData}) => {

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