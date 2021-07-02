import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

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
        <Post message="Hi, how are you?" counter="2" />
        <Post message="It is my first post" counter="3" />
        <Post message="My name is Ivan" counter="4" />
      </div>
    </div>
  );
}
export default MyPosts;