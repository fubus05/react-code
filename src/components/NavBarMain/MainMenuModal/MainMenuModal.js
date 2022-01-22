import React from 'react';
import s from './MainMenuModal.module.scss'
import {
    ACCOUNT_PAGE, FORUM_PAGE,
    GUARANTEE_PAGE,
    HOME_PAGE,
    PIN_CODES_PAGE,
    REVIEWS_PAGE, ROULLETSE_PAGE,
    TOP_USERS_PAGE
} from "../../../utils/consts";
import {NavLink} from "react-router-dom";

const MainMenuModal = ({children}) => {
    const menus = [
        {name: 'Главная', path: HOME_PAGE, active: s.select},
        {name: 'Аккаунты', path: ACCOUNT_PAGE, active: s.unselect},
        {name: 'Пин-коды', path: PIN_CODES_PAGE, active: s.unselect},
        {name: 'Топ Юзеров', path: TOP_USERS_PAGE, active: s.unselect},
        {name: 'Отзывы', path: REVIEWS_PAGE, active: s.unselect},
        {name: 'Гарантии', path: GUARANTEE_PAGE, active: s.unselect},
        {name: 'Рулетки', path: ROULLETSE_PAGE, active: s.unselect},
        {name: 'Форум', path: FORUM_PAGE, active: s.unselect},
    ]

    return (
        <div className={s.container}>
            <div className={s.menuWrapper}>
                <ul className={s.menu}>
                    {
                        menus.map((i, index) =>
                            <li key={index} className={s.item}>
                                <NavLink
                                    className={`menu-option ${i.active}`}
                                    to={i.path}
                                >
                                    {i.name}
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className={s.sidebar}>
                {children}
            </div>
        </div>
    );
};

export default MainMenuModal;