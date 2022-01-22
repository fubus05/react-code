import React from 'react';
import s from './ChatContainer.module.scss'
import avaBuyer from '../../../assets/img/ava.png'
import avaSeller from '../../../assets/img/avatar.png'
import ic_attention from '../../../assets/img/ic_attention.png'
import ic_cast from '../../../assets/img/ic_cast.png'
import TextMessage from "../TextMessage/TextMessage";
import ServiceMessage from "../ServiceMessage/ServiceMessage";
import ServiceMessageList from "../ServiceMessageList/ServiceMessageList";
import InputChat from "../InputChat/InputChat";

const ChatContainer = () => {
    return (
        <div className={`card ${s.container}`}>
            <div className={s.header}>
                <div className={s.buyerHead}>
                    <div className={s.avatarBlock}>
                        <img src={avaBuyer} width="59px" alt="avatar"/>
                    </div>
                    <p className={s.profileName}>Shenderro</p>
                </div>
                <div className={s.sellerHead}>
                    <img src={ic_attention} className={s.icon} alt="icon"/>
                    <img src={ic_cast} className={s.icon} alt="icon"/>
                    <p className={s.profileName}>Allice</p>
                    <div className={s.avatarBlock}>
                        <img src={avaSeller} width="59px" alt="avatar"/>
                        <div className={s.isOnline}/>
                    </div>
                </div>
            </div>
            <div className={s.body}>
                <TextMessage avatar={avaBuyer} />
                <TextMessage avatar={avaSeller} isRight={true} />
                <ServiceMessage />
                <ServiceMessageList />
            </div>
            <div className={s.footer}>
                <InputChat />
                <p className={s.paragraph}>
                    Перейти в чат
                </p>
            </div>
        </div>
    );
};

export default ChatContainer;