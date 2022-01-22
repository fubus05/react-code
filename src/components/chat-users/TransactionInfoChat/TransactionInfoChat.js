import React from 'react';
import s from './TrasactionInfoChat.module.scss'
import dots from '../../../assets/img/dots-57-39.png'

const TransactionInfoChat = () => {
    return (
        <div className={`card ${s.container}`}>
            <img className={s.dotsLeft} src={dots} alt="dots" width="57"/>
            <img className={s.dotsRight} src={dots} alt="dots" width="57"/>
            <h5 className={s.title}>Информация для сделки</h5>
            <ol className={s.listDesc}>
                <li>
                    Покупатель должен сообщить в чате
                    о готовности покупке товара
                </li>
                <li>
                    Продавец начинает сделку,  нажав на кнопку “Отправить товар”
                </li>
                <li>
                    После проверки товара покупатель
                    завершает сделку.
                </li>
            </ol>
        </div>
    );
};

export default TransactionInfoChat;