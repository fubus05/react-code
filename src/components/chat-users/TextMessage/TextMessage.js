import React from 'react';
import s from './TextMessage.module.scss'
import ic_calendar from '../../../assets/img/ic_calendar.png'
import ic_delete from '../../../assets/img/ic_delete_msg.png'
import ic_checked from '../../../assets/img/ic_is_checked.png'

const TextMessage = ({isRight = false, avatar}) => {
    const revers = isRight ? 'flex-end' : 'flex-start'
    const fd = isRight ? 'row-reverse' : 'row'
    return (
        <div
            className={`${s.textMessage}`}
            style={{alignSelf: revers, flexDirection: fd}}
        >
            <img src={avatar} alt="avatar" width='50px' height='50px'/>
            <div
                className={s.textBody}
                style={{flexDirection: fd}}
            >
                {
                    !isRight && <div className={s.arrowLeft} />
                }
                <span className={`card ${s.msg}`}>
                    Привет, как дела ?
                </span>
                <div className={s.dateWrapper}>
                    <img src={ic_calendar} height='16px' alt="icon"/>
                    <span className={s.date}>
                    12.09.2019
                </span>
                    <img src={ic_delete} height='16px' alt="icon"/>
                </div>
                {
                    isRight && <div className={s.arrowRight} />
                }
            </div>
            <img src={ic_checked} alt="icon" width='16px'/>
        </div>
    );
};

export default TextMessage;