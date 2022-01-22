import React from 'react';
import profileImg from "../../assets/img/profileImg.jpg";
import close from "../../assets/img/close.svg";
import edit from "../../assets/img/edit.svg";
import gun from "../../assets/img/631e1465d7ef61dde713.png";
import rankere from "../../assets/img/Ротатер.svg";
import photo from "../../assets/img/el.png";
import more from "../../assets/img/487b5c72c244942cc36c.svg";
import ProfileLayout from "../ProfilePersonalPage/ProfileLayout";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";

const MyProduct = () => {
    return (
        /*<>
            <ProfileLayout>
                <div className="my-product">
                    <div className="header">
                        <ul className="navbar">
                            <li className="nav-item">
                                <a href="" className="nav-link">Главнвя</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Аккаунты</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Пин коды</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Топ Юзеров</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Отзиви</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Гарантии</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Рулетки</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Форум</a>
                            </li>


                        </ul>
                        <div className="navbar-right">
                            <div className="call">
                                <span className="icon icon-call"/>
                            </div>
                            <div className="profile-menus">
                                <img src={profileImg} alt="profileImg"/>
                                <p>Shenderrro</p>
                                <span className="icon icon-bottom-arrow"/>
                            </div>
                        </div>
                    </div>
                </div>
            </ProfileLayout>
        </>*/
        <LayoutGeneral>

            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="d-flex">
                            <div className="add-product">
                                <p>Добавит Товар </p>
                                <span className="icon icon-plus"></span>
                            </div>
                            <div className="add-product">
                                <p>Поднят в ТОП</p>
                                <span className="icon icon-top"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="textcenter">
                            <div className="backImg">
                                <h3>Личный Профиле</h3>
                                <div className="line"></div>
                                <p>Всего доступно для продажи <br/>
                                    20 товаров одного типа.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 bg-transparent">
                        <div className="list">
                            <div className="d-flex justify-content-center">
                                <p>Мои Аккаунты</p>
                                <p>Мои Пин-коды</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className='informSale'>
                            <div className='bodySaler'>
                                <div>
                                    <div className='basewh'>
                                    <span className='rankeree'>
                                        <img src={gun} alt={"bgc-logo"} className='guner'/>
                                        <img src={rankere} alt={"bgc-logo"} className='rrrrr'/>

                                    </span>
                                    </div>
                                </div>
                                <div className='textMac mt-3'>
                                    <div className='blcText'>Makmilan Gr-23</div>
                                    <div className='wwcText'>Тип: Оружие</div>
                                    <div className='wwcText'>Кол: 33</div>
                                    <div className='wwcText'>Продажа от: 33 шт</div>
                                    <div className='wwcText'>Срок: Навсегда</div>
                                </div>
                                <div className='favorute d-flex'>
                                    <img src={edit} alt={"bgc-logo"}/>
                                    <img src={close} alt={"bgc-logo"}/>
                                </div>
                            </div>
                            <div className='footerSaler'>
                                <div className='legoBlock'>
                                    <div className='logoBlock'>
                                        <img src={photo} alt={"bgc-logo"} className='oi8'/>
                                        <div className='onlineDot'></div>
                                    </div>
                                    <div className='nameOfUser'>Alice</div>
                                </div>
                                <button className='butonwithPrice'>
                                    <span className='tagPrice'>Цена</span>
                                    <span className='price'>120.00₽</span>
                                </button>
                                <div className='morebutton'>
                                    <img src={more} alt={"bgc-logo"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='informSale'>
                            <div className='bodySaler'>
                                <div>
                                    <div className='basewh'>
                                    <span className='rankeree'>
                                        <img src={gun} alt={"bgc-logo"} className='guner'/>
                                        <img src={rankere} alt={"bgc-logo"} className='rrrrr'/>

                                    </span>
                                    </div>
                                </div>
                                <div className='textMac mt-3'>
                                    <div className='blcText'>Makmilan Gr-23</div>
                                    <div className='wwcText'>Тип: Оружие</div>
                                    <div className='wwcText'>Кол: 33</div>
                                    <div className='wwcText'>Продажа от: 33 шт</div>
                                    <div className='wwcText'>Срок: Навсегда</div>
                                </div>
                                <div className='favorute d-flex'>
                                    <img src={edit} alt={"bgc-logo"}/>
                                    <img src={close} alt={"bgc-logo"}/>
                                </div>
                            </div>
                            <div className='footerSaler'>
                                <div className='legoBlock'>
                                    <div className='logoBlock'>
                                        <img src={photo} alt={"bgc-logo"} className='oi8'/>
                                        <div className='onlineDot'></div>
                                    </div>
                                    <div className='nameOfUser'>Alice</div>
                                </div>
                                <button className='butonwithPrice'>
                                    <span className='tagPrice'>Цена</span>
                                    <span className='price'>120.00₽</span>
                                </button>
                                <div className='morebutton'>
                                    <img src={more} alt={"bgc-logo"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutGeneral>
    );
};

export default MyProduct;