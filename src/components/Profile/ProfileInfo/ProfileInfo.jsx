import React from 'react';
import c from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (

        <div>
            <div>
                <img src='https://alfaplusgo.com/assets/images/slides/1601007464.jpg' />
            </div>
            <div className={c.descriptionBlock}>
                ava + description
        </div>
        </div>
    )
}

export default ProfileInfo;
