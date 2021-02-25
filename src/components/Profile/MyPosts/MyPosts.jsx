import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 23 },
        { id: 2, message: 'All is well', likesCount: 16 }
    ]
    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Like</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div >
        </div >
    )
}


export default MyPosts;


