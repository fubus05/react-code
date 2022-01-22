import React, { useState, useEffect, useRef } from 'react';
import s from './TopMenu.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import {
    ACCOUNT_PAGE, ACHIEVEMENTS_V2_PAGE, CHAT_USERS_PAGE, FAQ_PAGE, FORUM_PAGE,
    GUARANTEE_PAGE,
    HOME_PAGE, MY_PRODUCT_PAGE,
    PIN_CODES_PAGE, PRODUCTS_PAGE, PROFILE_PAGE,
    RANDOM_ACCOUNTS_PAGE, REFER_PAGE,
    REVIEWS_PAGE, ROULLETSE_PAGE, SETTINGS_PAGE, SUPPORT_PAGE, TABLE_PAGE, PAYMENT_PAGE,
    TOP_USERS_PAGE,
} from "../../utils/consts";
import PopupAcc from '../PopupAcc/PopupAcc';
import PopupList from '../PopupList/PopupList';
import alarm from "../../assets/img/alarm.svg";
import add from "../../assets/img/2068204226775625365c.svg";
import ava from "../../assets/img/ava.png";
import booobl from "../../assets/img/390072b140637d923ac4.svg";

import one from "../../assets/img/3fb2158493aaecb98a06.svg";
import two from "../../assets/img/950145b7db09df25f61c.svg";
import three from "../../assets/img/c8d085a39e92fe7c2839.svg";
import four from "../../assets/img/4449b6dada47f4a97272.svg";
import five from "../../assets/img/cedac6c0791735f06e46.svg";
import six from "../../assets/img/3f27a971db3452e19dae.svg";
import seven from "../../assets/img/3c8767e32aa9da4ee3ae.svg";
import eight from "../../assets/img/87515122ca01064f32fd.svg";

const TopMenu = () => {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [buttonPopuplist, setButtonPopuplist] = useState(false)
    
    function useOnClickOutside(ref, handler) { useEffect( () => { const listener = (event) => { 
        if (!ref.current || ref.current.contains(event.target)) { return; } handler(event); }; 
        document.addEventListener("mousedown", listener); 
        document.addEventListener("touchstart", listener); 
        return () => { document.removeEventListener("mousedown", listener); 
        document.removeEventListener("touchstart", listener); }; }, [ref, handler] 
        );}

        const ref = useRef();

        useOnClickOutside(ref, () => setButtonPopup(false));
        useOnClickOutside(ref, () => setButtonPopuplist(false));



    const location = useLocation();
    console.log(location)
    return (
        <div className='menu-top' ref={ref}>
            <div className='menu'>
                <NavLink className={`menu-option ${s.select}`} to={HOME_PAGE}>главная</NavLink>
                <NavLink className='menu-option' id='unselect' to={ACCOUNT_PAGE}>Аккаунты</NavLink>
                <NavLink to={PIN_CODES_PAGE} className='menu-option' id='unselect'>Пин-коды</NavLink>
                <NavLink className='menu-option' id='unselect' to={TOP_USERS_PAGE}>Топ Юзеров</NavLink>
                <NavLink className='menu-option' id='unselect'
                        to={REVIEWS_PAGE}>Отзывы</NavLink>
                <NavLink className='menu-option' id='unselect'
                        to={GUARANTEE_PAGE}>Гарантии</NavLink>
                <NavLink className='menu-option' id='unselect' to={RANDOM_ACCOUNTS_PAGE}>случайные
                    аккаунты</NavLink>                <NavLink className='menu-option' id='unselect'
                        to={FORUM_PAGE}>Форум</NavLink>

                <NavLink className='menu-option' id='unselect'
                        to={ROULLETSE_PAGE}>Roulletse</NavLink>
                <NavLink className='menu-option' id='unselect'
                        to={FAQ_PAGE}>Faq</NavLink>
                <NavLink className='menu-option' id='unselect'
                        to={SUPPORT_PAGE}>Support</NavLink>
                <NavLink className='menu-option' id='unselect'
                        to={PRODUCTS_PAGE}>Products</NavLink>
                <NavLink className='menu-option' id='unselect'
                        to={CHAT_USERS_PAGE}>Chat Users</NavLink>
                

            </div>
            <div className='kompani'>
                <button className='alart' onClick={() => setButtonPopuplist(true)}>
                    <img src={alarm} alt={"bgc-logo"}/>
                </button>
                <PopupList trigger={buttonPopuplist}>
                    <div class="_eigFoXmPqoX0rIaVW4D">
                        <div>Уведомления <span class="_vIMlwQ6d5y7MUSWSVJ7">(+4)</span></div>
                        <div class="xAtQDGWlHfvdEf__ePwO">(43)</div>
                    </div>
                    <div class="NJF_tB7cN_ef1paQ5kc_">
                                            <div class="_HVSKH_IKWyoPpZQsWcT">
                                                <div class="aCs3ixfkxW3vMzzzPmDX"><img src={booobl}/></div>
                                                <div class="NesvRmnDEQLXR_sODc9y">
                                                    <div class="_Itxs3fw0iFOikBjK4Iu">Стол заказа!</div>
                                                    <div class="F5pUdYnrqaKktYLP0d_f">Товар по вашему запросу был
                                                        выставлен на продажу!</div>
                                                </div>
                                            </div>
                                            <div class="_HVSKH_IKWyoPpZQsWcT">
                                                <div class="aCs3ixfkxW3vMzzzPmDX"><img src={booobl}/></div>
                                                <div class="NesvRmnDEQLXR_sODc9y">
                                                    <div class="_Itxs3fw0iFOikBjK4Iu">Новое достижение!</div>
                                                    <div class="F5pUdYnrqaKktYLP0d_f">Вы получили достижение “Бригада”
                                                        за 100 сообщений!</div>
                                                </div>
                                            </div>
                                            <div class="_HVSKH_IKWyoPpZQsWcT">
                                                <div class="aCs3ixfkxW3vMzzzPmDX"><img src={booobl}/></div>
                                                <div class="NesvRmnDEQLXR_sODc9y">
                                                    <div class="_Itxs3fw0iFOikBjK4Iu">Ограничение!</div>
                                                    <div class="F5pUdYnrqaKktYLP0d_f">Вы получили бан на 7 дней, так как
                                                        нарушили правила пользования сайта!</div>
                                                </div>
                                            </div>
                                            <div class="_HVSKH_IKWyoPpZQsWcT">
                                                <div class="aCs3ixfkxW3vMzzzPmDX"><img src={booobl}/></div>
                                                <div class="NesvRmnDEQLXR_sODc9y">
                                                    <div class="_Itxs3fw0iFOikBjK4Iu">Сотдрудничество!</div>
                                                    <div class="F5pUdYnrqaKktYLP0d_f">По вашему запросу был заблокирован
                                                        пользователь <a href="#">Nikita124</a></div>
                                                </div>
                                            </div>
                                            <div class="_HVSKH_IKWyoPpZQsWcT">
                                                <div class="aCs3ixfkxW3vMzzzPmDX"><img src={booobl}/></div>
                                                <div class="NesvRmnDEQLXR_sODc9y">
                                                    <div class="_Itxs3fw0iFOikBjK4Iu">Сотдрудничество!</div>
                                                    <div class="F5pUdYnrqaKktYLP0d_f">По вашему запросу был заблокирован
                                                        пользователь <a href="#">Nikita124</a></div>
                                                </div>
                                            </div>
                                            <div class="_HVSKH_IKWyoPpZQsWcT">
                                                <div class="aCs3ixfkxW3vMzzzPmDX"><img src={booobl}/></div>
                                                <div class="NesvRmnDEQLXR_sODc9y">
                                                    <div class="_Itxs3fw0iFOikBjK4Iu">Сотдрудничество!</div>
                                                    <div class="F5pUdYnrqaKktYLP0d_f">По вашему запросу был заблокирован
                                                        пользователь <a href="#">Nikita124</a></div>
                                                </div>
                                            </div>
                    </div>
                    <div class="SBzg9p0qp_2cJ_bYBfG_">Показать все</div>
                </PopupList>
                <div className='sherder' onClick={() => setButtonPopup(true)}>
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
                <PopupAcc trigger={buttonPopup}>
                <NavLink to={PROFILE_PAGE} className='xN5P51wxYl_l3jXSyPFP qWigt_puEo4uQBakbLnQ' id='unselect'><img src={one} class="_j7C_nqbyCboI4OG8Wct"/>
                    <div class="Jm3P8ZvVLOrNLxsx1fHk _uG674aDEN3Ihv4DcXMJ">Мой профиль</div>
                </NavLink>
                <NavLink className='xN5P51wxYl_l3jXSyPFP qWigt_puEo4uQBakbLnQ' id='unselect'
                        to={MY_PRODUCT_PAGE}><img src={two} class="_j7C_nqbyCboI4OG8Wct"/>
                        <div class="Jm3P8ZvVLOrNLxsx1fHk _uG674aDEN3Ihv4DcXMJ">Мои товары</div>
                </NavLink>
                <NavLink className='xN5P51wxYl_l3jXSyPFP qWigt_puEo4uQBakbLnQ' id='unselect'
                        to={TABLE_PAGE}><img src={three} class="_j7C_nqbyCboI4OG8Wct"/>
                                                <div class="Jm3P8ZvVLOrNLxsx1fHk _uG674aDEN3Ihv4DcXMJ">Стол заказов</div>
                </NavLink>
                <NavLink className='xN5P51wxYl_l3jXSyPFP qWigt_puEo4uQBakbLnQ _X4Xgc_lhNLhspdFwGcV' id='unselect'
                        to={ACHIEVEMENTS_V2_PAGE}><img src={four} class="_j7C_nqbyCboI4OG8Wct"/>
                        <div class="Jm3P8ZvVLOrNLxsx1fHk _uG674aDEN3Ihv4DcXMJ">Достижения</div>
                </NavLink>
                <NavLink className='xN5P51wxYl_l3jXSyPFP qWigt_puEo4uQBakbLnQ' id='unselect'
                        to={SETTINGS_PAGE}><img src={five} class="_j7C_nqbyCboI4OG8Wct"/>
                                                <div class="Jm3P8ZvVLOrNLxsx1fHk _uG674aDEN3Ihv4DcXMJ">Настройки</div>
                </NavLink>

                <NavLink href="#" class="xN5P51wxYl_l3jXSyPFP qWigt_puEo4uQBakbLnQ" to={PAYMENT_PAGE}>
                <img src={six} class="_j7C_nqbyCboI4OG8Wct"/>
                                                <div class="Jm3P8ZvVLOrNLxsx1fHk _uG674aDEN3Ihv4DcXMJ">Пополение и вывод
                                                </div>
                </NavLink>
                <NavLink className='xN5P51wxYl_l3jXSyPFP qWigt_puEo4uQBakbLnQ' id='unselect'
                        to={REFER_PAGE}><img src={seven} class="_j7C_nqbyCboI4OG8Wct"/>
                                                <div class="Jm3P8ZvVLOrNLxsx1fHk _uG674aDEN3Ihv4DcXMJ">Реферальная
                                                    система</div>
                </NavLink>


                <a href="#" class="xN5P51wxYl_l3jXSyPFP qWigt_puEo4uQBakbLnQ"><img src={eight} class="_j7C_nqbyCboI4OG8Wct"/>
                                                <div class="Jm3P8ZvVLOrNLxsx1fHk _uG674aDEN3Ihv4DcXMJ">Выйти из аккаунта
                                                </div>
                </a>
                </PopupAcc>
            </div>
        </div>
    );
};

export default TopMenu;