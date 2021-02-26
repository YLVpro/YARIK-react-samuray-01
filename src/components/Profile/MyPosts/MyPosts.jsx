import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {

    let postsElemenrs =
    props.posts.map( p => <Post message={p.message} likesCount={p.likseCount}/>);

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


