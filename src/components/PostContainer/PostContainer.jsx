import React, {useState, useEffect} from 'react';
import s from './PostContainer.module.sass'
import Post from "../Post";

function PostContainer() {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(data => setPosts(data));
    };

    useEffect(getPosts, [])

    return (
        <div className={s.container}>
            <h2>Посты пользователей:</h2>
            <div className={s.postContainer}>
                {posts.map(post => <Post data={post} key={post.id}/>)}
            </div>
        </div>

    );
}

export default PostContainer;