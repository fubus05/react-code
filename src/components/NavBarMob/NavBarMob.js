import React from 'react';
import s from './NavBarMob.module.scss'
import {Container, Nav, Navbar, NavDropdown, OffcanvasBody, OffcanvasHeader, OffcanvasTitle} from "react-bootstrap";
import logo from "../../assets/img/main-logo.png";
import menu from "../../assets/img/outline_menu_white_24dp.png";
import {NavLink} from "react-router-dom";
import {
    ACCOUNT_PAGE,
    ACCOUNTS_PAGE, ACHIEVEMENTS_PAGE, ACHIEVEMENTS_V2_PAGE, CHAT_USERS_PAGE, FAQ_PAGE, FORUM_PAGE,
    GUARANTEE_PAGE, HISTORY_PAGE,
    HOME_PAGE, MY_PRODUCT_PAGE,
    PIN_CODES_PAGE, PRODUCTS_PAGE, PROFILE_PAGE, RANDOM_ACCOUNTS_PAGE, REFER_PAGE,
    REVIEWS_PAGE, ROULLETSE_PAGE, SETTINGS_PAGE, SUPPORT_PAGE, TABLE_PAGE,
    TOP_USERS_PAGE, ZAKLADKY_PAGE
} from "../../utils/consts";

const NavBarMob = () => {
    return (
        <Navbar className={s.navbar} bg="dark" expand={false}>
            <Container className={s.container} fluid>
                <Navbar.Brand className={s.navBrand} href="#">
                    <img src={logo} className={s.logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle
                    className={s.navBarToggle}
                    aria-controls="offcanvasNavbar"
                    children={<img src={menu} className={s.logo} alt="logo"/>}
                />
                <Navbar.Offcanvas
                    className={s.navbarOffcanvas}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                >
                    <OffcanvasHeader
                        className={s.offcanvasHeader}
                        closeButton>
                        <OffcanvasTitle
                            id="offcanvasNavbarLabel"
                        >
                            <img src={logo}/>
                        </OffcanvasTitle>
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavLink to={HOME_PAGE} className={s.navLink}>Главная</NavLink>
                            <NavDropdown.Divider />
                            <NavLink to={ACCOUNTS_PAGE} className={s.navLink}>Аккаунты</NavLink>
                            <NavDropdown.Divider />
                            <NavLink to={PIN_CODES_PAGE} className={s.navLink}>Пин-коды</NavLink>
                            <NavDropdown.Divider />
                            <NavLink to={TOP_USERS_PAGE} className={s.navLink}>Топ Юзеров</NavLink>
                            <NavDropdown.Divider />
                            <NavLink to={REVIEWS_PAGE} className={s.navLink}>Отзывы</NavLink>
                            <NavDropdown.Divider />
                            <NavLink to={GUARANTEE_PAGE} className={s.navLink}>Гарантии</NavLink>
                            <NavDropdown.Divider />
                            <NavLink to={ROULLETSE_PAGE} className={s.navLink}>Рулетки</NavLink>
                            <NavDropdown.Divider />
                            <NavLink to={FORUM_PAGE} className={s.navLink}>Форум</NavLink>
                            <NavDropdown.Divider />
                            <NavDropdown
                                className={s.dropWrapper}
                                title="Сайдбар"
                                id="offcanvasNavbarDropdown"
                            >
                                <NavLink to={FAQ_PAGE} className={s.navLinkDrop}>FAQ</NavLink>
                                <NavLink to={RANDOM_ACCOUNTS_PAGE} className={s.navLinkDrop}>Случайные аккаунты</NavLink>
                                <NavLink to={HISTORY_PAGE} className={s.navLinkDrop}>История</NavLink>
                                <NavLink to={SUPPORT_PAGE} className={s.navLinkDrop}>Поддержка</NavLink>
                                <NavLink to={ZAKLADKY_PAGE} className={s.navLinkDrop}>Закладка</NavLink>
                                <NavLink to={REFER_PAGE} className={s.navLinkDrop}>Рефералы</NavLink>
                                <NavLink to={PROFILE_PAGE} className={s.navLinkDrop}>Профиль</NavLink>
                                <NavLink to={MY_PRODUCT_PAGE} className={s.navLinkDrop}>Мои продукты</NavLink>
                                <NavLink to={ACCOUNT_PAGE} className={s.navLinkDrop}>Аккаунт</NavLink>
                                <NavLink to={ROULLETSE_PAGE} className={s.navLinkDrop}>Ролеты</NavLink>
                                <NavLink to={PIN_CODES_PAGE} className={s.navLinkDrop}>Пин Коды</NavLink>
                                <NavLink to={PRODUCTS_PAGE} className={s.navLinkDrop}>Продукты</NavLink>
                                <NavLink to={CHAT_USERS_PAGE} className={s.navLinkDrop}>Чаты</NavLink>
                                <NavLink to={SETTINGS_PAGE} className={s.navLinkDrop}>Настройки</NavLink>
                                <NavLink to={TABLE_PAGE} className={s.navLinkDrop}>Стол заказов</NavLink>
                                <NavLink to={ACHIEVEMENTS_PAGE} className={s.navLinkDrop}>Достижения</NavLink>
                                <NavLink to={ACHIEVEMENTS_V2_PAGE} className={s.navLinkDrop}>Достижения 2</NavLink>
                                {/*<NavDropdown.Item href="#action4">

                                </NavDropdown.Item>*/}
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </OffcanvasBody>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavBarMob;