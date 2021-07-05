import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
  {id: 1, message: "Hi, how are you?", likesCount: 4},
  {id: 2, message: "It is my first post",likesCount: 12},
  {id: 3, message: "My name is Ivan",likesCount: 2},

]

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
        <Post message= {postsData[0].message} counter={postsData[0].likesCount} />
        <Post message={postsData[1].message} counter={postsData[1].likesCount} />
        <Post message={postsData[2].message} counter={postsData[2].likesCount} />
      </div>
    </div>
  );
}
export default MyPosts;