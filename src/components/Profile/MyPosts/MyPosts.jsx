import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 4 },
  { id: 2, message: "It is my first post", likesCount: 12 },
  { id: 3, message: "My name is Ivan", likesCount: 2 },
]
let postsElements = posts.map(
  p => <Post message={p.message} likesCount={p.likesCount} />
)

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>MyPosts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;