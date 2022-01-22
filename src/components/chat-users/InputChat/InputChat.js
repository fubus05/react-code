import React from 'react';
import s from './InputChat.module.scss'
import ic_clip from '../../../assets/img/ic_clip.png'
import ic_photo from '../../../assets/img/ic_photo.png'
import ic_send from '../../../assets/img/ic_send.png'

const InputChat = () => {
    return (
        <div className={s.inputChatContainer}>
            <label className={s.inputLabel}>
                Вставьте содержимое товара...
            </label>
            <div className={s.inputBlock}>
                <input type="text" className={s.inputField}/>
                <img src={ic_photo} className={s.btnClip} height="22px" alt="button"/>
                <img src={ic_clip} className={s.btnClip} height="22px" alt="button"/>
                <img src={ic_send} className={s.btnClip} height="22px" alt="button"/>
            </div>
        </div>
    );
};

export default InputChat;