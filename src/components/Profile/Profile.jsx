import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://images.immediate.co.uk/production/volatile/sites/4/2020/12/GettyImages-1218538247-crop-e13ee73.jpg?quality=90&resize=940%2C400" />
      </div>
      <div>
        <img src="https://catpeople.ru/images/kotoskop/grumpy-cat/serditka1.jpg" />
      </div>
      <MyPosts />
    </div>
  );
}
export default Profile;