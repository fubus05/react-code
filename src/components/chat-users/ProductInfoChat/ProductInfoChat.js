import React from 'react';
import s from './ProductInfoChat.module.scss'
import dots from '../../../assets/img/dots-57-39.png'
import scull from '../../../assets/img/ic-scull.png'
import {Button} from "react-bootstrap";

const ProductInfoChat = () => {
    return (
        <div className={`card ${s.container}`}>
            <img className={s.dotsLeft} src={dots} alt="dots" width="57"/>
            <img className={s.dotsRight} src={dots} alt="dots" width="57"/>
            <h5 className={s.title}>Информация о товаре</h5>
            <div className={s.cardWrapper}>
                <img src={scull} width="55" alt="scull"/>
                <div className={s.cardInfo}>
                    <h6 className={s.productName}>НАЗВАНИЕ ТОВАРА:</h6>
                    <h6 className={s.productTitle}>Makmilan Gr-30</h6>
                    <ol className={s.listDesc}>
                        <li>Тип: Оружие</li>
                        <li>Кол: 25</li>
                        <li>Продажа от: 25 шт</li>
                        <li>Срок: Навсегда</li>
                    </ol>
                </div>
            </div>
            <div className={s.statusWrapper}>
                <p className={s.status}>Ожидайте отправки товара
                    от продавца</p>
                <Button
                    variant="light"
                >
                    Принять товар
                </Button>
            </div>
        </div>
    );
};

export default ProductInfoChat;