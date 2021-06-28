import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (

    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrlp977ZuWHOhcKQdzVtvaiXI_pjV27SZTg&usqp=CAU" alt="avatar" />
      {props.message}
      <div>
        <span>like</span>{props.counter}
      </div>

    </div>

  );
}
export default Post;