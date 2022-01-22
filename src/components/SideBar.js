import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {
    HISTORY_PAGE, ZAKLADKY_PAGE, HISTORY_VIEW
} from "../utils/consts";
import sellLogo from "../assets/img/cart.svg";
import favorite from "../assets/img/favorite.svg";
import history from "../assets/img/list.svg";
import heart from "../assets/img/heart.svg";
import sf from "../assets/img/warFace.svg";
import ve from "../assets/img/Vector.svg";
import mmail from "../assets/img/chat.svg";
import headphon from "../assets/img/headphones.svg";

const SideBar = () => {
    return (
        <div className='left-side'>
            <div className='left-side-logo'></div>
            <div className='stats'>
                <div className='buy-stat'>
                    <div className='ssttaatter'></div>
                </div>
                <div className='buy-text'>
                    <p className='number-buy'>181 924 36</p>
                    <p className='stat-name'>Купленно товаров</p>
                </div>
                <div className='online-stat'>
                    <div className='onlineLoger'></div>
                </div>
                <div className='buy-text'>
                    <p className='number-buy'>486 532</p>
                    <p className='stat-name'>Пользователей</p>
                </div>
            </div>
            <div className='section-button'>
                <div className='sell-button'>
                    <div className='sell-logo'>
                        <img src={sellLogo} alt={"bgc-logo"}/>
                    </div>
                    <p className='txtButton'>Продать товар</p>
                </div>
                <NavLink style={{textDecoration:'none'}}
                        to={ZAKLADKY_PAGE}><div className='sell-button'>
                    <div className='sell-logo'>
                        <img src={favorite} alt={"bgc-logo"}/>
                    </div>
                    <p className='txtButton'>закладки</p>
                </div></NavLink>
                <NavLink style={{textDecoration:'none'}}
                        to={HISTORY_VIEW}> <div className='sell-button'>
                    <div className='sell-logo'>
                        <img src={heart} alt={"bgc-logo"}/>
                    </div>
                    <p className='txtButton'>история просмотра</p>
                </div></NavLink>
                <NavLink className='menu-option' id='unselect'
                        to={HISTORY_PAGE}> <div className='sell-button'>
                    <div className='sell-logo'>
                        <img src={heart} alt={"bgc-logo"}/>
                    </div>
                    <p className='txtButton'>история покупок и продаж</p>
                </div></NavLink>
            </div>
            <div className='dwerrt'>
                <div className='select-sec'>
                    <div className='default-option'>
                        <img src={sf} alt={"bgc-logo"} className='wf-logo'/>
                        <p className='warppp'>warface</p>
                        <img src={ve} alt={"bgc-logo"} className='angel-down'/>
                    </div>
                </div>
                <div className='sec-support'>
                    <div className='myMail'>
                        <img src={mmail} alt={"bgc-logo"} className='mmrai'/>
                        Мои Сообщения
                    </div>
                    <div className='mySp'>
                        <img src={headphon} alt={"bgc-logo"} className='mmrai'/>
                        Тех. Поддержка
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;