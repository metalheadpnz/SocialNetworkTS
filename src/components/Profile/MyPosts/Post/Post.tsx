import React from 'react';
import style from './Post.module.css'

type postPropsType = {
    message: string
    likeCounter: number
    id: string
}


const Post = (props: postPropsType) => {
    let {message, likeCounter} = props
    return (
        <div>
            <img className={style.test}
                 src="https://cdn-1.motorsport.com/static/img/amp/4900000/4970000/4975000/4975300/4975383/s6_1005024/1005024.jpg"
                 alt=""/>
            <span>
                {message} &nbsp;
            </span>
            <div>{likeCounter} &#x2661;</div>
        </div>
    );
};

export default Post;