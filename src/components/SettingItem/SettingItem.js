import React from 'react';
import s from './SettingItem.module.scss'

const SettingItem = ({data}) => {
    return (
        <div className={s.item}>
            <div className={s.content}>
                <h6 className={s.title}>{data.title}</h6>
                <p className={s.data}>{data.content}</p>
            </div>
            <img src={data.icon} alt="icon" width={data.width} height={data.height}/>
        </div>
    );
};

export default SettingItem;