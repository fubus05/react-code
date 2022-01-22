import React from 'react';
import s from './MainMenu.module.scss'
import {
    ACCOUNT_PAGE, FORUM_PAGE,
    GUARANTEE_PAGE,
    HOME_PAGE,
    PIN_CODES_PAGE,
    REVIEWS_PAGE,RANDOM_ACCOUNTS_PAGE,
    TOP_USERS_PAGE
} from "../../utils/consts";
import {NavLink} from "react-router-dom";

const MainMenu = () => {


    return (
        <ul className={s.menu}>
            <NavLink className={`menu-option ${s.select}`} to={HOME_PAGE}>главная</NavLink>
                <NavLink className='menu-option' id='unselect' to={ACCOUNT_PAGE}>Аккаунты</NavLink>
                <NavLink to={PIN_CODES_PAGE} className='menu-option' id='unselect'>Пин-коды</NavLink>
                <NavLink className='menu-option' id='unselect' to={TOP_USERS_PAGE}>Топ Юзеров</NavLink>
                <NavLink className='menu-option' id='unselect'
                        to={REVIEWS_PAGE}>Отзывы</NavLink>
                <NavLink className='menu-option' id='unselect'
                        to={GUARANTEE_PAGE}>Гарантии</NavLink>
                <NavLink className='menu-option' id='unselect' to={RANDOM_ACCOUNTS_PAGE}>Рулетки</NavLink>                <NavLink className='menu-option' id='unselect'
                        to={FORUM_PAGE}>Форум</NavLink>
        </ul>
    );
};

export default MainMenu;