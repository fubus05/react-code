import React from 'react';
import '../ProfilePersonalPage/profilePersonal.scss'
import profileImg from "../../assets/img/profileImg.jpg";
import search from "../../assets/img/search.svg";
import bottomArrow from "../../assets/img/bottom-arrow.png";
import check from "../../assets/img/check.svg";
import notific from "../../assets/img/notific.svg";
import close from "../../assets/img/close.svg";
import gun from "../../assets/img/631e1465d7ef61dde713.png";
import rankere from "../../assets/img/Ротатер.svg";
import avorite from "../../assets/img/6e13cbbb50ab61951fab.svg";
import photo from "../../assets/img/el.png";
import more from "../../assets/img/487b5c72c244942cc36c.svg";
import leftArrow from "../../assets/img/left-arrow.svg";
import rightArrow from "../../assets/img/right-arrow.svg";
import ProfileLayout from "../ProfilePersonalPage/ProfileLayout";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";

const PinCode = () => {
    return (
        /*<ProfileLayout>
            <div className="pinCode">
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
        </ProfileLayout>*/
        <LayoutGeneral>
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="textcenter">
                            <div className="backImg">
                                <h3>Пин-коды</h3>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-100" id="basic-addon1"><img src={search} alt=""/></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Поиск"
                                   aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col44">
                        <div className="card bg-white border-0 mt-2 p-2">
                            <h3 className="mx-3">Цена</h3>
                            <div className="range">
                                <div className="lines1"></div>
                                <div className="circles1"></div>
                                <div className="lines2"></div>
                                <div className="circles2"></div>
                                <div className="lines3"></div>
                            </div>
                            <div className="count">
                                <div className="d-flex align-items-center">
                                    <p>от</p>
                                    <div className="counts">
                                        895
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p>до</p>
                                    <div className="counts">
                                        15 895
                                    </div>
                                </div>
                            </div>
                            <h3 className="mx-3">Срок</h3>
                            <div className="select">
                                <p>Все</p>
                                <img src={bottomArrow} alt=""/>
                            </div>
                            <h3 className="mx-3">Тип пин-кода</h3>
                            <div className="select">
                                <p>Все</p>
                                <img src={bottomArrow} alt=""/>
                            </div>
                            <h3 className="mx-3">Продавец</h3>
                            <div className="checkeds">
                                <div className="check">
                                    <img src={check} alt=""/>
                                </div>
                                <p>Онлайн</p>
                            </div>
                            <div className="checkeds mt-3">
                                <div className="check1">

                                </div>
                                <p>Офлайн</p>
                            </div>
                            <div className="submit">
                                <img src={notific} alt=""/>
                                <p>Применить фильтр</p>
                            </div>
                            <div className="submit">
                                <img src={close} alt=""/>
                                <p>Сбросить фильтр</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4 col4">
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
                                        <div className='textMac'>
                                            <div className='blcText'>Makmilan Gr-23</div>
                                            <div className='wwcText'>Тип: Оружие</div>
                                            <div className='wwcText'>Кол: 33</div>
                                            <div className='wwcText'>Продажа от: 33 шт</div>
                                            <div className='wwcText'>Срок: Навсегда</div>
                                        </div>
                                        <div className='favorute'>
                                            <img src={avorite} alt={"bgc-logo"}/>
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
                            <div className="col-4 col4">
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
                                        <div className='textMac'>
                                            <div className='blcText'>Makmilan Gr-23</div>
                                            <div className='wwcText'>Тип: Оружие</div>
                                            <div className='wwcText'>Кол: 33</div>
                                            <div className='wwcText'>Продажа от: 33 шт</div>
                                            <div className='wwcText'>Срок: Навсегда</div>
                                        </div>
                                        <div className='favorute'>
                                            <img src={avorite} alt={"bgc-logo"}/>
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
                            <div className="col-4 col4">
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
                                        <div className='textMac'>
                                            <div className='blcText'>Makmilan Gr-23</div>
                                            <div className='wwcText'>Тип: Оружие</div>
                                            <div className='wwcText'>Кол: 33</div>
                                            <div className='wwcText'>Продажа от: 33 шт</div>
                                            <div className='wwcText'>Срок: Навсегда</div>
                                        </div>
                                        <div className='favorute'>
                                            <img src={avorite} alt={"bgc-logo"}/>
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
                            <div className="col-4 col4">
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
                                        <div className='textMac'>
                                            <div className='blcText'>Makmilan Gr-23</div>
                                            <div className='wwcText'>Тип: Оружие</div>
                                            <div className='wwcText'>Кол: 33</div>
                                            <div className='wwcText'>Продажа от: 33 шт</div>
                                            <div className='wwcText'>Срок: Навсегда</div>
                                        </div>
                                        <div className='favorute'>
                                            <img src={avorite} alt={"bgc-logo"}/>
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
                            <div className="col-4 col4">
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
                                        <div className='textMac'>
                                            <div className='blcText'>Makmilan Gr-23</div>
                                            <div className='wwcText'>Тип: Оружие</div>
                                            <div className='wwcText'>Кол: 33</div>
                                            <div className='wwcText'>Продажа от: 33 шт</div>
                                            <div className='wwcText'>Срок: Навсегда</div>
                                        </div>
                                        <div className='favorute'>
                                            <img src={avorite} alt={"bgc-logo"}/>
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
                            <div className="col-4 col4">
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
                                        <div className='textMac'>
                                            <div className='blcText'>Makmilan Gr-23</div>
                                            <div className='wwcText'>Тип: Оружие</div>
                                            <div className='wwcText'>Кол: 33</div>
                                            <div className='wwcText'>Продажа от: 33 шт</div>
                                            <div className='wwcText'>Срок: Навсегда</div>
                                        </div>
                                        <div className='favorute'>
                                            <img src={avorite} alt={"bgc-logo"}/>
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
                        <div className="paginations">
                            <img src={leftArrow} alt=""/>
                            <div className="pag-item1">1</div>
                            <div className="pag-item1">2</div>
                            <div className="pag-item3">3</div>
                            <div className="pag-item1">334</div>
                            <img src={rightArrow} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutGeneral>
    );
};

export default PinCode;