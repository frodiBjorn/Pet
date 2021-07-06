import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

  let postsElements = props.posts.map(
    p => <Post message={p.message} likesCount={p.likesCount} />
  )
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text)
  }

  let newPostElement = React.createRef()

  return (
    <div className={s.postsBlock}>
      <h3>MyPosts</h3>
      <div>
        <div>
          <textarea ref = {newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;