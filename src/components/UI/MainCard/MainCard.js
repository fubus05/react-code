import React from 'react';
import s from './MainCard.module.scss'
import star from '../../../assets/img/ic_action_star.png'

const MainCard = ({data}) => {
    return (
        <div key={data.id} className={s.mainCard}>
            <div className={s.mainStars}>
            <img src={star} className={s.star} alt="star"/>
            </div>
            <div className={s.content}>
                <h5 className={s.title}>
                    {data.title}
                </h5>
                <div className={s.greenLine}/>
                <p className={s.body}>
                    {data.content}
                </p>
            </div>
        </div>
    );
};

export default MainCard;