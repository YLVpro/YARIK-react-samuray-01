import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://1informer.com/wp-content/uploads/2020/03/apple8.0.jpg' />
            { props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
