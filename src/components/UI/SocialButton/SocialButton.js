import React from 'react';
import s from './SocialButton.module.scss'
import icon from  '../../../assets/img/ic_vk.png'

const SocialButton = () => {
    return (
        <div className={s.socialWrapper}>
            <img src={icon} alt="vk" className={s.icon}/>
            <div className={s.social}/>
        </div>
    );
};

export default SocialButton;