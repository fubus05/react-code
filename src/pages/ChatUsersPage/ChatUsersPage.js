import React from 'react';
import '../../general.scss'
import s from './ChatUsers.module.scss'
import dstos from "../../assets/img/dsots.svg";
import ProductInfoChat from "../../components/chat-users/ProductInfoChat/ProductInfoChat";
import TransactionInfoChat from "../../components/chat-users/TransactionInfoChat/TransactionInfoChat";
import ChatContainer from "../../components/chat-users/ChatContainer/ChatContainer";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";

const ChatUsersPage = () => {

    return (
        <LayoutGeneral>
            <div className={`container ${s.content}`}>
                <div className='titleBlock'>
                    <img src={dstos} alt={"bgc-logo"} className='dsot'/>
                    <div className='title-titleBlock'>
                        <h1>Чат с продавцом Alice</h1>
                    </div>
                </div>
                <div className={s.chatSection}>
                    <div className={s.leftSide}>
                        <ProductInfoChat />
                        <TransactionInfoChat />
                    </div>
                    <div className={s.rightSide}>
                        <ChatContainer />
                    </div>
                </div>
            </div>
        </LayoutGeneral>
    );
};

export default ChatUsersPage;