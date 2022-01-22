import React from 'react';
import s from './ServiceMessageList.module.scss'
import ic_delete from '../../../assets/img/ic_delete_msg.png'
import ic_arrow from '../../../assets/img/ic-sml-arrow-right.png'


const ServiceMessageList = () => {
    return (
        <div className={s.container}>
            <ul className={s.serviceList}>
                <li className={s.serviceListItem}>
                    <img height="16px" src={ic_arrow} alt="arrow"/>
                    <p className={s.itemText}>Добавлено 30/100 шт. - Проверенно</p>
                    <img className={s.removeMsg} height="16px" src={ic_delete} alt="icon"/>
                </li>
            </ul>
            <ul className={s.serviceList}>
                <li className={s.serviceListItem}>
                    <img height="16px" src={ic_arrow} alt="arrow"/>
                    <p className={s.itemText}>Добавлено 30/100 шт. - Проверенно</p>
                    <img className={s.removeMsg} height="16px" src={ic_delete} alt="icon"/>
                </li>
            </ul>
            <ul className={s.serviceList}>
                <li className={s.serviceListItem}>
                    <img height="16px" src={ic_arrow} alt="arrow"/>
                    <p className={s.itemText}>Добавлено 30/100 шт. - Проверенно</p>
                    <img className={s.removeMsg} height="16px" src={ic_delete} alt="icon"/>
                </li>
            </ul>
        </div>
    );
};

export default ServiceMessageList;