import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className ={s.profileImage} src="https://images.immediate.co.uk/production/volatile/sites/4/2020/12/GettyImages-1218538247-crop-e13ee73.jpg?quality=90&resize=940%2C400" />
      </div>
      <div className = {s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
}
export default ProfileInfo;