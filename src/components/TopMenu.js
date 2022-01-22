import React from 'react';
import {NavLink} from "react-router-dom";
import {
    ACCOUNT_PAGE,
    ACCOUNTS_PAGE, ACHIEVEMENTS_PAGE, ACHIEVEMENTS_V2_PAGE, CHAT_USERS_PAGE, FAQ_PAGE, FORUM_PAGE,
    GUARANTEE_PAGE, HISTORY_PAGE,
    HOME_PAGE, MY_PRODUCT_PAGE,
    PIN_CODES_PAGE, PRODUCTS_PAGE, PROFILE_PAGE,
    RANDOM_ACCOUNTS_PAGE, REFER_PAGE,
    REVIEWS_PAGE, ROULLETSE_PAGE, SETTINGS_PAGE, SUPPORT_PAGE, TABLE_PAGE,
    TOP_USERS_PAGE, ZAKLADKY_PAGE
} from "../utils/consts";
import alarm from "../assets/img/alarm.svg";
import add from "../assets/img/2068204226775625365c.svg";
import ava from "../assets/img/ava.png";

const changeStyle = () =>{

}

const TopMenu = () => {
    return (
        <div className='menu-top'>
            <div className='menu'>
                <NavLink className='menu-option' id='select' onClick={changeStyle} to={HOME_PAGE}>главная</NavLink>
                <NavLink to={PROFILE_PAGE} className='menu-option' id='unselect' onClick={changeStyle}>Профайл</NavLink>
                <NavLink to={PIN_CODES_PAGE} className='menu-option' id='unselect' onClick={changeStyle}>Пин-коды</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle} to={TOP_USERS_PAGE}>Топ Юзеров</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={REVIEWS_PAGE}>Отзывы</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={GUARANTEE_PAGE}>Гарантии</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle} to={RANDOM_ACCOUNTS_PAGE}>случайные
                    аккаунты</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle} to={ACCOUNT_PAGE}>Аккаунт</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={FORUM_PAGE}>Форум</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={ROULLETSE_PAGE}>Roulletse</NavLink>

                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={HISTORY_PAGE}>History</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={MY_PRODUCT_PAGE}>My Product</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={FAQ_PAGE}>Faq</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={SUPPORT_PAGE}>Support</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={ZAKLADKY_PAGE}>Zakladky</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={PRODUCTS_PAGE}>Products</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={CHAT_USERS_PAGE}>Chat Users</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={REFER_PAGE}>Рефералы</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={SETTINGS_PAGE}>Settings</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={TABLE_PAGE}>Table</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={ACHIEVEMENTS_PAGE}>Достижения</NavLink>
                <NavLink className='menu-option' id='unselect' onClick={changeStyle}
                         to={ACHIEVEMENTS_V2_PAGE}>Достижения 2</NavLink>

            </div>
            <div className='kompani'>
                <button className='alart'>
                    <img src={alarm} alt={"bgc-logo"}/>
                </button>
                <div className='sherder'>
                    <div className='banance'>
                        <button className='bBalance'>5 100B</button>
                        <button className='realBalance'>5 100₽ <img src={add} alt={"bgc-logo"}
                                                                    className='spit'/></button>
                    </div>
                    <div className='TextName'>
                        <img src={ava} alt={"bgc-logo"} className='ttr'/>
                        Shenderro
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;