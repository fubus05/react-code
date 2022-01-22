import React from 'react';
import s from './ServiceMessage.module.scss'
import icon from '../../../assets/img/ic-msg-service.png'

const ServiceMessage = () => {
    return (
        <div className={s.serviceMessage}>
            <img src={icon} height='25px' alt="icon"/>
            <p className={s.message}>
                Покупатель поменял количество товара на 253 шт
            </p>
        </div>
    );
};

export default ServiceMessage;